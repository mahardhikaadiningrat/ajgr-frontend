import { n as createComponent, r as __exportAll, t as createAstro } from "./compiler_BGjCl2tC.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BidWz0RG.mjs";
import { i as urlFor, n as client, r as getSiteSettings, t as $$Layout } from "./Layout_CirPCQFK.mjs";
//#region src/pages/archive.astro
var archive_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Archive,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://ajergianyar.web.id");
var $$Archive = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Archive;
	const settings = await getSiteSettings();
	const archiveSettings = settings?.archiveSection || {};
	const archiveLabel = archiveSettings.label || "02 — COLLECTION";
	const archiveTitle = archiveSettings.title || "The Archive";
	const archiveDescription = archiveSettings.description || "Katalog sepeda vintage yang dirawat dengan cinta oleh anggota AJGR.cc. Setiap sepeda memiliki cerita dan sejarahnya sendiri.";
	const requestUrl = Astro.request.url;
	const url = new URL(requestUrl);
	const brandFilter = url.searchParams.get("brand") || "";
	const yearFilter = url.searchParams.get("year") || "";
	console.log("=== DEBUG FILTER ===");
	console.log("Full URL:", requestUrl);
	console.log("Brand Filter dari URL:", brandFilter);
	console.log("Year Filter dari URL:", yearFilter);
	const allBrands = await client.fetch(`*[_type == "brand"] | order(name asc){
  _id, name, slug
}`);
	const allYears = await client.fetch(`array::unique(*[_type == "bike" && defined(year)].year) | order(year desc)`);
	let filterQuery = `*[_type == "bike"`;
	const filterParams = {};
	if (brandFilter) {
		filterQuery += ` && brand._ref == $brand`;
		filterParams.brand = brandFilter;
	}
	if (yearFilter) {
		filterQuery += ` && year == $year`;
		filterParams.year = parseInt(yearFilter);
	}
	filterQuery += `] | order(_createdAt desc){ 
  title, slug, brand->{name, slug}, year, country, type, groupset, mainImage, story 
}`;
	console.log("Query GROQ:", filterQuery);
	console.log("Params:", filterParams);
	const bikes = await client.fetch(filterQuery, filterParams);
	console.log("Hasil bikes:", bikes.length);
	console.log("==================");
	function formatBrandName(brand) {
		if (!brand) return "Unknown";
		return brand.name || "Unknown";
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "settings": settings }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section style="padding: 6rem 0 4rem; border-bottom: 1px solid var(--border, #E5E5E5);"><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 1rem; display: block;">${archiveLabel}</span><h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 600; letter-spacing: -0.03em; margin-top: 1rem; color: var(--text, #111);">${archiveTitle}</h1><p style="margin-top: 1.5rem; font-size: 1.125rem; color: var(--text-muted, #666); max-width: 600px; line-height: 1.6;">${archiveDescription}</p></section><section style="padding: 2rem 0; border-bottom: 1px solid var(--border, #E5E5E5); background: #FAFAFA;"><form method="GET" action="/archive" style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-end;"><!-- Filter Brand --><div style="flex: 1; min-width: 200px;"><label style="display: block; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;">Brand</label><select name="brand" style="width: 100%; padding: 0.75rem 1rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; border: 1px solid var(--border, #E5E5E5); background: white; cursor: pointer;"><option value="">Semua Brand</option>${allBrands.map((brand) => renderTemplate`<option${addAttribute(brand._id, "value")}${addAttribute(brandFilter === brand._id, "selected")}>${brand.name}</option>`)}</select></div><!-- Filter Tahun --><div style="flex: 1; min-width: 200px;"><label style="display: block; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;">Tahun</label><select name="year" style="width: 100%; padding: 0.75rem 1rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; border: 1px solid var(--border, #E5E5E5); background: white; cursor: pointer;"><option value="">Semua Tahun</option>${allYears.map((year) => renderTemplate`<option${addAttribute(year, "value")}${addAttribute(yearFilter === String(year), "selected")}>${year}</option>`)}</select></div><!-- Tombol Filter & Reset --><div style="display: flex; gap: 0.5rem;"><button type="submit" style="font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: var(--text, #111); border: none; padding: 0.75rem 1.5rem; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='var(--accent, #C84B8E)'" onmouseout="this.style.backgroundColor='var(--text, #111)'">Filter</button>${(brandFilter || yearFilter) && renderTemplate`<a href="/archive" style="font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); text-decoration: none; border: 1px solid var(--text, #111); padding: 0.75rem 1.5rem; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='var(--text, #111)'; this.style.color='#FAFAFA'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--text, #111)'">Reset</a>`}</div></form><!-- Active Filter Info -->${(brandFilter || yearFilter) && renderTemplate`<div style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-muted, #666);">Menampilkan hasil untuk:${brandFilter && renderTemplate`<strong style="color: var(--text, #111);">${allBrands.find((b) => b._id === brandFilter)?.name || "Unknown"}</strong>`}${brandFilter && yearFilter && renderTemplate`<span> · </span>`}${yearFilter && renderTemplate`<strong style="color: var(--text, #111);">${yearFilter}</strong>`}<span> (${bikes.length} sepeda)</span></div>`}</section><section style="padding: 4rem 0 6rem;">${bikes.length > 0 ? renderTemplate`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem 1.5rem; border-top: 1px solid var(--border, #E5E5E5); border-left: 1px solid var(--border, #E5E5E5);">${bikes.map((bike) => renderTemplate`<article style="border-right: 1px solid var(--border, #E5E5E5); border-bottom: 1px solid var(--border, #E5E5E5); display: flex; flex-direction: column; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#F8F8F8'" onmouseout="this.style.backgroundColor='transparent'"><div style="aspect-ratio: 4/3; background: #F0F0F0; overflow: hidden; position: relative;">${bike.mainImage ? renderTemplate`<img${addAttribute(urlFor(bike.mainImage).width(600).url(), "src")}${addAttribute(bike.title, "alt")} style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">` : renderTemplate`<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background: linear-gradient(135deg, #C84B8E 0%, #E8C547 100%);"><span style="font-size: 4rem; color: white;">🚲</span></div>`}<div style="position: absolute; inset: 0; background: rgba(0,0,0,0.03); opacity: 0; transition: opacity 0.3s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0'"></div></div><div style="padding: 1.5rem 2rem 2rem; flex: 1; display: flex; flex-direction: column; justify-content: space-between;"><div><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 0.5rem; display: block;">${formatBrandName(bike.brand)} · ${bike.year}</span><a${addAttribute(`/archive/${bike.slug.current}`, "href")} style="text-decoration: none; color: inherit; display: block;"><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 0.5rem; transition: color 0.2s;" onmouseover="this.style.color='var(--accent, #C84B8E)'" onmouseout="this.style.color='var(--text, #111)'">${bike.title}</h3></a><p style="font-size: 0.85rem; color: var(--text-muted, #666); line-height: 1.5; margin-bottom: 1rem;">${bike.groupset || bike.type}</p></div><div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;"><a${addAttribute(`/archive/${bike.slug.current}`, "href")} style="font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); text-decoration: none; border: 1px solid var(--text, #111); padding: 0.5rem 1rem; transition: all 0.2s;" onmouseover="this.style.backgroundColor='var(--text, #111)'; this.style.color='#FAFAFA'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--text, #111)'">Detail →</a><a${addAttribute(`/compare?bike1=${bike.slug.current}`, "href")} style="font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent, #C84B8E); text-decoration: none; border: 1px solid var(--accent, #C84B8E); padding: 0.5rem 1rem; transition: all 0.2s;" onmouseover="this.style.backgroundColor='var(--accent, #C84B8E)'; this.style.color='white'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--accent, #C84B8E)'">⚖️ Compare</a></div></div></article>`)}</div>` : renderTemplate`<div style="text-align: center; padding: 6rem 2rem; border: 1px solid var(--border, #E5E5E5); margin-top: 2rem;"><p style="font-family: 'Space Grotesk', sans-serif; font-size: 2rem; font-weight: 600; color: var(--text, #111); margin-bottom: 0.5rem;">Tidak Ada Hasil</p><p style="color: var(--text-muted, #666); font-size: 0.9rem; margin-bottom: 1.5rem;">Tidak ada sepeda yang cocok dengan filter yang dipilih.</p><a href="/archive" style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent, #C84B8E); text-decoration: none; border-bottom: 1px solid var(--accent, #C84B8E);">Reset Filter →</a></div>`}</section>` })}`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/archive.astro", void 0);
var $$file = "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/archive.astro";
var $$url = "/archive";
//#endregion
//#region \0virtual:astro:page:src/pages/archive@_@astro
var page = () => archive_exports;
//#endregion
export { page };
