// Cloudflare Worker: serves the static site from ./dist, plus one small endpoint for the waitlist form.
//
// POST /api/waitlist  { name, email, formule?, botcheck? }
//   1. adds (or updates) the person in the Brevo list BREVO_LIST_ID, with her first name in BREVO_NAME_ATTRIBUTE.
//      The Brevo automation "contact added to list" then sends her the confirmation e-mail.
//   2. if NOTIFY_EMAIL is set, sends you a short "Nouvelle fondatrice" e-mail through Brevo.
//
// Settings (wrangler.jsonc "vars"): BREVO_LIST_ID, BREVO_NAME_ATTRIBUTE, NOTIFY_EMAIL, SENDER_EMAIL.
// Secret (Cloudflare dashboard → Workers → studio-ode-website → Settings → Variables and secrets): BREVO_API_KEY.

const BREVO = "https://api.brevo.com/v3";

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json; charset=utf-8" } });

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

async function waitlist(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ success: false, message: "Requête invalide." }, 400);
  }

  // honeypot: bots tick the hidden checkbox; pretend it worked and do nothing
  if (data.botcheck) return json({ success: true });

  const name = String(data.name || "").trim().slice(0, 80);
  const email = String(data.email || "").trim().toLowerCase().slice(0, 254);
  const formule = String(data.formule || "").trim().slice(0, 80);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ success: false, message: "Prénom ou e-mail manquant." }, 400);
  }

  const listId = Number(env.BREVO_LIST_ID);
  if (!env.BREVO_API_KEY || !listId) {
    console.error("Waitlist: BREVO_API_KEY or BREVO_LIST_ID is not set");
    return json({ success: false, message: "Inscriptions momentanément indisponibles." }, 500);
  }
  const headers = { "api-key": env.BREVO_API_KEY, "Content-Type": "application/json", Accept: "application/json" };

  // 1 · the contact, in the Fondatrices list (updateEnabled: signing up twice just updates her)
  const res = await fetch(`${BREVO}/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      attributes: { [env.BREVO_NAME_ATTRIBUTE || "PRENOM"]: name },
      listIds: [listId],
      updateEnabled: true,
    }),
  });
  if (!res.ok) {
    console.error("Brevo contact error", res.status, await res.text().catch(() => ""));
    return json({ success: false, message: "Oups, un problème est survenu." }, 502);
  }

  // 2 · a heads-up for you (never blocks the sign-up)
  if (env.NOTIFY_EMAIL && env.SENDER_EMAIL) {
    const rows = [["Prénom", name], ["E-mail", email], ["Formule", formule || "—"]]
      .map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;color:#8a8486">${k}</td><td style="padding:4px 0">${esc(v)}</td></tr>`)
      .join("");
    const notify = fetch(`${BREVO}/smtp/email`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        sender: { name: "Site Ode", email: env.SENDER_EMAIL },
        to: [{ email: env.NOTIFY_EMAIL }],
        replyTo: { email, name },
        subject: `Nouvelle fondatrice — ${name}`,
        htmlContent: `<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#1f1d1e"><p>Une nouvelle inscription sur le site :</p><table>${rows}</table></div>`,
      }),
    })
      .then(async (r) => { if (!r.ok) console.error("Brevo notify error", r.status, await r.text().catch(() => "")); })
      .catch((e) => console.error("Brevo notify error", e));
    return { response: json({ success: true }), pending: notify };
  }

  return json({ success: true });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/waitlist") {
      if (request.method !== "POST") return json({ success: false, message: "Méthode non autorisée." }, 405);
      const out = await waitlist(request, env);
      if (out instanceof Response) return out;
      ctx.waitUntil(out.pending);
      return out.response;
    }
    return env.ASSETS.fetch(request);
  },
};
