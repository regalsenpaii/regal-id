const PINTEREST_HTML = `<aside id="sidebar" class="overflow-x-hidden overflow-y-hidden max-w-full">
        <!-- SIDEBAR BRAND (YUKI STORE) -->
        <div class="sidebar-brand">
            <div id="sidebar-brand-click" class="flex items-center gap-3 cursor-pointer select-none group relative p-1.5 rounded-xl transition-all duration-300 hover:bg-[var(--hover-bg)]" title="Klik untuk efek ombak!">
        
                <!-- Icon Bintang -->
                <div class="brand-icon transition-transform duration-300 group-hover:scale-110">
                    <i data-lucide="sparkles" class="w-5 h-5 text-white relative z-10"></i>
                </div>
        
                <!-- Teks Brand Interaktif -->
                <div class="relative overflow-hidden py-1">
                    <h1 id="yuki-brand-text" class="font-bold text-[var(--text-primary)] text-sm tracking-wide transition-colors duration-300">YUKI STORE</h1>
                    <p class="text-[10px] text-[var(--text-muted)] font-semibold tracking-widest">DASHBOARD v1.0</p>
                </div>
            </div>
        </div>
        <nav class="sidebar-nav">
            <!-- Dashboard -->
            <a href="?page=index" class="nav-item">
                <i data-lucide="layout-dashboard" class="nav-icon"></i><span>Dashboard</span>
            </a>
    
            <!-- Halaman lain pake query parameter -->
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
            <a href="?page=music-player" class="nav-item">
                <i data-lucide="headphones" class="nav-icon"></i><span>Music Player</span>
            </a>
            <a href="?page=pinterest" class="nav-item active">
                <i data-lucide="image" class="nav-icon"></i><span>Pinterest Search</span>
            </a>
        </nav>
        <div class="sidebar-footer space-y-4">
        <!-- THEME TOGGLE (MODE TAMPILAN) -->
        <div class="flex items-center justify-between p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)]">
            <span class="text-xs font-semibold text-[var(--text-primary)]">Mode Tampilan</span>
    
            <!-- Tombol Switch Animasi Telegram -->
            <button id="theme-toggle" type="button" aria-label="Toggle Theme" class="theme-toggle-btn">
                <i data-lucide="sun" class="sun-icon text-amber-500"></i>
                <i data-lucide="moon" class="moon-icon text-blue-400"></i>
            </button>
        </div>

            <!-- 2. UPTIME CARD (Otomatis terpisah jarak space-y-4) -->
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

    <div class="mobile-header">
        <!-- Tambahkan ID mobile-brand-click, class cursor-pointer, dan hover -->
        <div id="mobile-brand-click" class="flex items-center gap-2 cursor-pointer select-none py-1 px-1.5 rounded-xl transition-all duration-300 hover:bg-[var(--hover-bg)]" title="Klik YUKI STORE!">
        
            <!-- Tambahkan class brand-icon agar ikonnya ikut animasi membal -->
            <div class="brand-icon w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center transition-transform duration-300">
                <i data-lucide="sparkles" class="w-4 h-4 text-white"></i>
            </div>
        
            <!-- Pembungkus overflow-hidden & ID yuki-mobile-text agar teks tersapu ombak dengan rapi -->
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

    <main id="main-content">
        <div class="page-container">
            <div class="section-header">
                <div class="section-icon bg-pink-50">
                    <i data-lucide="image" class="w-5 h-5 text-pink-500"></i>
                </div>
                <div>
                    <h2 class="text-xl font-bold text-[var(--text-primary)]">Pinterest Search</h2>
                    <p class="text-sm text-[var(--text-muted)]">Cari gambar inspirasi dari Pinterest</p>
                </div>
            </div>
            <div class="glass-card p-6 mb-10">
                <form id="pinterest-form" class="flex gap-3 mb-6">
                    <div class="search-box flex-1">
                        <i data-lucide="search" class="search-icon w-4 h-4"></i>
                        <input type="text" id="pin-query" placeholder="Cari gambar di Pinterest..." required>
                    </div>
                    <button type="submit" class="btn-primary btn-pink px-6"><i data-lucide="search" class="w-4 h-4"></i><span class="hidden sm:inline">Cari</span></button>
                </form>
                <div id="pin-loading" class="hidden">
                    <div class="flex flex-col items-center justify-center py-12">
                        <div class="loading-spinner mb-3" style="border-top-color: #EC4899;"></div>
                        <p class="text-sm text-[var(--text-muted)]">Mencari gambar...</p>
                    </div>
                </div>
                <div id="pin-results" class="pin-grid w-full"></div>
                <div id="pin-empty" class="text-center py-12">
                    <div class="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center mx-auto mb-3">
                        <i data-lucide="image" class="w-8 h-8 text-pink-300"></i>
                    </div>
                    <p class="text-sm text-[var(--text-muted)]">Masukkan kata kunci untuk mulai mencari gambar</p>
                </div>
            </div>

            <!-- FOOTER -->
            <footer class="text-center py-8 border-t border-[var(--border-color)]">
                <div class="flex items-center justify-center gap-2 mb-2">
                    <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center">
                        <i data-lucide="sparkles" class="w-3.5 h-3.5 text-white"></i>
                    </div>
                    <span class="font-bold text-[var(--text-primary)] text-sm">YUKI STORE</span>
                </div>
                <p class="text-xs text-[var(--text-muted)]">Powered by Regal &copy; 2026</p>
                <p class="text-[10px] text-[var(--text-muted)] mt-1">Dashboard v1.0 - All rights reserved</p>
            </footer>

        </div>
    </main>

    <!-- MODAL INVOICE -->
    <div id="invoice-modal" class="modal-overlay">
        <div class="modal-backdrop" onclick="closeModal()"></div>
        <div class="modal-content">
            <div class="sticky top-0 bg-[var(--modal-bg)] backdrop-blur-md border-b border-[var(--border-color)] px-6 py-4 flex items-center justify-between z-10 rounded-t-3xl">
                <div class="flex items-center gap-2">
                    <i data-lucide="receipt" class="w-5 h-5 text-blue-500"></i>
                    <h3 class="font-bold text-[var(--text-primary)]">Invoice Pembayaran</h3>
                </div>
                <button onclick="closeModal()" class="p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                    <i data-lucide="x" class="w-5 h-5 text-[var(--text-muted)]"></i>
                </button>
            </div>
            <div class="p-6 space-y-5">
                <div class="bg-[var(--input-bg)] rounded-xl p-4 border border-[var(--border-color)]">
                    <p class="text-xs text-[var(--text-muted)] mb-1">Produk</p>
                    <p id="modal-product-name" class="font-semibold text-[var(--text-primary)] text-sm">-</p>
                    <div class="flex items-center justify-between mt-2 pt-2 border-t border-[var(--border-color)]">
                        <span class="text-xs text-[var(--text-muted)]">Total Harga</span>
                        <span id="modal-product-price" class="text-lg font-bold text-blue-600">-</span>
                    </div>
                </div>
                <div class="text-center">
                    <p class="text-xs text-[var(--text-muted)] mb-2">Scan QRIS untuk pembayaran</p>
                    <div class="inline-block p-3 bg-[var(--input-bg)] rounded-xl border border-[var(--border-color)] shadow-sm">
                        <img src="https://yuki-regal.vercel.app/Yuki1781204427360.jpg" alt="QRIS" class="w-48 h-auto rounded-lg"
                             onerror="this.src='https://via.placeholder.com/200x200/e2e8f0/64748b?text=QRIS'">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div class="bg-blue-50 rounded-xl p-3 border border-blue-100">
                        <div class="flex items-center gap-1.5 mb-1"><i data-lucide="wallet" class="w-3.5 h-3.5 text-blue-500"></i><span class="text-xs font-semibold text-blue-700">GOPAY</span></div>
                        <p class="text-sm font-mono text-blue-800">085166370226</p>
                    </div>
                    <div class="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
                        <div class="flex items-center gap-1.5 mb-1"><i data-lucide="wallet" class="w-3.5 h-3.5 text-emerald-500"></i><span class="text-xs font-semibold text-emerald-700">DANA</span></div>
                        <p class="text-sm font-mono text-emerald-800">088705666357</p>
                    </div>
                </div>
                <form id="invoice-form" class="space-y-4">
                    <div><label class="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Nama Pembeli</label><input type="text" id="buyer-name" placeholder="Masukkan nama Anda" class="form-input" required></div>
                    <div><label class="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Nomor WhatsApp</label><input type="tel" id="buyer-wa" placeholder="Contoh: 6281234567890" class="form-input" required></div>
                    <div>
                        <label class="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Upload Bukti Transfer</label>
                        <input type="file" id="buyer-proof" accept="image/*" class="hidden" onchange="handleFileSelect(this)">
                        <label for="buyer-proof" class="file-upload-zone">
                            <i data-lucide="upload-cloud" class="w-8 h-8 text-[var(--text-muted)] mx-auto mb-1"></i>
                            <span id="file-label" class="text-xs text-[var(--text-muted)]">Klik untuk upload bukti transfer</span>
                        </label>
                        <img id="file-preview" class="hidden mt-2 w-full h-32 object-cover rounded-xl border border-[var(--border-color)]" alt="Preview">
                    </div>
                    <button type="submit" class="btn-primary w-full"><i data-lucide="send" class="w-4 h-4"></i>Kirim Bukti Pembayaran</button>
                </form>
            </div>
        </div>
    </div>

    <!-- FLOATING AUDIO PLAYER -->
    <div id="audio-player">
        <div class="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
            <img id="player-cover" src="" alt="Cover" class="w-12 h-12 rounded-xl object-cover flex-shrink-0 hidden sm:block shadow-md">
            <div class="flex-1 min-w-0">
                <p id="player-title" class="text-sm font-bold text-[var(--text-primary)] truncate">-</p>
                <p id="player-artist" class="text-xs text-[var(--text-muted)] truncate">-</p>
            </div>
            <div class="hidden sm:flex items-end gap-[3px] h-8">
                <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
                <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
                <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
            </div>
            <div class="flex items-center gap-2">
                <button id="player-play" class="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-100">
                    <i data-lucide="pause" class="w-4 h-4"></i>
                </button>
                <button id="player-close" onclick="closePlayer()" class="w-8 h-8 rounded-full bg-slate-100 text-[var(--text-muted)] flex items-center justify-center hover:bg-slate-200 transition-colors">
                    <i data-lucide="x" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
        <audio id="audio-element" class="hidden"></audio>
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
    </div>`;

if (typeof YUKI !== 'undefined' && YUKI.registerPage) {
    YUKI.registerPage('pinterest', PINTEREST_HTML);
}

console.log('✅ YUKI STORE - Pinterest page registered');