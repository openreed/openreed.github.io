// Open external links in a new tab
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href]');
  const currentHost = window.location.hostname;

  links.forEach(link => {
    const href = link.getAttribute('href');
    
    // Skip if no href
    if (!href) return;

    // Skip anchor links (internal page fragments)
    if (href.startsWith('#')) return;

    // Check if it's an external link
    try {
      const linkUrl = new URL(href, window.location.href);
      const isExternal = linkUrl.hostname !== currentHost && linkUrl.hostname !== '';
      
      if (isExternal) {
        // Add target="_blank" and rel="noopener noreferrer" for security
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    } catch (e) {
      // If URL parsing fails, treat it as internal
    }
  });
});
