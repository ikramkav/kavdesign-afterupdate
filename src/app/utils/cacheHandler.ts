import fs from "fs";
import path from "path";

const CACHE_DIR = path.join(process.cwd(), "cache");

// Ensure directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR);
}

export function getCacheFilePath(prompt: string) {
  const safeName = prompt
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_");
  return path.join(CACHE_DIR, `${safeName}.json`);
}

export function readCache(prompt: string) {
  const filePath = getCacheFilePath(prompt);
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    try {
      return JSON.parse(data);
    } catch {
      console.warn(" Invalid cache JSON:", filePath);
    }
  }
  return null;
}

export function writeCache(prompt: string, data: any) {
  const filePath = getCacheFilePath(prompt);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}
