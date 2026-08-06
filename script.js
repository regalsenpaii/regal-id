/* =========================================================================
   YUKI STORE v4.0 - MULTI-PAGE SCRIPT (SPA VERSION)
   Theme Sync, Spotify Lyrics, Pinterest Grid, Invoice, Upload & Music Player
   ========================================================================= */

// --- 1. CORE & API CONFIGURATION ---
const API_PROXY = {
    spotifySearch: '/api/spotify-search',
    spotifyDownload: '/api/spotify-download',
    spotifyLyrics: '/api/spotify-lyrics',
    pinterest: '/api/pinterest'
};

// --- 2. SVG LOGOS & ICONS ---
const SPOTIFY_LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 168" width="18" height="18"><path fill="#1DB954" d="M84 0C37.8 0 0 37.8 0 84s37.8 84 84 84 84-37.8 84-84S130.2 0 84 0zm38.5 121.2c-1.5 2.5-4.7 3.2-7.1 1.7-19.5-11.9-44.1-14.6-73-8-2.8.6-5.6-1.1-6.2-3.9-.6-2.8 1.1-5.6 3.9-6.2 31.6-7.2 58.7-4.1 80.3 9.2 2.4 1.4 3.1 4.6 1.7 7.1zm10.3-22.9c-1.9 3-5.9 4-8.9 2.1-22.3-13.7-56.3-17.7-82.7-9.7-3.4 1-7-1-8-4.4s1-7 4.4-8c30.2-9.2 67.7-4.7 92.9 11.1 3.1 1.8 4.1 5.8 2.2 8.9zm.9-23.8c-26.8-15.9-71-17.4-96.5-9.6-4.1 1.2-8.4-1.1-9.6-5.2-1.2-4.1 1.1-8.4 5.2-9.6 29.3-8.9 78.1-7.2 108.7 11.1 3.7 2.2 4.9 6.9 2.7 10.6-2.2 3.6-6.9 4.9-10.5 2.7z"/></svg>`;
const PINTEREST_LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="#E60023" d="M12 0C5.4 0 0 5.4 0 12c0 5.1 3.2 9.5 7.6 11.2-.1-1-.3-2.6.1-3.7.3-.8 1.7-5.4 1.7-5.4s-.4-.9-.4-2.1c0-2 1.2-3.5 2.6-3.5 1.2 0 1.8.9 1.8 2 0 1.2-.8 3-1.2 4.7-.3 1.4.7 2.5 2 2.5 2.4 0 4.2-2.5 4.2-6.1 0-3.2-2.3-5.4-5.5-5.4-3.8 0-6 2.8-6 5.7 0 1.1.4 2.3.9 3 .1.2.2.3.1.5l-.3 1.1c0 .2-.1.2-.3.1-1.2-.5-2-2.3-2-3.7 0-3 2.5-6.6 7.5-6.6 4 0 7.1 2.9 7.1 6.7 0 4.1-2.6 7.4-6.1 7.4-1.2 0-2.3-.6-2.7-1.3l-.7 2.8c-.3 1.1-1 2.5-1.5 3.3C9.5 23.8 10.7 24 12 24c6.6 0 12-5.4 12-12S18.6 0 12 0z"/></svg>`;

const IC_PLAY = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="0"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
const IC_PAUSE = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="0"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
const IC_CLOSE = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
const IC_INFO = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>`;
const IC_CLOCK = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
const IC_MUSIC = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`;
const IC_DISC = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>`;
const IC_EXTERNAL = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
const IC_LYRICS = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>`;
const IC_DOWNLOAD = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

// --- 3. DATA PRODUCTS ---
const panelProducts = [
    { id: 1, name: 'Panel 1GB', price: 2000, specs: 'VPS R18 C4 \u2022 Aktif 30 Hari', ram: '1GB' },
    { id: 2, name: 'Panel 2GB', price: 3000, specs: 'VPS R18 C4 \u2022 Aktif 30 Hari', ram: '2GB' },
    { id: 3, name: 'Panel 3GB', price: 4000, specs: 'VPS R18 C4 \u2022 Aktif 30 Hari', ram: '3GB' },
    { id: 4, name: 'Panel 4GB', price: 5000, specs: 'VPS R18 C4 \u2022 Aktif 30 Hari', ram: '4GB' },
    { id: 5, name: 'Panel 5GB', price: 6000, specs: 'VPS R18 C4 \u2022 Aktif 30 Hari', ram: '5GB' },
    { id: 6, name: 'Panel 6GB', price: 7000, specs: 'VPS R18 C4 \u2022 Aktif 30 Hari', ram: '6GB' },
    { id: 7, name: 'Panel 7GB', price: 8000, specs: 'VPS R18 C4 \u2022 Aktif 30 Hari', ram: '7GB' },
    { id: 8, name: 'Panel 8GB', price: 9000, specs: 'VPS R18 C4 \u2022 Aktif 30 Hari', ram: '8GB' },
    { id: 9, name: 'Panel 9GB', price: 10000, specs: 'VPS R18 C4 \u2022 Aktif 30 Hari', ram: '9GB' },
    { id: 10, name: 'Panel 10GB', price: 11000, specs: 'VPS R18 C4 \u2022 Aktif 30 Hari', ram: '10GB' },
    { id: 11, name: 'Panel UNLIMITED', price: 25000, specs: 'VPS R18 C4 \u2022 Aktif 30 Hari', ram: 'UNLIMITED' },
];

// --- 4. GLOBAL APP STATES ---
let currentModalProduct = { name: '', price: 0 };
let isPlaying = false;
let currentAudioUrl = '';
let currentTrackData = null;
let lastKickTime = 0;
let kickEnergy = 0;
let kickDecay = 0.92;
let audioCtx = null;
let analyser = null;
let source = null;
let dataArray = null;
let vizFrameId = null;
let audioErrorFired = false;

const trackDataMap = new Map();

// --- 5. UTILITIES ---
function formatRupiah(price) {
    return 'Rp ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatDuration(input) {
    if (!input && input !== 0) return '0:00';
    if (typeof input === 'string') {
        const t = input.trim();
        if (/^\d{1,2}:\d{2}$/.test(t)) return t;
        const n = parseInt(t, 10);
        if (!isNaN(n)) input = n; else return '0:00';
    }
    if (typeof input === 'number') {
        if (isNaN(input) || input <= 0) return '0:00';
        let s = input > 10000 ? Math.floor(input / 1000) : Math.floor(input);
        const m = Math.floor(s / 60), sec = s % 60;
        return m + ':' + (sec < 10 ? '0' : '') + sec;
    }
    return '0:00';
}

function initIcons() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ===== PERUBAHAN 1: isPage() untuk SPA =====
function isPage(name) {
    const params = new URLSearchParams(window.location.search);
    const currentPage = params.get('page') || 'index';
    return currentPage === name;
}

// === TOAST SYSTEM ===
function showToast(title, message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    if (!toast) {
        console.log(`[Toast] ${title}: ${message}`);
        return;
    }
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    if (type === 'error') {
        toastIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>';
        toastIcon.className = 'w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0';
    } else if (type === 'info') {
        toastIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>';
        toastIcon.className = 'w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0';
    } else {
        toastIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500"><polyline points="20 6 9 17 4 12"/></svg>';
        toastIcon.className = 'w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0';
    }
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}

function copySpotifyLink(trackUrl) {
    if (!trackUrl) {
        showToast('Error', 'Link Spotify tidak tersedia untuk lagu ini.', 'error');
        return;
    }

    navigator.clipboard.writeText(trackUrl).then(() => {
        showToast('Sukses', 'Link Spotify berhasil disalin!', 'success');
    }).catch(err => {
        const textArea = document.createElement("textarea");
        textArea.value = trackUrl;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast('Sukses', 'Link Spotify berhasil disalin!', 'success');
        } catch (e) {
            showToast('Error', 'Gagal menyalin link.', 'error');
        }
        document.body.removeChild(textArea);
    });
}

function extractDownloadResult(data) {
    if (!data || typeof data !== 'object') return null;
    let raw = data.result !== undefined ? data.result : (data.data !== undefined ? data.data : data);
    if (Array.isArray(raw) && raw.length > 0) raw = raw[0];
    if (!raw || typeof raw !== 'object') return null;
    return raw;
}

function normalizeDownloadResult(raw) {
    if (!raw || typeof raw !== 'object') return {};
    
    let image = raw.image || raw.thumbnail || raw.thumb || raw.cover || raw.artwork || raw.artworkUrl || raw.artwork_url || raw.picture || raw.img || '';
    if (!image && raw.album && typeof raw.album === 'object') {
        image = raw.album.image || raw.album.cover || raw.album.thumbnail || raw.album.artwork || '';
        if (!image && raw.album.images && raw.album.images[0]) {
            image = typeof raw.album.images[0] === 'string' ? raw.album.images[0] : raw.album.images[0].url;
        }
    }
    
    let duration = raw.duration || raw.duration_ms || raw.durationMs || raw.length || raw.trackDuration || raw.time || raw.timelength || raw.durationText || raw.total_time || raw.play_time || raw.durasi || '0:00';
    
    if (typeof duration === 'object' && duration !== null) {
        const m = duration.minutes || 0;
        const s = duration.seconds || 0;
        duration = m + ':' + (s < 10 ? '0' : '') + s;
    }
    
    if (typeof duration === 'number') {
        duration = formatDuration(duration);
    }
    
    if (typeof duration === 'string') {
        const trimmed = duration.trim();
        if (/^\d{1,2}:\d{2}$/.test(trimmed) || /^\d{1,2}:\d{2}:\d{2}$/.test(trimmed)) {
            duration = trimmed;
        } else {
            const num = parseInt(trimmed, 10);
            if (!isNaN(num) && num > 0) {
                duration = formatDuration(num);
            } else {
                duration = '0:00';
            }
        }
    }
    
    let download = raw.download || raw.url || raw.link || raw.audio || raw.audio_url || raw.file || raw.direct || raw.downloadUrl || raw.download_url || '';
    if (!download && raw.formats && Array.isArray(raw.formats) && raw.formats[0]) {
        download = raw.formats[0].url || raw.formats[0].download || '';
    }
    
    return {
        title: raw.title || raw.name || raw.trackName || raw.track || 'Unknown',
        artist: raw.artist || raw.artists || raw.artistName || raw.artist_name || 'Unknown',
        album: raw.album || raw.collectionName || raw.albumName || raw.album_name || '-',
        image: image,
        duration: duration,
        download: download
    };
}

// --- ANIMASI BRAND YUKI STORE ---
function attachYukiWaveAnimation(containerId, textId) {
    const brandContainer = document.getElementById(containerId);
    const brandText = document.getElementById(textId);
    const brandIcon = brandContainer ? brandContainer.querySelector('.brand-icon') : null;

    if (!brandContainer || !brandText) return;

    let isAnimating = false;

    const textContent = brandText.textContent.trim();
    brandText.innerHTML = '';
    
    const letterSpans = [];
    [...textContent].forEach((char) => {
        const span = document.createElement('span');
        span.className = 'yuki-wave-letter';
        if (char === ' ') {
            span.innerHTML = '&nbsp;';
        } else {
            span.textContent = char;
        }
        brandText.appendChild(span);
        letterSpans.push(span);
    });

    brandContainer.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;

        if (brandIcon) {
            brandIcon.classList.remove('brand-icon-active');
            void brandIcon.offsetWidth;
            brandIcon.classList.add('brand-icon-active');
        }

        letterSpans.forEach((span, index) => {
            setTimeout(() => {
                span.className = 'yuki-wave-letter yuki-wave-out';
            }, index * 35);
        });

        const waveOutDuration = (letterSpans.length * 35) + 300;

        setTimeout(() => {
            letterSpans.forEach((span, index) => {
                setTimeout(() => {
                    span.className = 'yuki-wave-letter yuki-wave-in';
                }, index * 40);
            });

            const totalDuration = (letterSpans.length * 40) + 500;
            setTimeout(() => {
                letterSpans.forEach(span => {
                    span.className = 'yuki-wave-letter';
                });
                if (brandIcon) brandIcon.classList.remove('brand-icon-active');
                isAnimating = false;
            }, totalDuration);

        }, waveOutDuration);
    });
}

function initYukiBrandAnimation() {
    attachYukiWaveAnimation('mobile-brand-click', 'yuki-mobile-text');
    attachYukiWaveAnimation('sidebar-brand-click', 'yuki-brand-text');
}

// --- THEME SWITCHER LOGIC ---
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('yuki_theme') || 'dark';

    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlEl.classList.add('dark');
            htmlEl.setAttribute('data-theme', 'dark');
        } else {
            htmlEl.classList.remove('dark');
            htmlEl.setAttribute('data-theme', 'light');
        }
        localStorage.setItem('yuki_theme', theme);
    }

    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = htmlEl.classList.contains('dark') || htmlEl.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }
}

// --- 7. SIDEBAR MOBILE ---
function initSidebar() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');

    function openSidebar() {
        if (sidebar) sidebar.classList.add('open');
        if (overlay) overlay.classList.remove('hidden');
        if (menuToggle) menuToggle.classList.add('open');
    }

    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.add('hidden');
        if (menuToggle) menuToggle.classList.remove('open');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (sidebar && sidebar.classList.contains('open')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }

    let touchStartX = 0;
    let touchEndX = 0;

    if (sidebar) {
        sidebar.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        sidebar.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 80) {
                closeSidebar();
            }
        }, { passive: true });
    }

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX - touchStartX > 80 && touchStartX < 30) {
            openSidebar();
        }
    }, { passive: true });
}

// --- 8. PRODUCT RENDERING ---
function renderPanelProducts() {
    const grid = document.getElementById('panel-grid');
    if (!grid) return;
    grid.innerHTML = panelProducts.map(product => {
        const isPopular = product.ram === 'UNLIMITED' || product.ram === '10GB';
        return `
            <div class="glass-card group p-5 relative">
                ${isPopular ? `<div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold shadow-md">POPULAR</div>` : ''}
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md shadow-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
                    </div>
                    <div>
                        <h3 class="font-bold text-[var(--text-primary)] text-sm">${product.name}</h3>
                        <p class="text-[10px] text-[var(--text-muted)]">${product.specs}</p>
                    </div>
                </div>
                <div class="flex items-end justify-between mb-4">
                    <div><p class="text-[10px] text-[var(--text-muted)] mb-0.5">Harga</p><p class="text-lg font-bold text-blue-600">${formatRupiah(product.price)}</p></div>
                    <div class="text-right"><p class="text-[10px] text-[var(--text-muted)] mb-0.5">RAM</p><p class="text-sm font-semibold text-[var(--text-secondary)]">${product.ram}</p></div>
                </div>
                <button onclick="openModal('${product.name}', ${product.price})" class="btn-primary w-full text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    Beli Sekarang
                </button>
            </div>
        `;
    }).join('');
    initIcons();
}

// --- 9. MODAL & INVOICE ---
function openModal(productName, price) {
    currentModalProduct = { name: productName, price: price };
    const modal = document.getElementById('invoice-modal');
    const nameEl = document.getElementById('modal-product-name');
    const priceEl = document.getElementById('modal-product-price');
    if (nameEl) nameEl.textContent = productName;
    if (priceEl) priceEl.textContent = formatRupiah(price);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    const form = document.getElementById('invoice-form');
    if (form) form.reset();
    const fileLabel = document.getElementById('file-label');
    if (fileLabel) fileLabel.textContent = 'Klik untuk upload bukti transfer';
    const preview = document.getElementById('file-preview');
    if (preview) preview.classList.add('hidden');
    setTimeout(initIcons, 50);
}

function closeModal() {
    const modal = document.getElementById('invoice-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

function handleFileSelect(input) {
    const file = input.files[0];
    const label = document.getElementById('file-label');
    const preview = document.getElementById('file-preview');
    if (file) {
        if (label) label.textContent = file.name;
        const reader = new FileReader();
        reader.onload = (e) => {
            if (preview) {
                preview.src = e.target.result;
                preview.classList.remove('hidden');
            }
        };
        reader.readAsDataURL(file);
    } else {
        if (label) label.textContent = 'Klik untuk upload bukti transfer';
        if (preview) preview.classList.add('hidden');
    }
}

// --- 10. CDN UPLOAD ---
async function uploadToMyCDNYuki(file) {
    return new Promise((resolve) => {
        if (!file) return resolve(null);
        const reader = new FileReader();
        reader.onload = async () => {
            try {
                const base64Content = reader.result.split(',')[1];
                const timestamp = Date.now();
                const randomStr = Math.random().toString(36).substring(2, 8);
                const fileExt = file.name.split('.').pop() || 'jpg';
                const fileName = `Yuki${timestamp}_${randomStr}.${fileExt}`;
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ fileName, base64Content })
                });
                if (!response.ok) throw new Error('Server error: ' + response.status);
                const resData = await response.json();
                resolve(resData.download_url);
            } catch (e) {
                console.error('[Proxy API] Gagal:', e.message);
                resolve(null);
            }
        };
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(file);
    });
}

// --- 11. INVOICE FORM ---
function initInvoiceForm() {
    const form = document.getElementById('invoice-form');
    if (!form) return;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const buyerName = document.getElementById('buyer-name').value.trim();
        const buyerWa = document.getElementById('buyer-wa').value.trim();
        const proofFile = document.getElementById('buyer-proof').files[0];
        if (!buyerName) { showToast('Error', 'Nama pembeli wajib diisi!', 'error'); return; }
        if (!buyerWa) { showToast('Error', 'Nomor WhatsApp wajib diisi!', 'error'); return; }
        if (!proofFile) { showToast('Error', 'Silakan upload bukti transfer!', 'error'); return; }
        if (proofFile.size > 5 * 1024 * 1024) {
            showToast('Error', 'Ukuran gambar terlalu besar! Maksimal 5MB.', 'error');
            return;
        }
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Kirim Bukti Pembayaran';
        if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = '⏳ Memproses...'; }
        showToast('Proses', 'Sedang mengunggah bukti transfer...', 'success');
        let cdnLink = null;
        let uploadError = null;
        try { cdnLink = await uploadToMyCDNYuki(proofFile); }
        catch (cdnError) { uploadError = cdnError.message; }
        let textMessage = '🛒 *ORDER BARU - YUKI STORE*\n\n' +
                          '📦 *Produk:* ' + currentModalProduct.name + '\n' +
                          '💰 *Harga:* ' + formatRupiah(currentModalProduct.price) + '\n' +
                          '👤 *Nama:* ' + buyerName + '\n' +
                          '📱 *WhatsApp:* ' + buyerWa + '\n\n';
        if (cdnLink) {
            textMessage += '🖼️ *BUKTI TRANSFER:*\n' + cdnLink + '\n\n✅ *Bukti berhasil dihost di CDN.*';
        } else {
            textMessage += '⚠️ *BUKTI TRANSFER:*\n_(Upload otomatis gagal: ' + (uploadError || 'Network/Auth') + ')_\nMohon lampirkan bukti transfer langsung di chat ini ya kak!';
        }
        textMessage += '\n\nMohon segera diproses ya kak! 🙏';
        const phone = '6288246387665';
        const encodedText = encodeURIComponent(textMessage);
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalBtnText; }
        closeModal();
        if (isMobile) {
            const deepLink = `whatsapp://send?phone=${phone}&text=${encodedText}`;
            window.location.href = deepLink;
            setTimeout(() => {
                if (document.hidden) return;
                window.location.href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;
            }, 2000);
        } else {
            window.open(`https://web.whatsapp.com/send?phone=${phone}&text=${encodedText}`, '_blank');
        }
    });
}

// --- 12. SPOTIFY: SEARCH & LYRICS ---
function initSpotify() {
    const form = document.getElementById('spotify-form');
    if (!form) return;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const q = document.getElementById('spotify-query').value.trim();
        if (!q) return;
        await searchSpotify(q);
    });

    const dlForm = document.getElementById('spotify-dl-form');
    if (dlForm) {
        dlForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const url = document.getElementById('spotify-url').value.trim();
            if (!url) return;
            if (!url.includes('spotify.com')) {
                showToast('Error', 'URL harus dari Spotify!', 'error');
                return;
            }
            const submitBtn = dlForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerHTML : 'Unduh';
            if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = '⏳'; }
            showToast('Proses', 'Mengambil info lagu...', 'success');

            try {
                const res = await fetch(`${API_PROXY.spotifyDownload}?url=${encodeURIComponent(url)}`);
                const data = await res.json();

                if (!data.status || !data.result) {
                    showToast('Error', 'Gagal mengambil info lagu.', 'error');
                    return;
                }

                const result = data.result;
                showDownloadInfoModal(result, url);

            } catch (e) {
                console.error('[DL Form] Error:', e);
                showToast('Error', 'Gagal: ' + e.message, 'error');
            } finally {
                if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalText; }
            }
        });
    }
}

async function searchSpotify(query) {
    const loading = document.getElementById('spotify-loading');
    const results = document.getElementById('spotify-results');
    const empty = document.getElementById('spotify-empty');
    if (loading) loading.classList.remove('hidden');
    if (results) results.innerHTML = '';
    if (empty) empty.classList.add('hidden');

    let tracks = [];

    try {
        console.log('[Spotify] Searching via proxy:', query);
        const res = await fetch(`${API_PROXY.spotifySearch}?q=${encodeURIComponent(query)}`);
        console.log('[Spotify] Proxy status:', res.status);

        if (!res.ok) {
            const errText = await res.text();
            console.error('[Spotify] Proxy error:', errText.slice(0, 200));
            throw new Error('Proxy HTTP ' + res.status);
        }

        const data = await res.json();
        let rawTracks = data?.data || data?.result || data?.results || (Array.isArray(data) ? data : []);
        if (!Array.isArray(rawTracks) && data?.data?.tracks) rawTracks = data.data.tracks;
        if (!Array.isArray(rawTracks) && data?.result?.tracks) rawTracks = data.result.tracks;

        console.log('[Spotify] Raw tracks count:', rawTracks.length);

        if (rawTracks.length) {
            tracks = rawTracks.slice(0, 5).map((item, idx) => {
                if (!item || typeof item !== 'object') return null;
                const title = item.title || item.name || item.trackName || item.track || 'Unknown';
                const artist = item.artist || item.artists || item.artistName || item.artist_name || 'Unknown';
                const album = item.album || item.collectionName || item.albumName || item.album_name || '-';
                let image = item.image || item.thumbnail || item.cover || item.artworkUrl || item.artwork || '';
                if (!image && item.album && typeof item.album === 'object') image = item.album.cover || item.album.image || item.album.thumbnail || '';
                let thumb = item.thumbnail || item.image || item.cover || item.artworkUrl || item.artwork || '';
                if (!thumb && item.album && typeof item.album === 'object') thumb = item.album.thumbnail || item.album.image || item.album.cover || '';
                let trackUrl = item.url || item.external_url || item.spotify_url || item.link || '';
                if (!trackUrl && item.external_urls) trackUrl = item.external_urls.spotify || '';
                let durRaw = item.duration_ms || item.durationMs || item.duration || item.trackDuration || 0;
                let durationStr = '0:00';
                if (typeof durRaw === 'string' && durRaw.includes(':')) durationStr = durRaw;
                else durationStr = formatDuration(durRaw);
                const genre = item.genre || item.primaryGenreName || 'Music';
                return { title, artist, album, image, thumb, trackUrl, duration: durationStr, durationMs: typeof durRaw === 'number' ? durRaw : 0, genre };
            }).filter(Boolean);
        }
    } catch (e) { 
        console.error('[Spotify] Search failed:', e.message);
        if (loading) loading.classList.add('hidden');
        if (results) results.innerHTML = errorHTML('Gagal mencari lagu: ' + e.message);
        return;
    }

    if (loading) loading.classList.add('hidden');
    if (!tracks.length) {
        if (results) results.innerHTML = errorHTML('Tidak ada hasil untuk "' + query + '"');
        return;
    }

    if (results) {
        results.innerHTML = `<div class="track-list">` + tracks.map((track) => {
            const tjson = encodeURIComponent(JSON.stringify(track));
            return `
                <div class="track-row" data-track='${tjson}'>
                    <img class="track-thumb" src="${track.thumb || track.image || ''}" alt="" loading="lazy" onerror="this.src='https://via.placeholder.com/300x300/e2e8f0/94a3b8?text=Music'">
                    <div class="track-info">
                        <div class="track-title" title="${track.title}">${track.title}</div>
                        <div class="track-artist">${track.artist}</div>
                        <div class="track-meta-row">
                            <span class="track-meta">${IC_CLOCK} ${track.duration}</span>
                            <span class="track-meta">${IC_DISC} ${track.album}</span>
                        </div>
                    </div>
                    <div class="track-actions">
                        <button class="btn-lyric-sm" onclick="event.stopPropagation(); openLyricsModal('${tjson}')" title="Lihat Lirik">
                            ${IC_LYRICS} Lirik
                        </button>
                        <button class="btn-copy-sm" onclick="event.stopPropagation(); copySpotifyLink('${track.trackUrl}')" title="Salin Link Spotify">
                            ${IC_EXTERNAL} Salin Link
                        </button>
                        <button class="btn-dl-sm" onclick="event.stopPropagation(); openTrackDetailModal('${tjson}')" title="Detail & Download">
                            ${IC_INFO} Info
                        </button>
                    </div>
                </div>
            `;
        }).join('') + `</div>`;
    }
}

// --- 12b. LYRICS MODAL ---
async function openLyricsModal(trackJson) {
    let track;
    try { track = JSON.parse(decodeURIComponent(trackJson)); }
    catch (e) { return; }

    let modal = document.getElementById('lyrics-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'lyrics-modal';
        modal.className = 'modal-overlay lyrics-modal';
        modal.innerHTML = `
            <div class="modal-backdrop" onclick="closeLyricsModal()"></div>
            <div class="modal-content">
                <div class="lyrics-header">
                    <img id="lyrics-cover" class="lyrics-cover" src="" alt="Cover">
                    <div>
                        <div id="lyrics-title" class="lyrics-title"></div>
                        <div id="lyrics-artist" class="lyrics-artist"></div>
                    </div>
                    <button onclick="closeLyricsModal()" style="margin-left:auto;background:none;border:none;cursor:pointer;color:var(--text-muted);">${IC_CLOSE}</button>
                </div>
                <div id="lyrics-body" class="lyrics-content">Memuat lirik...</div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    document.getElementById('lyrics-cover').src = track.thumb || track.image || '';
    document.getElementById('lyrics-title').textContent = track.title || 'Unknown';
    document.getElementById('lyrics-artist').textContent = track.artist || 'Unknown';
    document.getElementById('lyrics-body').textContent = 'Memuat lirik...';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    try {
        const query = encodeURIComponent(track.title + ' ' + track.artist);
        console.log('[Lyrics] Requesting:', track.title, '-', track.artist);
        const res = await fetch(`${API_PROXY.spotifyLyrics}?title=${query}`);
        console.log('[Lyrics] Proxy status:', res.status);

        if (res.ok) {
            const data = await res.json();
            console.log('[Lyrics] Response keys:', Object.keys(data));

            let cleanLyrics = '';
            if (data?.result?.plainLyrics && typeof data.result.plainLyrics === 'string') {
                cleanLyrics = data.result.plainLyrics.trim();
            } else if (data?.result && typeof data.result === 'string') {
                cleanLyrics = data.result.trim();
            } else if (data?.plainLyrics && typeof data.plainLyrics === 'string') {
                cleanLyrics = data.plainLyrics.trim();
            } else if (data?.lyrics && typeof data.lyrics === 'string') {
                cleanLyrics = data.lyrics.trim();
            }

            if (!cleanLyrics && data?.result?.lyricsfile && typeof data.result.lyricsfile === 'string') {
                const lf = data.result.lyricsfile;
                const lines = lf.split('\n');
                let inPlain = false;
                const plainLines = [];
                for (const line of lines) {
                    if (line.trim() === 'plain: |-' || line.trim() === 'plain: |') {
                        inPlain = true;
                        continue;
                    }
                    if (inPlain) {
                        if (line.match(/^\w+:/)) break;
                        plainLines.push(line);
                    }
                }
                if (plainLines.length) cleanLyrics = plainLines.join('\n').trim();
            }

            if (!cleanLyrics && data?.result && typeof data.result === 'object') {
                for (const key in data.result) {
                    const val = data.result[key];
                    if (typeof val === 'string' && val.length > 100 && !val.includes('version:') && !val.includes('metadata:')) {
                        cleanLyrics = val.trim();
                        break;
                    }
                }
            }

            if (cleanLyrics) {
                document.getElementById('lyrics-body').textContent = cleanLyrics;
            } else {
                document.getElementById('lyrics-body').textContent = 'Lirik tidak ditemukan untuk lagu ini.';
            }
        } else {
            const errText = await res.text();
            console.error('[Lyrics] Proxy error:', errText.slice(0, 300));
            document.getElementById('lyrics-body').textContent = 'Gagal memuat lirik. Status: ' + res.status;
        }
    } catch (e) {
        console.error('[Lyrics] Error:', e.message);
        document.getElementById('lyrics-body').textContent = 'Gagal memuat lirik. Error: ' + e.message;
    }
}

function closeLyricsModal() {
    const modal = document.getElementById('lyrics-modal');
    if (modal) modal.classList.remove('active');
    if (!document.getElementById('invoice-modal')?.classList.contains('active')) {
        document.body.style.overflow = '';
    }
}

// --- 12c. TRACK DETAIL ---
let currentGlobalAudio = null;
let currentPlayingBtn = null;

async function fetchAndPlayTrack(tjson, btnElement) {
    let track;
    try {
        track = typeof tjson === 'string' ? JSON.parse(decodeURIComponent(tjson)) : tjson;
    } catch (e) {
        showToast('Error', 'Gagal membaca data lagu.', 'error');
        return;
    }

    const playBtn = btnElement || event?.currentTarget;
    const originalIcon = playBtn ? playBtn.innerHTML : '';

    if (currentGlobalAudio && currentGlobalAudio.dataset.trackUrl === (track.trackUrl || track.title)) {
        if (!currentGlobalAudio.paused) {
            currentGlobalAudio.pause();
            if (playBtn) playBtn.innerHTML = IC_PLAY;
            showToast('Info', 'Audio di-pause', 'info');
            return;
        } else {
            currentGlobalAudio.play();
            if (playBtn) playBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
            showToast('Info', 'Melanjutkan audio', 'info');
            return;
        }
    }

    if (playBtn) {
        playBtn.innerHTML = `<svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2 a10 10 0 0 1 10 10" fill="none"/></svg>`;
    }

    showToast('Info', 'Mencari sampel audio...', 'info');

    let audioSrc = track.preview_url || track.preview || track.audio;

    if (!audioSrc) {
        try {
            const query = encodeURIComponent(`${track.title} ${track.artist}`);
            const itunesRes = await fetch(`https://itunes.apple.com/search?term=${query}&media=music&entity=song&limit=1`);
            const itunesData = await itunesRes.json();

            if (itunesData.results && itunesData.results.length > 0) {
                audioSrc = itunesData.results[0].previewUrl;
            }
        } catch (err) {
            console.warn('[iTunes Sample Fetch Error]:', err);
        }
    }

    if (!audioSrc && track.trackUrl) {
        try {
            const res = await fetch(`${API_PROXY.spotifyDownload}?url=${encodeURIComponent(track.trackUrl)}`);
            const dlData = await res.json();
            audioSrc = dlData?.result?.download || dlData?.data?.download || dlData?.download;
        } catch (err) {
            console.warn('[Downloader Fetch Error]:', err);
        }
    }

    if (!audioSrc) {
        if (playBtn) playBtn.innerHTML = originalIcon;
        showToast('Error', 'Sampel audio tidak ditemukan. Silakan gunakan tombol Info untuk download.', 'error');
        return;
    }

    if (currentGlobalAudio) {
        currentGlobalAudio.pause();
        currentGlobalAudio = null;
        if (currentPlayingBtn) currentPlayingBtn.innerHTML = IC_PLAY;
    }

    const audio = new Audio(audioSrc);
    audio.dataset.trackUrl = track.trackUrl || track.title;

    audio.play().then(() => {
        currentGlobalAudio = audio;
        currentPlayingBtn = playBtn;
        if (playBtn) {
            playBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
        }
        showToast('Sukses', `Memutar sampel: ${track.title}`, 'success');
    }).catch((error) => {
        console.error('[Audio Play Error]:', error);
        if (playBtn) playBtn.innerHTML = originalIcon;
        showToast('Error', 'Gagal memutar audio di perangkat ini. Coba gunakan tombol Info.', 'error');
    });

    audio.onended = () => {
        if (playBtn) playBtn.innerHTML = originalIcon;
        currentGlobalAudio = null;
        currentPlayingBtn = null;
        showToast('Info', 'Sampel audio selesai.', 'info');
    };

    audio.onerror = () => {
        if (playBtn) playBtn.innerHTML = originalIcon;
        showToast('Error', 'Gagal memuat file sampel audio.', 'error');
    };
}

async function openTrackDetailModal(enc) {
    let track;
    try { track = JSON.parse(decodeURIComponent(enc)); }
    catch (e) { console.error(e); return; }

    currentTrackData = track;

    let modal = document.getElementById('track-detail');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'track-detail';
        modal.className = 'td-overlay';
        modal.innerHTML = `
            <div class="td-backdrop" onclick="closeTrackDetail()"></div>
            <div class="td-card">
                <button class="td-close" onclick="closeTrackDetail()">${IC_CLOSE}</button>
                <div class="td-cover-wrap">
                    <img id="td-cover" class="td-cover" src="" alt="Cover" onerror="this.style.display='none'">
                    <div class="td-cover-overlay"></div>
                </div>
                <div class="td-body">
                    <div id="td-title" class="td-title"></div>
                    <div id="td-artist" class="td-artist"></div>
                    <div class="td-details">
                        <div class="td-detail-item">
                            <div style="display:flex;flex-direction:column;gap:2px;">
                                <div class="td-detail-label">Durasi</div>
                                <div id="td-dur" class="td-detail-value" style="display:flex;align-items:center;gap:4px;">${IC_CLOCK}<span></span></div>
                            </div>
                        </div>
                        <div class="td-detail-item">
                            <div style="display:flex;flex-direction:column;gap:2px;">
                                <div class="td-detail-label">Album</div>
                                <div id="td-album" class="td-detail-value" style="display:flex;align-items:center;gap:4px;">${IC_DISC}<span></span></div>
                            </div>
                        </div>
                        <div class="td-detail-item">
                            <div style="display:flex;flex-direction:column;gap:2px;">
                                <div class="td-detail-label">Genre</div>
                                <div id="td-genre" class="td-detail-value" style="display:flex;align-items:center;gap:4px;">${IC_MUSIC}<span></span></div>
                            </div>
                        </div>
                        <div class="td-detail-item">
                            <div style="display:flex;flex-direction:column;gap:2px;">
                                <div class="td-detail-label">Sumber</div>
                                <div class="td-detail-value" style="display:flex;align-items:center;gap:4px;">${SPOTIFY_LOGO}<span>Spotify</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="td-playbar">
                        <button id="td-btn-dl" class="td-btn-spotify" style="width: 100%;" onclick="downloadFromDetail()">
                            ${IC_DOWNLOAD} Download
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    document.getElementById('td-cover').src = track.image || '';
    document.getElementById('td-title').textContent = track.title || 'Unknown Title';
    document.getElementById('td-artist').textContent = track.artist || 'Unknown Artist';
    document.getElementById('td-dur').querySelector('span').textContent = track.duration || '0:00';
    document.getElementById('td-album').querySelector('span').textContent = track.album || '-';
    document.getElementById('td-genre').querySelector('span').textContent = track.genre || 'Music';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTrackDetail() {
    const modal = document.getElementById('track-detail');
    if (modal) modal.classList.remove('active');
    if (!document.getElementById('invoice-modal')?.classList.contains('active') && !document.getElementById('lyrics-modal')?.classList.contains('active')) {
        document.body.style.overflow = '';
    }
}

async function downloadFromDetail() {
    if (!currentTrackData || !currentTrackData.trackUrl) {
        showToast('Error', 'URL Spotify tidak tersedia.', 'error');
        return;
    }

    const btn = document.getElementById('td-btn-dl');
    const originalText = btn.innerHTML;
    btn.innerHTML = '⏳ Mengambil...';
    btn.disabled = true;

    try {
        console.log('[Download] Fetching for:', currentTrackData.trackUrl);
        const res = await fetch(`${API_PROXY.spotifyDownload}?url=${encodeURIComponent(currentTrackData.trackUrl)}`);
        const data = await res.json();
        console.log('[Download] Response:', JSON.stringify(data).substring(0, 500));

        if (data.status && data.result && data.result.download) {
            const a = document.createElement('a');
            a.href = data.result.download;
            a.target = '_blank';
            a.download = (data.result.title || currentTrackData.title || 'lagu') + '.mp3';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            showToast('Sukses', 'Download ' + (data.result.title || '') + ' dimulai!', 'success');
        } else {
            console.error('[Download] No download URL. Keys:', data.result ? Object.keys(data.result) : 'no result');
            showToast('Error', 'Gagal mendapatkan link download.', 'error');
        }
    } catch (e) {
        console.error('[Download] Error:', e);
        showToast('Error', 'Gagal download: ' + e.message, 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

function errorHTML(msg) {
    return `<div class="text-center py-10"><div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-400"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg></div><p class="text-sm text-[var(--text-muted)]">${msg}</p></div>`;
}

// --- 13. PINTEREST ---
function initPinterest() {
    const form = document.getElementById('pinterest-form');
    if (!form) return;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const q = document.getElementById('pin-query').value.trim();
        if (!q) return;
        await searchPinterest(q);
    });
}

async function searchPinterest(query) {
    const loading = document.getElementById('pin-loading');
    const results = document.getElementById('pin-results');
    const empty = document.getElementById('pin-empty');
    if (loading) loading.classList.remove('hidden');
    if (results) results.innerHTML = '';
    if (empty) empty.classList.add('hidden');

    try {
        console.log('[Pinterest] Searching via proxy:', query);
        const res = await fetch(`${API_PROXY.pinterest}?q=${encodeURIComponent(query)}`);
        console.log('[Pinterest] Proxy status:', res.status);

        if (!res.ok) {
            const errText = await res.text();
            console.error('[Pinterest] Proxy error:', errText.slice(0, 300));
            throw new Error('Proxy HTTP ' + res.status);
        }

        const data = await res.json();
        let rawResult = data?.result || data?.data || data;

        if (!Array.isArray(rawResult) && data?.result?.images) rawResult = data.result.images;
        if (!Array.isArray(rawResult) && data?.data?.images) rawResult = data.data.images;

        console.log('[Pinterest] Result type:', typeof rawResult, 'isArray:', Array.isArray(rawResult));

        let images = [];
        if (Array.isArray(rawResult)) {
            images = rawResult
                .map(v => {
                    if (typeof v === 'string' && v.startsWith('http')) return v;
                    if (v && typeof v === 'object' && v.url) return v.url;
                    if (v && typeof v === 'object' && v.image) return v.image;
                    if (v && typeof v === 'object' && v.src) return v.src;
                    return null;
                })
                .filter(Boolean)
                .slice(0, 20);
        }

        console.log('[Pinterest] Parsed images:', images.length);

        if (loading) loading.classList.add('hidden');

        if (!images.length) {
            if (results) results.innerHTML = `<div class="text-center py-10"><p class="text-sm text-[var(--text-muted)]">Tidak ada hasil untuk "${query}"</p></div>`;
            return;
        }

        if (results) {
            results.innerHTML = `<div class="pin-grid">` + images.map((img, i) => `
                <div class="pin-card">
                    <img src="${img}" alt="Pinterest ${i+1}" loading="lazy" onerror="this.style.display='none'">
                    <div class="pin-card-overlay">
                        <button class="pin-btn" onclick="event.stopPropagation(); window.open('${img}', '_blank')">
                            ${PINTEREST_LOGO}
                            <span>Unduh / Buka</span>
                        </button>
                    </div>
                </div>
            `).join('') + `</div>`;
        }
    } catch (e) {
        console.error('[Pinterest] Error:', e.message);
        if (loading) loading.classList.add('hidden');
        if (results) results.innerHTML = errorHTML('Gagal memuat Pinterest: ' + e.message);
    }
}

// --- 14. AUDIO & VISUALIZER (Spotify Floating Player) ---
function initVisualizer() {
    const player = document.getElementById('audio-player');
    if (!player) return;
    let wrap = document.getElementById('viz-wrap');
    if (!wrap) {
        wrap = document.createElement('div');
        wrap.id = 'viz-wrap';
        wrap.className = 'viz-wrap';
        for (let i = 0; i < 32; i++) {
            const bar = document.createElement('div');
            bar.className = 'viz-bar';
            bar.style.height = '2px';
            wrap.appendChild(bar);
        }
        const closeBtn = document.getElementById('player-close');
        if (closeBtn && closeBtn.parentNode) {
            closeBtn.parentNode.insertBefore(wrap, closeBtn);
        } else {
            player.appendChild(wrap);
        }
    }
}

function setupAudioContext(audio) {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (!analyser) {
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.78;
        analyser.minDecibels = -85;
        analyser.maxDecibels = -25;
    }
    if (!source) {
        source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
    }
    dataArray = new Uint8Array(analyser.frequencyBinCount);
}

function startVisualizer() {
    if (vizFrameId) cancelAnimationFrame(vizFrameId);
    const bars = document.querySelectorAll('.viz-bar');
    if (!bars.length || !analyser) return;
    function render() {
        if (!isPlaying) {
            bars.forEach(b => { b.style.height = '2px'; b.className = 'viz-bar'; });
            return;
        }
        analyser.getByteFrequencyData(dataArray);
        const binCount = dataArray.length;
        const bassBins = dataArray.slice(0, Math.floor(binCount * 0.08));
        const lowMidBins = dataArray.slice(Math.floor(binCount * 0.08), Math.floor(binCount * 0.18));
        const midBins = dataArray.slice(Math.floor(binCount * 0.18), Math.floor(binCount * 0.40));
        const highBins = dataArray.slice(Math.floor(binCount * 0.40), Math.floor(binCount * 0.70));
        const bassAvg = bassBins.reduce((a, b) => a + b, 0) / bassBins.length / 255;
        const lowMidAvg = lowMidBins.reduce((a, b) => a + b, 0) / lowMidBins.length / 255;
        kickEnergy = Math.max(bassAvg, kickEnergy * kickDecay);
        const kickIntensity = kickEnergy;
        bars.forEach((bar, i) => {
            let value, isKick = false, isSnare = false;
            const ratio = i / 32;
            if (ratio < 0.20) {
                const idx = Math.floor(ratio / 0.20 * bassBins.length);
                value = bassBins[Math.min(idx, bassBins.length - 1)] || 0;
                if (kickIntensity > 0.55 && ratio < 0.10) isKick = true;
            } else if (ratio < 0.40) {
                const idx = Math.floor((ratio - 0.20) / 0.20 * lowMidBins.length);
                value = lowMidBins[Math.min(idx, lowMidBins.length - 1)] || 0;
                if (lowMidAvg > 0.50) isSnare = true;
            } else if (ratio < 0.65) {
                const idx = Math.floor((ratio - 0.40) / 0.25 * midBins.length);
                value = midBins[Math.min(idx, midBins.length - 1)] || 0;
            } else {
                const idx = Math.floor((ratio - 0.65) / 0.35 * highBins.length);
                value = highBins[Math.min(idx, highBins.length - 1)] || 0;
            }
            const percent = (value || 0) / 255;
            let baseHeight = 2;
            if (ratio < 0.20) baseHeight = 2 + percent * 42;
            else if (ratio < 0.40) baseHeight = 2 + percent * 34;
            else if (ratio < 0.65) baseHeight = 2 + percent * 26;
            else baseHeight = 2 + percent * 18;
            bar.style.height = baseHeight + 'px';
            bar.className = 'viz-bar';
            if (isKick) bar.classList.add('kick');
            else if (isSnare) bar.classList.add('snare');
        });
        vizFrameId = requestAnimationFrame(render);
    }
    render();
}

function stopVisualizer() {
    if (vizFrameId) cancelAnimationFrame(vizFrameId);
    kickEnergy = 0;
    document.querySelectorAll('.viz-bar').forEach(b => {
        b.style.height = '2px';
        b.className = 'viz-bar';
    });
}

function pauseAudio() {
    const audio = document.getElementById('audio-element');
    if (audio) audio.pause();
    isPlaying = false;
    stopVisualizer();
    const player = document.getElementById('audio-player');
    if (player) player.classList.add('paused');
    const btn = document.getElementById('player-play');
    if (btn) {
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>';
        btn.classList.remove('player-pulse');
    }
    
    document.querySelectorAll('.track-row .btn-play-sm').forEach(btn => btn.innerHTML = IC_PLAY);
}

async function playSpotify(url, title, artist, cover) {
    console.log('[Play] playSpotify called with URL:', url ? url.substring(0, 80) : 'EMPTY');

    if (!url) {
        showToast('Error', 'URL audio kosong.', 'error');
        return;
    }
    if (!url.startsWith('http')) {
        showToast('Error', 'URL audio tidak valid.', 'error');
        return;
    }

    const player = document.getElementById('audio-player');
    const audio = document.getElementById('audio-element');
    const playBtn = document.getElementById('player-play');
    const titleEl = document.getElementById('player-title');
    const artistEl = document.getElementById('player-artist');
    const coverEl = document.getElementById('player-cover');

    if (!audio) {
        showToast('Error', 'Audio player tidak ditemukan.', 'error');
        return;
    }

    audioErrorFired = false;

    currentAudioUrl = url;
    if (titleEl) titleEl.textContent = title || 'Unknown';
    if (artistEl) artistEl.textContent = artist || 'Unknown';
    if (coverEl) { coverEl.src = cover || ''; coverEl.classList.remove('hidden'); }

    showToast('Proses', 'Memuat audio...', 'success');

    try {
        console.log('[Play] Fetching audio blob...');
        const response = await fetch(url, { 
            method: 'GET',
            headers: { 'Accept': 'audio/*,*/*' }
        });

        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }

        const blob = await response.blob();
        console.log('[Play] Blob received:', blob.type, blob.size, 'bytes');

        if (blob.size === 0) {
            throw new Error('File audio kosong');
        }

        const blobUrl = URL.createObjectURL(blob);
        console.log('[Play] Blob URL created');

        audio.src = blobUrl;
        audio.load();

    } catch (fetchErr) {
        console.warn('[Play] Blob fetch failed:', fetchErr.message, '- falling back to direct URL');
        audio.crossOrigin = 'anonymous';
        audio.src = url;
        audio.load();
    }

    initVisualizer();

    console.log('[Play] Calling audio.play()...');
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('[Play] ✅ Playback started');
            isPlaying = true;
            if (player) {
                player.classList.add('show');
                player.classList.remove('paused');
            }
            if (playBtn) {
                playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
                playBtn.classList.add('player-pulse');
            }
            try {
                setupAudioContext(audio);
                startVisualizer();
            } catch (e) { console.log('[Play] Visualizer error:', e); }
        }).catch((err) => {
            console.error('[Play] ❌ Playback failed:', err.name, err.message);
            if (!audioErrorFired) {
                audioErrorFired = true;
                showToast('Error', 'Gagal memutar audio. Coba download saja.', 'error');
            }
            if (player) player.classList.remove('show');
        });
    }

    if (playBtn) {
        playBtn.onclick = () => {
            if (!audio) return;
            if (isPlaying) {
                audio.pause();
                isPlaying = false;
                player.classList.add('paused');
                playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>';
                playBtn.classList.remove('player-pulse');
                stopVisualizer();
            } else {
                audio.play().then(() => {
                    isPlaying = true;
                    player.classList.remove('paused');
                    playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
                    playBtn.classList.add('player-pulse');
                    try {
                        if (audioCtx?.state === 'suspended') audioCtx.resume();
                        startVisualizer();
                    } catch (e) {}
                }).catch((err) => {
                    if (!audioErrorFired) {
                        audioErrorFired = true;
                        showToast('Error', 'Gagal resume: ' + err.message, 'error');
                    }
                });
            }
        };
    }

    audio.onended = () => {
        console.log('[Audio] Playback ended');
        isPlaying = false;
        if (player) {
            player.classList.remove('show');
            player.classList.add('paused');
        }
        if (playBtn) playBtn.classList.remove('player-pulse');
        stopVisualizer();
    };

    audio.onerror = (e) => {
        if (audioErrorFired) return;
        audioErrorFired = true;
        console.error('[Audio] ❌ Error code:', audio.error?.code, 'message:', audio.error?.message);
        let errMsg = 'Format audio tidak didukung browser';
        if (audio.error) {
            switch(audio.error.code) {
                case 1: errMsg = 'Aborted'; break;
                case 2: errMsg = 'Network error'; break;
                case 3: errMsg = 'Decode error - format tidak didukung'; break;
                case 4: errMsg = 'Source not supported - coba download saja'; break;
            }
        }
        showToast('Error', 'Audio: ' + errMsg, 'error');
        closePlayer();
    };

    initIcons();
}

function closePlayer() {
    const player = document.getElementById('audio-player');
    const audio = document.getElementById('audio-element');
    if (audio) { audio.pause(); audio.src = ''; }
    isPlaying = false;
    currentAudioUrl = '';
    stopVisualizer();
    if (player) { player.classList.remove('show'); player.classList.add('paused'); }
    const btn = document.getElementById('player-play');
    if (btn) btn.classList.remove('player-pulse');
    
    document.querySelectorAll('.track-row .btn-play-sm').forEach(btn => btn.innerHTML = IC_PLAY);
}

function showDownloadInfoModal(result, spotifyUrl) {
    const old = document.getElementById('dl-info-modal');
    if (old) old.remove();
    
    const norm = normalizeDownloadResult(result);
    const cached = spotifyUrl ? trackDataMap.get(spotifyUrl) : null;
    const key = result.title && result.artist ? (result.title + '|' + result.artist).toLowerCase() : '';
    const cachedByKey = key ? trackDataMap.get(key) : null;
    const track = cached || cachedByKey || {};
    
    let rawDuration = result.duration || result.duration_ms || norm.duration || track.duration || '0:00';

    let merged = {
        title: result.title || norm.title || track.title || 'Unknown',
        artist: result.artist || norm.artist || track.artist || 'Unknown',
        album: result.album || norm.album || track.album || '-',
        image: result.image || norm.image || track.image || track.thumb || '',
        duration: formatDuration(rawDuration),
        download: result.download || norm.download || ''
    };

    const modal = document.createElement('div');
    modal.id = 'dl-info-modal';
    modal.className = 'modal-overlay';
    modal.style.zIndex = '110';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeDownloadInfoModal()"></div>
        <div class="modal-content" style="max-width:420px;">
            <div class="sticky top-0 bg-[var(--modal-bg)] backdrop-blur-md border-b border-[var(--border-color)] px-6 py-4 flex items-center justify-between z-10 rounded-t-3xl">
                <div class="flex items-center gap-2">
                    <span>${SPOTIFY_LOGO}</span>
                    <h3 class="font-bold text-[var(--text-primary)]">Info Lagu</h3>
                </div>
                <button onclick="closeDownloadInfoModal()" class="p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
            <div class="p-6 space-y-4">
                <div class="flex flex-col items-center text-center gap-3">
                    <div class="w-32 h-32 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg overflow-hidden relative">
                        <img id="dl-info-cover" src="${merged.image}" alt="Cover" class="w-full h-full object-cover absolute inset-0" style="${merged.image ? '' : 'display:none;'}" onerror="this.style.display='none';document.getElementById('dl-info-fallback').style.display='flex';">
                        <div id="dl-info-fallback" class="w-full h-full flex items-center justify-center" style="${merged.image ? 'display:none;' : ''}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-bold text-[var(--text-primary)] text-lg">${merged.title}</h4>
                        <p class="text-sm text-[var(--text-secondary)]">${merged.artist}</p>
                        <p class="text-xs text-[var(--text-muted)] mt-1">${merged.album}</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div class="bg-[var(--input-bg)] rounded-xl p-3 border border-[var(--border-color)]">
                        <p class="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">Durasi</p>
                        <p id="dl-info-duration" class="font-semibold text-[var(--text-primary)] text-sm">${merged.duration}</p>
                    </div>
                    <div class="bg-[var(--input-bg)] rounded-xl p-3 border border-[var(--border-color)]">
                        <p class="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">Format</p>
                        <p class="font-semibold text-[var(--text-primary)] text-sm">MP3</p>
                    </div>
                </div>
                <button id="dl-info-download-btn" class="btn-primary btn-emerald w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download MP3
                </button>
                <button onclick="closeDownloadInfoModal()" class="w-full py-2.5 rounded-xl border border-[var(--border-color)] text-sm font-semibold text-[var(--text-secondary)] hover:bg-[var(--hover-bg)] transition-colors">
                    Tutup
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('dl-info-download-btn').onclick = () => {
        if (merged.download) {
            window.open(merged.download, '_blank');
            showToast('Sukses', 'Download dimulai!', 'success');
        } else {
            showToast('Error', 'Link download tidak tersedia.', 'error');
        }
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (!merged.duration || merged.duration === '0:00') {
        (async () => {
            try {
                const searchQuery = encodeURIComponent(merged.title + ' ' + merged.artist);
                const searchRes = await fetch(`${API_PROXY.spotifySearch}?q=${searchQuery}`);
                const searchData = await searchRes.json();
                
                let rawTracks = searchData?.data || searchData?.result || [];
                if (!Array.isArray(rawTracks) && searchData?.data?.tracks) rawTracks = searchData.data.tracks;
                if (!Array.isArray(rawTracks) && searchData?.result?.tracks) rawTracks = searchData.result.tracks;
                
                if (rawTracks.length > 0) {
                    const first = rawTracks[0];
                    let foundDur = first.duration || first.duration_ms || first.durationMs || first.length || first.trackDuration || first.time || '0:00';
                    let formatted = formatDuration(foundDur);
                    
                    if (formatted && formatted !== '0:00') {
                        const durEl = document.getElementById('dl-info-duration');
                        if (durEl) durEl.textContent = formatted;
                    }
                }
            } catch (e) {
                console.log('[Info Modal] Duration enrich failed:', e.message);
            }
        })();
    }
}

function closeDownloadInfoModal() {
    const modal = document.getElementById('dl-info-modal');
    if (modal) modal.classList.remove('active');
    if (!document.getElementById('invoice-modal')?.classList.contains('active') 
        && !document.getElementById('lyrics-modal')?.classList.contains('active')
        && !document.getElementById('track-detail')?.classList.contains('active')) {
        document.body.style.overflow = '';
    }
}

// ============================================================
// MUSIC PLAYER v3 - iTunes Search & Visualizer
// ============================================================

let musicPlayerAudio = null;
let musicPlayerCtx = null;
let musicPlayerAnalyser = null;
let musicPlayerSource = null;
let musicPlayerDataArray = null;
let musicPlayerVizFrameId = null;
let musicPlayerIdleFrameId = null;
let musicPlayerKickEnergy = 0;
const musicPlayerKickDecay = 0.92;
let musicPlayerTracks = [];
let musicPlayerCurrentIndex = -1;
let musicPlayerIsPlaying = false;
let musicPlayerIsShuffle = false;
let musicPlayerIsRepeat = false;

const $mp = (id) => document.getElementById(id);

function fmtDuration(ms) {
    if (!ms) return '0:00';
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return m + ':' + (sec < 10 ? '0' : '') + sec;
}

function fmtDate(iso) {
    if (!iso) return '-';
    return new Date(iso).getFullYear();
}

function initMusicPlayerAudioContext() {
    if (!musicPlayerCtx) {
        try { musicPlayerCtx = new (window.AudioContext || window.webkitAudioContext)(); }
        catch (e) { return null; }
    }
    if (musicPlayerCtx.state === 'suspended') musicPlayerCtx.resume().catch(()=>{});
    return musicPlayerCtx;
}

async function searchITunes(query) {
    const loading = $mp('itunes-loading');
    const results = $mp('itunes-results');
    const empty = $mp('itunes-empty');
    
    if (!loading || !results || !empty) {
        console.warn('[Music Player] Elements not found, skipping search');
        return;
    }
    
    loading.classList.remove('hidden');
    results.innerHTML = '';
    empty.classList.add('hidden');

    try {
        const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&limit=24`);
        const data = await res.json();

        if (!data.results || !data.results.length) {
            empty.classList.remove('hidden');
            empty.innerHTML = `
                <div class="w-16 h-16 rounded-2xl bg-[var(--input-bg)] flex items-center justify-center mx-auto mb-4 border border-[var(--border-color)]">
                    <i data-lucide="music-off" class="w-8 h-8 text-[var(--text-muted)] opacity-50"></i>
                </div>
                <p class="text-sm text-[var(--text-muted)] font-medium">Tidak ada hasil untuk "${query}"</p>`;
            if (typeof lucide !== 'undefined') lucide.createIcons();
            return;
        }

        musicPlayerTracks = data.results;
        results.innerHTML = data.results.map((t, i) => {
            const img = t.artworkUrl100 ? t.artworkUrl100.replace('100x100bb', '600x600bb') : '';
            const dur = fmtDuration(t.trackTimeMillis);
            const year = fmtDate(t.releaseDate);
            const price = (t.trackPrice != null && t.currency) ? `${t.trackPrice} ${t.currency}` : '-';

            return `
            <div class="glass-card music-card group p-0 overflow-hidden transition-all duration-300" id="mc-${i}">
                <div class="relative aspect-square overflow-hidden bg-[var(--input-bg)]">
                    <img src="${img}" alt="${t.trackName}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy"
                         onerror="this.src='https://via.placeholder.com/600x600/e2e8f0/94a3b8?text=No+Cover'">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <button onclick="window.yukiPlayTrack(${i})" class="play-overlay-btn absolute bottom-3 right-3 w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg shadow-pink-500/30 hover:scale-110 active:scale-95">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </button>
                </div>
                <div class="p-4">
                    <div class="mb-2.5">
                        <h3 class="font-bold text-[var(--text-primary)] text-sm leading-tight line-clamp-2" title="${t.trackName}">${t.trackName}</h3>
                        <p class="text-xs text-[var(--text-secondary)] truncate mt-0.5">${t.artistName}</p>
                    </div>
                    <div class="flex flex-wrap gap-1.5 mb-3">
                        <span class="genre-badge">${t.primaryGenreName || 'Music'}</span>
                        <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-muted)] font-semibold">${dur}</span>
                    </div>
                    <div class="space-y-1 text-[11px] text-[var(--text-muted)]">
                        <div class="flex items-center gap-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                            <span class="truncate">${t.collectionName || 'Single'}</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                                <span>${year}</span>
                            </div>
                            <span class="font-semibold text-pink-500">${price}</span>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');

        if (typeof lucide !== 'undefined') lucide.createIcons();
    } catch (e) {
        results.innerHTML = `
            <div class="col-span-full text-center py-10">
                <div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-red-400"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                </div>
                <p class="text-sm text-[var(--text-muted)]">Gagal memuat: ${e.message}</p>
            </div>`;
    } finally {
        loading.classList.add('hidden');
    }
}

function buildMusicPlayerVizBars() {
    const viz = $mp('mp-viz');
    if (!viz) return;
    viz.innerHTML = '';
    for (let i = 0; i < 40; i++) {
        const bar = document.createElement('div');
        bar.className = 'mp-viz-bar';
        bar.style.height = '3px';
        viz.appendChild(bar);
    }
}

function startMusicPlayerIdleViz() {
    if (musicPlayerIdleFrameId) cancelAnimationFrame(musicPlayerIdleFrameId);
    const bars = document.querySelectorAll('.mp-viz-bar');
    if (!bars.length) return;
    let t = 0;
    function renderIdle() {
        if (musicPlayerIsPlaying) { musicPlayerIdleFrameId = null; return; }
        t += 0.04;
        bars.forEach((bar, i) => {
            const h = 3 + Math.sin(t + i * 0.35) * 4 + Math.sin(t * 0.7 + i * 0.15) * 2;
            bar.style.height = Math.max(3, Math.min(28, h)) + 'px';
            bar.className = 'mp-viz-bar';
        });
        musicPlayerIdleFrameId = requestAnimationFrame(renderIdle);
    }
    renderIdle();
}

function stopMusicPlayerIdleViz() {
    if (musicPlayerIdleFrameId) { cancelAnimationFrame(musicPlayerIdleFrameId); musicPlayerIdleFrameId = null; }
}

window.yukiPlayTrack = function(index) {
    const track = musicPlayerTracks[index];
    if (!track || !track.previewUrl) {
        showToast('Error', 'Preview tidak tersedia.', 'error');
        return;
    }

    const ctx = initMusicPlayerAudioContext();
    if (!ctx) {
        showToast('Error', 'Gagal inisialisasi audio.', 'error');
        return;
    }

    if (musicPlayerAudio) {
        try {
            musicPlayerAudio.pause();
            musicPlayerAudio.currentTime = 0;
            musicPlayerAudio.src = '';
        } catch(e) {}
        musicPlayerAudio = null;
    }
    
    if (musicPlayerSource) {
        try { musicPlayerSource.disconnect(); } catch(e) {}
        musicPlayerSource = null;
    }
    if (musicPlayerAnalyser) {
        try { musicPlayerAnalyser.disconnect(); } catch(e) {}
        musicPlayerAnalyser = null;
    }
    
    stopMusicPlayerViz();
    stopMusicPlayerIdleViz();
    musicPlayerIsPlaying = false;

    document.querySelectorAll('.music-card').forEach(c => c.classList.remove('music-card-active'));
    const card = $mp(`mc-${index}`);
    if (card) card.classList.add('music-card-active');
    musicPlayerCurrentIndex = index;

    const playerEl = $mp('music-player');
    if (playerEl) playerEl.classList.add('show');

    const imgUrl = track.artworkUrl100 ? track.artworkUrl100.replace('100x100bb', '600x600bb') : '';
    const coverEl = $mp('mp-cover');
    if (coverEl) {
        coverEl.src = imgUrl;
        coverEl.style.display = '';
    }
    const titleEl = $mp('mp-title');
    if (titleEl) titleEl.textContent = track.trackName;
    const artistEl = $mp('mp-artist');
    if (artistEl) artistEl.textContent = track.artistName;

    buildMusicPlayerVizBars();
    startMusicPlayerIdleViz();
    updateMusicPlayerPlayButton(false);
    
    const progressFill = $mp('mp-progress-fill');
    const progressThumb = $mp('mp-progress-thumb');
    if (progressFill) progressFill.style.width = '0%';
    if (progressThumb) progressThumb.style.left = '0%';

    musicPlayerAudio = new Audio();
    musicPlayerAudio.crossOrigin = 'anonymous';
    musicPlayerAudio.src = track.previewUrl;
    musicPlayerAudio.preload = 'auto';

    try {
        musicPlayerAnalyser = ctx.createAnalyser();
        musicPlayerAnalyser.fftSize = 256;
        musicPlayerAnalyser.smoothingTimeConstant = 0.78;
        musicPlayerAnalyser.minDecibels = -85;
        musicPlayerAnalyser.maxDecibels = -25;
        musicPlayerSource = ctx.createMediaElementSource(musicPlayerAudio);
        musicPlayerSource.connect(musicPlayerAnalyser);
        musicPlayerAnalyser.connect(ctx.destination);
        musicPlayerDataArray = new Uint8Array(musicPlayerAnalyser.frequencyBinCount);
    } catch (e) {
        console.error('[Audio] Graph failed:', e);
    }

    const playHandler = () => {
        musicPlayerIsPlaying = true;
        stopMusicPlayerIdleViz();
        updateMusicPlayerPlayButton(true);
        if (musicPlayerAnalyser && musicPlayerDataArray) startMusicPlayerViz();
        showToast('Playing', track.trackName + ' — ' + track.artistName, 'success');
    };

    const pauseHandler = () => {
        musicPlayerIsPlaying = false;
        stopMusicPlayerViz();
        startMusicPlayerIdleViz();
        updateMusicPlayerPlayButton(false);
    };

    const endedHandler = () => {
        musicPlayerIsPlaying = false;
        stopMusicPlayerViz();
        startMusicPlayerIdleViz();
        updateMusicPlayerPlayButton(false);
        const progressFill2 = $mp('mp-progress-fill');
        if (progressFill2) progressFill2.style.width = '100%';
        if (card) card.classList.remove('music-card-active');
        
        if (musicPlayerIsRepeat) {
            window.yukiPlayTrack(index);
        } else if (musicPlayerIsShuffle) {
            playMusicPlayerShuffle();
        } else {
            playMusicPlayerNext();
        }
    };

    const timeUpdateHandler = () => {
        if (!musicPlayerAudio || !musicPlayerAudio.duration) return;
        const pct = (musicPlayerAudio.currentTime / musicPlayerAudio.duration) * 100;
        const progressFill3 = $mp('mp-progress-fill');
        const progressThumb3 = $mp('mp-progress-thumb');
        if (progressFill3) progressFill3.style.width = pct + '%';
        if (progressThumb3) progressThumb3.style.left = pct + '%';
    };

    const errorHandler = (e) => {
        console.error('[Audio Error]', e);
        musicPlayerIsPlaying = false;
        stopMusicPlayerViz();
        startMusicPlayerIdleViz();
        updateMusicPlayerPlayButton(false);
        showToast('Error', 'Gagal memutar audio', 'error');
    };

    musicPlayerAudio.removeEventListener('play', playHandler);
    musicPlayerAudio.removeEventListener('pause', pauseHandler);
    musicPlayerAudio.removeEventListener('ended', endedHandler);
    musicPlayerAudio.removeEventListener('timeupdate', timeUpdateHandler);
    musicPlayerAudio.removeEventListener('error', errorHandler);

    musicPlayerAudio.addEventListener('play', playHandler);
    musicPlayerAudio.addEventListener('pause', pauseHandler);
    musicPlayerAudio.addEventListener('ended', endedHandler);
    musicPlayerAudio.addEventListener('timeupdate', timeUpdateHandler);
    musicPlayerAudio.addEventListener('error', errorHandler);

    musicPlayerAudio.play().catch(err => {
        console.error('[Play]', err);
        if (ctx.state === 'suspended') {
            ctx.resume().then(() => {
                musicPlayerAudio.play().catch(() => {
                    showToast('Error', 'Gagal memutar audio', 'error');
                });
            });
        } else {
            showToast('Error', 'Gagal memutar audio', 'error');
        }
    });
};

function playMusicPlayerShuffle() {
    if (musicPlayerTracks.length === 0) return;
    let idx = Math.floor(Math.random() * musicPlayerTracks.length);
    if (idx === musicPlayerCurrentIndex && musicPlayerTracks.length > 1) {
        idx = (idx + 1) % musicPlayerTracks.length;
    }
    window.yukiPlayTrack(idx);
}

function toggleMusicPlayerPlayPause() {
    if (!musicPlayerAudio) {
        if (musicPlayerTracks.length > 0 && musicPlayerCurrentIndex === -1) {
            window.yukiPlayTrack(0);
        }
        return;
    }
    
    if (musicPlayerCtx && musicPlayerCtx.state === 'suspended') {
        musicPlayerCtx.resume().catch(() => {});
    }
    
    if (musicPlayerAudio.paused) {
        musicPlayerAudio.play().catch((err) => {
            console.error('[Play]', err);
            showToast('Error', 'Gagal melanjutkan pemutaran', 'error');
        });
    } else {
        musicPlayerAudio.pause();
    }
}

function updateMusicPlayerPlayButton(playing) {
    const icon = $mp('mp-play-icon');
    if (!icon) return;
    if (playing) {
        icon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    } else {
        icon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
    }
}

function playMusicPlayerPrev() {
    if (musicPlayerTracks.length === 0) return;
    let idx = musicPlayerCurrentIndex - 1;
    if (idx < 0) idx = musicPlayerTracks.length - 1;
    window.yukiPlayTrack(idx);
}

function playMusicPlayerNext() {
    if (musicPlayerTracks.length === 0) return;
    let idx = musicPlayerCurrentIndex + 1;
    if (idx >= musicPlayerTracks.length) idx = 0;
    window.yukiPlayTrack(idx);
}

function stopMusicPlayer() {
    if (musicPlayerAudio) {
        try {
            musicPlayerAudio.pause();
            musicPlayerAudio.currentTime = 0;
            musicPlayerAudio.src = '';
        } catch(e) {}
        musicPlayerAudio = null;
    }
    musicPlayerIsPlaying = false;
    stopMusicPlayerViz();
    stopMusicPlayerIdleViz();
    const playerEl = $mp('music-player');
    if (playerEl) playerEl.classList.remove('show');
    document.querySelectorAll('.music-card').forEach(c => c.classList.remove('music-card-active'));
    musicPlayerCurrentIndex = -1;
    showToast('Info', 'Pemutaran dihentikan', 'info');
}

function startMusicPlayerViz() {
    if (musicPlayerVizFrameId) cancelAnimationFrame(musicPlayerVizFrameId);
    const bars = document.querySelectorAll('.mp-viz-bar');
    if (!bars.length || !musicPlayerAnalyser || !musicPlayerDataArray) return;

    function render() {
        if (!musicPlayerIsPlaying || !musicPlayerAudio || musicPlayerAudio.paused) {
            musicPlayerVizFrameId = requestAnimationFrame(render);
            return;
        }
        try {
            musicPlayerAnalyser.getByteFrequencyData(musicPlayerDataArray);
            const binCount = musicPlayerDataArray.length;
            const bassEnd = Math.floor(binCount * 0.08);
            const lowMidEnd = Math.floor(binCount * 0.18);
            const midEnd = Math.floor(binCount * 0.40);
            const highEnd = Math.floor(binCount * 0.70);

            const bassBins = musicPlayerDataArray.slice(0, bassEnd);
            const lowMidBins = musicPlayerDataArray.slice(bassEnd, lowMidEnd);
            const midBins = musicPlayerDataArray.slice(lowMidEnd, midEnd);
            const highBins = musicPlayerDataArray.slice(midEnd, highEnd);

            const bassAvg = bassBins.reduce((a,b)=>a+b,0) / (bassBins.length||1) / 255;

            musicPlayerKickEnergy = Math.max(bassAvg, musicPlayerKickEnergy * musicPlayerKickDecay);
            const isKick = musicPlayerKickEnergy > 0.55;

            if (isKick) {
                const cover = $mp('mp-cover');
                if (cover && !cover.classList.contains('kick-beat')) {
                    cover.classList.add('kick-beat');
                    setTimeout(() => cover.classList.remove('kick-beat'), 180);
                }
            }

            bars.forEach((bar, i) => {
                const ratio = i / bars.length;
                let value = 0;
                if (ratio < 0.20) {
                    const idx = Math.floor((ratio / 0.20) * bassBins.length);
                    value = bassBins[Math.min(idx, bassBins.length-1)] || 0;
                } else if (ratio < 0.40) {
                    const idx = Math.floor(((ratio-0.20) / 0.20) * lowMidBins.length);
                    value = lowMidBins[Math.min(idx, lowMidBins.length-1)] || 0;
                } else if (ratio < 0.65) {
                    const idx = Math.floor(((ratio-0.40) / 0.25) * midBins.length);
                    value = midBins[Math.min(idx, midBins.length-1)] || 0;
                } else {
                    const idx = Math.floor(((ratio-0.65) / 0.35) * highBins.length);
                    value = highBins[Math.min(idx, highBins.length-1)] || 0;
                }

                const pct = value / 255;
                let h = 3;
                if (ratio < 0.20) h = 3 + pct * 28;
                else if (ratio < 0.40) h = 3 + pct * 22;
                else if (ratio < 0.65) h = 3 + pct * 16;
                else h = 3 + pct * 12;

                bar.style.height = h + 'px';
                bar.className = 'mp-viz-bar';
                if (isKick && ratio < 0.10) bar.classList.add('kick');
            });
        } catch(e) {}
        musicPlayerVizFrameId = requestAnimationFrame(render);
    }
    render();
}

function stopMusicPlayerViz() {
    if (musicPlayerVizFrameId) { cancelAnimationFrame(musicPlayerVizFrameId); musicPlayerVizFrameId = null; }
    musicPlayerKickEnergy = 0;
    document.querySelectorAll('.mp-viz-bar').forEach(b => {
        b.style.height = '3px';
        b.className = 'mp-viz-bar';
    });
}

// === INIT MUSIC PLAYER ===
function initMusicPlayer() {
    console.log('[Music Player] Initializing...');
    
    const form = document.getElementById('itunes-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const q = document.getElementById('itunes-query')?.value.trim();
            if (q) searchITunes(q);
        });
    }

    const playBtn = document.getElementById('mp-play');
    if (playBtn) {
        playBtn.addEventListener('click', toggleMusicPlayerPlayPause);
    }

    const prevBtn = document.getElementById('mp-prev');
    if (prevBtn) {
        prevBtn.addEventListener('click', playMusicPlayerPrev);
    }

    const nextBtn = document.getElementById('mp-next');
    if (nextBtn) {
        nextBtn.addEventListener('click', playMusicPlayerNext);
    }

    const closeBtn = document.getElementById('mp-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', stopMusicPlayer);
    }

    const shuffleBtn = document.getElementById('mp-shuffle');
    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', () => {
            musicPlayerIsShuffle = !musicPlayerIsShuffle;
            shuffleBtn.classList.toggle('active', musicPlayerIsShuffle);
            showToast('Shuffle', musicPlayerIsShuffle ? 'Mode shuffle aktif' : 'Mode shuffle nonaktif', 'info');
        });
    }

    const repeatBtn = document.getElementById('mp-repeat');
    if (repeatBtn) {
        repeatBtn.addEventListener('click', () => {
            musicPlayerIsRepeat = !musicPlayerIsRepeat;
            repeatBtn.classList.toggle('active', musicPlayerIsRepeat);
            showToast('Repeat', musicPlayerIsRepeat ? 'Mode repeat aktif' : 'Mode repeat nonaktif', 'info');
        });
    }

    const progressClick = document.getElementById('mp-progress-click');
    if (progressClick) {
        progressClick.addEventListener('click', (e) => {
            if (!musicPlayerAudio || !musicPlayerAudio.duration) return;
            const rect = progressClick.getBoundingClientRect();
            const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            musicPlayerAudio.currentTime = pct * musicPlayerAudio.duration;
        });
    }

    buildMusicPlayerVizBars();
    startMusicPlayerIdleViz();

    // Expose for global use (dari music player)
    window.showToast = showToast;
    window.stopMusic = stopMusicPlayer;
    window.togglePlayPause = toggleMusicPlayerPlayPause;

    console.log('🎵 Music Player v3 loaded successfully!');
}

// Keyboard shortcut for music player
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const player = document.getElementById('music-player');
        if (player?.classList.contains('show')) {
            stopMusicPlayer();
        }
    }
    if (e.code === 'Space' && document.activeElement?.tagName !== 'INPUT') {
        const player = document.getElementById('music-player');
        if (player?.classList.contains('show')) {
            e.preventDefault();
            toggleMusicPlayerPlayPause();
        }
    }
});

// --- 15. KEYBOARD ---
function initKeyboard() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(); 
            closePlayer(); 
            closeTrackDetail(); 
            closeLyricsModal();
            // Jangan tutup music player di sini karena udah ada handler sendiri
        }
    });
}

// --- 16. LOADER ---
function initLoader() {
    const loader = document.getElementById("proseka-loader");
    const progressBar = document.getElementById("loader-progress-bar");
    const percentageText = document.getElementById("loader-percentage");

    if (!loader || !progressBar || !percentageText) {
        console.log('[Loader] Elements not found');
        return;
    }

    // Stop any existing animation on this loader
    if (loader.dataset.loaderAnim === 'running') {
        console.log('[Loader] Already running');
        return;
    }

    console.log('[Loader] Starting animation');
    loader.dataset.loaderAnim = 'running';

    // Reset visual state
    loader.style.opacity = '1';
    loader.style.pointerEvents = 'auto';
    loader.style.display = 'flex';
    loader.classList.remove('opacity-0');
    progressBar.style.width = '0%';
    percentageText.textContent = '0%';

    let progress = 0;
    const step = () => {
        progress += Math.floor(Math.random() * 12) + 8;
        if (progress > 100) progress = 100;

        progressBar.style.width = progress + '%';
        percentageText.textContent = progress + '%';

        if (progress >= 100) {
            setTimeout(() => {
                loader.classList.add('opacity-0');
                loader.style.pointerEvents = 'none';
                loader.dataset.loaderAnim = 'done';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 400);
        } else {
            setTimeout(step, 70);
        }
    };

    step();
}

// ===== PERUBAHAN 2: INIT untuk SPA =====
function initPageSpecific() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page') || 'index';
    
    if (page === 'pterodactyl') renderPanelProducts();
    if (page === 'spotify') initSpotify();
    if (page === 'pinterest') initPinterest();
    if (page === 'music-player') initMusicPlayer(); // ⚠️ TAMBAHKAN!
}

// INIT PERTAMA KALI
document.addEventListener('DOMContentLoaded', () => {
    initIcons();
    initKeyboard();
    initLoader();
});

// RE-INIT SAAT NAVIGASI SPA (pindah halaman tanpa reload)
document.addEventListener('page-loaded', function(e) {
    const page = e.detail.page;
    
    // Re-init fungsi yang perlu direset
    initTheme();
    initIcons();
    initSidebar();
    initInvoiceForm();
    initYukiBrandAnimation();
    
    // Init sesuai halaman
    if (page === 'pterodactyl') renderPanelProducts();
    if (page === 'spotify') initSpotify();
    if (page === 'pinterest') initPinterest();
    if (page === 'music-player') initMusicPlayer();
});

window.addEventListener('load', () => {
    initIcons();
});