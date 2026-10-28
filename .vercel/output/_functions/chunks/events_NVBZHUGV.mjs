import { n as createComponent, r as __exportAll } from "./compiler_BGjCl2tC.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_BidWz0RG.mjs";
import { i as urlFor, n as client, r as getSiteSettings, t as $$Layout } from "./Layout_CirPCQFK.mjs";
//#region src/pages/events.astro
var events_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Events,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Events = createComponent(async ($$result, $$props, $$slots) => {
	const settings = await getSiteSettings();
	const eventsSettings = settings?.eventsSection || {};
	const eventsLabel = eventsSettings.label || "05 — CALENDAR";
	const eventsTitle = eventsSettings.title || "Upcoming Events";
	const eventsDescription = eventsSettings.description || "Agenda kegiatan, gowes bersama, dan event komunitas AJGR.cc.";
	const events = await client.fetch(`*[_type == "event"] | order(startDate asc){
  title, slug, startDate, endDate, category, location, description, poster, status, price, quota, registeredCount, registrationLink, contactPIC, meetingPoint, finishPoint, isFeatured
}`);
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
	function getStatusBadge(status) {
		const statusMap = {
			"coming-soon": {
				label: "COMING SOON",
				color: "#E8C547",
				bg: "rgba(232, 197, 71, 0.1)"
			},
			"open": {
				label: "OPEN REGISTRATION",
				color: "#22C55E",
				bg: "rgba(34, 197, 94, 0.1)"
			},
			"full": {
				label: "FULL",
				color: "#EF4444",
				bg: "rgba(239, 68, 68, 0.1)"
			},
			"finished": {
				label: "SELESAI",
				color: "#6B7280",
				bg: "rgba(107, 114, 128, 0.1)"
			},
			"cancelled": {
				label: "DIBATALKAN",
				color: "#6B7280",
				bg: "rgba(107, 114, 128, 0.1)"
			}
		};
		return statusMap[status] || statusMap["coming-soon"];
	}
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
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"settings": settings,
		"data-astro-cid-pbeyvqpm": true
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<section style="padding: 6rem 0 4rem; border-bottom: 1px solid var(--border, #E5E5E5);" data-astro-cid-pbeyvqpm><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 1rem; display: block;" data-astro-cid-pbeyvqpm>${eventsLabel}</span><h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 600; letter-spacing: -0.03em; margin-top: 1rem; color: var(--text, #111111);" data-astro-cid-pbeyvqpm>${eventsTitle}</h1><p style="margin-top: 1.5rem; font-size: 1.125rem; color: var(--text-muted, #666666); max-width: 600px; line-height: 1.6;" data-astro-cid-pbeyvqpm>${eventsDescription}</p></section><section style="padding: 4rem 0 6rem;" data-astro-cid-pbeyvqpm>${events.length > 0 ? renderTemplate`<div style="display: flex; flex-direction: column; gap: 0; border-top: 1px solid var(--border, #E5E5E5); border-left: 1px solid var(--border, #E5E5E5);" data-astro-cid-pbeyvqpm>${events.map((event) => {
		const badge = getStatusBadge(event.status);
		const currentCount = event.registeredCount || 0;
		const quota = event.quota || 0;
		const calendarUrl = getGoogleCalendarUrl(event);
		return renderTemplate`<article class="event-card" onmouseover="this.style.backgroundColor='#F8F8F8'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-pbeyvqpm><!-- Left Column: Poster Dinamis --><div data-astro-cid-pbeyvqpm><div class="event-poster" data-astro-cid-pbeyvqpm>${event.poster ? renderTemplate`<img${addAttribute(urlFor(event.poster).width(800).url(), "src")}${addAttribute(event.title, "alt")} data-astro-cid-pbeyvqpm>` : renderTemplate`<div style="aspect-ratio: 1/1; background: linear-gradient(135deg, #C84B8E 0%, #E8C547 100%); display: flex; align-items: center; justify-content: center;" data-astro-cid-pbeyvqpm><span style="font-size: 3rem; color: white;" data-astro-cid-pbeyvqpm>📅</span></div>`}</div></div><!-- Right Column: Content --><div data-astro-cid-pbeyvqpm><!-- Category --><p style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 0.5rem;" data-astro-cid-pbeyvqpm>${event.category || "EVENT"}</p><!-- Title --><a${addAttribute(`/events/${event.slug.current}`, "href")} style="text-decoration: none; color: inherit; display: block; margin-bottom: 1rem;" data-astro-cid-pbeyvqpm><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 2rem; font-weight: 600; letter-spacing: -0.02em; color: var(--text, #111111); line-height: 1.2; transition: color 0.2s;" onmouseover="this.style.color='var(--accent, #C84B8E)'" onmouseout="this.style.color='var(--text, #111111)'" data-astro-cid-pbeyvqpm>${event.title}</h2></a><!-- Description -->${event.description && renderTemplate`<p style="font-size: 1rem; color: var(--text-muted, #666666); line-height: 1.7; margin-bottom: 1.5rem;" data-astro-cid-pbeyvqpm>${event.description}</p>`}<!-- Status Badge --><div style="margin-bottom: 2rem;" data-astro-cid-pbeyvqpm><span style="display: inline-block; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: {badge.color}; background: {badge.bg}; padding: 0.5rem 1rem;" data-astro-cid-pbeyvqpm>${badge.label}</span></div><!-- Info Grid --><div class="event-info-grid" style="margin-bottom: 2rem; padding: 2rem; background: #FAFAFA; border: 1px solid var(--border, #E5E5E5);" data-astro-cid-pbeyvqpm><!-- Tanggal & Waktu --><div class="event-info-item" data-astro-cid-pbeyvqpm><p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #666; margin-bottom: 0.75rem; font-weight: 600;" data-astro-cid-pbeyvqpm>📅 Tanggal & Waktu</p><p style="font-size: 1rem; color: #111; font-weight: 600; margin-bottom: 0.25rem; line-height: 1.4;" data-astro-cid-pbeyvqpm>${formatDate(event.startDate)}</p><p style="font-size: 0.95rem; color: #666; font-weight: 400;" data-astro-cid-pbeyvqpm>${formatTime(event.startDate)} WITA</p></div><!-- Titik Kumpul -->${event.meetingPoint && renderTemplate`<div class="event-info-item" data-astro-cid-pbeyvqpm><p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #666; margin-bottom: 0.75rem; font-weight: 600;" data-astro-cid-pbeyvqpm>📍 Titik Kumpul</p><p style="font-size: 1rem; color: #111; font-weight: 500; word-break: break-word; line-height: 1.5;" data-astro-cid-pbeyvqpm>${event.meetingPoint}</p></div>`}<!-- Titik Finish -->${event.finishPoint && renderTemplate`<div class="event-info-item" data-astro-cid-pbeyvqpm><p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #666; margin-bottom: 0.75rem; font-weight: 600;" data-astro-cid-pbeyvqpm>🏁 Titik Finish</p><p style="font-size: 1rem; color: #111; font-weight: 500; word-break: break-word; line-height: 1.5;" data-astro-cid-pbeyvqpm>${event.finishPoint}</p></div>`}<!-- Kuota Peserta (DENGAN ID UNTUK FIREBASE) -->${event.quota && renderTemplate`<div class="event-info-item" data-astro-cid-pbeyvqpm><p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #666; margin-bottom: 0.75rem; font-weight: 600;" data-astro-cid-pbeyvqpm>👥 Kuota Peserta</p><p class="quota-display"${addAttribute(event.slug.current, "data-slug")}${addAttribute(currentCount, "data-initial")} style="font-size: 1rem; color: #111; font-weight: 600;" data-astro-cid-pbeyvqpm>${currentCount} / ${quota} peserta</p></div>`}<!-- Kontak PIC -->${event.contactPIC && renderTemplate`<div class="event-info-item" data-astro-cid-pbeyvqpm><p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #666; margin-bottom: 0.75rem; font-weight: 600;" data-astro-cid-pbeyvqpm>📞 Kontak PIC</p><p style="font-size: 0.95rem; color: #111; font-weight: 500; word-break: break-word;" data-astro-cid-pbeyvqpm>${event.contactPIC}</p></div>`}</div><!-- Action Buttons --><div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;" data-astro-cid-pbeyvqpm>${event.registrationLink && event.status !== "finished" && event.status !== "cancelled" && renderTemplate`<a${addAttribute(event.registrationLink, "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: var(--text, #111111); text-decoration: none; padding: 1rem 1.5rem; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='var(--accent, #C84B8E)'" onmouseout="this.style.backgroundColor='var(--text, #111111)'" data-astro-cid-pbeyvqpm>📝 Daftar Sekarang</a>`}<!-- ADD TO CALENDAR -->${event.status !== "finished" && event.status !== "cancelled" && renderTemplate`<a${addAttribute(calendarUrl, "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: white; background: #4285F4; text-decoration: none; padding: 1rem 1.5rem; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='#3367D6'" onmouseout="this.style.backgroundColor='#4285F4'" data-astro-cid-pbeyvqpm>📅 Add to Calendar</a>`}<!-- TOMBOL SAYA AKAN HADIR (FIREBASE) -->${event.status === "open" && event.quota && renderTemplate`<button class="attend-btn"${addAttribute(event.slug.current, "data-slug")}${addAttribute(quota, "data-quota")} data-astro-cid-pbeyvqpm>🙋 Saya akan hadir</button>`}${event.mapsLink && renderTemplate`<a${addAttribute(event.mapsLink, "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111111); text-decoration: none; border: 1px solid var(--text, #111111); padding: 1rem 1.5rem; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='var(--text, #111111)'; this.style.color='#FAFAFA'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--text, #111111)'" data-astro-cid-pbeyvqpm>🗺️ Lihat Peta Rute</a>`}</div></div></article>`;
	})}</div>` : renderTemplate`<div style="text-align: center; padding: 6rem 2rem; border: 1px solid var(--border, #E5E5E5);" data-astro-cid-pbeyvqpm><p style="font-family: 'Space Grotesk', sans-serif; font-size: 2rem; font-weight: 600; color: var(--text, #111111); margin-bottom: 0.5rem;" data-astro-cid-pbeyvqpm>Belum Ada Event</p><p style="color: var(--text-muted, #666666); font-size: 0.9rem;" data-astro-cid-pbeyvqpm>Jadwal kegiatan akan segera diumumkan. Stay tuned!</p></div>`}</section><script>
    document.addEventListener('DOMContentLoaded', function() {
      
      // 1. Load Firebase Compat SDKs secara dinamis
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
        const quotaDisplays = document.querySelectorAll('.quota-display');
        console.log('Ditemukan ' + quotaDisplays.length + ' elemen kuota');
        
        quotaDisplays.forEach(display => {
          const slug = display.getAttribute('data-slug');
          const initialCount = parseInt(display.getAttribute('data-initial')) || 0;
          
          // Ambil quota dari tombol di card yang sama
          const card = display.closest('.event-card');
          const attendBtn = card ? card.querySelector('.attend-btn') : null;
          const quota = attendBtn ? parseInt(attendBtn.getAttribute('data-quota')) : 25;

          const eventRef = database.ref('events/' + slug + '/attendeeCount');
          
          // Listen real-time
          eventRef.on('value', (snapshot) => {
            const count = snapshot.val() !== null ? snapshot.val() : initialCount;
            display.textContent = count + ' / ' + quota + ' peserta';
            
            if (count >= quota) {
              display.style.color = '#EF4444';
              display.style.fontWeight = '700';
            } else if (count > initialCount) {
              display.style.color = '#22C55E';
            }
          });
        });

        // 4. Logika Tombol "Saya akan hadir"
        const buttons = document.querySelectorAll('.attend-btn');
        console.log('Ditemukan ' + buttons.length + ' tombol hadir');
        
        buttons.forEach(btn => {
          const slug = btn.getAttribute('data-slug');
          const quota = parseInt(btn.getAttribute('data-quota'));
          const storageKey = 'ajgr_attended_' + slug;

          // Cek apakah sudah pernah klik di device ini
          if (localStorage.getItem(storageKey)) {
            markAsAttended(btn);
            return;
          }

          btn.addEventListener('click', async function(e) {
            e.preventDefault();
            if (localStorage.getItem(storageKey)) return;

            // Loading state
            btn.disabled = true;
            btn.classList.add('loading');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '⏳ Memproses...';

            try {
              const countRef = database.ref('events/' + slug + '/attendeeCount');
              
              // Ambil nilai saat ini
              const snapshot = await countRef.once('value');
              const currentCount = snapshot.val() || 0;

              // Cek kuota
              if (currentCount >= quota) {
                alert('Maaf, kuota sudah penuh!');
                btn.disabled = false;
                btn.innerHTML = originalHTML;
                btn.classList.remove('loading');
                return;
              }

              // Increment counter
              await countRef.set(currentCount + 1);
              
              // Simpan ke localStorage
              localStorage.setItem(storageKey, 'true');
              
              // Update UI
              markAsAttended(btn);

            } catch (error) {
              console.error('❌ Error:', error);
              alert('Terjadi kesalahan: ' + error.message);
              btn.disabled = false;
              btn.innerHTML = originalHTML;
              btn.classList.remove('loading');
            }
          });
        });

        // Fungsi helper untuk menandai tombol
        function markAsAttended(btn) {
          btn.innerHTML = '✓ ANDA SUDAH TERDAFTAR';
          btn.disabled = true;
          // Style sudah dihandle oleh CSS .attend-btn:disabled
          btn.classList.remove('loading');
        }
      };

      dbScript.onerror = function() {
        console.error('❌ Gagal memuat Firebase SDK!');
      };
    });
  <\/script>` })}`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/events.astro", void 0);
var $$file = "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/events.astro";
var $$url = "/events";
//#endregion
//#region \0virtual:astro:page:src/pages/events@_@astro
var page = () => events_exports;
//#endregion
export { page };
