import fs from "fs";
import path from "path";

const TEXT = "The dustpan's one flaw is a three-millimetre lip. Every sweep ends the same way: a thin, smug line of dirt sitting exactly on the wrong side of it, forever.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error("review must be 1-200 characters, got " + TEXT.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT);
} catch (err) {
  console.error("failed to write entry.txt:", err);
  process.exit(1);
}
