/**
 * NWisp Chat — security disclosure data
 * ---------------------------------------------------------------
 * This is SEPARATE from assets/updates-data.js on purpose — this file
 * is only ever for actual reported vulnerabilities and their fixes,
 * never for regular feature work. Don't mix the two.
 *
 * Empty for now — nothing has been reported yet. Add a new object to
 * the TOP of this array (newest first) once something is found AND
 * fixed. security.html renders this list automatically; an empty
 * array shows the "nothing reported yet" message on its own.
 *
 * Field guide:
 *  id           – unique slug, not currently linked anywhere but kept
 *                 for consistency with updates-data.js and in case a
 *                 detail page is ever added later
 *  severity     – "low" | "medium" | "high" | "critical" (controls the pill color)
 *  dateFound    – display string, e.g. "September 20, 2026"
 *  dateFixed    – display string, or null if not fixed yet
 *  title        – short, plain-language name for the issue
 *  description  – what the vulnerability actually was, in plain terms —
 *                  no exploit details that could help someone abuse it
 *                  before everyone's had a chance to update
 *  fixSummary   – what was changed to fix it, in plain terms
 *  credit       – { name: "...", link: "..." } for who reported it,
 *                 or null to credit "Reported anonymously"
 */
window.NWISP_SECURITY_ISSUES = [];
