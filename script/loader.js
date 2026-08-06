// ============================================================
// YUKI STORE - HTML LOADER (SPA Navigation Fixed)
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

function updateActiveNav(pageName) {
    // Update sidebar nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href && href.includes('page=' + pageName)) {
            item.classList.add('active');
        }
    });
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

    // Update page title
    if (PAGE_TITLES[name]) {
        document.title = PAGE_TITLES[name];
    }

    // Update active nav state
    updateActiveNav(name);

    // Re-init Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Dispatch event for script.js to handle page-specific inits
    document.dispatchEvent(new CustomEvent('page-loaded', { detail: { page: name } }));

    // Update URL without reloading (SPA behavior)
    if (history.pushState) {
        const newUrl = window.location.pathname + '?page=' + name;
        history.pushState({ page: name }, '', newUrl);
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Close mobile sidebar if open
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');
    const menuToggle = document.getElementById('menu-toggle');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.add('hidden');
    if (menuToggle) menuToggle.classList.remove('open');
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

// Intercept all SPA navigation clicks
document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="?page="]');
    if (!link) return;

    e.preventDefault();
    const url = new URL(link.href, window.location.href);
    const page = url.searchParams.get('page');

    if (page && YUKI_PAGES[page]) {
        renderPage(page);
    }
});

// Handle browser back/forward
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.page && YUKI_PAGES[e.state.page]) {
        const container = document.getElementById('app-root');
        if (container) {
            container.innerHTML = YUKI_PAGES[e.state.page];
            updateActiveNav(e.state.page);
            if (PAGE_TITLES[e.state.page]) {
                document.title = PAGE_TITLES[e.state.page];
            }
            if (typeof lucide !== 'undefined') lucide.createIcons();
            document.dispatchEvent(new CustomEvent('page-loaded', { detail: { page: e.state.page } }));
        }
    } else {
        const page = detectPage();
        renderPage(page);
    }
});

// Auto render on first load
document.addEventListener('DOMContentLoaded', function() {
    const page = detectPage();
    renderPage(page);
});

window.YUKI = {
    pages: YUKI_PAGES,
    registerPage,
    renderPage,
    detectPage,
    updateActiveNav
};

console.log('✅ YUKI LOADER - Ready! SPA Navigation Fixed.');
