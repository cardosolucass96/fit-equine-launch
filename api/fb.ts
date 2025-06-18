import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';
import rateLimit from 'express-rate-limit';
import { sha256 } from '../src/utils/hash';

const limiter = rateLimit({ windowMs: 60_000, max: 150 });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await new Promise((r) => limiter(req as any, res as any, r));
  if (req.method !== 'POST') return res.status(405).end();

  const {
    name,
    email,
    whatsapp,
    city,
    state,
    profession,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    lgpdConsent,
    event_id,
  } = req.body;

  const [first, ...rest] = (name ?? '').split(' ');

  const user_data = {
    fn: sha256(first),
    ln: sha256(rest.join(' ')),
    em: sha256(email),
    ph: sha256(whatsapp.replace(/\D/g, '')),
    ct: sha256(city),
    st: sha256(state),
    client_ip_address: req.headers['x-real-ip'] || req.socket.remoteAddress,
    client_user_agent: req.headers['user-agent'],
  };

  const payload = {
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    event_id,
    action_source: 'website',
    event_source_url: req.headers.referer,
    user_data,
    custom_data: {
      profession,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    },
    consent: { lgpd: lgpdConsent },
  };

  const fbRes = await fetch(
    `https://graph.facebook.com/v19.0/${process.env.FB_PIXEL_ID}/events`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [payload],
        access_token: process.env.FB_TOKEN,
        test_event_code:
          process.env.NODE_ENV === 'production'
            ? undefined
            : process.env.FB_TEST_CODE,
      }),
    }
  );

  return res.status(fbRes.ok ? 200 : 400).json(await fbRes.json());
}
