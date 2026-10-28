import { n as createComponent, r as __exportAll } from "./compiler_QtOIEW3x.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_B_rsFkcn.mjs";
import { n as client, r as getSiteSettings, t as $$Layout } from "./Layout_CmUN2yKh.mjs";
//#region src/pages/fitting.astro
var fitting_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Fitting,
	file: () => $$file,
	url: () => $$url
});
var $$Fitting = createComponent(async ($$result, $$props, $$slots) => {
	const settings = await getSiteSettings();
	const fittingTips = await client.fetch(`*[_type == "bikeFittingTips"][0]{
  roadBikeAdvice, mtbAdvice, generalAdvice
}`) || {
		roadBikeAdvice: "Untuk road bike, posisi saddle yang tepat sangat krusial untuk efisiensi kayuhan.",
		mtbAdvice: "Untuk MTB/Gravel, saddle biasanya diatur sedikit lebih rendah untuk ruang gerak.",
		generalAdvice: "Perhitungan ini adalah estimasi awal. Disarankan fitting langsung dengan profesional."
	};
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "settings": settings }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section style="padding: 6rem 0 4rem; border-bottom: 1px solid var(--border, #E5E5E5); text-align: center;"><span style="font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent, #C84B8E); margin-bottom: 1rem; display: block;">07 — BIKE FITTING</span><h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 600; letter-spacing: -0.03em; margin-top: 1rem; color: var(--text, #111);">Kalkulator Posisi Berkendara</h1><p style="margin-top: 1.5rem; font-size: 1.125rem; color: var(--text-muted, #666); max-width: 600px; line-height: 1.6; margin-left: auto; margin-right: auto;">Dapatkan rekomendasi awal pengaturan saddle, handlebar, dan ukuran frame berdasarkan dimensi tubuh dan jenis sepeda Anda.</p></section><section style="padding: 4rem 0 6rem; max-width: 800px; margin: 0 auto; padding-left: 1.5rem; padding-right: 1.5rem;"><!-- STEP 1: FORM INPUT --><div id="fitting-form" style="border: 1px solid var(--border, #E5E5E5); padding: 2.5rem; border-radius: 4px; background: #FAFAFA;"><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; margin-bottom: 2rem; color: var(--text, #111);">1. Masukkan Data Anda</h2><div style="display: grid; gap: 1.5rem;"><!-- Jenis Sepeda --><div><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;">Jenis Sepeda</label><select id="bikeType" style="width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border, #E5E5E5); background: white; font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem;"><option value="road">Road Bike (Sepeda Jalan)</option><option value="mtb">MTB / Gravel / City Bike</option></select></div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;"><!-- Tinggi Badan --><div><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;">Tinggi Badan (cm)</label><input type="number" id="height" placeholder="Contoh: 170" style="width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border, #E5E5E5); background: white; font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem;"></div><!-- Inseam --><div><label style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted, #666); margin-bottom: 0.5rem;">Panjang Inseam (cm) *</label><input type="number" id="inseam" placeholder="Contoh: 80" style="width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border, #E5E5E5); background: white; font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem;"><p style="font-size: 0.7rem; color: #999; margin-top: 0.25rem;">* Jarak dari selangkangan ke lantai</p></div></div><button onclick="calculateFitting()" style="width: 100%; padding: 1rem; background: var(--text, #111); color: white; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; border: none; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.backgroundColor='var(--accent, #C84B8E)'" onmouseout="this.style.backgroundColor='var(--text, #111)'">Hitung Rekomendasi Fitting →</button></div></div><!-- STEP 2: HASIL (Tersembunyi Awalnya) --><div id="fitting-result" style="display: none; margin-top: 2rem;"><div style="border: 1px solid var(--accent, #C84B8E); padding: 2.5rem; border-radius: 4px; background: white; position: relative;"><button onclick="resetForm()" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 0.75rem; color: var(--text-muted, #666); cursor: pointer; text-decoration: underline;">Hitung Ulang</button><h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--accent, #C84B8E);">Hasil Rekomendasi Anda</h2><p id="res-summary" style="font-size: 0.9rem; color: var(--text-muted, #666); margin-bottom: 2rem;"></p><!-- UKURAN FRAME REKOMENDASI --><div style="background: linear-gradient(135deg, #C84B8E 0%, #E8C547 100%); padding: 2rem; border-radius: 4px; margin-bottom: 2rem; color: white;"><p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 0.5rem; opacity: 0.9;"> Rekomendasi Ukuran Frame</p><p id="res-frame-size" style="font-family: 'Space Grotesk', sans-serif; font-size: 2.5rem; font-weight: 700; margin-bottom: 0.25rem;">- </p><p id="res-frame-note" style="font-size: 0.85rem; opacity: 0.95;"></p></div><!-- METRIK FITTING --><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;"><div style="padding: 1.5rem; background: #FAFAFA; border: 1px solid var(--border, #E5E5E5); border-radius: 4px;"><p style="font-size: 0.7rem; text-transform: uppercase; color: #999; margin-bottom: 0.5rem; letter-spacing: 0.05em;">Tinggi Saddle (dari BB)</p><p id="res-saddle" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.75rem; font-weight: 700; color: var(--text, #111);">- cm</p></div><div style="padding: 1.5rem; background: #FAFAFA; border: 1px solid var(--border, #E5E5E5); border-radius: 4px;"><p style="font-size: 0.7rem; text-transform: uppercase; color: #999; margin-bottom: 0.5rem; letter-spacing: 0.05em;">Posisi Saddle (Maju/Mundur)</p><p id="res-setback" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 600; color: var(--text, #111);">Netral</p></div><div style="padding: 1.5rem; background: #FAFAFA; border: 1px solid var(--border, #E5E5E5); border-radius: 4px;"><p style="font-size: 0.7rem; text-transform: uppercase; color: #999; margin-bottom: 0.5rem; letter-spacing: 0.05em;">Estimasi Drop Handlebar</p><p id="res-drop" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 600; color: var(--text, #111);">- cm</p></div></div><div style="border-top: 1px solid var(--border, #E5E5E5); padding-top: 1.5rem;"><h3 style="font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text, #111); margin-bottom: 0.75rem;"> Catatan Ahli:</h3><p id="res-advice" style="font-size: 0.9rem; color: var(--text-muted, #666); line-height: 1.6; font-style: italic;"></p><p style="font-size: 0.75rem; color: #999; margin-top: 1rem; border-top: 1px dashed var(--border, #E5E5E5); padding-top: 1rem;">${fittingTips.generalAdvice}</p></div></div></div></section>` })}<script>
  function calculateFitting() {
    const bikeTypeElement = document.getElementById('bikeType');
    const heightElement = document.getElementById('height');
    const inseamElement = document.getElementById('inseam');
    
    if (!bikeTypeElement || !heightElement || !inseamElement) {
      alert('Form tidak ditemukan. Silakan refresh halaman.');
      return;
    }

    const bikeType = bikeTypeElement.value;
    const height = parseFloat(heightElement.value);
    const inseam = parseFloat(inseamElement.value);

    if (!height || !inseam) {
      alert('Mohon isi Tinggi Badan dan Panjang Inseam dengan benar.');
      return;
    }

    // === PERHITUNGAN FITTING ===
    let saddleHeight = '';
    let setback = 'Netral (tengah rel)';
    let drop = '';
    let frameSize = '';
    let frameNote = '';
    let advice = '';
    let summary = '';

    if (bikeType === 'road') {
      // Road Bike
      saddleHeight = (inseam * 0.883).toFixed(1);
      drop = (height * 0.06).toFixed(1);
      setback = 'Sedikit ke belakang dari BB';
      advice = 'Untuk road bike, posisi saddle yang tepat sangat krusial untuk efisiensi kayuhan. Pastikan lutut tidak terlalu lurus (lock) di bagian bawah kayuhan. Drop handlebar yang lebih besar memberikan posisi aerodinamis.';
      summary = 'Road Bike · Tinggi ' + height + 'cm · Inseam ' + inseam + 'cm';

      // Ukuran Frame Road Bike (cm)
      if (height < 160) {
        frameSize = '48 - 50 cm';
        frameNote = 'Ukuran XS - S · Cocok untuk tinggi badan di bawah 160cm';
      } else if (height < 170) {
        frameSize = '51 - 53 cm';
        frameNote = 'Ukuran S - M · Cocok untuk tinggi badan 160-170cm';
      } else if (height < 180) {
        frameSize = '54 - 56 cm';
        frameNote = 'Ukuran M - L · Cocok untuk tinggi badan 170-180cm';
      } else if (height < 190) {
        frameSize = '57 - 59 cm';
        frameNote = 'Ukuran L - XL · Cocok untuk tinggi badan 180-190cm';
      } else {
        frameSize = '60+ cm';
        frameNote = 'Ukuran XXL · Cocok untuk tinggi badan di atas 190cm';
      }
    } else {
      // MTB/Gravel
      saddleHeight = (inseam * 0.885).toFixed(1);
      drop = (height * 0.03).toFixed(1);
      setback = 'Netral atau sedikit ke depan';
      advice = 'Untuk MTB/Gravel, saddle biasanya diatur sedikit lebih rendah dari road bike untuk memberikan ruang gerak tubuh saat menghadapi medan teknis dan turunan. Handlebar flat memberikan kontrol lebih baik.';
      summary = 'MTB / Gravel · Tinggi ' + height + 'cm · Inseam ' + inseam + 'cm';

      // Ukuran Frame MTB Vintage (inch)
      if (height < 160) {
        frameSize = '15"';
        frameNote = 'Ukuran XS · Cocok untuk tinggi badan di bawah 160cm';
      } else if (height < 170) {
        frameSize = '17 - 18"';
        frameNote = 'Ukuran S - M · Cocok untuk tinggi badan 160-170cm';
      } else if (height < 180) {
        frameSize = '19 - 20"';
        frameNote = 'Ukuran M - L · Cocok untuk tinggi badan 170-180cm';
      } else if (height < 190) {
        frameSize = '21 - 22"';
        frameNote = 'Ukuran L - XL · Cocok untuk tinggi badan 180-190cm';
      } else {
        frameSize = '23"';
        frameNote = 'Ukuran XXL · Cocok untuk tinggi badan di atas 190cm';
      }
    }

    // === TAMPILKAN HASIL ===
    const saddleEl = document.getElementById('res-saddle');
    const setbackEl = document.getElementById('res-setback');
    const dropEl = document.getElementById('res-drop');
    const adviceEl = document.getElementById('res-advice');
    const frameSizeEl = document.getElementById('res-frame-size');
    const frameNoteEl = document.getElementById('res-frame-note');
    const summaryEl = document.getElementById('res-summary');
    const fittingForm = document.getElementById('fitting-form');
    const fittingResult = document.getElementById('fitting-result');

    if (saddleEl) saddleEl.innerText = saddleHeight + ' cm';
    if (setbackEl) setbackEl.innerText = setback;
    if (dropEl) dropEl.innerText = drop + ' cm';
    if (adviceEl) adviceEl.innerText = advice;
    if (frameSizeEl) frameSizeEl.innerText = frameSize;
    if (frameNoteEl) frameNoteEl.innerText = frameNote;
    if (summaryEl) summaryEl.innerText = summary;

    if (fittingForm) fittingForm.style.display = 'none';
    if (fittingResult) {
      fittingResult.style.display = 'block';
      fittingResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function resetForm() {
    const fittingForm = document.getElementById('fitting-form');
    const fittingResult = document.getElementById('fitting-result');
    const heightInput = document.getElementById('height');
    const inseamInput = document.getElementById('inseam');

    if (fittingResult) fittingResult.style.display = 'none';
    if (fittingForm) fittingForm.style.display = 'block';
    if (heightInput) heightInput.value = '';
    if (inseamInput) inseamInput.value = '';
  }
<\/script>`;
}, "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/fitting.astro", void 0);
var $$file = "/Users/kenakmedika/Desktop/ajgr-project/astro-frontend/src/pages/fitting.astro";
var $$url = "/fitting";
//#endregion
//#region \0virtual:astro:page:src/pages/fitting@_@astro
var page = () => fitting_exports;
//#endregion
export { page };
