export default {
  async send(ctx) {
    const body = ctx.request.body || {};
    const safeName = String(body.name || '').trim();
    const safeFirstName = String(body.firstName || '').trim();
    const safeLastName = String(body.lastName || '').trim();
    const safeEmail = String(body.email || '').trim();
    const safeMessage = String(body.message || '').trim();
    const company = String(body.company || body.companyName || '').trim();
    const inquiryType = String(
      body.inquiryType || body.interest || ''
    ).trim();
    const budgetRange = String(body.budgetRange || '').trim();
    const phone = String(body.phone || '').trim();
    const role = String(body.role || '').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    let firstName = safeFirstName;
    let lastName = safeLastName;
    let displayName = `${firstName} ${lastName}`.trim();

    if (safeName) {
      if (safeFirstName) {
        displayName = safeName;
      } else {
        const parts = safeName.split(/\s+/);
        firstName = parts[0] || '';
        lastName = parts.slice(1).join(' ') || '—';
        displayName = safeName;
      }
    }

    if (!firstName || !safeEmail || !safeMessage) {
      return ctx.badRequest('Name, email, and message are required');
    }

    if (!emailRegex.test(safeEmail)) {
      return ctx.badRequest('A valid email is required');
    }

    const toEmail = process.env.CONTACT_FORM_TO_EMAIL || 'lalla@helloagentic.ai';

    const extraLines = [
      company && `Company: ${company}`,
      inquiryType && `Inquiry Type: ${inquiryType}`,
      budgetRange && `Budget Range: ${budgetRange}`,
      phone && `Phone: ${phone}`,
      role && `Role: ${role}`,
    ].filter(Boolean);

    const textBody = [
      `Name: ${displayName}`,
      `Email: ${safeEmail}`,
      ...extraLines,
      '',
      'Message:',
      safeMessage,
    ].join('\n');

    const htmlExtras = extraLines
      .map((line) => {
        const idx = line.indexOf(': ');
        if (idx === -1) return `<p>${escapeHtml(line)}</p>`;
        const label = line.slice(0, idx);
        const val = line.slice(idx + 2);
        return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(val)}</p>`;
      })
      .join('');

    try {
      await strapi.plugins.email.services.email.send({
        to: toEmail,
        from: process.env.SMTP_USERNAME,
        replyTo: safeEmail,
        subject: `New partner inquiry from ${displayName}`,
        text: textBody,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(displayName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
          ${htmlExtras}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(safeMessage).replace(/\n/g, '<br/>')}</p>
        `,
      });

      ctx.send({ ok: true, message: 'Email sent successfully' });
    } catch (error) {
      strapi.log.error('Contact form email failed', error);
      ctx.internalServerError('Unable to send message right now');
    }
  },
};
