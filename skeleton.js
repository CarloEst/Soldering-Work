/**
 * Page skeleton: injects shared layout (header, nav, footer) and styles.
 * Edit NAV_PROJECTS below to change menu links everywhere.
 */
(function () {
  // ——— EDIT THIS: project links for dropdown + mobile menu ———
  var NAV_PROJECTS = [
    { href: 'index.html', title: 'Soldering Sculpture', meta: 'Creative Embedded Systems' },
    { href: 'PCB_555Timer.html', title: '555 Timer Project', meta: 'Creative Embedded Systems' },
    { href: 'esp32-genart.html', title: 'ESP32 Generative Art', meta: 'Creative Embedded Systems' }
  ];

  var dropdownItems = NAV_PROJECTS.map(function (p) {
    return '<a class="dropdown-item" href="' + p.href + '" role="menuitem">' +
      p.title + '<span class="dropdown-meta">' + p.meta + '</span></a>';
  }).join('\n            ');

  var mobileItems = NAV_PROJECTS.map(function (p) {
    return '<a class="mobile-item" href="' + p.href + '">' + p.title + '</a>';
  }).join('\n        ');

  var pageContent = document.getElementById('page-content');
  var mainHTML = pageContent ? pageContent.innerHTML : '';

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'skeleton.css';
  document.head.appendChild(link);

  document.body.innerHTML =
    '<header><div class="header-inner"><h1 class="name">Olivier Estime</h1>' +
    '<nav class="nav" aria-label="Site"><a class="nav-link" href="index.html">Home</a>' +
    '<div class="dropdown"><button class="dropdown-btn" type="button" aria-haspopup="true" aria-expanded="false">Projects' +
    '<svg class="chev" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
    '<div class="dropdown-menu" role="menu" aria-label="Projects">' + dropdownItems + '</div></div>' +
    '<button class="menu-btn" id="menuBtn" type="button" aria-label="Open menu" aria-controls="mobileMenu" aria-expanded="false">' +
    '<svg class="menu-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 6h12M4 10h12M4 14h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button></nav></div></header>' +
    '<div class="mobile-menu" id="mobileMenu" aria-hidden="true"><div class="mobile-overlay" id="overlay"></div>' +
    '<div class="mobile-sheet" role="dialog" aria-modal="true" aria-label="Menu"><div class="mobile-title">Menu</div><div class="mobile-list">' +
    '<a class="mobile-item" href="index.html">Home</a>' + mobileItems + '</div></div></div>' +
    '<main>' + mainHTML + '</main>' +
    '<footer><span></span></footer>';

  (function () {
    var btn = document.getElementById('menuBtn');
    var menu = document.getElementById('mobileMenu');
    var overlay = document.getElementById('overlay');
    function openMenu() {
      menu.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      menu.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    if (btn) btn.addEventListener('click', function () {
      if (menu.getAttribute('aria-hidden') === 'false') closeMenu();
      else openMenu();
    });
    if (overlay) overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
    if (menu) menu.addEventListener('click', function (e) {
      if (e.target && e.target.tagName === 'A') closeMenu();
    });
  })();
})();
