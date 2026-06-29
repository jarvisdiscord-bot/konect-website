// Generates hero stills via HF Inference Providers.
// Primary: FLUX.1-dev on fal-ai (high quality). Fallback: FLUX.1-schnell on hf-inference.
// Reads HF_TOKEN from env.
//   node scripts/gen-hero-hf.mjs            -> hero 1..5 (keeps hero-6)
//   node scripts/gen-hero-hf.mjs 1          -> only hero-1
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const TOKEN = process.env.HF_TOKEN;
if (!TOKEN) { console.error("Missing HF_TOKEN"); process.exit(1); }

const STYLE =
  ", real on-site documentary photograph taken during a CCTV installation in an " +
  "ordinary Indian commercial building, authentic and candid, plain fluorescent " +
  "and daylight lighting, modest utilitarian interior, true-to-life colours, " +
  "natural realistic look, sharp and well exposed but not staged, " +
  "NOT cinematic, no dramatic lighting, no glossy studio look, no text, no watermark, no logo";

const PROMPTS = {
  1: "A real CCTV monitoring room in an ordinary Indian commercial building: several flat LED television screens mounted on a plain painted wall, each screen showing a grid of live security-camera feeds, a simple desk with a computer below them, plain tiled floor, fluorescent ceiling lights, one staff member at the desk seen from behind",
  2: "A real wall-mounted facial-recognition access-control unit next to an office door in an Indian building, its small screen showing a live camera view of a person's face with a green face-detection box and recognition markers around it, screwed onto a plain painted wall with a visible cable, a small CCTV camera in the corridor, ordinary indoor lighting, close shot",
  3: "A real biometric fingerprint access and attendance device mounted on a wall beside a door in an Indian office, a hand placing one finger on the small glowing sensor, plain wall, ordinary fluorescent indoor lighting, close shot",
  4: "A real CCTV NVR installation in an Indian building: a black network rack cabinet holding several stacked NVR/DVR recorders with cabling, a small monitor on top showing a camera-feed grid, plain tiled floor, fluorescent light",
  5: "A real, neatly organised CCTV equipment panel mounted on a clean wooden backboard on a wall in an Indian building: one black DVR recorder box, a network switch and a small router, with tidy well-bundled cables routed along the board, a UPS battery box on the floor below, clean and professional installation, ordinary indoor lighting, straight-on documentary photo",
};

const OUT_DIR = path.join(process.cwd(), "public", "images", "hero");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// FLUX.1-dev via fal-ai (returns JSON with an image URL).
async function falDev(prompt) {
  const res = await fetch(
    "https://router.huggingface.co/fal-ai/fal-ai/flux/dev",
    {
      method: "POST",
      headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: prompt + STYLE,
        image_size: "landscape_16_9",
        num_inference_steps: 30,
        guidance_scale: 3.5,
        num_images: 1,
        enable_safety_checker: false,
      }),
    },
  );
  const text = await res.text();
  if (!res.ok) throw new Error(`fal-dev ${res.status}: ${text.slice(0, 180)}`);
  const j = JSON.parse(text);
  const url = j?.images?.[0]?.url || j?.image?.url;
  if (!url) throw new Error(`fal-dev no url: ${text.slice(0, 180)}`);
  const ib = await fetch(url);
  return { buf: Buffer.from(await ib.arrayBuffer()), model: "FLUX.1-dev/fal-ai" };
}

// FLUX.1-schnell via hf-inference (returns raw image bytes).
async function schnell(prompt) {
  const res = await fetch(
    "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
        Accept: "image/png",
      },
      body: JSON.stringify({ inputs: prompt + STYLE, parameters: { width: 1024, height: 576 } }),
    },
  );
  if ((res.headers.get("content-type") || "").startsWith("image/"))
    return { buf: Buffer.from(await res.arrayBuffer()), model: "FLUX.1-schnell/hf" };
  throw new Error(`schnell ${res.status}: ${(await res.text()).slice(0, 180)}`);
}

async function generate(prompt) {
  try {
    return await falDev(prompt);
  } catch (e) {
    console.error(`  dev failed (${e.message}); falling back to schnell`);
    return await schnell(prompt);
  }
}

const only = process.argv.slice(2).map(Number).filter(Boolean);
const targets = (only.length ? only : [1, 2, 3, 4, 5]).filter((n) => PROMPTS[n]);

await mkdir(OUT_DIR, { recursive: true });
for (const n of targets) {
  try {
    const { buf, model } = await generate(PROMPTS[n]);
    await sharp(buf)
      .resize(1920, 1080, { fit: "cover", position: "centre" })
      .webp({ quality: 88 })
      .toFile(path.join(OUT_DIR, `hero-${n}.webp`));
    console.log(`OK   hero-${n}.webp via ${model} (${buf.length} bytes)`);
  } catch (e) {
    console.error(`FAIL hero-${n}: ${e.message}`);
  }
  await sleep(1200);
}
console.log("done");
