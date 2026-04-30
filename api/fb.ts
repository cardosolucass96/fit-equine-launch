import { createHash } from 'crypto';

const KOMMO_WEBHOOK_URL =
  process.env.KOMMO_WEBHOOK_URL ?? 'https://webhook-n8n.grupovorp.com/webhook/integral-mix';

const normalize = (value = '') =>
  value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();

const sha256 = (value: string) =>
  createHash('sha256').update(normalize(value)).digest('hex');

type RequestHeaders = Record<string, string | string[] | undefined>;

type ApiRequest = {
  method?: string;
  body?: {
    name?: string;
    email?: string;
    whatsapp?: string;
    crm?: string;
    city?: string;
    state?: string;
    profession?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    lgpdConsent?: boolean;
    event_id?: string;
  };
  headers: RequestHeaders;
  socket?: {
    remoteAddress?: string;
  };
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
  end: () => void;
};

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

const getHeaderValue = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  try {
    const {
      name,
      email,
      whatsapp,
      crm,
      city,
      state,
      profession,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      lgpdConsent,
      event_id
    } = req.body || {};

    const webhookPayload = {
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
    };

    const webhookRes = await fetch(KOMMO_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(webhookPayload)
    });

    const webhookBody = await parseResponseBody(webhookRes);

    if (!webhookRes.ok) {
      res.status(502).json({
        ok: false,
        message: 'Failed to forward lead to webhook',
        webhook: webhookBody
      });
      return;
    }

    if (!process.env.FB_PIXEL_ID || !process.env.FB_TOKEN) {
      res.status(200).json({
        ok: true,
        webhook: webhookBody,
        fbStatus: 'skipped'
      });
      return;
    }

    const [first, ...rest] = (name ?? '').split(' ');
    const user_data = {
      fn: sha256(first),
      ln: sha256(rest.join(' ')),
      em: sha256(email ?? ''),
      ph: sha256((whatsapp ?? '').replace(/\D/g, '')),
      ct: sha256(city ?? ''),
      st: sha256(state ?? ''),
      client_ip_address:
        getHeaderValue(req.headers['x-real-ip']) ?? req.socket?.remoteAddress,
      client_user_agent: getHeaderValue(req.headers['user-agent'])
    };

    const payload = {
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id,
      action_source: 'website',
      event_source_url: getHeaderValue(req.headers.referer),
      user_data,
      custom_data: {
        profession,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content
      },
      consent: { lgpd: lgpdConsent }
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
            process.env.NODE_ENV === 'production' ? undefined : process.env.FB_TEST_CODE
        })
      }
    );

    const fbBody = await parseResponseBody(fbRes);

    res.status(200).json({
      ok: true,
      webhook: webhookBody,
      fbStatus: fbRes.ok ? 'sent' : 'failed',
      fb: fbBody
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    console.error('Lead submission failed', error);
    res.status(500).json({
      ok: false,
      message
    });
  }
}
