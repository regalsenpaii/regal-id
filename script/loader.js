// ============================================================
// YUKI STORE - HTML LOADER
// ============================================================

const YUKI_PAGES = {};

const PAGE_TITLES = {
    'index': 'Yuki Store - Dashboard v1.0',
    'pterodactyl': 'Yuki Store - Panel Pterodactyl',
    'sewa-bot': 'Yuki Store - Sewa Bot & Premium',
    'script-yuki': 'Yuki Store - Script Yuki AI',
    'spotify': 'Yuki Store - Spotify Finder',
    'music-player': 'Yuki Store - Music Player',
    'pinterest': 'Yuki Store - Pinterest Search'
};

function registerPage(name, htmlContent) {
    YUKI_PAGES[name] = htmlContent;
}

function renderPage(name, containerId = 'app-root') {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container #${containerId} tidak ditemukan!`);
        return;
    }
    
    const html = YUKI_PAGES[name];
    if (!html) {
        container.innerHTML = `<div class="error-page">Halaman "${name}" tidak ditemukan.</div>`;
        return;
    }
    
    container.innerHTML = html;
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Re-init fungsi2 penting
    if (typeof initTheme === 'function') initTheme();
    if (typeof initSidebar === 'function') initSidebar();
    if (typeof initInvoiceForm === 'function') initInvoiceForm();
    if (typeof initYukiBrandAnimation === 'function') initYukiBrandAnimation();
    if (typeof initLoader === 'function') initLoader();
    if (typeof renderPanelProducts === 'function') renderPanelProducts();
    if (typeof initSpotify === 'function') initSpotify();
    if (typeof initPinterest === 'function') initPinterest();
    if (typeof initMusicPlayer === 'function') initMusicPlayer(); // ⚠️ TAMBAHKAN INI!
    
    document.dispatchEvent(new CustomEvent('page-loaded', { detail: { page: name } }));
    
    if (history.pushState) {
        const newUrl = window.location.pathname + '?page=' + name;
        history.pushState({ page: name }, '', newUrl);
    }
}

function detectPage() {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    
    if (pageParam && YUKI_PAGES[pageParam]) {
        return pageParam;
    }
    
    const hash = window.location.hash.replace('#', '');
    if (hash && YUKI_PAGES[hash]) {
        return hash;
    }
    
    return 'index';
}

// Auto render
document.addEventListener('DOMContentLoaded', function() {
    const page = detectPage();
    renderPage(page);
});

window.addEventListener('popstate', function() {
    const page = detectPage();
    renderPage(page);
});

window.YUKI = {
    pages: YUKI_PAGES,
    registerPage,
    renderPage,
    detectPage
};

console.log('✅ YUKI LOADER - Ready!');