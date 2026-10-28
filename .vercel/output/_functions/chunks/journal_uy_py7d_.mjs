import { n as createComponent, r as __exportAll } from "./compiler_BGjCl2tC.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BidWz0RG.mjs";
import { i as urlFor, n as client, r as getSiteSettings, t as $$Layout } from "./Layout_CirPCQFK.mjs";
//#region src/pages/journal.astro
var journal_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Journal,
	file: () => $$file,
	url: () => $$url
});
var $$Journal = createComponent(async ($$result, $$props, $$slots) => {
	const settings = await getSiteSettings();
	const journalSettings = settings?.journalSection || {};
	const journalLabel = journalSettings.label || "03 — STORIES";
	const journalTitle = journalSettings.title || "The Journal";
	const journalDescription = journalSettings.description || "Catatan perjalanan, cerita dari jalanan, dan pemikiran tentang dunia sepeda dari anggota AJGR.cc.";
	const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc){
  title, slug, category, publishedAt, mainImage, body
}`);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"settings": settings,
		"data-astro-cid-wyllzg5x": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section style="padding: 6rem 0 4rem; border-bottom: 1px solid var(--border, #E5E5E5);" data-astro-cid-wyllzg5x><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 1rem; display: block;" data-astro-cid-wyllzg5x>${journalLabel}</span><h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 600; letter-spacing: -0.03em; margin-top: 1rem; color: var(--text, #111);" data-astro-cid-wyllzg5x>${journalTitle}</h1><p style="margin-top: 1.5rem; font-size: 1.125rem; color: var(--text-muted, #666); max-width: 600px; line-height: 1.6;" data-astro-cid-wyllzg5x>${journalDescription}</p></section><section style="padding: 2rem 0 6rem; max-width: 100%; overflow: hidden;" data-astro-cid-wyllzg5x>${posts.length > 0 ? renderTemplate`<div style="display: flex; flex-direction: column;" data-astro-cid-wyllzg5x>${posts.map((post, index) => renderTemplate`<article class="article-item" data-astro-cid-wyllzg5x><!-- GAMBAR DI SEBELAH KIRI -->${post.mainImage && renderTemplate`<div class="article-image" data-astro-cid-wyllzg5x><img${addAttribute(urlFor(post.mainImage).width(400).url(), "src")}${addAttribute(post.title, "alt")} style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" data-astro-cid-wyllzg5x></div>`}<!-- Konten di Sebelah Kanan --><div class="article-content" data-astro-cid-wyllzg5x><!-- Meta Info (Kategori & Tanggal) --><div style="margin-bottom: 1rem;" data-astro-cid-wyllzg5x><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 0.75rem; display: block;" data-astro-cid-wyllzg5x>${post.category}</span><p style="font-size: 0.8rem; color: var(--text-muted, #666); font-variant-numeric: tabular-nums;" data-astro-cid-wyllzg5x>${new Date(post.publishedAt).toLocaleDateString("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric"
	})}</p></div><!-- Judul & Excerpt --><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.5rem, 4vw, 2rem); font-weight: 600; letter-spacing: -0.02em; margin-bottom: 1rem; line-height: 1.15; color: var(--text, #111);" data-astro-cid-wyllzg5x>${post.title}</h2><p style="color: var(--text-muted, #666); line-height: 1.6; margin-bottom: 1.5rem; max-width: 100%; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; hyphens: auto;" data-astro-cid-wyllzg5x>${post.body?.[0]?.children?.map((c) => c.text).join("").substring(0, 180)}...</p><a${addAttribute(`/journal/${post.slug.current}`, "href")} style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); text-decoration: none; border-bottom: 1px solid var(--text, #111); padding-bottom: 2px; transition: all 0.2s; display: inline-block;" onmouseover="this.style.color='var(--accent, #C84B8E)'; this.style.borderColor='var(--accent, #C84B8E)'" onmouseout="this.style.color='var(--text, #111)'; this.style.borderColor='var(--text, #111)'" data-astro-cid-wyllzg5x>Read Article →</a></div></article>`)}</div>` : renderTemplate`<div style="text-align: center; padding: 6rem 2rem; border: 1px solid var(--border, #E5E5E5);" data-astro-cid-wyllzg5x><p style="font-family: 'Space Grotesk', sans-serif; font-size: 2rem; font-weight: 600; color: var(--text, #111); margin-bottom: 0.5rem;" data-astro-cid-wyllzg5x>Coming Soon</p><p style="color: var(--text-muted, #666); font-size: 0.9rem;" data-astro-cid-wyllzg5x>Belum ada artikel yang dipublikasikan.</p></div>`}</section>` })}`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/journal.astro", void 0);
var $$file = "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/journal.astro";
var $$url = "/journal";
//#endregion
//#region \0virtual:astro:page:src/pages/journal@_@astro
var page = () => journal_exports;
//#endregion
export { page };
