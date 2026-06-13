// Language Switcher Dropdown
document.addEventListener('DOMContentLoaded', function() {
  const langDropdown = document.querySelector('.lang-switch-dropdown');
  if (!langDropdown) return;

  const btn = langDropdown.querySelector('.lang-switch-btn');
  const menu = langDropdown.querySelector('.lang-dropdown-menu');
  const items = menu.querySelectorAll('.lang-dropdown-item');

  if (!btn || !menu) return;

  // --- Compute language counterpart URLs ---
  function getLanguageCounterpart(pathname) {
    // Strip trailing slash for consistent processing
    const normalised = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

    if (normalised.startsWith('/zh-cn')) {
      // Chinese page → English page: remove /zh-cn prefix
      const englishPath = normalised.replace('/zh-cn', '') || '';
      return englishPath === '' ? '/' : englishPath + '/';
    } else {
      // English page → Chinese page: prepend /zh-cn
      if (normalised === '' || normalised === '/') {
        return '/zh-cn/';
      }
      return '/zh-cn' + normalised + '/';
    }
  }

  const currentPath = window.location.pathname;
  const counterpartPath = getLanguageCounterpart(currentPath);

  // Update dropdown link hrefs
  items.forEach(function(item) {
    const lang = item.getAttribute('data-lang');
    if (lang === 'en') {
      // Going to English: current page is Chinese → use counterpartPath
      // Going to English: current page is English → stay on same page (href = current)
      item.href = currentPath.startsWith('/zh-cn') ? counterpartPath : currentPath;
    } else if (lang === 'zh') {
      // Going to Chinese: current page is English → use counterpartPath
      // Going to Chinese: current page is Chinese → stay on same page (href = current)
      item.href = currentPath.startsWith('/zh-cn') ? currentPath : counterpartPath;
    }
  });

  // --- Dropdown UI ---
  // Toggle dropdown on button click
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    btn.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Close dropdown when clicking on a menu item
  items.forEach(function(item) {
    item.addEventListener('click', function() {
      btn.classList.remove('active');
      menu.classList.remove('active');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!langDropdown.contains(e.target)) {
      btn.classList.remove('active');
      menu.classList.remove('active');
    }
  });

  // Close dropdown on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      btn.classList.remove('active');
      menu.classList.remove('active');
    }
  });
});
