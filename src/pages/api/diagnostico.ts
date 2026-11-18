import type { APIRoute } from 'astro';
import { site } from '../../config/site';

export const prerender = false;

const KIND =
  'No pude tomar el pedido ahora. No se envió nada. Probá de nuevo en unos minutos.';
const REQUIRED = 'Este dato me hace falta para armar las preguntas.';
const EMAIL = 'Revisá el email: ahí te llega el PDF.';
const WEBSITE = 'Revisá la dirección del sitio.';

const concerns = new Set([
  'No aparezco en Google',
  'La IA no nombra a mi empresa',
  'La IA dice algo incorrecto de mi empresa',
  'Mi competencia aparece y yo no',
  'No sé por dónde empezar',
]);

function clean(value: unknown, max = 600) {
  return String(value ?? '')
    .replace(/[\u0000-\u001f]+/g, ' ')
    .trim()
    .slice(0, max);
}

function jsonResponse(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const wantsJson = (request.headers.get('accept') || '').includes('application/json');
  const back = new URL('/diagnostico/?envio=error#formulario', site.url);

  const fail = (status: number, message: string, fields?: Record<string, string>) => {
    if (wantsJson) return jsonResponse({ ok: false, message, fields }, status);
    return Response.redirect(back, 303);
  };

  let raw: Record<string, string> = {};
  try {
    const type = request.headers.get('content-type') || '';
    if (type.includes('application/json')) {
      raw = await request.json();
    } else {
      const form = await request.formData();
      for (const [key, value] of form.entries()) {
        if (typeof value === 'string') raw[key] = value;
      }
    }
  } catch {
    return fail(400, KIND);
  }

  if (clean(raw.company_site)) {
    if (wantsJson) return jsonResponse({ ok: true }, 200);
    return Response.redirect(new URL('/diagnostico/gracias/', site.url), 303);
  }

  const fields = {
    name: clean(raw.name, 120),
    company: clean(raw.company, 160),
    website: clean(raw.website, 300),
    email: clean(raw.email, 180),
    industry: clean(raw.industry, 240),
    zone: clean(raw.zone, 180),
    competitors: clean(raw.competitors, 240),
    concern: clean(raw.concern, 80),
    message: clean(raw.message, 1500),
  };

  const errors: Record<string, string> = {};
  for (const key of ['name', 'company', 'email', 'industry', 'zone', 'concern'] as const) {
    if (!fields[key]) errors[key] = REQUIRED;
  }
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = EMAIL;
  if (fields.concern && !concerns.has(fields.concern)) errors.concern = REQUIRED;
  if (fields.website && !/^https?:\/\/\S+\.\S+/.test(fields.website)) errors.website = WEBSITE;
  if (Object.keys(errors).length > 0) return fail(422, REQUIRED, errors);

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) return fail(503, KIND);

  const text = [
    `Nombre: ${fields.name}`,
    `Empresa: ${fields.company}`,
    `Sitio: ${fields.website || '—'}`,
    `Email: ${fields.email}`,
    `Rubro: ${fields.industry}`,
    `Ciudad o zona: ${fields.zone}`,
    `Competidores: ${fields.competitors || '—'}`,
    `Qué le preocupa: ${fields.concern}`,
    `Algo más: ${fields.message || '—'}`,
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: fields.email,
        subject: `Diagnóstico: ${fields.company}`,
        text,
      }),
    });
    if (!response.ok) return fail(502, KIND);
  } catch {
    return fail(502, KIND);
  }

  if (wantsJson) return jsonResponse({ ok: true }, 200);
  return Response.redirect(new URL('/diagnostico/gracias/', site.url), 303);
};
