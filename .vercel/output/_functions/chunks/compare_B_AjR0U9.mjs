import { n as createComponent, r as __exportAll, t as createAstro } from "./compiler_BGjCl2tC.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BidWz0RG.mjs";
import { i as urlFor, n as client, r as getSiteSettings, t as $$Layout } from "./Layout_CirPCQFK.mjs";
//#region src/pages/compare.astro
var compare_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Compare,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://ajergianyar.web.id");
var $$Compare = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Compare;
	const settings = await getSiteSettings();
	const allBikes = await client.fetch(`*[_type == "bike"] | order(title asc){
  title, slug, year, country, type, mainImage
}`);
	const url = new URL(Astro.request.url);
	const bike1Slug = url.searchParams.get("bike1");
	const bike2Slug = url.searchParams.get("bike2");
	const bike1 = bike1Slug ? await client.fetch(`*[_type == "bike" && slug.current == $slug][0]{
  title, slug, year, country, type, frameMaterial, frameSize, weight,
  groupset, barSet, stem, wheelset, spokes, tireSize,
  crankset, cassette, chain, brakes, brakeLevers, shifters,
  derailleurFront, derailleurRear, saddle, seatpost, pedals, hubs,
  gearCount, condition, mainImage,
  brand->{name}
}`, { slug: bike1Slug }) : null;
	const bike2 = bike2Slug ? await client.fetch(`*[_type == "bike" && slug.current == $slug][0]{
  title, slug, year, country, type, frameMaterial, frameSize, weight,
  groupset, barSet, stem, wheelset, spokes, tireSize,
  crankset, cassette, chain, brakes, brakeLevers, shifters,
  derailleurFront, derailleurRear, saddle, seatpost, pedals, hubs,
  gearCount, condition, mainImage,
  brand->{name}
}`, { slug: bike2Slug }) : null;
	function formatCountry(c) {
		return {
			japan: "Jepang",
			europe: "Eropa",
			usa: "Amerika",
			other: "Lainnya"
		}[c] || c || "-";
	}
	function formatType(t) {
		return {
			road: "Road Bike",
			track: "Track/Fixie",
			mtb: "MTB/ATB",
			city: "City/Commuter",
			touring: "Touring",
			bmx: "BMX"
		}[t] || t || "-";
	}
	function formatCondition(c) {
		return {
			original: "Original/Stock",
			restored: "Restored",
			modified: "Modified/Custom",
			project: "Project"
		}[c] || c || "-";
	}
	const compareFields = [
		{
			label: "Brand",
			key: "brand",
			format: (v) => v?.name || "-"
		},
		{
			label: "Tahun",
			key: "year",
			format: (v) => v || "-"
		},
		{
			label: "Negara Asal",
			key: "country",
			format: formatCountry
		},
		{
			label: "Tipe",
			key: "type",
			format: formatType
		},
		{
			label: "Kondisi",
			key: "condition",
			format: formatCondition
		},
		{
			label: "Material Frame",
			key: "frameMaterial"
		},
		{
			label: "Ukuran Frame",
			key: "frameSize"
		},
		{
			label: "Berat",
			key: "weight",
			format: (v) => v ? v + " kg" : "-"
		},
		{
			label: "Groupset",
			key: "groupset"
		},
		{
			label: "Crankset",
			key: "crankset"
		},
		{
			label: "Cassette / Freewheel",
			key: "cassette"
		},
		{
			label: "Rantai",
			key: "chain"
		},
		{
			label: "Jumlah Gear",
			key: "gearCount"
		},
		{
			label: "Front Derailleur",
			key: "derailleurFront"
		},
		{
			label: "Rear Derailleur",
			key: "derailleurRear"
		},
		{
			label: "Shifter",
			key: "shifters"
		},
		{
			label: "Bar Set / Stang",
			key: "barSet"
		},
		{
			label: "Stem",
			key: "stem"
		},
		{
			label: "Saddle",
			key: "saddle"
		},
		{
			label: "Seatpost",
			key: "seatpost"
		},
		{
			label: "Wheelset",
			key: "wheelset"
		},
		{
			label: "Hub",
			key: "hubs"
		},
		{
			label: "Jari-jari",
			key: "spokes"
		},
		{
			label: "Ukuran Ban",
			key: "tireSize"
		},
		{
			label: "Rem",
			key: "brakes"
		},
		{
			label: "Tuas Rem",
			key: "brakeLevers"
		},
		{
			label: "Pedal",
			key: "pedals"
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"settings": settings,
		"data-astro-cid-dfksvk6v": true
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<section style="padding: 6rem 0 4rem; border-bottom: 1px solid var(--border, #E5E5E5);" data-astro-cid-dfksvk6v><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 1rem; display: block;" data-astro-cid-dfksvk6v>⚖️ COMPARE TOOL</span><h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 600; letter-spacing: -0.03em; margin-top: 1rem; color: var(--text, #111111);" data-astro-cid-dfksvk6v>Bandingkan Sepeda</h1><p style="margin-top: 1.5rem; font-size: 1.125rem; color: var(--text-muted, #666666); max-width: 600px; line-height: 1.6;" data-astro-cid-dfksvk6v>Pilih dua sepeda dari archive untuk melihat perbandingan spesifikasi secara berdampingan.</p></section><section style="padding: 3rem 0; border-bottom: 1px solid var(--border, #E5E5E5);" data-astro-cid-dfksvk6v><form method="GET" action="/compare" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;" data-astro-cid-dfksvk6v><div data-astro-cid-dfksvk6v><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.75rem;" data-astro-cid-dfksvk6v>Sepeda #1</label><select name="bike1" required style="width: 100%; padding: 1rem; font-family: 'Space Grotesk', sans-serif; font-size: 1rem; border: 1px solid var(--border, #E5E5E5); background: white; cursor: pointer;" data-astro-cid-dfksvk6v><option value="" data-astro-cid-dfksvk6v>— Pilih Sepeda —</option>${allBikes.map((b) => renderTemplate`<option${addAttribute(b.slug.current, "value")}${addAttribute(bike1Slug === b.slug.current, "selected")} data-astro-cid-dfksvk6v>${b.title} (${b.year})</option>`)}</select></div><div data-astro-cid-dfksvk6v><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.75rem;" data-astro-cid-dfksvk6v>Sepeda #2</label><select name="bike2" required style="width: 100%; padding: 1rem; font-family: 'Space Grotesk', sans-serif; font-size: 1rem; border: 1px solid var(--border, #E5E5E5); background: white; cursor: pointer;" data-astro-cid-dfksvk6v><option value="" data-astro-cid-dfksvk6v>— Pilih Sepeda —</option>${allBikes.map((b) => renderTemplate`<option${addAttribute(b.slug.current, "value")}${addAttribute(bike2Slug === b.slug.current, "selected")} data-astro-cid-dfksvk6v>${b.title} (${b.year})</option>`)}</select></div><div style="grid-column: 1 / -1; display: flex; justify-content: center;" data-astro-cid-dfksvk6v><button type="submit" style="font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: var(--text, #111); border: none; padding: 1rem 2.5rem; cursor: pointer; transition: all 0.2s ease;" data-astro-cid-dfksvk6v>Bandingkan →</button></div></form></section>${bike1 && bike2 ? renderTemplate`<section style="padding: 4rem 0 6rem;" data-astro-cid-dfksvk6v><!-- Header dengan foto --><div class="bike-header-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem;" data-astro-cid-dfksvk6v><div style="text-align: center;" data-astro-cid-dfksvk6v>${bike1.mainImage && renderTemplate`<div style="aspect-ratio: 4/3; background: #F0F0F0; overflow: hidden; margin-bottom: 1rem;" data-astro-cid-dfksvk6v><img${addAttribute(urlFor(bike1.mainImage).width(600).url(), "src")}${addAttribute(bike1.title, "alt")} style="width: 100%; height: 100%; object-fit: cover;" data-astro-cid-dfksvk6v></div>`}<h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; color: var(--text, #111); margin-bottom: 0.5rem;" data-astro-cid-dfksvk6v>${bike1.title}</h2><p style="font-size: 0.85rem; color: var(--text-muted, #666);" data-astro-cid-dfksvk6v>${bike1.brand?.name || "-"} · ${bike1.year} · ${formatCountry(bike1.country)}</p><a${addAttribute("/archive/" + bike1.slug.current, "href")} style="font-size: 0.75rem; color: var(--accent, #C84B8E); text-decoration: none; margin-top: 0.5rem; display: inline-block;" data-astro-cid-dfksvk6v>Lihat Detail →</a></div><div style="text-align: center;" data-astro-cid-dfksvk6v>${bike2.mainImage && renderTemplate`<div style="aspect-ratio: 4/3; background: #F0F0F0; overflow: hidden; margin-bottom: 1rem;" data-astro-cid-dfksvk6v><img${addAttribute(urlFor(bike2.mainImage).width(600).url(), "src")}${addAttribute(bike2.title, "alt")} style="width: 100%; height: 100%; object-fit: cover;" data-astro-cid-dfksvk6v></div>`}<h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; color: var(--text, #111); margin-bottom: 0.5rem;" data-astro-cid-dfksvk6v>${bike2.title}</h2><p style="font-size: 0.85rem; color: var(--text-muted, #666);" data-astro-cid-dfksvk6v>${bike2.brand?.name || "-"} · ${bike2.year} · ${formatCountry(bike2.country)}</p><a${addAttribute("/archive/" + bike2.slug.current, "href")} style="font-size: 0.75rem; color: var(--accent, #C84B8E); text-decoration: none; margin-top: 0.5rem; display: inline-block;" data-astro-cid-dfksvk6v>Lihat Detail →</a></div></div><!-- Tabel Perbandingan --><div class="comparison-table" data-astro-cid-dfksvk6v>${compareFields.map((field) => {
		const val1 = bike1[field.key];
		const val2 = bike2[field.key];
		const formatted1 = field.format ? field.format(val1) : val1 || "-";
		const formatted2 = field.format ? field.format(val2) : val2 || "-";
		const isDifferent = String(val1) !== String(val2);
		const brand1 = bike1.brand?.name || "";
		const brand2 = bike2.brand?.name || "";
		const isBrandField = field.key === "brand";
		return renderTemplate`<div${addAttribute("comparison-row" + (isDifferent ? " is-different" : ""), "class")} data-astro-cid-dfksvk6v><div class="cell-label" data-astro-cid-dfksvk6v>${field.label}${isDifferent && renderTemplate`<span style="margin-left: 0.5rem; font-size: 0.7rem;" data-astro-cid-dfksvk6v></span>`}</div><div${addAttribute("cell-value bike1" + (isBrandField ? " no-brand" : ""), "class")}${addAttribute(isBrandField ? "" : brand1 ? " (" + brand1 + ")" : "", "data-brand")} data-astro-cid-dfksvk6v>${formatted1}</div><div${addAttribute("cell-value" + (isBrandField ? " no-brand" : ""), "class")}${addAttribute(isBrandField ? "" : brand2 ? " (" + brand2 + ")" : "", "data-brand")} data-astro-cid-dfksvk6v>${formatted2}</div></div>`;
	})}</div><p style="text-align: center; margin-top: 2rem; font-size: 0.8rem; color: var(--text-muted, #666);" data-astro-cid-dfksvk6v><span style="color: var(--accent, #C84B8E);" data-astro-cid-dfksvk6v>⚡</span> Menandakan perbedaan spesifikasi antara kedua sepeda</p><!-- SHARE SECTION --><div style="margin-top: 4rem; padding: 2.5rem; border: 1px solid var(--border, #E5E5E5); background: #FAFAFA;" data-astro-cid-dfksvk6v><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 0.5rem; color: var(--text, #111);" data-astro-cid-dfksvk6v>Bagikan Perbandingan Ini</h3><p style="font-size: 0.9rem; color: var(--text-muted, #666); margin-bottom: 1.5rem;" data-astro-cid-dfksvk6v>Kirim link perbandingan <strong data-astro-cid-dfksvk6v>${bike1.title}</strong> vs <strong data-astro-cid-dfksvk6v>${bike2.title}</strong> ke teman-teman komunitas.</p><!-- Link Preview --><div style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: white; border: 1px solid var(--border, #E5E5E5); margin-bottom: 1.5rem; overflow: hidden;" data-astro-cid-dfksvk6v><span style="font-size: 0.85rem; color: var(--text-muted, #666); font-family: monospace; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1;" data-astro-cid-dfksvk6v>${Astro.request.url}</span><button id="copy-link-btn"${addAttribute(Astro.request.url, "data-url")} style="font-family: 'Space Grotesk', sans-serif; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: var(--text, #111); border: none; padding: 0.6rem 1rem; cursor: pointer; transition: all 0.2s ease; white-space: nowrap; flex-shrink: 0;" onmouseover="this.style.backgroundColor='var(--accent, #C84B8E)'" onmouseout="this.style.backgroundColor='var(--text, #111)'" data-astro-cid-dfksvk6v>Copy Link</button></div><!-- Share Buttons --><div class="share-buttons" style="display: flex; gap: 0.75rem; flex-wrap: wrap;" data-astro-cid-dfksvk6v><a id="share-whatsapp"${addAttribute("https://wa.me/?text=" + encodeURIComponent("Halo! Cek perbandingan sepeda " + bike1.title + " vs " + bike2.title + " di AJGR.cc:\n\n" + Astro.request.url), "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: #25D366; text-decoration: none; padding: 0.75rem 1.25rem; transition: all 0.2s ease;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'" data-astro-cid-dfksvk6v>💬 Share WhatsApp</a><a id="share-twitter"${addAttribute("https://twitter.com/intent/tweet?text=" + encodeURIComponent("Perbandingan " + bike1.title + " vs " + bike2.title + " di @AJGRcc") + "&url=" + encodeURIComponent(Astro.request.url), "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: #1DA1F2; text-decoration: none; padding: 0.75rem 1.25rem; transition: all 0.2s ease;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'" data-astro-cid-dfksvk6v>Share Twitter</a><a id="share-facebook"${addAttribute("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(Astro.request.url), "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: #1877F2; text-decoration: none; padding: 0.75rem 1.25rem; transition: all 0.2s ease;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'" data-astro-cid-dfksvk6v>f Share Facebook</a></div><!-- Success Message --><div id="copy-success" style="display: none; margin-top: 1rem; padding: 0.75rem 1rem; background: rgba(34, 197, 94, 0.1); border-left: 3px solid #22C55E; color: #166534; font-size: 0.85rem; font-weight: 500;" data-astro-cid-dfksvk6v>✅ Link berhasil disalin ke clipboard!</div></div></section>` : bike1 || bike2 ? renderTemplate`<section style="padding: 6rem 0; text-align: center;" data-astro-cid-dfksvk6v><p style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; color: var(--text, #111); margin-bottom: 1rem;" data-astro-cid-dfksvk6v>Pilih 2 sepeda untuk memulai perbandingan</p><p style="color: var(--text-muted, #666);" data-astro-cid-dfksvk6v>Gunakan dropdown di atas untuk memilih sepeda yang ingin dibandingkan.</p></section>` : renderTemplate`<section style="padding: 6rem 0; text-align: center;" data-astro-cid-dfksvk6v><p style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; color: var(--text, #111); margin-bottom: 1rem;" data-astro-cid-dfksvk6v>Belum ada sepeda yang dipilih</p><p style="color: var(--text-muted, #666);" data-astro-cid-dfksvk6v>Pilih dua sepeda dari dropdown di atas untuk melihat perbandingan spesifikasi.</p></section>`}<script>
    document.addEventListener('DOMContentLoaded', function() {
      
      // ==========================================
      // 1. LOGIKA LOCALSTORAGE (ONE-TIME USE)
      // ==========================================
      const storedBikes = localStorage.getItem('ajgr_compare');
      
      if (storedBikes) {
        const bikes = JSON.parse(storedBikes);
        const urlParams = new URLSearchParams(window.location.search);
        
        // Hanya redirect jika URL belum punya parameter
        if (!urlParams.has('bike1') && !urlParams.has('bike2') && bikes.length > 0) {
          const newUrl = new URL(window.location.href);
          
          if (bikes[0]) newUrl.searchParams.set('bike1', bikes[0].slug);
          if (bikes[1]) newUrl.searchParams.set('bike2', bikes[1].slug);
          
          // PENTING: HAPUS localStorage SEBELUM redirect
          // Agar setelah refresh, sepeda #1 tidak terisi lagi
          localStorage.removeItem('ajgr_compare');
          
          window.location.href = newUrl.toString();
          return;
        } else {
          // Jika URL sudah punya parameter (user sudah di halaman compare),
          // hapus localStorage agar tidak persisten setelah refresh
          localStorage.removeItem('ajgr_compare');
        }
      }

      // ==========================================
      // 2. LOGIKA COPY LINK
      // ==========================================
      const copyBtn = document.getElementById('copy-link-btn');
      const successMsg = document.getElementById('copy-success');
      
      if (copyBtn) {
        copyBtn.addEventListener('click', async function() {
          const urlToCopy = this.getAttribute('data-url');
          
          try {
            await navigator.clipboard.writeText(urlToCopy);
            
            if (successMsg) {
              successMsg.style.display = 'block';
              const originalText = this.innerHTML;
              this.innerHTML = '✅ Tersalin!';
              this.style.backgroundColor = '#22C55E';
              
              setTimeout(function() {
                successMsg.style.display = 'none';
                this.innerHTML = originalText;
                this.style.backgroundColor = '';
              }.bind(this), 2000);
            }
          } catch (err) {
            console.error('Gagal menyalin link:', err);
            const textArea = document.createElement('textarea');
            textArea.value = urlToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            if (successMsg) {
              successMsg.style.display = 'block';
              setTimeout(function() {
                successMsg.style.display = 'none';
              }, 2000);
            }
          }
        });
      }
    });
  <\/script>` })}`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/compare.astro", void 0);
var $$file = "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/compare.astro";
var $$url = "/compare";
//#endregion
//#region \0virtual:astro:page:src/pages/compare@_@astro
var page = () => compare_exports;
//#endregion
export { page };
