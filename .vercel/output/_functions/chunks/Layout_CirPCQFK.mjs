import { n as createComponent, t as createAstro } from "./compiler_BGjCl2tC.mjs";
import { c as renderSlot, d as renderTemplate, h as createRenderInstruction, m as addAttribute, p as renderHead } from "./server_BidWz0RG.mjs";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
//#region node_modules/astro/dist/runtime/server/render/script.js
/**
* Relies on the `renderScript: true` compiler option
* @experimental
*/
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/lib/sanity.js
var client = createClient({
	projectId: "7aulmgx4",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: false
});
var builder = imageUrlBuilder(client);
function urlFor(source) {
	return builder.image(source);
}
async function getSiteSettings() {
	try {
		return await client.fetch(`*[_type == "siteSettings"][0]`) || null;
	} catch (error) {
		console.error("Error fetching site settings:", error);
		return null;
	}
}
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://ajergianyar.web.id");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { settings } = Astro.props || {};
	const siteTitle = settings?.siteTitle || "AJGR.cc";
	const footerCredit = settings?.footerCredit || "© 2026 AJGR.cc";
	settings?.themeColor;
	const menuItems = settings?.headerMenu || [
		{
			label: "HOME",
			link: "/"
		},
		{
			label: "JOURNAL",
			link: "/journal"
		},
		{
			label: "ARCHIVE",
			link: "/archive"
		},
		{
			label: "ROLODEX",
			link: "/rolodex"
		},
		{
			label: "EVENTS",
			link: "/events"
		},
		{
			label: "COMPARE",
			link: "/compare"
		},
		{
			label: "MARKETPLACE",
			link: "/marketplace"
		}
	];
	const logoUrl = settings?.logo ? urlFor(settings.logo).width(120).url() : null;
	return renderTemplate`<html lang="id" data-astro-cid-ju4pidww><head><!-- Google Search Console Verification --><meta name="google-site-verification=61RkIurk9f2WZDVKi9uCisEkc1ANDy9jZKfqSB3F3DA"><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-2QCG2GN1LH"><\/script>${renderScript($$result, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${siteTitle}</title><!-- Font Premium: Space Grotesk (Heading) & Inter (Body) --><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Favicon --><link rel="icon" type="image/png" href="/favicon.png"><link rel="shortcut icon" href="/favicon.ico">${renderHead($$result)}</head><body data-astro-cid-ju4pidww><header data-astro-cid-ju4pidww><div class="container" data-astro-cid-ju4pidww><a href="/" class="logo" data-astro-cid-ju4pidww>${logoUrl ? renderTemplate`<img${addAttribute(logoUrl, "src")} alt="Logo" class="logo-img" data-astro-cid-ju4pidww>` : renderTemplate`<span class="logo-text" data-astro-cid-ju4pidww>AJGR<span data-astro-cid-ju4pidww>.cc</span></span>`}</a><!-- Desktop Menu --><nav class="desktop-nav" data-astro-cid-ju4pidww><ul data-astro-cid-ju4pidww>${menuItems.map((item) => renderTemplate`<li data-astro-cid-ju4pidww><a${addAttribute(item.link, "href")} data-astro-cid-ju4pidww>${item.label}</a></li>`)}</ul></nav><!-- Hamburger Button (Mobile Only) --><button class="hamburger" id="hamburger-btn" aria-label="Toggle menu" data-astro-cid-ju4pidww><span data-astro-cid-ju4pidww></span><span data-astro-cid-ju4pidww></span><span data-astro-cid-ju4pidww></span></button></div></header><!-- Mobile Menu Overlay --><div class="mobile-menu" id="mobile-menu" data-astro-cid-ju4pidww><!-- Tombol Close (X) --><button class="mobile-menu-close" id="mobile-menu-close" aria-label="Tutup menu" data-astro-cid-ju4pidww><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ju4pidww><path d="M18 6L6 18M6 6L18 18" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ju4pidww></path></svg></button>${menuItems.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} class="mobile-link" data-astro-cid-ju4pidww>${item.label}</a>`)}</div><main data-astro-cid-ju4pidww>${renderSlot($$result, $$slots["default"])}</main><!-- FOOTER DENGAN "Follow Us on:" DAN SOSIAL MEDIA --><footer style="border-top: 1px solid var(--border, #E5E5E5); padding: 3rem 4rem; background: #FAFAFA;" data-astro-cid-ju4pidww><div class="footer-container" style="max-width: 1440px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;" data-astro-cid-ju4pidww><!-- Left: Copyright --><div class="footer-left" style="flex: 1; min-width: 200px;" data-astro-cid-ju4pidww><p style="font-size: 0.75rem; color: var(--text-muted, #666); letter-spacing: 0.1em; text-transform: uppercase; margin: 0; text-align: left;" data-astro-cid-ju4pidww>${footerCredit}</p></div><!-- Right: Social Media --><div class="footer-right" style="flex: 1; min-width: 200px; display: flex; justify-content: flex-end; align-items: center; gap: 1rem;" data-astro-cid-ju4pidww><p style="font-size: 0.75rem; color: var(--text-muted, #666); letter-spacing: 0.1em; text-transform: uppercase; margin: 0;" data-astro-cid-ju4pidww>Follow Us on:</p><!-- Wrapper Ikon Sosial Media (selalu horizontal) --><div class="social-icons" style="display: flex; gap: 0.75rem; align-items: center;" data-astro-cid-ju4pidww><!-- Instagram --><a href="https://www.instagram.com/ajgr.cc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram AJGR.cc" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border: 1px solid var(--border, #E5E5E5); border-radius: 50%; text-decoration: none; color: var(--text, #111); transition: all 0.3s ease;" onmouseover="this.style.borderColor='var(--accent, #C84B8E)'; this.style.backgroundColor='var(--accent, #C84B8E)'; this.style.color='white'" onmouseout="this.style.borderColor='var(--border, #E5E5E5)'; this.style.backgroundColor='transparent'; this.style.color='var(--text, #111)'" data-astro-cid-ju4pidww><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ju4pidww><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-astro-cid-ju4pidww></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-astro-cid-ju4pidww></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-astro-cid-ju4pidww></line></svg></a><!-- TikTok --><a href="https://www.tiktok.com/@ajgr.cc" target="_blank" rel="noopener noreferrer" aria-label="TikTok AJGR.cc" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border: 1px solid var(--border, #E5E5E5); border-radius: 50%; text-decoration: none; color: var(--text, #111); transition: all 0.3s ease;" onmouseover="this.style.borderColor='var(--accent, #C84B8E)'; this.style.backgroundColor='var(--accent, #C84B8E)'; this.style.color='white'" onmouseout="this.style.borderColor='var(--border, #E5E5E5)'; this.style.backgroundColor='transparent'; this.style.color='var(--text, #111)'" data-astro-cid-ju4pidww><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ju4pidww><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" data-astro-cid-ju4pidww></path></svg></a></div></div></div><!-- Responsive Styles untuk Footer --></footer><!-- Script untuk mengontrol Hamburger Menu --><script>
      const hamburgerBtn = document.getElementById('hamburger-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuClose = document.getElementById('mobile-menu-close');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      function openMenu() {
        hamburgerBtn.classList.add('active');
        mobileMenu.classList.add('active');
        document.body.classList.add('menu-open');
      }

      function closeMenu() {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      }

      function toggleMenu() {
        if (mobileMenu.classList.contains('active')) {
          closeMenu();
        } else {
          openMenu();
        }
      }

      if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMenu);
      }

      if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMenu);
      }

      // Tutup menu otomatis saat salah satu link diklik
      mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
      });

      // Tutup menu saat klik area di luar (overlay)
      if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
          if (e.target === mobileMenu) {
            closeMenu();
          }
        });
      }

      // Tutup menu saat tekan tombol ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
          closeMenu();
        }
      });
    <\/script></body></html>`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/layouts/Layout.astro", void 0);
//#endregion
export { urlFor as i, client as n, getSiteSettings as r, $$Layout as t };
