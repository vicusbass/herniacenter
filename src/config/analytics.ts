// Google Ads (gtag.js) conversion tracking.
//
// Each value below is the `send_to` string for a Google Ads conversion action,
// in the form: AW-<account id>/<conversion label>
//
// Where to find the label: Google Ads -> Goals -> Conversions -> open the
// conversion action -> "Tag setup" -> "Install the tag yourself". The snippet
// shows an event with  send_to: 'AW-11007801742/AbC-dEfGh1i2j3'  -- copy the
// part after the slash into the matching constant below.
//
// NOTE: the AW-11007801742 account id must match the gtag snippet in
// src/layouts/Layout.astro.

export const GOOGLE_ADS_ID = 'AW-11007801742';

export const conversions = {
  // Click on any WhatsApp link (sticky button, footer, PrimaryButton CTAs).
  whatsapp: `${GOOGLE_ADS_ID}/REPLACE_WITH_WHATSAPP_LABEL`,
  // Click on any tel: link (footer phone, thank-you page).
  call: `${GOOGLE_ADS_ID}/REPLACE_WITH_CALL_LABEL`,
  // Successful contact form submission.
  form: `${GOOGLE_ADS_ID}/REPLACE_WITH_FORM_LABEL`,
};

export default { GOOGLE_ADS_ID, conversions };
