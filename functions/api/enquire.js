/**
 * Cloudflare Pages Function: POST /api/enquire
 * Dispatches enquiry emails via Resend API:
 * 1. Notification email to Piotr (piotr@owski.ch) with Reply-To set to the inquirer.
 * 2. Confirmation copy email to the client in their chosen language (EN / DE / PL).
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  // 1. CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    const data = await request.json();

    // 2. Anti-Spam Protections
    // A. Honeypot check
    if (data.studio_sec_fax && data.studio_sec_fax.trim() !== '') {
      return new Response(JSON.stringify({ error: 'Spam detected.' }), {
        status: 400,
        headers: corsHeaders
      });
    }

    // B. Basic Field Validation
    const name = (data.clientName || '').trim();
    const email = (data.clientEmail || '').trim();
    const serviceId = (data.serviceType || 'architecture').trim();
    const location = (data.projectLocation || '').trim();
    const message = (data.projectMessage || '').trim();
    const lang = (data.lang || 'en').toLowerCase();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
        status: 400,
        headers: corsHeaders
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
        status: 400,
        headers: corsHeaders
      });
    }

    // 3. Service Labels Mapping
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
    const adminServiceName = (serviceLabels[serviceId] && serviceLabels[serviceId]['en']) || serviceId;

    // Resend Configuration
    const RESEND_API_KEY = env.RESEND_API_KEY;
    const NOTIFICATION_RECIPIENT = env.NOTIFICATION_EMAIL || 'piotr@owski.ch';
    
    // Sender address: Default to piotr.owski.ch sender, with fallback
    let senderEmail = env.SENDER_EMAIL || 'Piotr Piotrowski Studio <enquiry@piotr.owski.ch>';

    if (!RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured in Cloudflare environment. Simulation mode.');
      return new Response(JSON.stringify({ 
        success: true, 
        simulated: true,
        message: 'Inquiry received in simulation mode.' 
      }), {
        status: 200,
        headers: corsHeaders
      });
    }

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
          .message-box { background: #fafafa; border-left: 3px solid #000000; padding: 18px; font-size: 14px; line-height: 1.7; white-space: pre-wrap; margin-bottom: 24px; }
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
              <td><strong>${escapeHtml(name)}</strong> &lt;<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>&gt;</td>
            </tr>
            <tr>
              <td class="meta-label">Service Area</td>
              <td>${escapeHtml(adminServiceName)}</td>
            </tr>
            <tr>
              <td class="meta-label">Location / Time</td>
              <td>${location ? escapeHtml(location) : '<span style="color:#999;">Not specified</span>'}</td>
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
              <td>${submissionTime}</td>
            </tr>
          </table>
          
          <div class="meta-label" style="margin-bottom: 8px;">Project Brief & Objectives:</div>
          <div class="message-box">${escapeHtml(message)}</div>

          <div class="footer">
            Submitted via piotr.owski.ch collaboration enquiry form.<br>
            Reply directly to this email to respond to ${escapeHtml(name)}.
          </div>
        </div>
      </body>
      </html>
    `;

    // 6. HTML Template: Confirmation Copy to Inquirer
    const confirmationSubject = {
      en: 'Inquiry Confirmation — Piotr Piotrowski',
      de: 'Empfangsbestätigung Ihrer Anfrage — Piotr Piotrowski',
      pl: 'Potwierdzenie zapytania — Piotr Piotrowski'
    }[lang] || 'Inquiry Confirmation — Piotr Piotrowski';

    const confirmationIntro = {
      en: `Dear ${name},<br><br>Thank you for reaching out. Your collaboration inquiry has been successfully received and will be reviewed shortly. Below is a copy of the details you submitted:`,
      de: `Sehr geehrte/r ${name},<br><br>vielen Dank für Ihre Kontaktaufnahme. Ihre Anfrage ist erfolgreich eingegangen und wird in Kürze geprüft. Nachfolgend finden Sie eine Kopie Ihrer Angaben:`,
      pl: `Szanowny/a ${name},<br><br>Dziękujemy za kontakt. Twoje zapytanie o współpracę zostało pomyślnie przesłane i zostanie wkrótce rozpatrzone. Poniżej znajduje się kopia przesłanych informacji:`
    }[lang] || `Dear ${name},<br><br>Thank you for reaching out. Your inquiry has been received. Below is a copy of your submission:`;

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
          .message-box { background: #fafafa; border-left: 3px solid #000000; padding: 16px; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; margin-bottom: 24px; }
          .footer { font-size: 12px; color: #777777; border-top: 1px solid #eeeeee; padding-top: 18px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Piotr Piotrowski · Studio</h1>
          </div>
          <div class="intro">
            ${confirmationIntro}
          </div>
          <table class="meta-table">
            <tr>
              <td class="meta-label">Primary Interest</td>
              <td><strong>${escapeHtml(serviceName)}</strong></td>
            </tr>
            ${location ? `
            <tr>
              <td class="meta-label">Location / Time</td>
              <td>${escapeHtml(location)}</td>
            </tr>
            ` : ''}
          </table>

          <div class="meta-label" style="margin-bottom: 8px;">Your Message:</div>
          <div class="message-box">${escapeHtml(message)}</div>

          <div class="footer">
            <strong>Piotr Piotrowski</strong><br>
            PhD, Architect & Engineer<br>
            <a href="https://piotr.owski.ch" style="color:#000000; text-decoration:underline;">piotr.owski.ch</a> · <a href="mailto:piotr@owski.ch" style="color:#000000;">piotr@owski.ch</a>
          </div>
        </div>
      </body>
      </html>
    `;

    // Helper to send via Resend
    async function sendResendMail(from, to, replyTo, subject, html) {
      return fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: from,
          to: Array.isArray(to) ? to : [to],
          reply_to: replyTo,
          subject: subject,
          html: html
        })
      });
    }

    // Attempt 1: Send with enquiry@piotr.owski.ch
    let adminRes = await sendResendMail(
      senderEmail,
      NOTIFICATION_RECIPIENT,
      `${name} <${email}>`,
      `Enquiry [${adminServiceName}]: ${name}`,
      adminHtml
    );

    // If piotr.owski.ch is not yet added in Resend, fallback to enquiry@owski.ch
    if (!adminRes.ok && senderEmail.includes('piotr.owski.ch')) {
      senderEmail = 'Piotr Piotrowski Studio <enquiry@owski.ch>';
      adminRes = await sendResendMail(
        senderEmail,
        NOTIFICATION_RECIPIENT,
        `${name} <${email}>`,
        `Enquiry [${adminServiceName}]: ${name}`,
        adminHtml
      );
    }

    // If still not ok, fallback to onboarding@resend.dev
    if (!adminRes.ok) {
      senderEmail = 'Piotr Piotrowski Studio <onboarding@resend.dev>';
      adminRes = await sendResendMail(
        senderEmail,
        NOTIFICATION_RECIPIENT,
        `${name} <${email}>`,
        `Enquiry [${adminServiceName}]: ${name}`,
        adminHtml
      );
    }

    if (!adminRes.ok) {
      const errText = await adminRes.text();
      console.error('Resend API Error (Admin Notification):', errText);
      return new Response(JSON.stringify({ error: 'Failed to send inquiry notification email.', details: errText }), {
        status: 500,
        headers: corsHeaders
      });
    }

    // Dispatch Confirmation Copy to Client (fire & ignore client delivery errors if on unverified test domain)
    try {
      await sendResendMail(
        senderEmail,
        email,
        NOTIFICATION_RECIPIENT,
        confirmationSubject,
        clientHtml
      );
    } catch (clientErr) {
      console.warn('Client confirmation copy failed (normal if domain unverified):', clientErr);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders
    });

  } catch (error) {
    console.error('Unexpected error handling enquiry:', error);
    return new Response(JSON.stringify({ error: 'Internal server error.' }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

// Helper: Escape HTML special characters
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
