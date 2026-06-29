import sharp from "sharp";

const path = `M150 50
C182 42 210 54 224 78
C239 102 241 128 233 150
C227 168 208 168 207 188
C206 208 225 216 219 240
C214 268 203 296 198 322
C193 348 189 367 177 385
C167 401 157 412 147 417
C140 420 133 416 129 404
C124 388 125 366 119 342
C113 316 106 294 107 268
C108 242 119 222 110 198
C103 176 96 156 102 134
C107 114 100 98 108 84
C113 73 104 64 113 58
C121 51 134 52 141 59
C145 50 147 50 150 50 Z`.replace(/\s+/g, " ");

const pins = [
  [149, 95, 1], [122, 60, 0], [128, 175, 0], [156, 188, 0],
  [120, 250, 0], [188, 272, 0], [128, 360, 0], [142, 378, 0],
];
const pinSvg = pins.map(([x,y,on])=>(on?`<circle cx="${x}" cy="${y}" r="11" fill="#2563eb" opacity="0.3"/>`:"")+`<circle cx="${x}" cy="${y}" r="${on?7:5}" fill="${on?"#d4a853":"#3b82f6"}" stroke="#0a1628" stroke-width="1.3"/>`).join("");

for (const [bg, land, name] of [["#dbeafe","#2f5fd0","light"],["#0a1628","#15294a","dark"]]) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 460" width="450" height="690"><rect width="300" height="460" fill="${bg}"/><path d="${path}" fill="${land}" stroke="${bg==="#0a1628"?"#33507f":"#1e40af"}" stroke-width="1.5"/>${bg==="#0a1628"?pinSvg:""}</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(`scripts/mumbai-${name}.png`);
}
console.log("ok");
