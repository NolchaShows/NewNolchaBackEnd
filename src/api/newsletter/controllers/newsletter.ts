export default {
  async subscribe(ctx) {
    const { email } = ctx.request.body || {};
    const safeEmail = String(email || '').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!safeEmail) {
      return ctx.badRequest('Email is required');
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
        subject: 'New newsletter subscription',
        text: `Email: ${safeEmail}`,
        html: `<p><strong>Email:</strong> ${safeEmail.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`,
      });

      ctx.send({ ok: true, message: 'Subscribed successfully' });
    } catch (error) {
      strapi.log.error('Newsletter subscribe email failed', error);
      ctx.internalServerError('Unable to subscribe right now');
    }
  },
};
