export default {
  async send(ctx) {
    const { firstName, lastName, email, message } = ctx.request.body || {};

    if (!firstName || !lastName || !email || !message) {
      return ctx.badRequest('All fields are required');
    }

    const toEmail = process.env.CONTACT_FORM_TO_EMAIL || 'lalla@helloagentic.ai';

    try {
      await strapi.plugins.email.services.email.send({
        to: toEmail,
        from: process.env.SMTP_USERNAME,
        replyTo: email,
        subject: `New contact form submission from ${firstName} ${lastName}`,
        text: [
          `Name: ${firstName} ${lastName}`,
          `Email: ${email}`,
          '',
          'Message:',
          message,
        ].join('\n'),
        html: `
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      });

      ctx.send({ ok: true, message: 'Email sent successfully' });
    } catch (error) {
      strapi.log.error('Contact form email failed', error);
      ctx.internalServerError('Unable to send message right now');
    }
  },
};
