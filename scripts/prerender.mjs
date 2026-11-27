// Prerender: after `vite build`, open every page from public/sitemap.xml in a headless
// browser and save the rendered HTML as dist/<path>/index.html.
// Google, LinkedIn, Facebook and AI crawlers then see real content instead of an empty
// <div id="root">. React still boots normally in the browser (createRoot replaces it).
//
// Skip with SKIP_PRERENDER=1 (e.g. the portal Docker image, which is noindex anyway).
// Use a local Chrome with PUPPETEER_EXECUTABLE_PATH=/path/to/chrome if needed.
import fs from "node:fs";
import http from "node:http";
import path from "node:path";

const DIST = path.resolve("dist");
const SITE = "https://www.a1itinnovation.com.np";

if (process.env.SKIP_PRERENDER === "1") {
  console.log("[prerender] SKIP_PRERENDER=1, skipping.");
  process.exit(0);
}

// Keep the untouched SPA shell for routes that are not prerendered (admin, portal, 404...)
const shell = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
fs.writeFileSync(path.join(DIST, "spa.html"), shell);
// vite-plugin-compression already gzipped the empty shell; remove it so no server serves the stale copy
fs.rmSync(path.join(DIST, "index.html.gz"), { force: true });

const sitemap = fs.readFileSync(path.resolve("public/sitemap.xml"), "utf8");
const routes = [...new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].trim().replace(SITE, "") || "/")
    .map((p) => (p.length > 1 ? p.replace(/\/$/, "") : p)),
)];
if (!routes.includes("/")) routes.unshift("/");

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".avif": "image/avif", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".xml": "application/xml",
  ".txt": "text/plain", ".webmanifest": "application/manifest+json",
};

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split("?")[0]);
  let file = path.join(DIST, url);
  if (!file.startsWith(DIST) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    file = path.join(DIST, "spa.html");
  }
  res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

let puppeteer;
try {
  puppeteer = (await import("puppeteer")).default;
} catch {
  console.warn("[prerender] puppeteer not installed, skipping (site still works as a normal SPA).");
  process.exit(0);
}

await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;

let browser;
try {
  browser = await puppeteer.launch({
    headless: true,
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
} catch (err) {
  console.warn(`[prerender] could not start Chrome (${err.message}). Skipping; site still works as a SPA.`);
  server.close();
  process.exit(0);
}

let ok = 0;
for (const route of routes) {
  const page = await browser.newPage();
  // Third-party widgets are not needed in the snapshot
  await page.setRequestInterception(true);
  page.on("request", (r) => (r.url().startsWith(base) ? r.continue() : r.abort()));
  try {
    await page.goto(base + route, { waitUntil: "networkidle0", timeout: 30000 });
    await page.waitForSelector("#root > *", { timeout: 10000 });
    let html = await page.content();
    html = html.replaceAll(base, SITE);
    const out = route === "/" ? path.join(DIST, "index.html") : path.join(DIST, route, "index.html");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    ok++;
  } catch (err) {
    console.warn(`[prerender] ${route} failed: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();
console.log(`[prerender] ${ok}/${routes.length} pages written to dist/`);
