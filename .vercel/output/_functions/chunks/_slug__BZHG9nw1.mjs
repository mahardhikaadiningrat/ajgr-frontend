import { n as createComponent, r as __exportAll, t as createAstro } from "./compiler_BGjCl2tC.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BidWz0RG.mjs";
import { i as urlFor, n as client, r as getSiteSettings, t as $$Layout } from "./Layout_CirPCQFK.mjs";
//#region src/pages/events/[slug].astro
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
	const event = await client.fetch(`*[_type == "event" && slug.current == $slug][0]{
  title, slug, startDate, endDate, category, location, description, poster, status, price, quota, registeredCount, registrationLink, contactPIC, meetingPoint, finishPoint, mapsLink
}`, { slug });
	if (!event) return Astro.redirect("/events");
	const settings = await getSiteSettings();
	function formatDate(dateStr) {
		return new Date(dateStr).toLocaleDateString("id-ID", {
			day: "numeric",
			month: "long",
			year: "numeric"
		});
	}
	function formatTime(dateStr) {
		return new Date(dateStr).toLocaleTimeString("id-ID", {
			hour: "2-digit",
			minute: "2-digit",
			timeZone: "Asia/Makassar"
		});
	}
	function formatDay(dateStr) {
		return new Date(dateStr).toLocaleDateString("id-ID", { weekday: "long" });
	}
	function formatPrice(price) {
		if (!price && price !== 0) return null;
		if (price === 0) return null;
		if (typeof price === "string" && price.toLowerCase() === "gratis") return "Gratis";
		if (typeof price === "number") {
			if (price === 0) return null;
			return "Rp " + price.toLocaleString("id-ID");
		}
		if (typeof price === "string") {
			const num = parseFloat(price.replace(/[^0-9]/g, ""));
			if (isNaN(num) || num === 0) return null;
			return "Rp " + num.toLocaleString("id-ID");
		}
		return null;
	}
	const displayPrice = formatPrice(event.price);
	function getGoogleCalendarUrl(event) {
		const startDate = new Date(event.startDate);
		const endDate = event.endDate ? new Date(event.endDate) : new Date(startDate.getTime() + 72e5);
		const formatDateForGCal = (date) => {
			return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
		};
		return "https://calendar.google.com/calendar/render?" + new URLSearchParams({
			action: "TEMPLATE",
			text: event.title,
			dates: formatDateForGCal(startDate) + "/" + formatDateForGCal(endDate),
			details: event.description || "",
			location: event.meetingPoint || event.finishPoint || event.location || ""
		}).toString();
	}
	const calendarUrl = getGoogleCalendarUrl(event);
	const currentCount = event.registeredCount || 0;
	const quota = event.quota || 0;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"settings": settings,
		"data-astro-cid-7s2tzxsd": true
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<nav style="padding: 2rem 0; border-bottom: 1px solid var(--border, #E5E5E5);" data-astro-cid-7s2tzxsd><a href="/events" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); text-decoration: none;" data-astro-cid-7s2tzxsd>← Back to Events</a></nav><section data-astro-cid-7s2tzxsd><div class="event-detail-grid" data-astro-cid-7s2tzxsd><!-- Left Column: Content + Poster --><div data-astro-cid-7s2tzxsd><!-- Category --><p style="font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 0.5rem;" data-astro-cid-7s2tzxsd>${event.category || "EVENT"}</p><!-- Title --><h1 style="font-family: 'Space Grotesk', sans-serif; font-size: 2.5rem; font-weight: 600; letter-spacing: -0.02em; color: var(--text, #111); margin-bottom: 1rem; line-height: 1.2;" data-astro-cid-7s2tzxsd>${event.title}</h1><!-- Description -->${event.description && renderTemplate`<div style="margin-bottom: 2rem;" data-astro-cid-7s2tzxsd><p style="font-size: 1rem; color: var(--text-muted, #666); line-height: 1.8; white-space: pre-wrap;" data-astro-cid-7s2tzxsd>${event.description}</p></div>`}<!-- POSTER DI BAWAH JUDUL -->${event.poster && renderTemplate`<div class="event-poster-inline" data-astro-cid-7s2tzxsd><img${addAttribute(urlFor(event.poster).width(1200).url(), "src")}${addAttribute(event.title, "alt")} data-astro-cid-7s2tzxsd></div>`}</div><!-- Right Column: Sidebar Info --><aside class="event-info-sidebar" data-astro-cid-7s2tzxsd><!-- Tanggal & Waktu --><div class="info-item" data-astro-cid-7s2tzxsd><p class="info-label" data-astro-cid-7s2tzxsd>📅 Tanggal & Waktu</p><p class="info-value" style="font-weight: 600;" data-astro-cid-7s2tzxsd>${formatDay(event.startDate)}, ${formatDate(event.startDate)}</p><p class="info-value" style="color: #666; margin-top: 0.25rem;" data-astro-cid-7s2tzxsd>${formatTime(event.startDate)} WITA</p></div><!-- Lokasi -->${event.location && renderTemplate`<div class="info-item" data-astro-cid-7s2tzxsd><p class="info-label" data-astro-cid-7s2tzxsd>📍 Lokasi</p><p class="info-value" data-astro-cid-7s2tzxsd>${event.location}</p></div>`}<!-- Titik Kumpul -->${event.meetingPoint && renderTemplate`<div class="info-item" data-astro-cid-7s2tzxsd><p class="info-label" data-astro-cid-7s2tzxsd>🚩 Titik Kumpul</p><p class="info-value" data-astro-cid-7s2tzxsd>${event.meetingPoint}</p></div>`}<!-- Titik Finish -->${event.finishPoint && renderTemplate`<div class="info-item" data-astro-cid-7s2tzxsd><p class="info-label" data-astro-cid-7s2tzxsd>🏁 Titik Finish</p><p class="info-value" data-astro-cid-7s2tzxsd>${event.finishPoint}</p></div>`}<!-- BIAYA: DINAMIS - Hanya tampil jika ada nilai valid (bukan 0, bukan kosong) -->${displayPrice && renderTemplate`<div class="info-item" data-astro-cid-7s2tzxsd><p class="info-label" data-astro-cid-7s2tzxsd>💰 Biaya</p><p class="info-value" style="font-size: 1.25rem; font-weight: 700;" data-astro-cid-7s2tzxsd>${displayPrice}</p></div>`}<!-- Kuota Peserta (FIREBASE) -->${event.quota && renderTemplate`<div class="info-item" data-astro-cid-7s2tzxsd><p class="info-label" data-astro-cid-7s2tzxsd> Kuota Peserta</p><p class="quota-display" id="firebase-quota"${addAttribute(event.slug.current, "data-slug")}${addAttribute(currentCount, "data-initial")} data-astro-cid-7s2tzxsd>${currentCount} / ${quota} peserta</p></div>`}<!-- Kontak PIC -->${event.contactPIC && renderTemplate`<div class="info-item" data-astro-cid-7s2tzxsd><p class="info-label" data-astro-cid-7s2tzxsd> Kontak PIC</p><p class="info-value" data-astro-cid-7s2tzxsd>${event.contactPIC}</p></div>`}<!-- Action Buttons -->${event.status === "open" && event.quota && renderTemplate`<button class="attend-btn" id="attend-btn-detail"${addAttribute(event.slug.current, "data-slug")}${addAttribute(quota, "data-quota")} data-astro-cid-7s2tzxsd>🙋 Saya akan hadir</button>`}<a${addAttribute(calendarUrl, "href")} target="_blank" rel="noopener noreferrer" class="calendar-btn" data-astro-cid-7s2tzxsd>📅 Tambah ke Google Calendar</a>${event.registrationLink && event.status !== "finished" && event.status !== "cancelled" && renderTemplate`<a${addAttribute(event.registrationLink, "href")} target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; text-align: center; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: var(--text, #111); text-decoration: none; padding: 1rem; margin-top: 1rem; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='var(--accent, #C84B8E)'" onmouseout="this.style.backgroundColor='var(--text, #111)'" data-astro-cid-7s2tzxsd>📝 Daftar Sekarang</a>`}</aside></div></section><script>
    document.addEventListener('DOMContentLoaded', function() {
      
      // 1. Load Firebase Compat SDKs
      const appScript = document.createElement('script');
      appScript.src = 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js';
      document.head.appendChild(appScript);

      const dbScript = document.createElement('script');
      dbScript.src = 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js';
      document.head.appendChild(dbScript);

      dbScript.onload = function() {
        console.log('✅ Firebase SDK Loaded');
        
        // 2. Konfigurasi Firebase
        const firebaseConfig = {
          apiKey: "AIzaSyBnwsQrgK-D_1GTEsl10WtIJdw180o-CtA",
          authDomain: "ajgr-events.firebaseapp.com",
          databaseURL: "https://ajgr-events-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "ajgr-events",
          storageBucket: "ajgr-events.appspot.com",
          messagingSenderId: "358289277112",
          appId: "1:358289277112:web:8a5e4a2961670fd144f44d"
        };

        // Inisialisasi
        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();
        console.log('✅ Firebase Initialized');

        // 3. Real-time Listener untuk Kuota
        const quotaDisplay = document.getElementById('firebase-quota');
        if (quotaDisplay) {
          const slug = quotaDisplay.getAttribute('data-slug');
          const initialCount = parseInt(quotaDisplay.getAttribute('data-initial')) || 0;
          const quota = parseInt(quotaDisplay.textContent.split('/')[1]?.trim()) || 25;

          const eventRef = database.ref('events/' + slug + '/attendeeCount');
          
          // Listen real-time
          eventRef.on('value', (snapshot) => {
            const count = snapshot.val() !== null ? snapshot.val() : initialCount;
            quotaDisplay.textContent = count + ' / ' + quota + ' peserta';
            
            if (count >= quota) {
              quotaDisplay.style.color = '#EF4444';
              quotaDisplay.style.fontWeight = '700';
            } else if (count > initialCount) {
              quotaDisplay.style.color = '#22C55E';
            }
          });
        }

        // 4. Logika Tombol "Saya akan hadir"
        const attendBtn = document.getElementById('attend-btn-detail');
        if (attendBtn) {
          const slug = attendBtn.getAttribute('data-slug');
          const quota = parseInt(attendBtn.getAttribute('data-quota'));
          const storageKey = 'ajgr_attended_' + slug;

          // Cek apakah sudah pernah klik di device ini
          if (localStorage.getItem(storageKey)) {
            markAsAttended(attendBtn);
          }

          attendBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            if (localStorage.getItem(storageKey)) return;

            // Loading state
            attendBtn.disabled = true;
            attendBtn.classList.add('loading');
            const originalHTML = attendBtn.innerHTML;
            attendBtn.innerHTML = '⏳ Memproses...';

            try {
              const countRef = database.ref('events/' + slug + '/attendeeCount');
              
              // Ambil nilai saat ini
              const snapshot = await countRef.once('value');
              const currentCount = snapshot.val() || 0;

              // Cek kuota
              if (currentCount >= quota) {
                alert('Maaf, kuota sudah penuh!');
                attendBtn.disabled = false;
                attendBtn.innerHTML = originalHTML;
                attendBtn.classList.remove('loading');
                return;
              }

              // Increment counter
              await countRef.set(currentCount + 1);
              
              // Simpan ke localStorage
              localStorage.setItem(storageKey, 'true');
              
              // Update UI
              markAsAttended(attendBtn);

            } catch (error) {
              console.error('❌ Error:', error);
              alert('Terjadi kesalahan: ' + error.message);
              attendBtn.disabled = false;
              attendBtn.innerHTML = originalHTML;
              attendBtn.classList.remove('loading');
            }
          });

          // Fungsi helper
          function markAsAttended(btn) {
            btn.innerHTML = '✓ ANDA SUDAH TERDAFTAR';
            btn.disabled = true;
            btn.classList.remove('loading');
          }
        }
      };

      dbScript.onerror = function() {
        console.error('❌ Gagal memuat Firebase SDK!');
      };
    });
  <\/script>` })}`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/events/[slug].astro", void 0);
var $$file = "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/events/[slug].astro";
var $$url = "/events/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/events/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
