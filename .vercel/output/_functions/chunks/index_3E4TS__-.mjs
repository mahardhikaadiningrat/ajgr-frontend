import { n as createComponent, r as __exportAll, t as createAstro } from "./compiler_BGjCl2tC.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BidWz0RG.mjs";
import { i as urlFor, n as client, r as getSiteSettings, t as $$Layout } from "./Layout_CirPCQFK.mjs";
//#region src/pages/marketplace/index.astro
var marketplace_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://ajergianyar.web.id");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const settings = await getSiteSettings();
	const mpSettings = settings?.marketplaceSection || {};
	const mpLabel = mpSettings.label || "04 — MARKETPLACE";
	const mpTitle = mpSettings.title || "The Marketplace";
	const mpDescription = mpSettings.description || "Jual-beli part sepeda vintage dari anggota AJGR.cc. Hubungi penjual langsung via WhatsApp.";
	const url = new URL(Astro.request.url);
	const categoryFilter = url.searchParams.get("category") || "";
	const statusFilter = url.searchParams.get("status") || "available";
	const allCategories = await client.fetch(`array::unique(*[_type == "marketplace" && defined(category)].category) | order(@ asc)`);
	let filterQuery = `*[_type == "marketplace"`;
	const filterParams = {};
	if (categoryFilter) {
		filterQuery += ` && category == $category`;
		filterParams.category = categoryFilter;
	}
	if (statusFilter) {
		filterQuery += ` && status == $status`;
		filterParams.status = statusFilter;
	}
	filterQuery += `] | order(_createdAt desc){ 
  title, slug, category, brand, price, status, sellerLocation, images
}`;
	const items = await client.fetch(filterQuery, filterParams);
	function formatRupiah(angka) {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0
		}).format(angka);
	}
	function formatStatus(status) {
		return {
			available: "Tersedia",
			reserved: "Reserved",
			sold: "Terjual"
		}[status] || status;
	}
	function formatCategory(cat) {
		if (!cat) return "";
		if (cat === "full-bike") return "Full Bike";
		return cat.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"settings": settings,
		"data-astro-cid-ujkksgid": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="mp-section" style="padding: 6rem 0 4rem; border-bottom: 1px solid var(--border, #E5E5E5);" data-astro-cid-ujkksgid><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 1rem; display: block;" data-astro-cid-ujkksgid>${mpLabel}</span><h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 600; letter-spacing: -0.03em; margin-top: 1rem; color: var(--text, #111);" data-astro-cid-ujkksgid>${mpTitle}</h1><p style="margin-top: 1.5rem; font-size: 1.125rem; color: var(--text-muted, #666); max-width: 600px; line-height: 1.6;" data-astro-cid-ujkksgid>${mpDescription}</p></section><section class="mp-section" style="padding: 2rem 0; border-bottom: 1px solid var(--border, #E5E5E5); background: #FAFAFA;" data-astro-cid-ujkksgid><form method="GET" action="/marketplace" class="filter-form" data-astro-cid-ujkksgid><div class="filter-item" data-astro-cid-ujkksgid><label style="display: block; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-ujkksgid>Kategori</label><select name="category" style="width: 100%; padding: 0.75rem 1rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; border: 1px solid var(--border, #E5E5E5); background: white; cursor: pointer;" data-astro-cid-ujkksgid><option value="" data-astro-cid-ujkksgid>Semua Kategori</option>${allCategories.map((cat) => renderTemplate`<option${addAttribute(cat, "value")}${addAttribute(categoryFilter === cat, "selected")} data-astro-cid-ujkksgid>${formatCategory(cat)}</option>`)}</select></div><div class="filter-item" data-astro-cid-ujkksgid><label style="display: block; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-ujkksgid>Status</label><select name="status" style="width: 100%; padding: 0.75rem 1rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; border: 1px solid var(--border, #E5E5E5); background: white; cursor: pointer;" data-astro-cid-ujkksgid><option value="available"${addAttribute(statusFilter === "available", "selected")} data-astro-cid-ujkksgid>Hanya Tersedia</option><option value="reserved"${addAttribute(statusFilter === "reserved", "selected")} data-astro-cid-ujkksgid>Hanya Reserved</option><option value="sold"${addAttribute(statusFilter === "sold", "selected")} data-astro-cid-ujkksgid>Hanya Terjual</option><option value=""${addAttribute(statusFilter === "", "selected")} data-astro-cid-ujkksgid>Semua Status</option></select></div><div style="display: flex; gap: 0.5rem; width: 100%;" data-astro-cid-ujkksgid><button type="submit" style="flex: 1; font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: var(--text, #111); border: none; padding: 0.75rem 1.5rem; cursor: pointer;" data-astro-cid-ujkksgid>Filter</button>${(categoryFilter || statusFilter) && renderTemplate`<a href="/marketplace" style="flex: 1; text-align: center; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); text-decoration: none; border: 1px solid var(--text, #111); padding: 0.75rem 1.5rem;" data-astro-cid-ujkksgid>Reset</a>`}</div></form></section><section class="mp-section" style="padding: 4rem 0 6rem;" data-astro-cid-ujkksgid>${items.length > 0 ? renderTemplate`<div class="mp-grid" data-astro-cid-ujkksgid>${items.map((item) => renderTemplate`<article class="mp-card" style="border: 1px solid var(--border, #E5E5E5); display: flex; flex-direction: column; position: relative; overflow: hidden;" data-astro-cid-ujkksgid><!-- Status Badge --><div style="position: absolute; top: 1rem; right: 1rem; background: {getStatusColor(item.status)}; color: white; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; padding: 0.25rem 0.75rem; border-radius: 2px; z-index: 10;" data-astro-cid-ujkksgid>${formatStatus(item.status)}</div><!-- Image --><div style="aspect-ratio: 4/3; background: #F0F0F0; overflow: hidden;" data-astro-cid-ujkksgid>${item.images?.[0] ? renderTemplate`<img${addAttribute(urlFor(item.images[0]).width(600).url(), "src")}${addAttribute(item.title, "alt")} style="width: 100%; height: 100%; object-fit: cover; display: block;" data-astro-cid-ujkksgid>` : renderTemplate`<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background: linear-gradient(135deg, #C84B8E 0%, #E8C547 100%);" data-astro-cid-ujkksgid><span style="font-size: 3rem;" data-astro-cid-ujkksgid></span></div>`}</div><!-- Content --><div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;" data-astro-cid-ujkksgid><span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-ujkksgid>${formatCategory(item.category)} ${item.brand ? `· ${item.brand}` : ""}</span><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; line-height: 1.3; word-break: break-word;" data-astro-cid-ujkksgid>${item.title}</h3><p style="font-size: 1.5rem; font-weight: 700; color: var(--text, #111); margin-bottom: 0.5rem;" data-astro-cid-ujkksgid>${formatRupiah(item.price)}</p><p style="font-size: 0.85rem; color: var(--text-muted, #666); margin-bottom: 1.5rem; word-break: break-word;" data-astro-cid-ujkksgid>📍 ${item.sellerLocation || "Lokasi tidak disebutkan"}</p><a${addAttribute(`/marketplace/${item.slug.current}`, "href")} style="margin-top: auto; text-align: center; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); text-decoration: none; border: 1px solid var(--text, #111); padding: 0.75rem; transition: all 0.2s;" onmouseover="this.style.backgroundColor='var(--text, #111)'; this.style.color='#FAFAFA'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--text, #111)'" data-astro-cid-ujkksgid>Lihat Detail & Hubungi →</a></div></article>`)}</div>` : renderTemplate`<div style="text-align: center; padding: 6rem 2rem; border: 1px solid var(--border, #E5E5E5); max-width: 100%;" data-astro-cid-ujkksgid><p style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem;" data-astro-cid-ujkksgid>Belum ada part di kategori ini</p><a href="/marketplace" style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent, #C84B8E); text-decoration: none; border-bottom: 1px solid var(--accent, #C84B8E);" data-astro-cid-ujkksgid>Reset Filter →</a></div>`}</section>` })}`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/marketplace/index.astro", void 0);
var $$file = "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/marketplace/index.astro";
var $$url = "/marketplace";
//#endregion
//#region \0virtual:astro:page:src/pages/marketplace/index@_@astro
var page = () => marketplace_exports;
//#endregion
export { page };
