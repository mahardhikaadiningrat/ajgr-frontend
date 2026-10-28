import { n as createComponent, r as __exportAll } from "./compiler_BGjCl2tC.mjs";
import { a as Fragment, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BidWz0RG.mjs";
import { i as urlFor, n as client, r as getSiteSettings, t as $$Layout } from "./Layout_CirPCQFK.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const settings = await getSiteSettings();
	const hpSections = settings?.homepageSections || {};
	const journalCount = hpSections.journalCount || 4;
	const archiveCount = hpSections.archiveCount || 4;
	const rolodexCount = hpSections.rolodexCount || 4;
	const marketplaceCount = hpSections.marketplaceCount || 4;
	const eventsCount = hpSections.eventsCount || 4;
	const showJournal = hpSections.showJournal !== false;
	const showArchive = hpSections.showArchive !== false;
	const showRolodex = hpSections.showRolodex !== false;
	const showMarketplace = hpSections.showMarketplace !== false;
	const showEvents = hpSections.showEvents !== false;
	const showFitting = hpSections.showFitting !== false;
	const journalTitle = hpSections.journalTitle || "Latest from Journal";
	const archiveTitle = hpSections.archiveTitle || "Latest from Archive";
	const rolodexTitle = hpSections.rolodexTitle || "Recommended Rolodex";
	const marketplaceTitle = hpSections.marketplaceTitle || "Featured Parts";
	const marketplaceLabel = hpSections.marketplaceLabel || "06 — MARKETPLACE";
	const eventsTitle = hpSections.eventsTitle || "Upcoming Events";
	const eventsLabel = hpSections.eventsLabel || "05 — CALENDAR";
	const fittingTitle = hpSections.fittingTitle || "Bike Fitting Calculator";
	const fittingLabel = hpSections.fittingLabel || "FITTING";
	const recentPosts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...${journalCount}]{
  title, slug, category, publishedAt, mainImage, body
}`);
	const recentBikes = await client.fetch(`*[_type == "bike" && isFeatured == true] | order(_createdAt desc)[0...${archiveCount}]{
  title, year, country, type, mainImage, slug
}`);
	const recentSellers = await client.fetch(`*[_type == "seller" && isFeatured == true] | order(_createdAt desc)[0...${rolodexCount}]{
  name, category, address, whatsapp, logo
}`);
	const featuredEvents = await client.fetch(`*[_type == "event" && isFeatured == true] | order(startDate asc)[0...${eventsCount}]{
  title, slug, startDate, category, location, status, poster
}`);
	const featuredMarketplace = await client.fetch(`*[_type == "marketplace" && isFeatured == true] | order(_createdAt desc)[0...${marketplaceCount}]{
  title, slug, category, brand, price, status, sellerLocation, images
}`);
	let featuredMerchandise = null;
	try {
		featuredMerchandise = await client.fetch(`*[_type == "merchandise" && isFeatured == true && status == "available"][0]{
    title, slug, price, description, images, availableSizes, paymentMethods
  }`);
	} catch (error) {
		console.warn("⚠️ Query merchandise dilewati:", error.message);
	}
	const sheetUrl = settings?.merchandiseOrderSheetUrl || "https://script.google.com/macros/s/AKfycbysWxhVR34ix94LXQozFSvk6ufgbAQuyk_LVEuzHXaZufhSgFTaOI8Ax3w9JF9r3jQK/exec";
	const waNumber = settings?.collaborationWhatsApp || "6289613154154";
	function formatCategory(cat) {
		if (!cat) return "";
		if (cat === "full-bike") return "Full Bike";
		return cat.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"settings": settings,
		"data-astro-cid-lcdefpme": true
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<section style="padding: 6rem 0 4rem; border-bottom: 1px solid var(--border, #E5E5E5);" data-astro-cid-lcdefpme><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 1rem; display: block;" data-astro-cid-lcdefpme>${settings?.heroSection?.subtitle || "— KOMUNITAS SEPEDA GIANYAR"}</span><h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 600; line-height: 1.1; letter-spacing: -0.03em; margin: 1rem 0 2rem;" data-astro-cid-lcdefpme>${settings?.heroSection?.titleLine1 || "Bersepeda,"}<br data-astro-cid-lcdefpme><span style="font-style: italic; font-weight: 400; color: var(--accent, #C84B8E);" data-astro-cid-lcdefpme>${settings?.heroSection?.titleLine2 || "bercerita,"}</span><br data-astro-cid-lcdefpme>${settings?.heroSection?.titleLine3 || "bersama."}</h1><p style="font-size: 1.125rem; color: var(--text-muted, #666666); line-height: 1.6; max-width: 500px;" data-astro-cid-lcdefpme>${settings?.heroSection?.description || "AJGR.cc adalah ruang digital untuk komunitas sepeda vintage dan klasik di Gianyar, Bali."}</p></section>${featuredMerchandise && renderTemplate`<section class="mobile-no-padding" style="padding: 6rem 0; border-top: 1px solid var(--border, #E5E5E5); background: linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%);" data-astro-cid-lcdefpme><div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;" data-astro-cid-lcdefpme><div style="text-align: center; margin-bottom: 3rem;" data-astro-cid-lcdefpme><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); display: block; margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>MERCHANDISE AJGR.CC</span><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 600; letter-spacing: -0.02em; color: var(--text, #111); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Pre-Order Merchandise AJGR</h2><p style="font-size: 1rem; color: var(--text-muted, #666); max-width: 600px; margin: 0 auto;" data-astro-cid-lcdefpme>Dapatkan merchandise eksklusif AJGR.cc. Isi form di bawah untuk melakukan pre-order.</p></div><div class="merch-grid-mobile" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;" data-astro-cid-lcdefpme><!-- Left: Product Image & Info --><div data-astro-cid-lcdefpme><!-- SLIDER GAMBAR -->${featuredMerchandise.images?.length > 0 && renderTemplate`<div class="merch-slider-container" data-astro-cid-lcdefpme>${featuredMerchandise.images.map((img, index) => renderTemplate`<img${addAttribute(urlFor(img).width(800).url(), "src")}${addAttribute(`${featuredMerchandise.title} - ${index + 1}`, "alt")}${addAttribute(`merch-slide ${index === 0 ? "active" : ""}`, "class")} data-astro-cid-lcdefpme>`)}${featuredMerchandise.images.length > 1 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<button class="merch-slider-btn prev" onclick="changeMerchSlide(-1)" data-astro-cid-lcdefpme>←</button><button class="merch-slider-btn next" onclick="changeMerchSlide(1)" data-astro-cid-lcdefpme>→</button><div class="merch-dots" data-astro-cid-lcdefpme>${featuredMerchandise.images.map((_, index) => renderTemplate`<span${addAttribute(`merch-dot ${index === 0 ? "active" : ""}`, "class")} onclick="goToMerchSlide(\${index})" data-astro-cid-lcdefpme></span>`)}</div>` })}`}</div>`}<!-- Product Info --><div style="padding: 1.5rem; background: white; border: 1px solid var(--border, #E5E5E5); border-radius: 8px;" data-astro-cid-lcdefpme><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text, #111);" data-astro-cid-lcdefpme>${featuredMerchandise.title}</h3>${featuredMerchandise.description && renderTemplate`<p style="font-size: 0.95rem; color: var(--text-muted, #666); line-height: 1.6; margin-bottom: 1rem;" data-astro-cid-lcdefpme>${featuredMerchandise.description}</p>`}<div style="display: flex; align-items: baseline; gap: 0.5rem; margin-bottom: 1rem;" data-astro-cid-lcdefpme><span style="font-size: 0.75rem; color: var(--text-muted, #666); text-transform: uppercase; letter-spacing: 0.1em;" data-astro-cid-lcdefpme>Harga:</span><span style="font-size: 1.75rem; font-weight: 700; color: var(--accent, #C84B8E);" data-astro-cid-lcdefpme>Rp ${featuredMerchandise.price?.toLocaleString("id-ID")}</span></div>${featuredMerchandise.availableSizes?.length > 0 && renderTemplate`<div style="margin-bottom: 1rem;" data-astro-cid-lcdefpme><p style="font-size: 0.75rem; color: var(--text-muted, #666); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Ukuran Tersedia:</p><div style="display: flex; flex-wrap: wrap; gap: 0.5rem;" data-astro-cid-lcdefpme>${featuredMerchandise.availableSizes.map((size) => renderTemplate`<span style="padding: 0.4rem 0.8rem; background: #F5F5F5; border: 1px solid var(--border, #E5E5E5); border-radius: 4px; font-size: 0.85rem; font-weight: 500;" data-astro-cid-lcdefpme>${size}</span>`)}</div></div>`}${featuredMerchandise.paymentMethods?.length > 0 && renderTemplate`<div data-astro-cid-lcdefpme><p style="font-size: 0.75rem; color: var(--text-muted, #666); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Metode Pembayaran:</p><div style="display: flex; flex-wrap: wrap; gap: 0.5rem;" data-astro-cid-lcdefpme>${featuredMerchandise.paymentMethods.map((method) => renderTemplate`<span style="padding: 0.4rem 0.8rem; background: #F5F5F5; border: 1px solid var(--border, #E5E5E5); border-radius: 4px; font-size: 0.85rem; font-weight: 500;" data-astro-cid-lcdefpme>${method}</span>`)}</div></div>`}</div></div><!-- Right: Order Form --><div data-astro-cid-lcdefpme><form id="merchandiseForm"${addAttribute(sheetUrl, "data-sheet-url")}${addAttribute(featuredMerchandise.title, "data-product")}${addAttribute(featuredMerchandise.price, "data-price")}${addAttribute(waNumber, "data-wa")} style="background: white; padding: 2rem; border: 1px solid var(--border, #E5E5E5); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);" data-astro-cid-lcdefpme><h4 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text, #111);" data-astro-cid-lcdefpme>Form Pre-Order</h4><p style="font-size: 0.85rem; color: var(--text-muted, #666); margin-bottom: 1.5rem;" data-astro-cid-lcdefpme>Isi data di bawah untuk melakukan pemesanan.</p><div style="margin-bottom: 1rem;" data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Nama Lengkap *</label><input type="text" id="merch-name" required style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border, #E5E5E5); border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 0.9rem; box-sizing: border-box;" data-astro-cid-lcdefpme></div><div style="margin-bottom: 1rem;" data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>No. WhatsApp *</label><input type="tel" id="merch-phone" required placeholder="Contoh: 08123456789" style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border, #E5E5E5); border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 0.9rem; box-sizing: border-box;" data-astro-cid-lcdefpme></div>${featuredMerchandise.availableSizes?.length > 0 && renderTemplate`<div style="margin-bottom: 1rem;" data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Ukuran Baju *</label><select id="merch-size" required style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border, #E5E5E5); border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 0.9rem; background: white; box-sizing: border-box;" data-astro-cid-lcdefpme><option value="" disabled selected data-astro-cid-lcdefpme>Pilih ukuran...</option>${featuredMerchandise.availableSizes.map((size) => renderTemplate`<option${addAttribute(size, "value")} data-astro-cid-lcdefpme>${size}</option>`)}</select></div>`}<div style="margin-bottom: 1rem;" data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Alamat Pengiriman *</label><textarea id="merch-address" rows="3" required placeholder="Alamat lengkap untuk pengiriman..." style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border, #E5E5E5); border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 0.9rem; resize: vertical; box-sizing: border-box;" data-astro-cid-lcdefpme></textarea></div>${featuredMerchandise.paymentMethods?.length > 0 && renderTemplate`<div style="margin-bottom: 1.5rem;" data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Metode Pembayaran *</label><select id="merch-payment" required style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border, #E5E5E5); border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 0.9rem; background: white; box-sizing: border-box;" data-astro-cid-lcdefpme><option value="" disabled selected data-astro-cid-lcdefpme>Pilih metode pembayaran...</option>${featuredMerchandise.paymentMethods.map((method) => renderTemplate`<option${addAttribute(method, "value")} data-astro-cid-lcdefpme>${method}</option>`)}</select></div>`}<button type="submit" id="merchSubmitBtn" style="width: 100%; padding: 1rem; background: var(--accent, #C84B8E); color: white; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; border: none; border-radius: 4px; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='#A03D72'" onmouseout="this.style.backgroundColor='var(--accent, #C84B8E)'" data-astro-cid-lcdefpme>🛍️ Kirim Pesanan Pre-Order</button><p style="text-align: center; margin-top: 0.75rem; font-size: 0.75rem; color: #999;" data-astro-cid-lcdefpme>Pesanan akan dikirim via WhatsApp & tersimpan di sistem kami.</p><div id="merch-success" style="display: none; margin-top: 1rem; padding: 1rem; background: rgba(34, 197, 94, 0.1); border-left: 3px solid #22C55E; border-radius: 4px;" data-astro-cid-lcdefpme><p style="font-size: 0.9rem; color: #166534; font-weight: 500; margin: 0;" data-astro-cid-lcdefpme>✅ Pesanan berhasil dikirim! Tim kami akan menghubungi Anda via WhatsApp.</p></div></form></div></div></div></section>`}${showJournal && renderTemplate`<section style="padding: 4rem 0;" data-astro-cid-lcdefpme><div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; border-bottom: 1px solid var(--border, #E5E5E5); padding-bottom: 1rem;" data-astro-cid-lcdefpme><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600;" data-astro-cid-lcdefpme>${journalTitle}</h2><a href="/journal" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); text-decoration: none; border-bottom: 1px solid var(--text, #111);" data-astro-cid-lcdefpme>View All</a></div>${recentPosts.length > 0 ? renderTemplate`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;" data-astro-cid-lcdefpme>${recentPosts.map((post) => renderTemplate`<a${addAttribute(`/journal/${post.slug.current}`, "href")} style="text-decoration: none; color: inherit; display: block; border: 1px solid var(--border, #E5E5E5); padding: 1.5rem; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#F8F8F8'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-lcdefpme>${post.mainImage ? renderTemplate`<div style="aspect-ratio: 16/10; background: #F5F5F5; margin-bottom: 1rem; overflow: hidden;" data-astro-cid-lcdefpme><img${addAttribute(urlFor(post.mainImage).width(600).url(), "src")}${addAttribute(post.title, "alt")} style="width: 100%; height: 100%; object-fit: cover;" data-astro-cid-lcdefpme></div>` : renderTemplate`<div style="aspect-ratio: 16/10; background: linear-gradient(135deg, #C84B8E 0%, #E8C547 100%); margin-bottom: 1rem; display: flex; align-items: center; justify-content: center;" data-astro-cid-lcdefpme><span style="font-size: 3rem; color: white;" data-astro-cid-lcdefpme>📖</span></div>`}<span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent, #C84B8E); display: block; margin-bottom: 0.5rem; font-weight: 600;" data-astro-cid-lcdefpme>${post.category}</span><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; line-height: 1.3;" data-astro-cid-lcdefpme>${post.title}</h3><p style="font-size: 0.85rem; color: #666; line-height: 1.6; margin-bottom: 0.75rem;" data-astro-cid-lcdefpme>${post.body?.[0]?.children?.map((c) => c.text).join("").substring(0, 60)}...</p><p style="font-size: 0.75rem; color: #999;" data-astro-cid-lcdefpme>${new Date(post.publishedAt).toLocaleDateString("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric"
	})}</p></a>`)}</div>` : renderTemplate`<div style="text-align: center; padding: 3rem; border: 1px solid var(--border, #E5E5E5);" data-astro-cid-lcdefpme><p style="color: #666; font-size: 0.9rem;" data-astro-cid-lcdefpme>Belum ada artikel. Tambahkan di dashboard Sanity.</p></div>`}</section>`}${showArchive && renderTemplate`<section style="padding: 4rem 0; border-top: 1px solid var(--border, #E5E5E5);" data-astro-cid-lcdefpme><div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; border-bottom: 1px solid var(--border, #E5E5E5); padding-bottom: 1rem;" data-astro-cid-lcdefpme><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600;" data-astro-cid-lcdefpme>${archiveTitle}</h2><a href="/archive" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); text-decoration: none; border-bottom: 1px solid var(--text, #111);" data-astro-cid-lcdefpme>View All</a></div><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;" data-astro-cid-lcdefpme>${recentBikes.map((bike) => renderTemplate`<a${addAttribute(`/archive/${bike.slug.current}`, "href")} style="text-decoration: none; color: inherit; display: block; border: 1px solid var(--border, #E5E5E5); padding: 1.5rem; transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.backgroundColor='#F8F8F8'; this.style.transform='translateY(-4px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)'" onmouseout="this.style.backgroundColor='transparent'; this.style.transform='translateY(0)'; this.style.boxShadow='none'" data-astro-cid-lcdefpme><div style="aspect-ratio: 16/10; background: #F5F5F5; margin-bottom: 1rem; overflow: hidden; border-radius: 4px;" data-astro-cid-lcdefpme>${bike.mainImage ? renderTemplate`<img${addAttribute(urlFor(bike.mainImage).width(600).url(), "src")}${addAttribute(bike.title, "alt")} style="width: 100%; height: 100%; object-fit: cover;" data-astro-cid-lcdefpme>` : renderTemplate`<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 3rem;" data-astro-cid-lcdefpme>🚲</div>`}</div><span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #666; display: block; margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>${bike.year} — ${bike.country}</span><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; line-height: 1.3;" data-astro-cid-lcdefpme>${bike.title}</h3><p style="font-size: 0.85rem; color: #666;" data-astro-cid-lcdefpme>${bike.type}</p><div style="margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem;" data-astro-cid-lcdefpme><span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; color: var(--text, #111);" data-astro-cid-lcdefpme>Detail</span><span style="font-size: 1rem;" data-astro-cid-lcdefpme>→</span></div></a>`)}</div></section>`}${showRolodex && renderTemplate`<section style="padding: 4rem 0; border-top: 1px solid var(--border, #E5E5E5);" data-astro-cid-lcdefpme><div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; border-bottom: 1px solid var(--border, #E5E5E5); padding-bottom: 1rem;" data-astro-cid-lcdefpme><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600;" data-astro-cid-lcdefpme>${rolodexTitle}</h2><a href="/rolodex" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); text-decoration: none; border-bottom: 1px solid var(--text, #111);" data-astro-cid-lcdefpme>View All</a></div>${recentSellers.length > 0 ? renderTemplate`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;" data-astro-cid-lcdefpme>${recentSellers.map((seller) => renderTemplate`<article style="border: 1px solid var(--border, #E5E5E5); padding: 1.5rem; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#F8F8F8'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-lcdefpme>${seller.logo && renderTemplate`<div style="width: 60px; height: 60px; background: #F5F5F5; border-radius: 4px; overflow: hidden; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center;" data-astro-cid-lcdefpme><img${addAttribute(urlFor(seller.logo).width(120).url(), "src")}${addAttribute(seller.name, "alt")} style="width: 100%; height: 100%; object-fit: contain;" data-astro-cid-lcdefpme></div>`}<span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent, #C84B8E); display: block; margin-bottom: 0.5rem; font-weight: 600;" data-astro-cid-lcdefpme>${seller.category || "COMMUNITY"}</span><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>${seller.name}</h3>${seller.address && renderTemplate`<p style="font-size: 0.85rem; color: #666; line-height: 1.6; margin-bottom: 1rem;" data-astro-cid-lcdefpme>${seller.address}</p>`}${seller.whatsapp && renderTemplate`<a${addAttribute(`https://wa.me/${seller.whatsapp}`, "href")} target="_blank" rel="noopener noreferrer" style="display: inline-block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); text-decoration: none; border: 1px solid var(--text, #111); padding: 0.5rem 1rem; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='var(--text, #111)'; this.style.color='#FAFAFA'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--text, #111)'" data-astro-cid-lcdefpme>Contact →</a>`}</article>`)}</div>` : renderTemplate`<div style="text-align: center; padding: 3rem; border: 1px solid var(--border, #E5E5E5);" data-astro-cid-lcdefpme><p style="color: #666; font-size: 0.9rem;" data-astro-cid-lcdefpme>Belum ada rekomendasi. Tambahkan di dashboard Sanity.</p></div>`}</section>`}${showMarketplace && renderTemplate`<section style="padding: 6rem 0; border-top: 1px solid var(--border, #E5E5E5);" data-astro-cid-lcdefpme><div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; border-bottom: 1px solid var(--border, #E5E5E5); padding-bottom: 1rem;" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); display: block; margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>${marketplaceLabel}</span><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 2rem; font-weight: 600; letter-spacing: -0.02em; color: var(--text, #111);" data-astro-cid-lcdefpme>${marketplaceTitle}</h2></div><a href="/marketplace" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); text-decoration: none; border-bottom: 1px solid var(--text, #111);" data-astro-cid-lcdefpme>View All →</a></div>${featuredMarketplace.length > 0 ? renderTemplate`<div class="marketplace-grid-home" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2.5rem;" data-astro-cid-lcdefpme>${featuredMarketplace.map((item) => {
		return renderTemplate`<a${addAttribute(`/marketplace/${item.slug.current}`, "href")} class="marketplace-card-home" style="text-decoration: none; color: inherit; display: block; border: 1px solid var(--border, #E5E5E5); transition: background-color 0.3s ease; position: relative; overflow: hidden;" onmouseover="this.style.backgroundColor='#F8F8F8'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-lcdefpme><div style="position: absolute; top: 1rem; right: 1rem; background: {statusColors[item.status] || '#22C55E'}; color: white; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; padding: 0.2rem 0.6rem; border-radius: 2px; z-index: 10;" data-astro-cid-lcdefpme>${{
			available: "Tersedia",
			reserved: "Reserved",
			sold: "Terjual"
		}[item.status] || "Tersedia"}</div><div class="card-image" style="aspect-ratio: 16/10; background: #F5F5F5; overflow: hidden;" data-astro-cid-lcdefpme>${item.images?.[0] ? renderTemplate`<img${addAttribute(urlFor(item.images[0]).width(800).url(), "src")}${addAttribute(item.title, "alt")} style="width: 100%; height: 100%; object-fit: cover;" data-astro-cid-lcdefpme>` : renderTemplate`<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #C84B8E 0%, #E8C547 100%);" data-astro-cid-lcdefpme><span style="font-size: 3rem; color: white;" data-astro-cid-lcdefpme>🔧</span></div>`}</div><div class="card-content" style="padding: 1.5rem;" data-astro-cid-lcdefpme><span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666);" data-astro-cid-lcdefpme>${formatCategory(item.category)} ${item.brand ? `· ${item.brand}` : ""}</span><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 600; margin: 0.5rem 0; line-height: 1.3;" data-astro-cid-lcdefpme>${item.title}</h3><p style="font-size: 1.35rem; font-weight: 700; color: var(--text, #111); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Rp ${item.price?.toLocaleString("id-ID")}</p><p style="font-size: 0.9rem; color: var(--text-muted, #666);" data-astro-cid-lcdefpme>📍 ${item.sellerLocation || "-"}</p></div></a>`;
	})}</div>` : renderTemplate`<div style="text-align: center; padding: 3rem; border: 1px solid var(--border, #E5E5E5);" data-astro-cid-lcdefpme><p style="color: #666; font-size: 0.9rem;" data-astro-cid-lcdefpme>Belum ada part unggulan. Tambahkan di dashboard Sanity.</p></div>`}</section>`}${showFitting && renderTemplate`<section style="padding: 6rem 0; border-top: 1px solid var(--border, #E5E5E5);" data-astro-cid-lcdefpme><div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; border-bottom: 1px solid var(--border, #E5E5E5); padding-bottom: 1rem;" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); display: block; margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>${fittingLabel}</span><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 2rem; font-weight: 600; letter-spacing: -0.02em; color: var(--text, #111);" data-astro-cid-lcdefpme>${fittingTitle}</h2></div></div><div style="max-width: 800px; margin: 0 auto; padding: 0 1rem;" data-astro-cid-lcdefpme><div id="fitting-form" class="fitting-container" style="border: 1px solid var(--border, #E5E5E5); padding: 2.5rem; border-radius: 4px; background: #FAFAFA;" data-astro-cid-lcdefpme><div style="display: grid; gap: 1.5rem;" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Jenis Sepeda</label><select id="bikeType" class="fitting-input" style="width: 100%; max-width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border, #E5E5E5); background: white; font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; box-sizing: border-box;" data-astro-cid-lcdefpme><option value="road" data-astro-cid-lcdefpme>Road Bike (Sepeda Jalan)</option><option value="mtb" data-astro-cid-lcdefpme>MTB / Gravel / City Bike</option></select></div><div class="fitting-grid-2" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Tinggi Badan (cm)</label><input type="number" id="height" class="fitting-input" placeholder="Contoh: 170" style="width: 100%; max-width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border, #E5E5E5); background: white; font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; box-sizing: border-box;" data-astro-cid-lcdefpme></div><div data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Panjang Inseam (cm) *</label><input type="number" id="inseam" class="fitting-input" placeholder="Contoh: 80" style="width: 100%; max-width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border, #E5E5E5); background: white; font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; box-sizing: border-box;" data-astro-cid-lcdefpme><p style="font-size: 0.7rem; color: #999; margin-top: 0.25rem;" data-astro-cid-lcdefpme>* Jarak dari selangkangan ke lantai</p></div></div><button onclick="calculateFitting()" class="fitting-button" style="width: 100%; padding: 1rem; background: var(--text, #111); color: white; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; border: none; cursor: pointer; transition: background 0.2s; box-sizing: border-box;" onmouseover="this.style.backgroundColor='var(--accent, #C84B8E)'" onmouseout="this.style.backgroundColor='var(--text, #111)'" data-astro-cid-lcdefpme>Hitung Rekomendasi Fitting →</button></div></div><div id="fitting-result" style="display: none; margin-top: 2rem;" data-astro-cid-lcdefpme><div style="border: 1px solid var(--accent, #C84B8E); padding: 2.5rem; border-radius: 4px; background: white; position: relative;" data-astro-cid-lcdefpme><button onclick="resetForm()" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 0.75rem; color: var(--text-muted, #666); cursor: pointer; text-decoration: underline;" data-astro-cid-lcdefpme>Hitung Ulang</button><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--accent, #C84B8E);" data-astro-cid-lcdefpme>Hasil Rekomendasi Anda</h3><p id="res-summary" style="font-size: 0.9rem; color: var(--text-muted, #666); margin-bottom: 2rem;" data-astro-cid-lcdefpme></p><div style="background: linear-gradient(135deg, #C84B8E 0%, #E8C547 100%); padding: 2rem; border-radius: 4px; margin-bottom: 2rem; color: white;" data-astro-cid-lcdefpme><p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 0.5rem; opacity: 0.9;" data-astro-cid-lcdefpme>Rekomendasi Ukuran Frame</p><p id="res-frame-size" style="font-family: 'Space Grotesk', sans-serif; font-size: 2.5rem; font-weight: 700; margin-bottom: 0.25rem;" data-astro-cid-lcdefpme>-</p><p id="res-frame-note" style="font-size: 0.85rem; opacity: 0.95;" data-astro-cid-lcdefpme></p></div><div class="fitting-results-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;" data-astro-cid-lcdefpme><div style="padding: 1.5rem; background: #FAFAFA; border: 1px solid var(--border, #E5E5E5); border-radius: 4px;" data-astro-cid-lcdefpme><p style="font-size: 0.7rem; text-transform: uppercase; color: #999; margin-bottom: 0.5rem; letter-spacing: 0.05em;" data-astro-cid-lcdefpme>Tinggi Saddle (dari BB)</p><p id="res-saddle" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.75rem; font-weight: 700; color: var(--text, #111);" data-astro-cid-lcdefpme>- cm</p></div><div style="padding: 1.5rem; background: #FAFAFA; border: 1px solid var(--border, #E5E5E5); border-radius: 4px;" data-astro-cid-lcdefpme><p style="font-size: 0.7rem; text-transform: uppercase; color: #999; margin-bottom: 0.5rem; letter-spacing: 0.05em;" data-astro-cid-lcdefpme>Posisi Saddle</p><p id="res-setback" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 600; color: var(--text, #111);" data-astro-cid-lcdefpme>Netral</p></div><div style="padding: 1.5rem; background: #FAFAFA; border: 1px solid var(--border, #E5E5E5); border-radius: 4px;" data-astro-cid-lcdefpme><p style="font-size: 0.7rem; text-transform: uppercase; color: #999; margin-bottom: 0.5rem; letter-spacing: 0.05em;" data-astro-cid-lcdefpme>Estimasi Drop Handlebar</p><p id="res-drop" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 600; color: var(--text, #111);" data-astro-cid-lcdefpme>- cm</p></div></div><div style="border-top: 1px solid var(--border, #E5E5E5); padding-top: 1.5rem;" data-astro-cid-lcdefpme><h4 style="font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); margin-bottom: 0.75rem;" data-astro-cid-lcdefpme>Catatan Ahli:</h4><p id="res-advice" style="font-size: 0.9rem; color: var(--text-muted, #666); line-height: 1.6; font-style: italic;" data-astro-cid-lcdefpme></p><p style="font-size: 0.75rem; color: #999; margin-top: 1rem; border-top: 1px dashed var(--border, #E5E5E5); padding-top: 1rem;" data-astro-cid-lcdefpme>Perhitungan ini adalah estimasi awal. Disarankan fitting langsung dengan profesional.</p></div></div></div></div></section>`}${showEvents && renderTemplate`<section class="mobile-no-padding" style="padding: 6rem 0; border-top: 1px solid var(--border, #E5E5E5);" data-astro-cid-lcdefpme><div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; border-bottom: 1px solid var(--border, #E5E5E5); padding-bottom: 1rem; padding: 0 1rem;" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); display: block; margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>${eventsLabel}</span><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 2rem; font-weight: 600; letter-spacing: -0.02em; color: var(--text, #111);" data-astro-cid-lcdefpme>${eventsTitle}</h2></div><a href="/events" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); text-decoration: none; border-bottom: 1px solid var(--text, #111);" data-astro-cid-lcdefpme>View All →</a></div>${featuredEvents.length > 0 ? renderTemplate`<div class="event-grid-home" data-astro-cid-lcdefpme>${featuredEvents.map((event) => {
		return renderTemplate`<a${addAttribute(`/events/${event.slug.current}`, "href")} class="event-card-home" style="text-decoration: none; color: inherit; border: 1px solid var(--border, #E5E5E5); transition: all 0.3s ease; overflow: hidden; background: white; display: block;" onmouseover="this.style.borderColor='var(--accent, #C84B8E)'; this.style.transform='translateY(-4px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)'" onmouseout="this.style.borderColor='var(--border, #E5E5E5)'; this.style.transform='translateY(0)'; this.style.boxShadow='none'" data-astro-cid-lcdefpme><div class="event-poster-home" data-astro-cid-lcdefpme>${event.poster ? renderTemplate`<img${addAttribute(urlFor(event.poster).width(800).url(), "src")}${addAttribute(event.title, "alt")} data-astro-cid-lcdefpme>` : renderTemplate`<div style="width: 100%; height: 240px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #C84B8E 0%, #E8C547 100%);" data-astro-cid-lcdefpme><span style="font-size: 3rem; color: white;" data-astro-cid-lcdefpme>📅</span></div>`}</div><div class="event-info" data-astro-cid-lcdefpme><span style="display: inline-block; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: {statusColors[event.status] || '#E8C547'}; margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>${{
			"coming-soon": "COMING SOON",
			"open": "OPEN REGISTRATION",
			"full": "FULL",
			"finished": "SELESAI",
			"cancelled": "DIBATALKAN"
		}[event.status] || "COMING SOON"}</span><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; letter-spacing: -0.02em; color: var(--text, #111); margin-bottom: 0.5rem; line-height: 1.3;" data-astro-cid-lcdefpme>${event.title}</h3><p style="font-size: 0.85rem; color: var(--text-muted, #666); margin-bottom: 1rem;" data-astro-cid-lcdefpme>${new Date(event.startDate).toLocaleDateString("id-ID", {
			day: "numeric",
			month: "long",
			year: "numeric"
		})} · ${event.location}</p><span style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent, #C84B8E); display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center;" data-astro-cid-lcdefpme>Lihat Detail →</span></div></a>`;
	})}</div>` : renderTemplate`<div style="text-align: center; padding: 4rem 2rem; border: 1px solid var(--border, #E5E5E5);" data-astro-cid-lcdefpme><p style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; color: var(--text, #111); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Belum ada event terdekat</p><p style="color: var(--text-muted, #666); font-size: 0.9rem;" data-astro-cid-lcdefpme><a href="/events" style="color: var(--accent, #C84B8E); text-decoration: none;" data-astro-cid-lcdefpme>Lihat semua event →</a></p></div>`}</section>`}<section style="padding: 6rem 0; border-top: 1px solid var(--border, #E5E5E5); background: #FAFAFA;" data-astro-cid-lcdefpme><div style="max-width: 800px; margin: 0 auto; padding: 0 1.5rem;" data-astro-cid-lcdefpme><div style="text-align: center; margin-bottom: 3rem;" data-astro-cid-lcdefpme><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); display: block; margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>PARTNERSHIP & COLLABORATION</span><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 600; letter-spacing: -0.02em; color: var(--text, #111);" data-astro-cid-lcdefpme>Form Kerja Sama dengan AJGR.cc</h2><p style="margin-top: 1rem; font-size: 1rem; color: var(--text-muted, #666); line-height: 1.6;" data-astro-cid-lcdefpme>Punya ide kolaborasi, ingin menjual sepeda vintage, atau request artikel? Isi form di bawah ini dan pesan Anda akan langsung terkirim ke WhatsApp tim kami.</p></div><form id="collabForm"${addAttribute(waNumber, "data-whatsapp")} style="background: white; padding: 2.5rem; border: 1px solid var(--border, #E5E5E5); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);" data-astro-cid-lcdefpme><div class="collab-grid-2" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Nama Lengkap *</label><input type="text" id="collabName" required style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border, #E5E5E5); border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 0.9rem; box-sizing: border-box;" data-astro-cid-lcdefpme></div><div data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Alamat Email *</label><input type="email" id="collabEmail" required style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border, #E5E5E5); border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 0.9rem; box-sizing: border-box;" data-astro-cid-lcdefpme></div></div><div class="collab-grid-2" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>No. WhatsApp Anda</label><input type="text" id="collabPhone" placeholder="Contoh: 08123456789" style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border, #E5E5E5); border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 0.9rem; box-sizing: border-box;" data-astro-cid-lcdefpme></div><div data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Jenis Kerja Sama *</label><select id="collabType" required style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border, #E5E5E5); border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 0.9rem; background: white; box-sizing: border-box;" data-astro-cid-lcdefpme><option value="" disabled selected data-astro-cid-lcdefpme>Pilih jenis kerja sama...</option><option value="Kolaborasi Event" data-astro-cid-lcdefpme>Kolaborasi Event</option><option value="Jual Sepeda atau Part Sepeda" data-astro-cid-lcdefpme>Jual Sepeda atau Part Sepeda</option><option value="Request Penambahan Katalog Sepeda Vintage" data-astro-cid-lcdefpme>Request Penambahan Katalog Sepeda Vintage</option><option value="Request Penulisan Artikel Backlink" data-astro-cid-lcdefpme>Request Penulisan Artikel Backlink</option></select></div></div><div style="margin-bottom: 1.5rem;" data-astro-cid-lcdefpme><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;" data-astro-cid-lcdefpme>Pesan / Detail Permintaan *</label><textarea id="collabMessage" rows="5" required placeholder="Jelaskan detail permintaan Anda di sini..." style="width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border, #E5E5E5); border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 0.9rem; resize: vertical; box-sizing: border-box;" data-astro-cid-lcdefpme></textarea></div><div data-astro-cid-lcdefpme><button type="submit" id="submitBtn" style="width: 100%; padding: 1rem; background: #25D366; color: white; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; border: none; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem;" data-astro-cid-lcdefpme><span style="font-size: 1.2rem;" data-astro-cid-lcdefpme></span><span data-astro-cid-lcdefpme>Kirim via WhatsApp</span></button><p style="text-align: center; margin-top: 0.75rem; font-size: 0.75rem; color: #999;" data-astro-cid-lcdefpme>Dengan mengklik tombol ini, Anda akan diarahkan ke WhatsApp dengan pesan yang sudah terformat otomatis.</p></div></form></div></section><script>
    // ==========================================
    // 1. SLIDER MERCHANDISE
    // ==========================================
    let currentMerchSlide = 0;
    const merchSlides = document.querySelectorAll('.merch-slide');
    const merchDots = document.querySelectorAll('.merch-dot');
    
    function changeMerchSlide(direction) {
      if (merchSlides.length === 0) return;
      if (merchSlides[currentMerchSlide]) merchSlides[currentMerchSlide].classList.remove('active');
      if (merchDots[currentMerchSlide]) merchDots[currentMerchSlide].classList.remove('active');
      
      currentMerchSlide = (currentMerchSlide + direction + merchSlides.length) % merchSlides.length;
      
      if (merchSlides[currentMerchSlide]) merchSlides[currentMerchSlide].classList.add('active');
      if (merchDots[currentMerchSlide]) merchDots[currentMerchSlide].classList.add('active');
    }
    
    function goToMerchSlide(index) {
      if (merchSlides.length === 0) return;
      if (merchSlides[currentMerchSlide]) merchSlides[currentMerchSlide].classList.remove('active');
      if (merchDots[currentMerchSlide]) merchDots[currentMerchSlide].classList.remove('active');
      
      currentMerchSlide = index;
      
      if (merchSlides[currentMerchSlide]) merchSlides[currentMerchSlide].classList.add('active');
      if (merchDots[currentMerchSlide]) merchDots[currentMerchSlide].classList.add('active');
    }
    
    // Auto-slide setiap 5 detik
    if (merchSlides.length > 1) {
      setInterval(() => changeMerchSlide(1), 5000);
    }

    // ==========================================
    // 2. MERCHANDISE ORDER FORM HANDLER
    // ==========================================
    const merchForm = document.getElementById('merchandiseForm');
    if (merchForm) {
      merchForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('merch-name').value.trim();
        const phone = document.getElementById('merch-phone').value.trim();
        const size = document.getElementById('merch-size').value;
        const address = document.getElementById('merch-address').value.trim();
        const payment = document.getElementById('merch-payment').value;
        
        const productName = merchForm.getAttribute('data-product');
        const productPrice = merchForm.getAttribute('data-price');
        const sheetUrl = merchForm.getAttribute('data-sheet-url');
        const waNum = merchForm.getAttribute('data-wa') || '6282147883637';

        if (!nama || !phone || !size || !address || !payment) {
          alert('Mohon lengkapi semua field yang wajib diisi (*).');
          return;
        }

        const submitBtn = document.getElementById('merchSubmitBtn');
        const successMsg = document.getElementById('merch-success');
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⏳ Memproses...';

        const orderData = { 
          nama, 
          noHp: phone, 
          ukuran: size, 
          alamat: address, 
          pembayaran: payment, 
          produk: productName, 
          harga: productPrice,
          timestamp: new Date().toISOString()
        };

        // 1. Kirim ke Google Sheets
        if (sheetUrl && sheetUrl.trim() !== '') {
          try {
            await fetch(sheetUrl, {
              method: 'POST',
              mode: 'no-cors',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(orderData)
            });
            console.log('✅ Data terkirim ke Google Sheets');
          } catch (err) {
            console.error('❌ Gagal kirim ke Sheets:', err);
          }
        } else {
          console.warn('⚠️ URL Google Sheets belum diisi di Sanity Settings');
        }

        // 2. Kirim ke WhatsApp
        const waMessage = \`Halo AJGR.cc! 🛍️\\n\\nSaya ingin melakukan *PRE-ORDER MERCHANDISE*\\n\\n📦 *Detail Pesanan:*\\n• Produk: \${productName}\\n• Harga: Rp \${parseInt(productPrice).toLocaleString('id-ID')}\\n• Ukuran: \${size}\\n• Metode Pembayaran: \${payment}\\n\\n👤 *Data Pemesan:*\\n• Nama: \${nama}\\n• No. WhatsApp: \${phone}\\n• Alamat: \${address}\\n\\nMohon konfirmasi ketersediaan dan detail pembayaran. Terima kasih!\`;
        
        const encodedMessage = encodeURIComponent(waMessage);
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const waUrl = isMobile 
          ? \`https://wa.me/\${waNum}?text=\${encodedMessage}\`
          : \`https://web.whatsapp.com/send?phone=\${waNum}&text=\${encodedMessage}\`;
        
        // Buka WhatsApp di tab baru
        window.open(waUrl, '_blank');

        // 3. Update UI
        merchForm.reset();
        successMsg.style.display = 'block';
        submitBtn.innerHTML = '✅ Pesanan Terkirim!';
        submitBtn.style.backgroundColor = '#22C55E';
        
        setTimeout(() => {
          successMsg.style.display = 'none';
          submitBtn.innerHTML = '🛍️ Kirim Pesanan Pre-Order';
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
        }, 5000);
      });
    }

    // ==========================================
    // 3. COLLAB FORM HANDLER
    // ==========================================
    const collabForm = document.getElementById('collabForm');
    const collabSubmitBtn = document.getElementById('submitBtn');
    if (collabForm && collabSubmitBtn) {
      const recipientWhatsApp = collabForm.getAttribute('data-whatsapp');
      collabForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('collabName').value.trim();
        const email = document.getElementById('collabEmail').value.trim();
        const phone = document.getElementById('collabPhone').value.trim();
        const collabType = document.getElementById('collabType').value;
        const message = document.getElementById('collabMessage').value.trim();

        if (!name || !email || !collabType || !message) {
          alert('Mohon lengkapi semua field yang wajib diisi (*).');
          return;
        }

        const waMessage = \`Halo AJGR.cc! \\n\\nSaya ingin mengajukan kerja sama melalui website.\\n\\n *DETAIL PERMINTAAN:*\\n\\n *Nama:* \${name}\\n📧 *Email:* \${email}\\n📱 *No. WhatsApp:* \${phone || '-'}\\n\\n🎯 *Jenis Kerja Sama:*\\n\${collabType}\\n\\n *Pesan:*\\n\${message}\\n\\n---\\n_Pesan ini dikirim otomatis melalui form kerja sama di AJGR.cc_\`;
        const encodedMessage = encodeURIComponent(waMessage);
        collabSubmitBtn.innerHTML = '<span></span><span>Membuka WhatsApp...</span>';
        collabSubmitBtn.disabled = true;

        setTimeout(() => {
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          const waUrl = isMobile ? \`https://wa.me/\${recipientWhatsApp}?text=\${encodedMessage}\` : \`https://web.whatsapp.com/send?phone=\${recipientWhatsApp}&text=\${encodedMessage}\`;
          window.open(waUrl, '_blank');
          collabForm.reset();
          collabSubmitBtn.innerHTML = '<span style="font-size: 1.2rem;">✅</span><span>Pesan Terkirim!</span>';
          collabSubmitBtn.style.backgroundColor = '#22C55E';
          setTimeout(() => {
            collabSubmitBtn.innerHTML = '<span style="font-size: 1.2rem;">💬</span><span>Kirim via WhatsApp</span>';
            collabSubmitBtn.style.backgroundColor = '#25D366';
            collabSubmitBtn.disabled = false;
          }, 3000);
        }, 500);
      });
    }

    // ==========================================
    // 4. FITTING CALCULATOR
    // ==========================================
    function calculateFitting() {
      const bikeTypeElement = document.getElementById('bikeType');
      const heightElement = document.getElementById('height');
      const inseamElement = document.getElementById('inseam');
      if (!bikeTypeElement || !heightElement || !inseamElement) { alert('Form tidak ditemukan. Silakan refresh halaman.'); return; }
      const bikeType = bikeTypeElement.value;
      const height = parseFloat(heightElement.value);
      const inseam = parseFloat(inseamElement.value);
      if (!height || !inseam) { alert('Mohon isi Tinggi Badan dan Panjang Inseam dengan benar.'); return; }

      let saddleHeight = '', setback = 'Netral (tengah rel)', drop = '', frameSize = '', frameNote = '', advice = '', summary = '';
      if (bikeType === 'road') {
        saddleHeight = (inseam * 0.883).toFixed(1); drop = (height * 0.06).toFixed(1); setback = 'Sedikit ke belakang dari BB';
        advice = 'Untuk road bike, posisi saddle yang tepat sangat krusial untuk efisiensi kayuhan. Pastikan lutut tidak terlalu lurus (lock) di bagian bawah kayuhan.';
        summary = 'Road Bike · Tinggi ' + height + 'cm · Inseam ' + inseam + 'cm';
        if (height < 160) { frameSize = '48 - 50 cm'; frameNote = 'Ukuran XS - S · Cocok untuk tinggi badan di bawah 160cm'; }
        else if (height < 170) { frameSize = '51 - 53 cm'; frameNote = 'Ukuran S - M · Cocok untuk tinggi badan 160-170cm'; }
        else if (height < 180) { frameSize = '54 - 56 cm'; frameNote = 'Ukuran M - L · Cocok untuk tinggi badan 170-180cm'; }
        else if (height < 190) { frameSize = '57 - 59 cm'; frameNote = 'Ukuran L - XL · Cocok untuk tinggi badan 180-190cm'; }
        else { frameSize = '60+ cm'; frameNote = 'Ukuran XXL · Cocok untuk tinggi badan di atas 190cm'; }
      } else {
        saddleHeight = (inseam * 0.885).toFixed(1); drop = (height * 0.03).toFixed(1); setback = 'Netral atau sedikit ke depan';
        advice = 'Untuk MTB/Gravel, saddle biasanya diatur sedikit lebih rendah dari road bike untuk memberikan ruang gerak tubuh saat menghadapi medan teknis dan turunan.';
        summary = 'MTB / Gravel · Tinggi ' + height + 'cm · Inseam ' + inseam + 'cm';
        if (height < 160) { frameSize = '15"'; frameNote = 'Ukuran XS · Cocok untuk tinggi badan di bawah 160cm'; }
        else if (height < 170) { frameSize = '17 - 18"'; frameNote = 'Ukuran S - M · Cocok untuk tinggi badan 160-170cm'; }
        else if (height < 180) { frameSize = '19 - 20"'; frameNote = 'Ukuran M - L · Cocok untuk tinggi badan 170-180cm'; }
        else if (height < 190) { frameSize = '21 - 22"'; frameNote = 'Ukuran L - XL · Cocok untuk tinggi badan 180-190cm'; }
        else { frameSize = '23"'; frameNote = 'Ukuran XXL · Cocok untuk tinggi badan di atas 190cm'; }
      }
      document.getElementById('res-saddle').innerText = saddleHeight + ' cm';
      document.getElementById('res-setback').innerText = setback;
      document.getElementById('res-drop').innerText = drop + ' cm';
      document.getElementById('res-advice').innerText = advice;
      document.getElementById('res-frame-size').innerText = frameSize;
      document.getElementById('res-frame-note').innerText = frameNote;
      document.getElementById('res-summary').innerText = summary;
      document.getElementById('fitting-form').style.display = 'none';
      const resultEl = document.getElementById('fitting-result');
      resultEl.style.display = 'block';
      resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    function resetForm() {
      document.getElementById('fitting-result').style.display = 'none';
      document.getElementById('fitting-form').style.display = 'block';
      document.getElementById('height').value = '';
      document.getElementById('inseam').value = '';
    }
  <\/script>` })}`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/index.astro", void 0);
var $$file = "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
