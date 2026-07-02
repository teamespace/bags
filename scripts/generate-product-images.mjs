import fs from "fs/promises";
import path from "path";

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error("Missing OPENAI_API_KEY");
  process.exit(1);
}

const inputFile = process.argv[2];
if (!inputFile) {
  console.error("Usage: node generate-product-images.mjs <products.json>");
  process.exit(1);
}

const products = JSON.parse(await fs.readFile(inputFile, "utf-8"));
const outDir = path.resolve("public/products");
await fs.mkdir(outDir, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const product of products) {
  const prompt =
    `Studio product photography of ${product.description}, pure white background, soft even studio lighting, subtle drop shadow, centered composition, full product visible from 3/4 front view, high-end technical carry goods, e-commerce product photo, photorealistic, no text, no logos.`;

  console.log(`Generating ${product.id}...`);
  try {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-image-2",
        prompt,
        n: 1,
        size: "1024x1536",
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error(`Failed ${product.id}: ${err}`);
      continue;
    }

    const data = await res.json();
    const b64 = data.data?.[0]?.b64_json;
    if (!b64) {
      console.error(`No image returned for ${product.id}`);
      continue;
    }

    const buffer = Buffer.from(b64, "base64");
    const filePath = path.join(outDir, `${product.id}.png`);
    await fs.writeFile(filePath, buffer);
    console.log(`Saved ${filePath}`);
  } catch (err) {
    console.error(`Error ${product.id}:`, err.message);
  }

  await sleep(500);
}
