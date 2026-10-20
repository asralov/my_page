import { test } from "node:test";
import assert from "node:assert/strict";
const base = process.env.TEST_BASE_URL || "http://localhost:3000";

test("production page exposes canonical identity, featured Storm, and safe external links", async () => {
  const response = await fetch(base);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Abror Asralov/);
  assert.match(html, /rel="canonical" href="https:\/\/asralov.vercel.app\/?"/);
  const storm = html.indexOf('data-project="storm"');
  const algo = html.indexOf('data-project="2"');
  assert.ok(storm >= 0 && algo > storm);
  for (const link of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
    assert.match(link[0], /rel="noopener noreferrer"/);
  }
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.match(
    response.headers.get("content-security-policy"),
    /frame-ancestors 'none'/,
  );
  assert.equal(response.headers.get("x-powered-by"), null);
});
test("resume and real screenshot are served with valid file signatures", async () => {
  const resume = await fetch(`${base}/resume_updated.pdf`);
  assert.equal(resume.status, 200);
  assert.equal(
    Buffer.from(await resume.arrayBuffer())
      .subarray(0, 5)
      .toString(),
    "%PDF-",
  );
  const image = await fetch(`${base}/storm-dashboard.png`);
  assert.equal(image.status, 200);
  assert.equal(
    Buffer.from(await image.arrayBuffer())
      .subarray(1, 4)
      .toString(),
    "PNG",
  );
});
test("crawler metadata and social image resolve", async () => {
  for (const path of [
    "/robots.txt",
    "/sitemap.xml",
    "/opengraph-image",
    "/icon.svg",
  ]) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    if (path.endsWith(".txt") || path.endsWith(".xml"))
      assert.match(await response.text(), /https:\/\/asralov.vercel.app/);
  }
});
