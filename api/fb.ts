import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';
import rateLimit from 'express-rate-limit';
import { sha256 } from '../src/utils/hash';

const limiter = rateLimit({ windowMs: 60_000, max: 150 });
const KOMMO_WEBHOOK_URL =
  process.env.KOMMO_WEBHOOK_URL ?? 'https://webhook-n8n.grupovorp.com/webhook/integral-mix';
type LimiterRequest = Parameters<typeof limiter>[0];
type LimiterResponse = Parameters<typeof limiter>[1];

const parseResponseBody = async (response: Response) => {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await new Promise<void>((resolve, reject) => {
    limiter(
      req as unknown as LimiterRequest,
      res as unknown as LimiterResponse,
      (error?: unknown) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      }
    );
  });
  if (req.method !== 'POST') return res.status(405).end();

  const {
    name, email, whatsapp, crm, city, state,
    profession, utm_source, utm_medium,
    utm_campaign, utm_term, utm_content,
    lgpdConsent, event_id
  } = req.body || {};

  const [first, ...rest] = (name ?? '').split(' ');

  const user_data = {
    fn: sha256(first),
    ln: sha256(rest.join(' ')),
    em: sha256(email),
    ph: sha256((whatsapp ?? '').replace(/\D/g, '')),
    ct: sha256(city),
    st: sha256(state),
    client_ip_address: req.headers['x-real-ip'] || req.socket.remoteAddress,
    client_user_agent: req.headers['user-agent']
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
      utm_source, utm_medium, utm_campaign, utm_term, utm_content
    },
    consent: { lgpd: lgpdConsent }
  };

  const webhookRes = await fetch(KOMMO_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name ?? '',
      email: email ?? '',
      whatsapp: whatsapp ?? '',
      profession: profession ?? '',
      state: state ?? '',
      city: city ?? '',
      utm_source: utm_source ?? '',
      utm_medium: utm_medium ?? '',
      utm_campaign: utm_campaign ?? '',
      utm_term: utm_term ?? '',
      utm_content: utm_content ?? '',
      lgpdConsent: Boolean(lgpdConsent),
      crm: crm ?? ''
    })
  });

  const webhookBody = await parseResponseBody(webhookRes);

  if (!webhookRes.ok) {
    return res.status(502).json({
      ok: false,
      message: 'Failed to forward lead to webhook',
      webhook: webhookBody
    });
  }

  if (!process.env.FB_PIXEL_ID || !process.env.FB_TOKEN) {
    return res.status(200).json({
      ok: true,
      webhook: webhookBody,
      fbStatus: 'skipped'
    });
  }

  const fbRes = await fetch(
    `https://graph.facebook.com/v19.0/${process.env.FB_PIXEL_ID}/events`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [payload],
        access_token: process.env.FB_TOKEN,
        test_event_code:
          process.env.NODE_ENV === 'production' ? undefined : process.env.FB_TEST_CODE
      })
    }
  );

  const fbBody = await parseResponseBody(fbRes);

  if (!fbRes.ok) {
    console.error('Facebook Conversion API request failed', fbBody);
  }

  return res.status(200).json({
    ok: true,
    webhook: webhookBody,
    fbStatus: fbRes.ok ? 'sent' : 'failed',
    fb: fbBody
  });
}
