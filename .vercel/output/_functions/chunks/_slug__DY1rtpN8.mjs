import { n as createComponent, r as __exportAll, t as createAstro } from "./compiler_BGjCl2tC.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BidWz0RG.mjs";
import { i as urlFor, n as client, r as getSiteSettings, t as $$Layout } from "./Layout_CirPCQFK.mjs";
//#region src/pages/marketplace/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://ajergianyar.web.id");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	const item = await client.fetch(`*[_type == "marketplace" && slug.current == $slug][0]{
  title, slug, category, brand, price, condition, year, description, status,
  sellerName, sellerPhone, sellerLocation,
  images,
  relatedBike->{title, slug, year, country, type, mainImage}
}`, { slug });
	if (!item) return Astro.redirect("/marketplace");
	const settings = await getSiteSettings();
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
	function formatCountry(c) {
		return {
			japan: "Jepang",
			europe: "Eropa",
			usa: "Amerika",
			other: "Lainnya"
		}[c] || c;
	}
	function formatType(t) {
		return {
			road: "Road Bike",
			track: "Track/Fixie",
			mtb: "MTB/ATB",
			city: "City/Commuter",
			touring: "Touring",
			bmx: "BMX"
		}[t] || t;
	}
	function formatCategory(cat) {
		if (!cat) return "";
		if (cat === "full-bike") return "Full Bike";
		return cat.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
	}
	const isAvailable = item.status === "available";
	const waLink = `https://wa.me/${item.sellerPhone?.replace(/[^0-9]/g, "") || ""}?text=${`Halo ${item.sellerName || "Penjual"}, saya tertarik dengan part ini di AJGR.cc Marketplace:%0A%0A📦 *${item.title}*%0A💰 ${formatRupiah(item.price)}%0A🔗 ${Astro.request.url}%0A%0AApakah masih tersedia? Terima kasih!`}`;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"settings": settings,
		"data-astro-cid-mzsb2krx": true
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<nav style="padding: 2rem 1rem; border-bottom: 1px solid var(--border, #E5E5E5); max-width: 100vw; overflow: hidden;" data-astro-cid-mzsb2krx><a href="/marketplace" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); text-decoration: none;" data-astro-cid-mzsb2krx>← Back to Marketplace</a></nav><section class="detail-grid" data-astro-cid-mzsb2krx><!-- LEFT: IMAGES --><div data-astro-cid-mzsb2krx><!-- Main Image --><div style="aspect-ratio: 4/3; background: #F0F0F0; overflow: hidden; margin-bottom: 1rem; border: 1px solid var(--border, #E5E5E5);" data-astro-cid-mzsb2krx>${item.images?.[0] ? renderTemplate`<img${addAttribute(urlFor(item.images[0]).width(1e3).url(), "src")}${addAttribute(item.title, "alt")} style="width: 100%; height: 100%; object-fit: cover;" data-astro-cid-mzsb2krx>` : renderTemplate`<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background: linear-gradient(135deg, #C84B8E 0%, #E8C547 100%);" data-astro-cid-mzsb2krx><span style="font-size: 5rem; color: white;" data-astro-cid-mzsb2krx>🔧</span></div>`}</div><!-- Gallery Thumbnails -->${item.images && item.images.length > 1 && renderTemplate`<div class="thumbnail-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;" data-astro-cid-mzsb2krx>${item.images.slice(1).map((img) => renderTemplate`<div style="aspect-ratio: 1/1; background: #F0F0F0; overflow: hidden; border: 1px solid var(--border, #E5E5E5);" data-astro-cid-mzsb2krx><img${addAttribute(urlFor(img).width(200).url(), "src")} alt="" style="width: 100%; height: 100%; object-fit: cover;" data-astro-cid-mzsb2krx></div>`)}</div>`}</div><!-- RIGHT: INFO & CTA --><div data-astro-cid-mzsb2krx><!-- Status Badge --><div style="display: inline-block; background: {getStatusColor(item.status)}; color: white; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; padding: 0.4rem 1rem; margin-bottom: 1.5rem; border-radius: 2px;" data-astro-cid-mzsb2krx>${formatStatus(item.status)}</div><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); display: block; margin-bottom: 0.5rem;" data-astro-cid-mzsb2krx>${formatCategory(item.category)} ${item.brand ? `· ${item.brand}` : ""}</span><h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; letter-spacing: -0.03em; margin-bottom: 1rem; line-height: 1.1; word-break: break-word;" data-astro-cid-mzsb2krx>${item.title}</h1><p class="price-text" style="font-size: 2.5rem; font-weight: 700; color: var(--text, #111); margin-bottom: 2rem;" data-astro-cid-mzsb2krx>${formatRupiah(item.price)}</p><!-- Spesifikasi Singkat --><div class="specs-grid" style="padding: 1.5rem; background: #FAFAFA; border: 1px solid var(--border, #E5E5E5); margin-bottom: 2rem;" data-astro-cid-mzsb2krx>${item.condition && renderTemplate`<div data-astro-cid-mzsb2krx><p style="font-size: 0.7rem; text-transform: uppercase; color: #999; margin-bottom: 0.25rem;" data-astro-cid-mzsb2krx>Kondisi</p><p style="font-weight: 500; font-size: 0.95rem; word-break: break-word;" data-astro-cid-mzsb2krx>${item.condition}</p></div>`}${item.year && renderTemplate`<div data-astro-cid-mzsb2krx><p style="font-size: 0.7rem; text-transform: uppercase; color: #999; margin-bottom: 0.25rem;" data-astro-cid-mzsb2krx>Tahun</p><p style="font-weight: 500; font-size: 0.95rem;" data-astro-cid-mzsb2krx>${item.year}</p></div>`}${item.sellerLocation && renderTemplate`<div style="grid-column: 1 / -1;" data-astro-cid-mzsb2krx><p style="font-size: 0.7rem; text-transform: uppercase; color: #999; margin-bottom: 0.25rem;" data-astro-cid-mzsb2krx>Lokasi</p><p style="font-weight: 500; font-size: 0.95rem; word-break: break-word;" data-astro-cid-mzsb2krx>📍 ${item.sellerLocation}</p></div>`}</div><!-- Deskripsi -->${item.description && renderTemplate`<div style="margin-bottom: 2rem;" data-astro-cid-mzsb2krx><h3 style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.75rem;" data-astro-cid-mzsb2krx>Deskripsi</h3><p style="font-size: 1rem; line-height: 1.7; color: var(--text, #111); white-space: pre-wrap; word-break: break-word;" data-astro-cid-mzsb2krx>${item.description}</p></div>`}<!-- Info Penjual --><div style="padding: 1.5rem; border: 1px solid var(--border, #E5E5E5); margin-bottom: 2rem;" data-astro-cid-mzsb2krx><h3 style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.75rem;" data-astro-cid-mzsb2krx>Penjual</h3><p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.25rem;" data-astro-cid-mzsb2krx>${item.sellerName || "Anonim"}</p><p style="font-size: 0.9rem; color: var(--text-muted, #666);" data-astro-cid-mzsb2krx>📱 ${item.sellerPhone ? `+${item.sellerPhone}` : "-"}</p></div><!-- CTA BUTTONS (WhatsApp + Share) --><div class="cta-container" style="margin-bottom: 1rem;" data-astro-cid-mzsb2krx>${isAvailable ? renderTemplate`<a${addAttribute(waLink, "href")} target="_blank" rel="noopener noreferrer" class="cta-btn wa-btn" data-astro-cid-mzsb2krx>💬 Hubungi Penjual</a>` : renderTemplate`<div class="cta-btn disabled-btn" data-astro-cid-mzsb2krx>${item.status === "sold" ? "🔴 Sudah Terjual" : "🟡 Di-Reserved"}</div>`}<button id="share-btn" class="cta-btn share-btn" data-astro-cid-mzsb2krx>🔗 Share Link</button></div><p style="text-align: center; font-size: 0.75rem; color: var(--text-muted, #666); margin-top: 1rem; line-height: 1.5;" data-astro-cid-mzsb2krx>Transaksi dilakukan langsung dengan penjual.<br data-astro-cid-mzsb2krx>AJGR.cc tidak memproses pembayaran.</p></div></section>${item.relatedBike && renderTemplate`<section style="padding: 4rem 1rem; border-top: 1px solid var(--border, #E5E5E5); max-width: 100vw; overflow: hidden;" data-astro-cid-mzsb2krx><div style="margin-bottom: 2rem; max-width: 1200px; margin-left: auto; margin-right: auto;" data-astro-cid-mzsb2krx><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); display: block; margin-bottom: 0.5rem;" data-astro-cid-mzsb2krx>COCOK UNTUK</span><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.75rem; font-weight: 600; letter-spacing: -0.02em; color: var(--text, #111);" data-astro-cid-mzsb2krx>Sepeda Terkait di Katalog</h2><p style="font-size: 0.95rem; color: var(--text-muted, #666); margin-top: 0.5rem;" data-astro-cid-mzsb2krx>Part ini cocok atau kompatibel dengan sepeda berikut yang ada di katalog AJGR.cc</p></div><a${addAttribute(`/archive/${item.relatedBike.slug.current}`, "href")} class="related-card" style="display: grid; max-width: 1200px; margin: 0 auto; text-decoration: none; color: inherit; transition: all 0.3s ease; background: #FAFAFA; border: 1px solid var(--border, #E5E5E5); border-radius: 4px;" onmouseover="this.style.backgroundColor='#F0F0F0'; this.style.borderColor='var(--accent, #C84B8E)'" onmouseout="this.style.backgroundColor='#FAFAFA'; this.style.borderColor='var(--border, #E5E5E5)'" data-astro-cid-mzsb2krx><div class="related-grid" data-astro-cid-mzsb2krx><!-- Foto Sepeda --><div style="aspect-ratio: 4/3; background: #F0F0F0; overflow: hidden; border-radius: 4px;" data-astro-cid-mzsb2krx>${item.relatedBike.mainImage ? renderTemplate`<img${addAttribute(urlFor(item.relatedBike.mainImage).width(600).url(), "src")}${addAttribute(item.relatedBike.title, "alt")} style="width: 100%; height: 100%; object-fit: cover;" data-astro-cid-mzsb2krx>` : renderTemplate`<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background: linear-gradient(135deg, #C84B8E 0%, #E8C547 100%);" data-astro-cid-mzsb2krx><span style="font-size: 3rem; color: white;" data-astro-cid-mzsb2krx>🚲</span></div>`}</div><!-- Info Sepeda --><div style="display: flex; flex-direction: column; justify-content: center;" data-astro-cid-mzsb2krx><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 0.5rem;" data-astro-cid-mzsb2krx>${item.relatedBike.year} · ${formatCountry(item.relatedBike.country)} · ${formatType(item.relatedBike.type)}</span><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 1rem; color: var(--text, #111); word-break: break-word;" data-astro-cid-mzsb2krx>${item.relatedBike.title}</h3><p style="font-size: 0.9rem; color: var(--text-muted, #666); margin-bottom: 1.5rem; line-height: 1.6;" data-astro-cid-mzsb2krx>Lihat spesifikasi lengkap, cerita, dan foto sepeda ini di katalog AJGR.cc</p><span style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent, #C84B8E); display: inline-flex; align-items: center; gap: 0.5rem; width: fit-content;" data-astro-cid-mzsb2krx>Lihat di Katalog →</span></div></div></a></section>`}<script>
    document.addEventListener('DOMContentLoaded', function() {
      const shareBtn = document.getElementById('share-btn');
      
      if (shareBtn) {
        shareBtn.addEventListener('click', async function() {
          const urlToCopy = window.location.href;
          
          try {
            await navigator.clipboard.writeText(urlToCopy);
            
            // Simpan teks asli
            const originalText = this.innerHTML;
            
            // Ubah tampilan menjadi "Copied"
            this.innerHTML = '✅ Copied!';
            this.classList.add('copied');
            
            // Kembalikan ke tampilan semula setelah 2 detik
            setTimeout(() => {
              this.innerHTML = originalText;
              this.classList.remove('copied');
            }, 2000);
            
          } catch (err) {
            console.error('Gagal menyalin link:', err);
            // Fallback untuk browser lama
            const textArea = document.createElement('textarea');
            textArea.value = urlToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            this.innerHTML = '✅ Copied!';
            this.classList.add('copied');
            setTimeout(() => {
              this.innerHTML = '🔗 Share Link';
              this.classList.remove('copied');
            }, 2000);
          }
        });
      }
    });
  <\/script>` })}`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/marketplace/[slug].astro", void 0);
var $$file = "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/marketplace/[slug].astro";
var $$url = "/marketplace/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/marketplace/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
