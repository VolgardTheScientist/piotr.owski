/**
 * Cloudflare Pages Function: POST /api/enquire
 * Dispatches enquiry emails via Resend API:
 * 1. Primary notification email to Piotr (piotr@owski.ch) with Reply-To set to the inquirer.
 * 2. Confirmation copy email to the client in their chosen language (EN / DE / PL).
 */

const ALLOWED_LANGS = new Set(['en', 'de', 'pl']);
const ALLOWED_SERVICES = new Set(['architecture', 'circularity', 'bim', 'research']);

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json; charset=utf-8'
};

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function stripHeaderBreaks(str) {
  return String(str || '').replace(/[\r\n]+/g, ' ').trim();
}

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: CORS_HEADERS
  });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // 1. Fail loudly if email provider credentials are missing
  const RESEND_API_KEY = env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error('CRITICAL: RESEND_API_KEY is not configured in environment.');
    return jsonResponse(
      { success: false, error: 'Enquiry service is temporarily unavailable. Please email piotr@owski.ch directly.' },
      500
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ success: false, error: 'Invalid JSON payload.' }, 400);
  }

  if (!body || typeof body !== 'object') {
    return jsonResponse({ success: false, error: 'Invalid request payload.' }, 400);
  }

  // 2. Honeypot check for automated bots
  if (
    (typeof body.studio_sec_fax === 'string' && body.studio_sec_fax.trim() !== '') ||
    (typeof body.website === 'string' && body.website.trim() !== '') ||
    (typeof body._gotcha === 'string' && body._gotcha.trim() !== '')
  ) {
    return jsonResponse({ success: false, error: 'Request rejected.' }, 400);
  }

  // 3. Strict input validation, type checks & length caps
  // Accepts frontend field names (clientName, clientEmail, projectMessage) and standard aliases (name, email, message)
  const rawName = typeof body.clientName === 'string' ? body.clientName : (typeof body.name === 'string' ? body.name : '');
  const rawEmail = typeof body.clientEmail === 'string' ? body.clientEmail : (typeof body.email === 'string' ? body.email : '');
  const rawLocation = typeof body.projectLocation === 'string' ? body.projectLocation : (typeof body.location === 'string' ? body.location : '');
  const rawMessage = typeof body.projectMessage === 'string' ? body.projectMessage : (typeof body.message === 'string' ? body.message : '');
  const rawService = typeof body.serviceType === 'string' ? body.serviceType.trim().toLowerCase() : 'architecture';
  const rawLang = typeof body.lang === 'string' ? body.lang.trim().toLowerCase() : 'en';

  const name = rawName.trim();
  const email = rawEmail.trim();
  const location = rawLocation.trim();
  const message = rawMessage.trim();
  const serviceId = ALLOWED_SERVICES.has(rawService) ? rawService : 'architecture';
  const lang = ALLOWED_LANGS.has(rawLang) ? rawLang : 'en';

  if (!name || name.length > 100) {
    return jsonResponse({ success: false, error: 'Please provide a valid name (max 100 chars).' }, 400);
  }
  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ success: false, error: 'Please provide a valid email address.' }, 400);
  }
  if (location.length > 200) {
    return jsonResponse({ success: false, error: 'Location/timeframe must be 200 characters or fewer.' }, 400);
  }
  if (!message || message.length > 2500) {
    return jsonResponse({ success: false, error: 'Please provide a message (max 2500 chars).' }, 400);
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeLocation = escapeHtml(location);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  const headerSafeName = stripHeaderBreaks(name);
  const headerSafeEmail = stripHeaderBreaks(email);

  const serviceLabels = {
    architecture: {
      en: 'Architectural Services',
      de: 'Architekturdienstleistungen',
      pl: 'Usługi Architektoniczne'
    },
    circularity: {
      en: 'Circularity Consulting',
      de: 'Zirkularitätsberatung',
      pl: 'Doradztwo w zakresie cyrkularności'
    },
    bim: {
      en: 'BIM & VDC Consulting',
      de: 'BIM & VDC Beratung',
      pl: 'Doradztwo BIM & VDC'
    },
    research: {
      en: 'Research Cooperation',
      de: 'Forschungskooperation',
      pl: 'Współpraca Badawcza'
    }
  };

  const serviceName = (serviceLabels[serviceId] && serviceLabels[serviceId][lang]) || serviceId;
  const adminServiceName = (serviceLabels[serviceId] && serviceLabels[serviceId].en) || serviceId;

  const NOTIFICATION_RECIPIENT = env.NOTIFICATION_EMAIL || env.CONTACT_RECIPIENT || 'piotr@owski.ch';
  const configuredSender = env.SENDER_EMAIL || env.CONTACT_SENDER || '';
  let senderEmail = configuredSender || 'Piotr Piotrowski <enquiry@piotr.owski.ch>';

  // 4. Client Metadata from Cloudflare Headers
  const clientCountry = request.headers.get('cf-ipcountry') || 'Unknown';
  const submissionTime = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Zurich',
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short'
  }).format(new Date()) + ' (Swiss Time)';

  // 5. HTML Template: Notification to Piotr
  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111111; background-color: #f7f7f7; margin: 0; padding: 30px 15px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; padding: 32px; border-radius: 4px; }
        .header { border-bottom: 2px solid #000000; padding-bottom: 16px; margin-bottom: 24px; }
        .header h1 { font-size: 20px; font-weight: 600; margin: 0; text-transform: uppercase; letter-spacing: 0.05em; }
        .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .meta-table td { padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; vertical-align: top; }
        .meta-label { width: 140px; font-weight: 600; color: #666666; text-transform: uppercase; font-size: 12px; letter-spacing: 0.04em; }
        .message-box { background: #fafafa; border-left: 3px solid #000000; padding: 18px; font-size: 14px; line-height: 1.7; margin-bottom: 24px; }
        .footer { font-size: 11px; color: #888888; border-top: 1px solid #eeeeee; padding-top: 16px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Collaboration Enquiry</h1>
        </div>
        <table class="meta-table">
          <tr>
            <td class="meta-label">Client / Sender</td>
            <td><strong>${safeName}</strong> &lt;<a href="mailto:${safeEmail}">${safeEmail}</a>&gt;</td>
          </tr>
          <tr>
            <td class="meta-label">Service Area</td>
            <td>${escapeHtml(adminServiceName)}</td>
          </tr>
          <tr>
            <td class="meta-label">Location / Time</td>
            <td>${safeLocation || '<span style="color:#999;">Not specified</span>'}</td>
          </tr>
          <tr>
            <td class="meta-label">Language</td>
            <td>${lang.toUpperCase()}</td>
          </tr>
          <tr>
            <td class="meta-label">Origin</td>
            <td>Country: ${escapeHtml(clientCountry)}</td>
          </tr>
          <tr>
            <td class="meta-label">Timestamp</td>
            <td>${escapeHtml(submissionTime)}</td>
          </tr>
        </table>
        <div class="meta-label" style="margin-bottom: 8px;">Project Brief &amp; Objectives:</div>
        <div class="message-box">${safeMessage}</div>
        <div class="footer">
          Submitted via piotr.owski.ch enquiry form.<br>
          Reply directly to this email to respond to ${safeName}.
        </div>
      </div>
    </body>
    </html>
  `;

  // 6. HTML Template: Confirmation Copy to Inquirer (escaped safeName)
  const confirmationSubject = {
    en: 'Thank you for your message — Piotr Piotrowski',
    de: 'Empfangsbestätigung Ihrer Anfrage — Piotr Piotrowski',
    pl: 'Potwierdzenie zapytania — Piotr Piotrowski'
  }[lang];

  const confirmationIntro = {
    en: `Dear ${safeName},<br><br>Thank you for reaching out. Your enquiry has been received and I will respond shortly. Below is a copy of the details you submitted:`,
    de: `Sehr geehrte/r ${safeName},<br><br>vielen Dank für Ihre Kontaktaufnahme. Ihre Anfrage ist eingegangen und wird in Kürze beantwortet. Nachfolgend finden Sie eine Kopie Ihrer Angaben:`,
    pl: `Szanowny/a ${safeName},<br><br>dziękuję za kontakt. Twoje zapytanie zostało otrzymane i wkrótce na nie odpowiem. Poniżej znajduje się kopia przesłanych informacji:`
  }[lang];

  const clientHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111111; background-color: #f7f7f7; margin: 0; padding: 30px 15px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; padding: 32px; border-radius: 4px; }
        .header { border-bottom: 2px solid #000000; padding-bottom: 16px; margin-bottom: 24px; }
        .header h1 { font-size: 18px; font-weight: 600; margin: 0; letter-spacing: 0.04em; }
        .intro { font-size: 14px; margin-bottom: 24px; color: #333333; }
        .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .meta-table td { padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-size: 13.5px; vertical-align: top; }
        .meta-label { width: 140px; font-weight: 600; color: #666666; font-size: 12px; text-transform: uppercase; }
        .message-box { background: #fafafa; border-left: 3px solid #000000; padding: 16px; font-size: 13.5px; line-height: 1.65; margin-bottom: 24px; }
        .footer { font-size: 12px; color: #777777; border-top: 1px solid #eeeeee; padding-top: 18px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Piotr Piotrowski</h1>
        </div>
        <div class="intro">
          ${confirmationIntro}
        </div>
        <table class="meta-table">
          <tr>
            <td class="meta-label">Primary Interest</td>
            <td><strong>${escapeHtml(serviceName)}</strong></td>
          </tr>
          ${safeLocation ? `
          <tr>
            <td class="meta-label">Location / Time</td>
            <td>${safeLocation}</td>
          </tr>
          ` : ''}
        </table>
        <div class="meta-label" style="margin-bottom: 8px;">Your Message:</div>
        <div class="message-box">${safeMessage}</div>
        <div class="footer">
          <strong>Piotr Piotrowski</strong><br>
          Architect, BIM Manager &amp; Postdoctoral Researcher<br>
          <a href="https://piotr.owski.ch/" style="color:#000000; text-decoration:underline;">piotr.owski.ch</a> · <a href="mailto:piotr@owski.ch" style="color:#000000;">piotr@owski.ch</a>
        </div>
      </div>
    </body>
    </html>
  `;

  async function sendResendMail(from, to, replyTo, subject, html) {
    return fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: Array.isArray(to) ? to : [to],
        reply_to: replyTo,
        subject,
        html
      })
    });
  }

  try {
    // 7. Send primary admin notification (must succeed)
    let adminRes = await sendResendMail(
      senderEmail,
      NOTIFICATION_RECIPIENT,
      `${headerSafeName} <${headerSafeEmail}>`,
      `[piotr.owski.ch] Enquiry [${adminServiceName}]: ${headerSafeName}`,
      adminHtml
    );

    // Optional domain fallback if custom subdomain is not verified in Resend and no explicit SENDER_EMAIL env override was set
    if (!adminRes.ok && !configuredSender && senderEmail.includes('piotr.owski.ch')) {
      const fallbackStatus = adminRes.status;
      const fallbackBody = await adminRes.text();
      console.warn('Primary sender rejected, trying root domain sender:', fallbackStatus, fallbackBody);
      senderEmail = 'Piotr Piotrowski <enquiry@owski.ch>';
      adminRes = await sendResendMail(
        senderEmail,
        NOTIFICATION_RECIPIENT,
        `${headerSafeName} <${headerSafeEmail}>`,
        `[piotr.owski.ch] Enquiry [${adminServiceName}]: ${headerSafeName}`,
        adminHtml
      );
    }

    if (!adminRes.ok) {
      const errText = await adminRes.text();
      console.error('Resend admin delivery failed:', adminRes.status, errText);
      return jsonResponse(
        { success: false, error: 'Unable to send enquiry at this time. Please email piotr@owski.ch directly.' },
        502
      );
    }

    // 8. Send client acknowledgement (non-blocking; check status and record result)
    let confirmationSent = false;
    try {
      const confirmRes = await sendResendMail(
        senderEmail,
        headerSafeEmail,
        NOTIFICATION_RECIPIENT,
        confirmationSubject,
        clientHtml
      );

      if (confirmRes.ok) {
        confirmationSent = true;
      } else {
        console.warn('Client confirmation rejected:', confirmRes.status, await confirmRes.text());
      }
    } catch (err) {
      console.warn('Client confirmation network error:', err);
    }

    return jsonResponse({ success: true, confirmationSent }, 200);
  } catch (error) {
    console.error('Unexpected error handling enquiry:', error);
    return jsonResponse(
      { success: false, error: 'Internal server error. Please email piotr@owski.ch directly.' },
      500
    );
  }
}
