import { n as createComponent, r as __exportAll, t as createAstro } from "./compiler_QtOIEW3x.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_B_rsFkcn.mjs";
import { i as urlFor, n as client, r as getSiteSettings, t as $$Layout } from "./Layout_CmUN2yKh.mjs";
//#region src/pages/archive/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	const bike = await client.fetch(`*[_type == "bike" && slug.current == $slug][0]{
  title, slug, year, country, type, frameMaterial, frameSize, weight,
  groupset, barSet, stem, wheelset, spokes, tireSize,
  crankset, cassette, chain, brakes, brakeLevers, shifters,
  derailleurFront, derailleurRear, saddle, seatpost, pedals, hubs,
  gearCount, condition, notes,
  mainImage, gallery, story, isFeatured, brand->{name}
}`, { slug });
	if (!bike) return Astro.redirect("/archive");
	const settings = await getSiteSettings();
	function formatCountry(country) {
		return {
			japan: "Jepang",
			europe: "Eropa",
			usa: "Amerika",
			other: "Lainnya"
		}[country] || country;
	}
	function formatType(type) {
		return {
			road: "Road Bike",
			track: "Track/Fixie",
			mtb: "MTB/ATB",
			city: "City/Commuter",
			touring: "Touring",
			bmx: "BMX"
		}[type] || type;
	}
	function formatCondition(condition) {
		return {
			original: "Original/Stock",
			restored: "Restored",
			modified: "Modified/Custom",
			project: "Project"
		}[condition] || condition;
	}
	const activeSections = [
		{
			title: "Informasi Dasar",
			rows: [
				["Brand", bike.brand?.name || "-"],
				["Tahun", bike.year],
				["Negara Asal", formatCountry(bike.country)],
				["Tipe", formatType(bike.type)],
				["Kondisi", formatCondition(bike.condition)]
			]
		},
		{
			title: "Frame & Geometry",
			rows: [
				["Material Frame", bike.frameMaterial],
				["Ukuran Frame", bike.frameSize],
				["Berat", bike.weight ? bike.weight + " kg" : null]
			]
		},
		{
			title: "Drivetrain",
			rows: [
				["Groupset", bike.groupset],
				["Crankset", bike.crankset],
				["Cassette / Freewheel", bike.cassette],
				["Rantai", bike.chain],
				["Jumlah Gear", bike.gearCount],
				["Front Derailleur", bike.derailleurFront],
				["Rear Derailleur", bike.derailleurRear],
				["Shifter", bike.shifters]
			]
		},
		{
			title: "Cockpit",
			rows: [
				["Bar Set / Stang", bike.barSet],
				["Stem", bike.stem],
				["Saddle", bike.saddle],
				["Seatpost", bike.seatpost]
			]
		},
		{
			title: "Wheelset & Rolling Stock",
			rows: [
				["Wheelset", bike.wheelset],
				["Hub", bike.hubs],
				["Jari-jari", bike.spokes],
				["Ukuran Ban", bike.tireSize]
			]
		},
		{
			title: "Braking System",
			rows: [["Rem", bike.brakes], ["Tuas Rem", bike.brakeLevers]]
		},
		{
			title: "Components Lainnya",
			rows: [["Pedal", bike.pedals]]
		}
	].map((s) => ({
		...s,
		rows: s.rows.filter((r) => r[1])
	})).filter((s) => s.rows.length > 0);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "settings": settings }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<nav style="padding: 2rem 0; border-bottom: 1px solid var(--border, #E5E5E5);"><a href="/archive" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); text-decoration: none;">← Back to Archive</a></nav><section style="padding: 4rem 0 3rem;"><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 1rem; display: block;">${bike.brand?.name || "Unknown Brand"} · ${bike.year} · ${formatCountry(bike.country)} · ${formatType(bike.type)}</span><h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 600; letter-spacing: -0.03em; margin: 1rem 0 1.5rem; color: var(--text, #111); line-height: 1.05; overflow-wrap: break-word;">${bike.title}</h1><div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;"><button id="compare-btn"${addAttribute(bike.slug.current, "data-slug")}${addAttribute(bike.title, "data-title")} type="button" style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: var(--text, #111); border: none; cursor: pointer; padding: 0.9rem 1.5rem; transition: all 0.2s ease; font-family: inherit;" onmouseover="this.style.backgroundColor='var(--accent, #C84B8E)'" onmouseout="this.style.backgroundColor='var(--text, #111)'">⚖️ Bandingkan Sepeda Ini</button><a href="/archive" style="font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); text-decoration: none; border: 1px solid var(--text, #111); padding: 0.9rem 1.5rem; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='var(--text, #111)'; this.style.color='#FAFAFA'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--text, #111)'">Lihat Archive</a></div></section><section style="padding: 3rem 0 6rem;">${bike.mainImage && renderTemplate`<div style="aspect-ratio: 16/9; background: #F0F0F0; overflow: hidden; margin-bottom: 4rem;"><img${addAttribute(urlFor(bike.mainImage).width(1400).url(), "src")}${addAttribute(bike.title, "alt")} style="width: 100%; height: 100%; object-fit: cover;"></div>`}${bike.story && renderTemplate`<div style="max-width: 720px; margin-bottom: 4rem;"><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 1.5rem; color: var(--text, #111);">Cerita & Sejarah</h2><p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-muted, #666); white-space: pre-wrap; overflow-wrap: break-word;">${bike.story}</p></div>`}<div style="border-top: 1px solid var(--border, #E5E5E5); padding-top: 3rem;"><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 2rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 2rem; color: var(--text, #111);">Spesifikasi Teknis</h2>${activeSections.map((section) => renderTemplate`<div style="margin-bottom: 3rem;"><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--border, #E5E5E5);">${section.title}</h3><dl style="margin: 0;">${section.rows.map((row) => renderTemplate`<div style="display: grid; grid-template-columns: 1fr 2fr; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid var(--border, #E5E5E5);"><dt style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666);">${row[0]}</dt><dd style="font-size: 0.95rem; color: var(--text, #111); font-weight: 500; margin: 0; overflow-wrap: break-word;">${row[1]}</dd></div>`)}</dl></div>`)}</div>${bike.notes && renderTemplate`<div style="margin-top: 3rem; padding: 2rem; background: #FAFAFA; border-left: 3px solid var(--accent, #C84B8E);"><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 1rem;">Catatan</h3><p style="font-size: 1rem; line-height: 1.7; color: var(--text, #111); white-space: pre-wrap;">${bike.notes}</p></div>`}${bike.gallery && bike.gallery.length > 0 && renderTemplate`<div style="margin-top: 4rem;"><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 1.5rem; color: var(--text, #111);">Galeri Foto</h2><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">${bike.gallery.map((img) => renderTemplate`<div style="aspect-ratio: 4/3; background: #F0F0F0; overflow: hidden;"><img${addAttribute(urlFor(img).width(600).url(), "src")}${addAttribute(bike.title, "alt")} style="width: 100%; height: 100%; object-fit: cover;"></div>`)}</div></div>`}</section><script>
    document.addEventListener('DOMContentLoaded', function() {
      const compareBtn = document.getElementById('compare-btn');
      
      if (compareBtn) {
        compareBtn.addEventListener('click', function() {
          const slug = this.getAttribute('data-slug');
          const title = this.getAttribute('data-title');
          
          // SELALU reset localStorage dengan sepeda ini sebagai #1
          // Mulai compare baru, bukan tambahkan ke yang lama
          const compareList = [{ slug: slug, title: title }];
          localStorage.setItem('ajgr_compare', JSON.stringify(compareList));
          
          // Redirect ke halaman compare
          window.location.href = '/compare';
        });
      }
    });
  <\/script>` })}`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/archive/[slug].astro", void 0);
var $$file = "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/archive/[slug].astro";
var $$url = "/archive/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/archive/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
