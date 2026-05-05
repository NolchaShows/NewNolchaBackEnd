export default {
  async send(ctx) {
    const { firstName, lastName, email, message } = ctx.request.body || {};

    const safeFirstName = String(firstName || '').trim();
    const safeLastName = String(lastName || '').trim();
    const safeEmail = String(email || '').trim();
    const safeMessage = String(message || '').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    if (!safeFirstName || !safeLastName || !safeEmail || !safeMessage) {
      return ctx.badRequest('All fields are required');
    }

    if (!emailRegex.test(safeEmail)) {
      return ctx.badRequest('A valid email is required');
    }

    const toEmail = process.env.CONTACT_FORM_TO_EMAIL || 'lalla@helloagentic.ai';

    try {
      await strapi.plugins.email.services.email.send({
        to: toEmail,
        from: process.env.SMTP_USERNAME,
        replyTo: safeEmail,
        subject: `New contact form submission from ${safeFirstName} ${safeLastName}`,
        text: [
          `Name: ${safeFirstName} ${safeLastName}`,
          `Email: ${safeEmail}`,
          '',
          'Message:',
          safeMessage,
        ].join('\n'),
        html: `
          <p><strong>Name:</strong> ${escapeHtml(safeFirstName)} ${escapeHtml(safeLastName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
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
