import { n as createComponent, r as __exportAll, t as createAstro } from "./compiler_BGjCl2tC.mjs";
import { S as unescapeHTML, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BidWz0RG.mjs";
import { i as urlFor, n as client, r as getSiteSettings, t as $$Layout } from "./Layout_CirPCQFK.mjs";
//#region src/pages/journal/[slug].astro
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
	const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
  title, slug, category, publishedAt, mainImage, body,
  routeUrl, routePlatform, routeDistance, routeDuration,
  documentationDriveLink
}`, { slug });
	if (!post) return Astro.redirect("/journal");
	const settings = await getSiteSettings();
	function formatDate(dateStr) {
		return new Date(dateStr).toLocaleDateString("id-ID", {
			weekday: "long",
			day: "numeric",
			month: "long",
			year: "numeric"
		});
	}
	function getRouteEmbed(routeUrl, platform) {
		if (!routeUrl) return null;
		if (platform === "relive") {
			const id = routeUrl.split("/view/")[1]?.split("?")[0]?.split("/")[0];
			return id ? `https://relive.cc/view/${id}/embed` : null;
		}
		if (platform === "komoot") {
			if (routeUrl.includes("/embed")) return routeUrl;
			return `${routeUrl.replace(/\/$/, "")}/embed`;
		}
		if (platform === "strava") {
			if (routeUrl.includes("/embed")) return routeUrl;
			return `${routeUrl.replace(/\/$/, "")}/embed`;
		}
		if (platform === "google") {
			if (routeUrl.includes("/embed")) return routeUrl;
			if (routeUrl.match(/place\/[^/]+\/@([^/]+)/)) return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(routeUrl)}`;
			return null;
		}
		return null;
	}
	const embedUrl = getRouteEmbed(post.routeUrl, post.routePlatform);
	function renderPortableText(blocks) {
		if (!blocks) return "";
		return blocks.map((block) => {
			if (block._type === "block") {
				const children = block.children?.map((child) => {
					let text = child.text || "";
					if (child.marks?.includes("strong")) text = `<strong>${text}</strong>`;
					if (child.marks?.includes("em")) text = `<em>${text}</em>`;
					return text;
				}).join("") || "";
				const style = block.style || "normal";
				if (style === "blockquote") return `<blockquote style="border-left: 3px solid var(--accent, #C84B8E); padding-left: 1.5rem; margin: 1.5rem 0; font-style: italic; color: var(--text-muted, #666); overflow-wrap: break-word;">${children}</blockquote>`;
				if (style === "h2") return `<h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.75rem; font-weight: 600; margin: 2rem 0 1rem; letter-spacing: -0.02em; overflow-wrap: break-word; word-wrap: break-word;">${children}</h2>`;
				if (style === "h3") return `<h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 600; margin: 1.5rem 0 0.75rem; overflow-wrap: break-word; word-wrap: break-word;">${children}</h3>`;
				return `<p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.25rem; color: var(--text, #111); overflow-wrap: break-word; word-wrap: break-word; word-break: break-word;">${children}</p>`;
			}
			if (block._type === "image") return `<figure style="margin: 2rem 0;"><img src="${urlFor(block.asset).width(1200).url()}" alt="" style="width: 100%; border-radius: 4px;" />${block.caption ? `<figcaption style="text-align: center; font-size: 0.85rem; color: var(--text-muted, #666); margin-top: 0.75rem; font-style: italic;">${block.caption}</figcaption>` : ""}</figure>`;
			return "";
		}).join("");
	}
	const articleContent = renderPortableText(post.body);
	const shareUrl = Astro.request.url;
	const shareTitle = encodeURIComponent(post.title);
	const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(`Baca artikel "${post.title}" di AJGR.cc Journal`)}%0A%0A${shareUrl}`;
	const twitterShareUrl = `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`;
	const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"settings": settings,
		"data-astro-cid-4vwujxvv": true
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<nav style="padding: 2rem 1rem; border-bottom: 1px solid var(--border, #E5E5E5); max-width: 100vw; overflow: hidden;" data-astro-cid-4vwujxvv><a href="/journal" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); text-decoration: none;" data-astro-cid-4vwujxvv>← Back to Journal</a></nav><section style="padding: 4rem 1rem 3rem; max-width: 100vw; overflow: hidden;" data-astro-cid-4vwujxvv><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 1rem; display: block;" data-astro-cid-4vwujxvv>${post.category || "ARTICLE"}</span><h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 600; letter-spacing: -0.03em; margin: 1rem 0 1.5rem; color: var(--text, #111); line-height: 1.05; overflow-wrap: break-word; word-break: break-word;" data-astro-cid-4vwujxvv>${post.title}</h1><div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; padding-bottom: 2rem; border-bottom: 1px solid var(--border, #E5E5E5);" data-astro-cid-4vwujxvv><time style="font-size: 0.85rem; color: var(--text-muted, #666); font-variant-numeric: tabular-nums;" data-astro-cid-4vwujxvv>${formatDate(post.publishedAt)}</time></div></section><section class="journal-grid" data-astro-cid-4vwujxvv><!-- Left Column: Article Content --><article style="min-width: 0;" data-astro-cid-4vwujxvv>${post.mainImage && renderTemplate`<div style="aspect-ratio: 16/9; background: #F0F0F0; overflow: hidden; margin-bottom: 3rem;" data-astro-cid-4vwujxvv><img${addAttribute(urlFor(post.mainImage).width(1200).url(), "src")}${addAttribute(post.title, "alt")} style="width: 100%; height: 100%; object-fit: cover;" data-astro-cid-4vwujxvv></div>`}<div style="max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word;" data-astro-cid-4vwujxvv>${unescapeHTML(articleContent)}</div></article><!-- Right Column: Sidebar --><aside style="position: sticky; top: 100px; min-width: 0; display: flex; flex-direction: column; gap: 1.5rem;" data-astro-cid-4vwujxvv><!-- Route Card (Hanya tampil jika ada routeUrl) -->${post.routeUrl && renderTemplate`<div style="border: 1px solid var(--border, #E5E5E5); padding: 2rem;" data-astro-cid-4vwujxvv><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-muted, #666); margin-bottom: 1.5rem;" data-astro-cid-4vwujxvv>🗺️ Rute Gowes</h3><!-- Info Jarak & Durasi -->${(post.routeDistance || post.routeDuration) && renderTemplate`<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border, #E5E5E5);" data-astro-cid-4vwujxvv>${post.routeDistance && renderTemplate`<div data-astro-cid-4vwujxvv><p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #999; margin-bottom: 0.25rem;" data-astro-cid-4vwujxvv>Jarak</p><p style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; color: var(--text, #111);" data-astro-cid-4vwujxvv>${post.routeDistance} <span style="font-size: 0.85rem; font-weight: 400;" data-astro-cid-4vwujxvv>km</span></p></div>`}${post.routeDuration && renderTemplate`<div data-astro-cid-4vwujxvv><p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #999; margin-bottom: 0.25rem;" data-astro-cid-4vwujxvv>Durasi</p><p style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; color: var(--text, #111);" data-astro-cid-4vwujxvv>${post.routeDuration}</p></div>`}</div>`}<!-- Embed Map (untuk Relive, Komoot, Strava) -->${embedUrl && renderTemplate`<div style="aspect-ratio: 1/1; background: #F5F5F5; border-radius: 4px; overflow: hidden; margin-bottom: 1rem; border: 1px solid var(--border, #E5E5E5);" data-astro-cid-4vwujxvv><iframe${addAttribute(embedUrl, "src")} style="width: 100%; height: 100%; border: 0;" allowfullscreen loading="lazy" data-astro-cid-4vwujxvv></iframe></div>`}<!-- Tombol Buka Rute --><a${addAttribute(post.routeUrl, "href")} target="_blank" rel="noopener noreferrer" style="display: block; text-align: center; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: var(--text, #111); text-decoration: none; padding: 1rem; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='var(--accent, #C84B8E)'" onmouseout="this.style.backgroundColor='var(--text, #111)'" data-astro-cid-4vwujxvv>${embedUrl ? "Buka Rute Lengkap →" : "Lihat Rute di Map →"}</a></div>`}<!-- Meta Info Card --><div style="border: 1px solid var(--border, #E5E5E5); padding: 2rem;" data-astro-cid-4vwujxvv><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-muted, #666); margin-bottom: 1.5rem;" data-astro-cid-4vwujxvv>Info Artikel</h3><div style="display: flex; flex-direction: column; gap: 1.25rem;" data-astro-cid-4vwujxvv><div style="padding-bottom: 1.25rem; border-bottom: 1px solid var(--border, #E5E5E5);" data-astro-cid-4vwujxvv><p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #999; margin-bottom: 0.5rem;" data-astro-cid-4vwujxvv>Kategori</p><p style="font-size: 1rem; color: var(--text, #111); font-weight: 500; text-transform: capitalize;" data-astro-cid-4vwujxvv>${post.category}</p></div><div data-astro-cid-4vwujxvv><p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #999; margin-bottom: 0.5rem;" data-astro-cid-4vwujxvv>Dipublikasi</p><p style="font-size: 1rem; color: var(--text, #111); font-weight: 500;" data-astro-cid-4vwujxvv>${formatDate(post.publishedAt)}</p></div></div></div><!-- GOOGLE DRIVE DOKUMENTASI (DITAMBAHKAN - KONDISIONAL) -->${post.documentationDriveLink && renderTemplate`<div style="padding: 2rem; border: 2px dashed var(--accent, #C84B8E); background: rgba(200, 75, 142, 0.05);" data-astro-cid-4vwujxvv><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem; color: var(--text, #111);" data-astro-cid-4vwujxvv>Dokumentasi Foto</h3><p style="font-size: 0.9rem; color: var(--text-muted, #666); margin-bottom: 1.5rem; line-height: 1.6;" data-astro-cid-4vwujxvv>Lihat dan unduh foto-foto dokumentasi kegiatan ini di Google Drive.</p><a${addAttribute(post.documentationDriveLink, "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: var(--accent, #C84B8E); text-decoration: none; padding: 0.9rem 1.25rem; transition: all 0.2s ease; width: 100%; justify-content: center;" onmouseover="this.style.backgroundColor='#A03D72'" onmouseout="this.style.backgroundColor='var(--accent, #C84B8E)'" data-astro-cid-4vwujxvv>📂 Buka Dokumentasi →</a></div>`}<!-- SHARE SECTION (DIPINDAHKAN KE SIDEBAR) --><div style="padding: 2rem; border: 1px solid var(--border, #E5E5E5); background: #FAFAFA;" data-astro-cid-4vwujxvv><h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text, #111);" data-astro-cid-4vwujxvv>Bagikan Artikel</h3><p style="font-size: 0.85rem; color: var(--text-muted, #666); margin-bottom: 1.5rem; line-height: 1.5;" data-astro-cid-4vwujxvv>Bagikan <strong data-astro-cid-4vwujxvv>${post.title}</strong> ke teman-teman komunitas.</p><!-- Link Preview --><div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: white; border: 1px solid var(--border, #E5E5E5); margin-bottom: 1rem; overflow: hidden;" data-astro-cid-4vwujxvv><span style="font-size: 0.75rem; color: var(--text-muted, #666); font-family: monospace; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1;" data-astro-cid-4vwujxvv>${shareUrl}</span><button id="copy-link-btn"${addAttribute(shareUrl, "data-url")} style="font-family: 'Space Grotesk', sans-serif; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: var(--text, #111); border: none; padding: 0.5rem 0.75rem; cursor: pointer; transition: all 0.2s ease; white-space: nowrap; flex-shrink: 0;" onmouseover="this.style.backgroundColor='var(--accent, #C84B8E)'" onmouseout="this.style.backgroundColor='var(--text, #111)'" data-astro-cid-4vwujxvv>Copy</button></div><!-- Share Buttons --><div class="share-buttons" style="display: flex; gap: 0.5rem; flex-wrap: wrap;" data-astro-cid-4vwujxvv><a${addAttribute(whatsappShareUrl, "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.4rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: white; background: #25D366; text-decoration: none; padding: 0.65rem 1rem; transition: all 0.2s ease; flex: 1; justify-content: center;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'" data-astro-cid-4vwujxvv>💬 WA</a><a${addAttribute(twitterShareUrl, "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.4rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: white; background: #1DA1F2; text-decoration: none; padding: 0.65rem 1rem; transition: all 0.2s ease; flex: 1; justify-content: center;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'" data-astro-cid-4vwujxvv>TW</a><a${addAttribute(facebookShareUrl, "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.4rem; font-family: 'Space Grotesk', sans-serif; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: white; background: #1877F2; text-decoration: none; padding: 0.65rem 1rem; transition: all 0.2s ease; flex: 1; justify-content: center;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'" data-astro-cid-4vwujxvv>FB</a></div><!-- Success Message --><div id="copy-success" style="display: none; margin-top: 0.75rem; padding: 0.5rem 0.75rem; background: rgba(34, 197, 94, 0.1); border-left: 3px solid #22C55E; color: #166534; font-size: 0.75rem; font-weight: 500;" data-astro-cid-4vwujxvv>✅ Link disalin!</div></div></aside></section><script>
    document.addEventListener('DOMContentLoaded', function() {
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
              
              setTimeout(() => {
                successMsg.style.display = 'none';
                this.innerHTML = originalText;
                this.style.backgroundColor = '';
              }, 2000);
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
              setTimeout(() => {
                successMsg.style.display = 'none';
              }, 2000);
            }
          }
        });
      }
    });
  <\/script>` })}`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/journal/[slug].astro", void 0);
var $$file = "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/journal/[slug].astro";
var $$url = "/journal/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/journal/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
