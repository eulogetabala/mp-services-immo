import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const input = path.join(root, "public/logo-mp-1.png");

/** Remplace le fond noir par de la transparence pour composer sur blanc. */
async function removeBlackBackground(buffer, threshold = 45) {
  const { data, info } = await sharp(buffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r <= threshold && g <= threshold && b <= threshold) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png();
}

async function buildFavicon(size, paddingRatio = 0.02) {
  const source = sharp(input);
  const meta = await source.metadata();
  const w = meta.width;
  const h = meta.height;

  // Recadrage sur l'icône M1P (sans le texte SERVICES)
  const cropHeight = Math.round(h * 0.58);
  const cropped = await source
    .extract({ left: 0, top: 0, width: w, height: cropHeight })
    .toBuffer();

  const transparent = await removeBlackBackground(cropped);
  const logoMeta = await transparent.metadata();

  const inner = Math.round(size * (1 - paddingRatio * 2));
  const logo = await transparent
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

const sizes = [
  { name: "favicon.png", size: 512 },
  { name: "favicon-192.png", size: 192 },
  { name: "favicon-32.png", size: 32 },
  { name: "apple-icon.png", size: 180 },
];

for (const { name, size } of sizes) {
  const buf = await buildFavicon(size);
  const out = path.join(root, "public", name);
  await sharp(buf).toFile(out);
  console.log(`✓ ${name} (${size}×${size})`);
}

// Icône Next.js App Router (haute résolution)
const appIcon = await buildFavicon(512, 0.02);
await sharp(appIcon).toFile(path.join(root, "src/app/icon.png"));
console.log("✓ src/app/icon.png");
