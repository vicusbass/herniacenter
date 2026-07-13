// Google Ads (gtag.js) conversion tracking.
//
// These are the `send_to` values for EVENT-based conversion actions, fired via
//   gtag('event', 'conversion', { send_to: ... })
// Format: AW-<account id>/<conversion label>. Find the label in Google Ads ->
// Goals -> Conversions -> [action] -> "Tag setup" -> the part after the slash.
//
// Call tracking is NOT here: it uses Google's dynamic number insertion
// ("Calls from a website" conversion action), configured directly in the gtag
// snippet in src/layouts/Layout.astro.
//
// NOTE: the AW-11007801742 account id must match the gtag snippet in Layout.astro.

export const GOOGLE_ADS_ID = 'AW-11007801742';

export const conversions = {
  // Click on any WhatsApp link (sticky button, footer, PrimaryButton CTAs).
  whatsapp: `${GOOGLE_ADS_ID}/REPLACE_WITH_WHATSAPP_LABEL`,
  // Successful contact form submission.
  form: `${GOOGLE_ADS_ID}/REPLACE_WITH_FORM_LABEL`,
};

export default { GOOGLE_ADS_ID, conversions };
