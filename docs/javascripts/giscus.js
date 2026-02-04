(function() {
  const content = document.querySelector('.md-content__inner');
  if (!content || document.getElementById('giscus-container')) return;

  const hr = document.createElement('hr');
  const container = document.createElement('div');
  container.id = 'giscus-container';
  container.style.marginTop = '2rem';

  const script = document.createElement('script');
  script.src = "https://giscus.app/client.js";
  script.setAttribute('data-repo', 'y0rfa1se/y0rfa1se.github.io');
  script.setAttribute('data-repo-id', 'R_kgDOQsi9dw');
  script.setAttribute('data-category', 'Announcements');
  script.setAttribute('data-category-id', 'DIC_kwDOQsi9d84C0EYS');
  script.setAttribute('data-mapping', 'pathname');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'top');
  script.setAttribute('data-theme', 'light_high_contrast');
  script.setAttribute('data-lang', 'ko');
  script.setAttribute('data-loading', 'lazy');
  script.setAttribute('crossorigin', 'anonymous');
  script.async = true;

  content.appendChild(hr);
  content.appendChild(container);
  container.appendChild(script);
})();