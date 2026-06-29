import sharp from "sharp";
import { copyFile, mkdir } from "node:fs/promises";

const projects = [
  ["Rajasthani Sammelan Education Trust (Malad, Mumbai).webp", "public/images/projects/rajasthani-sammelan"],
  ["Raheja Imperia worli.avif", "public/images/projects/raheja-imperia"],
  ["Navjivan Society chembur.avif", "public/images/projects/navjiwan-society"],
  ["Umrao Hospitals (Mira Road).avif", "public/images/projects/umrao-hospitals"],
  ["Splendor Complex.jpeg", "public/images/projects/splendor-complex"],
  ["Shubhada Polymers (Lonavala).jpg", "public/images/projects/shubhada-polymers"],
  ["Styrotech Industries (Ranjangaon MIDC).webp", "public/images/projects/styrotech-industries"],
  ["Marathon Icon (Lower Parel).webp", "public/images/projects/marathon-icon"],
  ["Mandev Tubes (Umbergaon).jpeg", "public/images/projects/mandev-tubes"],
  ["Roshan Spaces (Bandra).png", "public/images/projects/roshan-spaces"],
  ["KGS Grounds (Jogeshwari East).webp", "public/images/projects/kgs-grounds"],
];
const services = [
  ["cctv support.webp", "public/images/existing/services/cctv-support"],
  ["video door phone.avif", "public/images/existing/services/video-door-phone-new"],
  ["wireless cam systems.webp", "public/images/existing/services/wireless"],
];

await mkdir("public/images/projects", { recursive: true });
await mkdir("public/images/existing/services", { recursive: true });

for (const [inp, outBase] of [...projects, ...services]) {
  const input = `pictures/${inp}`;
  try {
    await sharp(input)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(`${outBase}.webp`);
    console.log(`${outBase.split("/").pop()} => ${outBase.replace("public", "")}.webp`);
  } catch (e) {
    const ext = inp.split(".").pop();
    await copyFile(input, `${outBase}.${ext}`);
    console.log(`${outBase.split("/").pop()} => ${outBase.replace("public", "")}.${ext}  (copied: ${e.message.slice(0, 32)})`);
  }
}
