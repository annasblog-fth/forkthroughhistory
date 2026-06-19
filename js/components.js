/* ===========================
   FORK THROUGH HISTORY
   Shared Components
   =========================== */

// Logo as base64 - loaded from external file
// This is set in each page's inline script

window.FTH = window.FTH || {};

FTH.logoSrc = 'images/logo.jpg'; // relative path, works for index; overridden in pages/

FTH.getHeader = function(activePage, logoPath) {
  const src = logoPath || FTH.logoSrc;
  return `
  <div id="page-transition" class="page-transition-overlay"></div>

  <!-- Back to Main (hidden on landing page) -->
  ${activePage !== 'home' ? `
  <a href="${activePage === 'archive' || activePage === 'recipe' ? '../index.html' : 'index.html'}" class="back-to-main" data-nav>
    <span class="arrow">←</span> Main
  </a>
  ` : ''}

  <!-- Ticker Strip -->
  <div class="ticker-wrap">
    <div class="ticker-inner">
      <span class="ticker-item">Updates every major holiday <span class="dot">✦</span></span>
      <span class="ticker-item">Journey through time and places from the comfort of your kitchen <span class="dot">✦</span></span>
      <span class="ticker-item">More in the Recipe Archive <span class="dot">✦</span></span>
      <span class="ticker-item">Updates every major holiday <span class="dot">✦</span></span>
      <span class="ticker-item">Journey through time and places from the comfort of your kitchen <span class="dot">✦</span></span>
      <span class="ticker-item">More in the Recipe Archive <span class="dot">✦</span></span>
    </div>
  </div>

  <!-- Site Header -->
  <header class="site-header">
    <div class="site-title">
      <a href="${activePage === 'archive' || activePage === 'recipe' ? '../index.html' : 'index.html'}" data-nav>Fork Through History</a>
    </div>
    <nav class="site-nav">
      <a href="${activePage === 'archive' || activePage === 'recipe' ? '../pages/archive.html' : 'pages/archive.html'}" data-nav>Archive</a>
      <a href="${activePage === 'home' ? '#about' : '../index.html#about'}">About</a>
      <a href="mailto:annasblogfth@gmail.com">Contact</a>
    </nav>
    <img src="${src}" alt="Fork Through History Logo" class="site-logo">
  </header>
  `;
};

FTH.getFooter = function() {
  return `
  <hr class="divider">
  <footer class="site-footer">
    <div class="footer-inner">
      <span class="footer-brand">Fork Through History</span>
      <span class="footer-note">Correspondence: <a href="mailto:annasblogfth@gmail.com">annasblogfth@gmail.com</a></span>
      <span class="footer-note">Updates every major holiday</span>
    </div>
  </footer>
  `;
};
