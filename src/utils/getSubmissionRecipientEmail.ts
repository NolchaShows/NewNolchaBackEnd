import type { Core } from '@strapi/strapi';

const UID = 'api::form-notifications.form-notifications';

const DEFAULT_RECIPIENT = 'lalla@helloagentic.ai';

/**
 * Where contact + newsletter submissions are delivered.
 * Priority: Strapi Form notifications → CONTACT_FORM_TO_EMAIL env → default.
 */
export async function getSubmissionRecipientEmail(
  strapi: Core.Strapi
): Promise<string> {
  try {
    const entry = await strapi.db.query(UID).findOne({
      where: { publishedAt: { $notNull: true } },
    });

    const fromCms = String(entry?.submissionRecipientEmail ?? '').trim();
    if (fromCms) {
      return fromCms;
    }
  } catch (error) {
    strapi.log.warn('Could not load form notification settings from Strapi', error);
  }

  return process.env.CONTACT_FORM_TO_EMAIL?.trim() || DEFAULT_RECIPIENT;
}
