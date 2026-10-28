import { n as createComponent, r as __exportAll } from "./compiler_QtOIEW3x.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_B_rsFkcn.mjs";
import { n as client, r as getSiteSettings, t as $$Layout } from "./Layout_CmUN2yKh.mjs";
//#region src/pages/rolodex.astro
var rolodex_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Rolodex,
	file: () => $$file,
	url: () => $$url
});
var $$Rolodex = createComponent(async ($$result, $$props, $$slots) => {
	const settings = await getSiteSettings();
	const rolodexSettings = settings?.rolodexSection || {};
	const rolodexLabel = rolodexSettings.label || "01 — DIRECTORY";
	const rolodexTitle = rolodexSettings.title || "The Rolodex";
	const rolodexDescription = rolodexSettings.description || "Direktori toko, builder, dan komunitas sepeda di Gianyar dan sekitarnya.";
	const sellers = await client.fetch(`*[_type == "seller"] | order(name asc){
  name,
  slug,
  category,
  address,
  whatsapp
}`);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "settings": settings }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section style="padding: 6rem 0 4rem; border-bottom: 1px solid var(--border, #E5E5E5);"><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 1rem; display: block;">${rolodexLabel}</span><h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 600; letter-spacing: -0.03em; margin-top: 1rem; color: var(--text, #111111);">${rolodexTitle}</h1><p style="margin-top: 1.5rem; font-size: 1.125rem; color: var(--text-muted, #666666); max-width: 600px; line-height: 1.6;">${rolodexDescription}</p></section><section style="padding: 4rem 0 6rem;"><div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 0; border-top: 1px solid var(--border, #E5E5E5); border-left: 1px solid var(--border, #E5E5E5);">${sellers.map((seller) => renderTemplate`<article style="border-right: 1px solid var(--border, #E5E5E5); border-bottom: 1px solid var(--border, #E5E5E5); padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#F5F5F5'" onmouseout="this.style.backgroundColor='transparent'"><div><span style="font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 1rem; display: block;">${seller.category || "COMMUNITY"}</span><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; letter-spacing: -0.02em; color: var(--text, #111111); margin-bottom: 1rem; line-height: 1.2;">${seller.name}</h2>${seller.address && renderTemplate`<p style="font-size: 0.9rem; color: var(--text-muted, #666666); line-height: 1.6; margin-bottom: 1.5rem;">${seller.address}</p>`}</div>${seller.whatsapp && renderTemplate`<a${addAttribute(`https://wa.me/${seller.whatsapp}`, "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 1rem; font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111111); text-decoration: none; border: 1px solid var(--text, #111111); padding: 0.75rem 1.25rem; transition: all 0.2s ease; width: fit-content;" onmouseover="this.style.backgroundColor='var(--text, #111111)'; this.style.color='#FAFAFA'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--text, #111111)'"><span>💬</span> Contact via WhatsApp</a>`}</article>`)}</div>${sellers.length === 0 && renderTemplate`<div style="text-align: center; padding: 6rem 2rem; border: 1px solid var(--border, #E5E5E5); margin-top: 2rem;"><p style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; color: var(--text, #111111); margin-bottom: 0.5rem;">Coming Soon</p><p style="color: var(--text-muted, #666666); font-size: 0.9rem;">Direktori sedang dalam penyusunan oleh tim AJGR.cc.</p></div>`}</section>` })}`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/rolodex.astro", void 0);
var $$file = "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/rolodex.astro";
var $$url = "/rolodex";
//#endregion
//#region \0virtual:astro:page:src/pages/rolodex@_@astro
var page = () => rolodex_exports;
//#endregion
export { page };
