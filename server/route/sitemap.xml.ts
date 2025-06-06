import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  const pass = useRuntimeConfig();
  const siteUrl = "http://localhost:3000"; // ← 本番用に修正
  const microCmsUrl = pass.public.baseURL; // ← microCMSのURLに置き換え
  const apiKey = pass.passKey; // ← .env等から読み込む方が安全です

  const res = await fetch(microCmsUrl, {
    headers: {
      "X-API-KEY": apiKey,
    },
  });

  const blogList = await res.json();
  const dynamicUrls = blogList.contents.map(
    (post: any) => `${siteUrl}/info/${post.id}`
  );

  const staticUrls = [
    `${siteUrl}/`,
    `${siteUrl}/about`,
    `${siteUrl}/menu`,
    `${siteUrl}/info`,
    `${siteUrl}/contact`,
    `${siteUrl}/thanks`,
  ];

  const urls = [...staticUrls, ...dynamicUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  event.node.res.setHeader("Content-Type", "application/xml");
  event.node.res.end(xml);
});
