import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

if (!existsSync(source)) {
  throw new Error(`POST.json not found in ${botDir}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
