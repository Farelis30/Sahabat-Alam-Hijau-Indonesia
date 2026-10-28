/* ===== Data berita (ringkasan pemberitaan media; klik untuk membaca sumber asli) ===== */
const NEWS = [
  {
    scene: "s-dawn",
    cat: "Konferensi Pers",
    src: "Akurat.co",
    date: "20 Okt 2026",
    title:
      "SAHI pertanyakan dasar hukum penggunaan kawasan sebelum PPKH terbit",
    text: "Dalam konferensi pers di Jakarta Selatan, SAHI meminta jawaban beserta dokumen resmi terkait penggunaan kawasan hutan lindung mangrove di Konawe Selatan.",
    url: "https://www.akurat.co/hukum/900059/memanas-sahi-tantang-ifishdeco-buka-dokumen-ippkh-usai-bantah-tuduhan-perusakan-hutan-lindung",
  },
  {
    scene: "s-forest",
    cat: "Tanggapan",
    src: "Poskota",
    date: "Okt 2026",
    title:
      "Perusahaan sebut penggunaan kawasan dibatasi 0,25 hektare, SAHI minta dokumen dibuka",
    text: "Pihak perusahaan menyatakan terbuka terhadap pengawasan dan mengklaim memiliki persetujuan penggunaan kawasan hutan. SAHI menegaskan tetap menunggu dokumen resminya.",
    url: "https://poskota.co/hukum-kriminal/memanas-sahi-tantang-ifishdeco-tbk-buka-dokumen-ippkh-usai-bantah-tuduhan-perusakan-hutan-lindung/",
  },
  {
    scene: "s-mangrove",
    cat: "Investigasi",
    src: "JawaPos",
    date: "Okt 2026",
    title:
      "2.500 meter persegi mangrove di Konawe Selatan disebut berubah menjadi jalan hauling",
    text: "SAHI memaparkan data peta kawasan hutan dan citra satelit 2026 sebagai dasar temuan hilangnya mangrove di Desa Wadonggo, Kecamatan Tinanggea.",
    url: "https://www.jawapos.com/berita-daerah/2610190400/2500-meter-mangrove-di-konawe-selatan-jadi-jalan-hauling-nikel-sahi-pertanyakan-ppkh?page=all",
  },
  {
    scene: "s-mangrove",
    cat: "Laporan Hukum",
    src: "JawaPos",
    date: "16 Okt 2026",
    title:
      "SAHI laporkan dugaan perusakan hutan lindung mangrove ke Kejaksaan Agung",
    text: "Laporan pengaduan masyarakat bernomor SAHI-DUMAS/01/16/10/2026 menyoroti dugaan pembukaan jalur hauling di kawasan hutan lindung mangrove Sulawesi Tenggara.",
    url: "https://www.jawapos.com/berita-daerah/2610170378/mangrove-konawe-selatan-diduga-dibobol-sahi-lapor-ke-kejaksaan-agung?page=all",
  },
  {
    scene: "s-dawn",
    cat: "Laporan Hukum",
    src: "Suara Karya",
    date: "Okt 2026",
    title:
      "SAHI minta Kejaksaan Agung ambil tindakan tegas atas dugaan perusakan mangrove",
    text: "SAHI menyoroti adanya papan peringatan dan segel dari Gakkum Kemenhut di lokasi, sementara aktivitas pengangkutan disebut masih berjalan.",
    url: "https://www.suarakarya.id/hukum/26017774979/sahi-soroti-tindakan-perusakan-mangrove-di-konawe-selatan-minta-kejaksaan-agung-ambil-tindakan-tegas",
  },
  {
    scene: "s-forest",
    cat: "Advokasi",
    src: "Suara Karya",
    date: "Okt 2026",
    title: "SAHI berencana membawa persoalan mangrove Konawe Selatan ke KPK",
    text: "SAHI menilai ada potensi kerugian negara dari alih fungsi hutan lindung mangrove dan meragukan keabsahan persetujuan penggunaan kawasan yang diklaim.",
    url: "https://www.suarakarya.id/hukum/26017780497/sahi-bakal-adukan-pt-ifishdeco-tbkifsh-ke-kpk-diragukan-keabsahan-ppkh-miliknya-di-lokasi-hutan-lindung-mangrove",
  },
  {
    scene: "s-mangrove",
    cat: "Pemberitaan",
    src: "Sinar Harapan",
    date: "Okt 2026",
    title:
      "Dugaan pembobolan hutan lindung mangrove di Konawe Selatan dilaporkan ke Kejagung",
    text: "Pelapor menilai temuan di lokasi sebagai indikasi ketidakpatuhan terhadap tindakan penegakan hukum negara di sektor pertambangan nikel.",
    url: "https://www.sinarharapan.net/pt-ifishdeco-tbk-ifsh-diduga-bobol-hutan-lindung-mangrove-di-konawe-selatan/",
  },
  {
    scene: "s-forest",
    cat: "Pemberitaan",
    src: "Poskota",
    date: "Okt 2026",
    title:
      "Papan segel Gakkum berdiri di kawasan mangrove, jalur sepanjang ±150 meter dipersoalkan",
    text: "Jalur yang menuju pelabuhan bongkar muat itu dipersoalkan SAHI karena berada di kawasan hutan lindung yang telah diberi papan larangan.",
    url: "https://poskota.co/daerah/segel-negara-diabaikan-pt-ifishdeco-tbk-ifsh-diduga-bobol-hutan-lindung-mangrove-di-konawe-selatan/",
  },
  {
    scene: "s-dawn",
    cat: "Pemberitaan",
    src: "Akurat.co",
    date: "Okt 2026",
    title:
      "Segel negara diabaikan? SAHI soroti aktivitas di hutan lindung mangrove Wadonggo",
    text: "Laporan tersebut menjadi bagian dari upaya SAHI mengawal penegakan hukum atas dugaan pelanggaran di kawasan hutan lindung Sulawesi Tenggara.",
    url: "https://www.akurat.co/hukum/899440/segel-negara-diabaikan-pt-ifsh-diduga-bobol-hutan-lindung-mangrove-di-konawe-selatan",
  },
];
/* Tambah item baru ke array di atas; jumlah halaman menyesuaikan otomatis. */

const PER = 3;
let page = 1,
  showAll = false;
const grid = document.getElementById("newsGrid");
const pager = document.getElementById("pager");
const arrow =
  '<svg viewBox="0 0 22 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6h19M15 1l5 5-5 5"/></svg>';
const arrowL =
  '<svg viewBox="0 0 22 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 6H2M7 1L2 6l5 5"/></svg>';

function card(n) {
  return `<article class="ncard">
    <div class="img"><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><use href="#${n.scene}"/></svg></div>
    <div class="body">
      <div class="meta"><b>${n.cat}</b><span>${n.src}</span><span>${n.date}</span></div>
      <h3>${n.title}</h3>
      <p>${n.text}</p>
      <a class="go" href="${n.url}" target="_blank" rel="noopener noreferrer">Baca selengkapnya ${arrow}</a>
    </div>
  </article>`;
}

function render() {
  const pages = Math.ceil(NEWS.length / PER);
  const items = showAll ? NEWS : NEWS.slice((page - 1) * PER, page * PER);
  grid.innerHTML = items.map(card).join("");
  if (showAll) {
    pager.style.display = "none";
    return;
  }
  pager.style.display = "flex";
  let h = `<button data-p="prev" aria-label="Sebelumnya" ${page === 1 ? "disabled" : ""}>${arrowL}</button>`;
  for (let i = 1; i <= pages; i++)
    h += `<button data-p="${i}" class="${i === page ? "on" : ""}" ${i === page ? 'aria-current="page"' : ""}>${i}</button>`;
  h += `<button data-p="next" aria-label="Berikutnya" ${page === pages ? "disabled" : ""}>${arrow}</button>`;
  pager.innerHTML = h;
}
pager.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b || b.disabled) return;
  const pages = Math.ceil(NEWS.length / PER),
    p = b.dataset.p;
  page = p === "prev" ? page - 1 : p === "next" ? page + 1 : +p;
  page = Math.min(Math.max(page, 1), pages);
  render();
  document.getElementById("berita").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("toggleAll").addEventListener("click", (e) => {
  showAll = !showAll;
  e.target.textContent = showAll ? "Tampilkan Ringkas" : "Lihat Selengkapnya";
  render();
});
render();

/* ===== Video ===== */
const VIDEO_ID = "LyzOq40rpwQ?si=Igd54scmdwYreAYP"; // isi ID video YouTube
const vid = document.getElementById("video");
function playVideo() {
  if (!VIDEO_ID) {
    vid.classList.add("noted");
    return;
  }
  vid.innerHTML = `<iframe src="https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen title="Video profil SAHI"></iframe>`;
}
vid.addEventListener("click", playVideo);
vid.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    playVideo();
  }
});

/* ===== Menu mobile ===== */
const burger = document.querySelector(".burger"),
  menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const o = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", o);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", false);
  }
});
