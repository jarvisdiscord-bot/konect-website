// Generates public/og.png (1200x630) for social share previews.
// Run: node scripts/gen-og.mjs
import sharp from "sharp";

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#060E1A"/>
      <stop offset="1" stop-color="#0A1628"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="0%" r="70%">
      <stop offset="0" stop-color="#2563EB" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="80" y="250" font-family="Arial, Helvetica, sans-serif" font-size="110" font-weight="700" fill="#ffffff">Konect</text>
  <rect x="84" y="280" width="140" height="6" rx="3" fill="#2563EB"/>
  <text x="80" y="360" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="600" fill="#3B82F6">Security &amp; Surveillance in Mumbai</text>
  <text x="80" y="412" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#9AA6B8">CCTV · Access Control · Intercom · AMC · Since 2010</text>
  <text x="80" y="540" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" fill="#D4A853">400+ customers  ·  300+ societies  ·  200+ AMCs  ·  16+ years</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("Wrote public/og.png");
