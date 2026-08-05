const MUSIC_PLAYER_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Player - Yuki Store</title>
    <meta property="og:title" content="Music Player - Yuki Store">
    <meta property="og:description" content="Putar lagu dengan visualizer beat real-time dari iTunes">
    <meta property="og:url" content="https://yukii-store.vercel.app">
    <meta property="og:image" content="https://yuki-regal.vercel.app/Yuki1782410723295.jpg">
    <meta property="og:type" content="website">
    <link rel="icon" href="https://yuki-regal.vercel.app//Yuki1785746271503.jpg" type="image/jpeg">
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"><\/script>
    <link rel="stylesheet" href="style.css">
    <script>
        (function() {
            const theme = localStorage.getItem('yuki_theme') || 'light';
            document.documentElement.setAttribute('data-theme', theme);
        })();
    <\/script>
    <script>
        tailwind.config = {
            theme: { extend: { fontFamily: { inter: ['Inter', 'sans-serif'] } } }
        }
    <\/script>
    <style>
        /* ===== COMPACT MUSIC PLAYER (BOTTOM) ===== */
        #music-player {
            position: fixed;
            bottom: 0;
            left: 260px;
            right: 0;
            background: rgba(15, 23, 42, 0.92);
            backdrop-filter: blur(24px) saturate(1.8);
            -webkit-backdrop-filter: blur(24px) saturate(1.8);
            border-top: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 -8px 32px rgba(0,0,0,0.3);
            z-index: 45;
            transform: translateY(100%);
            transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
            color: white;
        }
        #music-player.show {
            transform: translateY(0);
        }
        @media (max-width: 1023px) {
            #music-player { left: 0; }
        }

        .mp-inner {
            max-width: 1100px;
            margin: 0 auto;
            padding: 14px 24px;
            display: flex;
            align-items: center;
            gap: 16px;
        }
        @media (max-width: 640px) {
            .mp-inner { padding: 10px 14px; gap: 10px; flex-wrap: wrap; }
        }

        .mp-cover {
            width: 56px; height: 56px;
            border-radius: 12px;
            object-fit: cover;
            box-shadow: 0 4px 16px rgba(0,0,0,0.3);
            flex-shrink: 0;
            transition: transform 0.15s ease;
        }
        .mp-cover.kick-beat {
            animation: coverPulse 0.18s ease-out;
        }
        @keyframes coverPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
        }

        .mp-info-col {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .mp-title {
            font-size: 14px;
            font-weight: 700;
            color: #fff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .mp-artist {
            font-size: 12px;
            color: rgba(255,255,255,0.55);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .mp-viz-wrap {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            gap: 2px;
            height: 32px;
            flex: 1;
            min-width: 80px;
            max-width: 280px;
        }
        .mp-viz-bar {
            flex: 1;
            border-radius: 99px;
            min-height: 2px;
            background: rgba(255,255,255,0.85);
            transition: height 0.05s ease-out;
            box-shadow: 0 0 4px rgba(255,255,255,0.2);
        }
        .mp-viz-bar.kick {
            background: linear-gradient(to top, #fff, #a5f3fc) !important;
            box-shadow: 0 0 8px rgba(165,243,252,0.6), 0 0 16px rgba(165,243,252,0.3);
        }

        .mp-controls {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
        }
        .mp-btn-icon {
            width: 32px; height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background: transparent;
            color: rgba(255,255,255,0.5);
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .mp-btn-icon:hover {
            color: rgba(255,255,255,0.9);
            transform: scale(1.1);
        }
        .mp-btn-icon:active {
            transform: scale(0.92);
        }
        .mp-btn-icon.active {
            color: #a5f3fc;
        }
        .mp-btn-play {
            width: 42px; height: 42px;
            border-radius: 50%;
            background: #fff;
            color: #0f172a;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 16px rgba(255,255,255,0.15);
            transition: all 0.2s ease;
        }
        .mp-btn-play:hover {
            transform: scale(1.08);
            box-shadow: 0 6px 20px rgba(255,255,255,0.25);
        }
        .mp-btn-play:active {
            transform: scale(0.95);
        }

        .mp-btn-close {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background: rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.5);
            cursor: pointer;
            transition: all 0.2s ease;
            margin-left: 4px;
        }
        .mp-btn-close:hover {
            background: rgba(239, 68, 68, 0.3);
            color: #ef4444;
            transform: scale(1.1);
        }
        .mp-btn-close:active {
            transform: scale(0.9);
        }

        .mp-progress-wrap {
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 3px;
            background: rgba(255,255,255,0.08);
            cursor: pointer;
        }
        .mp-progress-bar {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #22d3ee, #a5f3fc);
            transition: width 0.1s linear;
            box-shadow: 0 0 8px rgba(34,211,238,0.4);
        }
        .mp-progress-thumb {
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 10px; height: 10px;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0 0 8px rgba(255,255,255,0.5);
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        .mp-progress-wrap:hover .mp-progress-thumb {
            opacity: 1;
        }

        .music-card-active {
            border-color: rgba(236,72,153,0.5) !important;
            box-shadow: 0 0 20px rgba(236,72,153,0.15), var(--shadow-card-hover) !important;
        }
        .music-card .play-overlay-btn {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
            transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .music-card:hover .play-overlay-btn {
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        #main-content {
            padding-bottom: 120px;
        }
        @media (max-width: 640px) {
            #main-content { padding-bottom: 100px; }
            .mp-viz-wrap { max-width: 120px; height: 24px; }
            .mp-controls { gap: 6px; }
            .mp-btn-icon { width: 28px; height: 28px; }
            .mp-btn-play { width: 36px; height: 36px; }
            .mp-btn-close { width: 24px; height: 24px; }
        }
    </style>
</head>
<body class="font-inter">

    <!-- SIDEBAR -->
    <aside id="sidebar" class="overflow-x-hidden overflow-y-hidden max-w-full">
        <div class="sidebar-brand">
            <div id="sidebar-brand-click" class="flex items-center gap-3 cursor-pointer select-none group relative p-1.5 rounded-xl transition-all duration-300 hover:bg-[var(--hover-bg)]" title="Klik untuk efek ombak!">
                <div class="brand-icon transition-transform duration-300 group-hover:scale-110">
                    <i data-lucide="sparkles" class="w-5 h-5 text-white relative z-10"></i>
                </div>
                <div class="relative overflow-hidden py-1">
                    <h1 id="yuki-brand-text" class="font-bold text-[var(--text-primary)] text-sm tracking-wide transition-colors duration-300">YUKI STORE</h1>
                    <p class="text-[10px] text-[var(--text-muted)] font-semibold tracking-widest">DASHBOARD v1.0</p>
                </div>
            </div>
        </div>

        <nav class="sidebar-nav">
            <a href="?page=index" class="nav-item">
                <i data-lucide="layout-dashboard" class="nav-icon"></i><span>Dashboard</span>
            </a>
            <a href="?page=pterodactyl" class="nav-item">
                <i data-lucide="server" class="nav-icon"></i><span>Panel Pterodactyl</span>
            </a>
            <a href="?page=sewa-bot" class="nav-item">
                <i data-lucide="bot" class="nav-icon"></i><span>Sewa Bot & Prem</span>
            </a>
            <a href="?page=script-yuki" class="nav-item">
                <i data-lucide="code" class="nav-icon"></i><span>Script Yuki AI</span>
            </a>
            <a href="?page=spotify" class="nav-item">
                <i data-lucide="music" class="nav-icon"></i><span>Spotify Finder</span>
            </a>
            <a href="?page=music-player" class="nav-item active">
                <i data-lucide="headphones" class="nav-icon"></i><span>Music Player</span>
            </a>
            <a href="?page=pinterest" class="nav-item">
                <i data-lucide="image" class="nav-icon"></i><span>Pinterest Search</span>
            </a>
        </nav>

        <div class="sidebar-footer space-y-4">
            <div class="flex items-center justify-between p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">
                <span class="text-xs font-semibold text-[var(--text-primary)]">Mode Tampilan</span>
                <button id="theme-toggle" type="button" aria-label="Toggle Theme" class="theme-toggle-btn">
                    <i data-lucide="sun" class="sun-icon text-amber-500"></i>
                    <i data-lucide="moon" class="moon-icon text-blue-400"></i>
                </button>
            </div>
            <div class="uptime-card">
                <div class="flex items-center gap-2 mb-1">
                    <span class="status-pulse"></span>
                    <span class="text-[11px] font-semibold text-emerald-700">Server Uptime</span>
                </div>
                <p class="text-xl font-bold text-emerald-600">99.9%</p>
                <p class="text-[10px] text-emerald-500 mt-0.5">Semua sistem berjalan lancar</p>
            </div>
        </div>
    </aside>

    <div id="mobile-overlay" class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 hidden lg:hidden"></div>

    <!-- MOBILE HEADER -->
    <div class="mobile-header">
        <div id="mobile-brand-click" class="flex items-center gap-2 cursor-pointer select-none py-1 px-1.5 rounded-xl transition-all duration-300 hover:bg-[var(--hover-bg)]" title="Klik YUKI STORE!">
            <div class="brand-icon w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center transition-transform duration-300">
                <i data-lucide="sparkles" class="w-4 h-4 text-white"></i>
            </div>
            <div class="relative overflow-hidden py-1">
                <span id="yuki-mobile-text" class="font-bold text-[var(--text-primary)] text-sm block">YUKI STORE</span>
            </div>
        </div>
        <button id="menu-toggle" class="p-2.5 rounded-xl hover:bg-[var(--hover-bg)] transition-all duration-300 relative group flex flex-col justify-center items-center gap-1 w-10 h-10 overflow-hidden">
            <span class="w-5 h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-300 transform origin-center bar-1"></span>
            <span class="w-5 h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-300 bar-2"></span>
            <span class="w-5 h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-300 transform origin-center bar-3"></span>
        </button>
    </div>

    <!-- MAIN CONTENT -->
    <main id="main-content">
        <div class="page-container">

            <!-- HERO SEARCH -->
            <section class="mb-8">
                <div class="glass-card p-6 sm:p-10 text-center relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-rose-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div class="relative z-10">
                        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-pink-200/40">
                            <i data-lucide="headphones" class="w-8 h-8 text-white"></i>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">Music Player</h2>
                        <p class="text-sm text-[var(--text-muted)] mb-8 max-w-md mx-auto">Cari lagu favoritmu dari library iTunes. Dengarkan preview 30 detik dengan visualizer beat real-time.</p>

                        <form id="itunes-form" class="search-box max-w-2xl mx-auto">
                            <i data-lucide="search" class="search-icon w-5 h-5"></i>
                            <input type="text" id="itunes-query" placeholder="Ketik nama lagu atau artis..." required autocomplete="off">
                        </form>
                        <p class="text-[11px] text-[var(--text-muted)] mt-3">Powered by iTunes Search API</p>
                    </div>
                </div>
            </section>

            <!-- RESULTS -->
            <section>
                <div class="section-header mb-6">
                    <div class="section-icon bg-pink-50">
                        <i data-lucide="disc-3" class="w-5 h-5 text-pink-500"></i>
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-[var(--text-primary)]">Hasil Pencarian</h2>
                        <p class="text-sm text-[var(--text-muted)]">Klik play untuk dengarkan preview</p>
                    </div>
                </div>

                <div id="itunes-loading" class="hidden">
                    <div class="glass-card p-10 text-center">
                        <div class="loading-spinner mx-auto mb-4"></div>
                        <p class="text-sm text-[var(--text-muted)]">Mencari di iTunes...</p>
                    </div>
                </div>

                <div id="itunes-empty" class="text-center py-12">
                    <div class="w-16 h-16 rounded-2xl bg-[var(--input-bg)] flex items-center justify-center mx-auto mb-4 border border-[var(--border-color)]">
                        <i data-lucide="music-4" class="w-8 h-8 text-[var(--text-muted)] opacity-50"></i>
                    </div>
                    <p class="text-sm text-[var(--text-muted)] font-medium">Masukkan kata kunci untuk mulai mencari lagu</p>
                    <p class="text-xs text-[var(--text-muted)] mt-1">Contoh: "Taylor Swift", "APT ROSÉ", "Alan Walker"</p>
                </div>

                <div id="itunes-results" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"></div>
            </section>

            <!-- FOOTER -->
            <footer class="text-center py-10 border-t border-[var(--border-color)] mt-10">
                <div class="flex items-center justify-center gap-2 mb-2">
                    <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center">
                        <i data-lucide="sparkles" class="w-3.5 h-3.5 text-white"></i>
                    </div>
                    <span class="font-bold text-[var(--text-primary)] text-sm">YUKI STORE</span>
                </div>
                <p class="text-xs text-[var(--text-muted)]">Powered by Regal &copy; 2026</p>
                <p class="text-[10px] text-[var(--text-muted)] mt-1">Music Player &mdash; iTunes Search API</p>
            </footer>

        </div>
    </main>

    <!-- COMPACT MUSIC PLAYER (BOTTOM) -->
    <div id="music-player">
        <div class="mp-progress-wrap" id="mp-progress-click">
            <div class="mp-progress-bar" id="mp-progress-fill"></div>
            <div class="mp-progress-thumb" id="mp-progress-thumb"></div>
        </div>
        <div class="mp-inner">
            <img id="mp-cover" src="" alt="Cover" class="mp-cover" onerror="this.style.display='none'">
            <div class="mp-info-col">
                <p id="mp-title" class="mp-title">-</p>
                <p id="mp-artist" class="mp-artist">-</p>
            </div>
            <div class="mp-viz-wrap" id="mp-viz"></div>
            <div class="mp-controls">
                <button id="mp-shuffle" class="mp-btn-icon" title="Shuffle">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
                </button>
                <button id="mp-prev" class="mp-btn-icon" title="Previous">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                </button>
                <button id="mp-play" class="mp-btn-play" title="Play / Pause">
                    <svg id="mp-play-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </button>
                <button id="mp-next" class="mp-btn-icon" title="Next">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
                </button>
                <button id="mp-repeat" class="mp-btn-icon" title="Repeat">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
                </button>
                <button id="mp-close" class="mp-btn-close" title="Close Player">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
        </div>
    </div>

    <!-- TOAST -->
    <div id="toast">
        <div class="toast-box">
            <div id="toast-icon" class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <i data-lucide="check" class="w-4 h-4 text-emerald-500"></i>
            </div>
            <div>
                <p id="toast-title" class="text-sm font-semibold text-[var(--text-primary)]">Berhasil</p>
                <p id="toast-message" class="text-xs text-[var(--text-muted)]">Operasi berhasil</p>
            </div>
        </div>
    </div>
</body>
</html>`;

if (typeof YUKI !== 'undefined' && YUKI.registerPage) {
    YUKI.registerPage('music-player', MUSIC_PLAYER_HTML);
}

console.log('✅ YUKI STORE - Music Player page registered');