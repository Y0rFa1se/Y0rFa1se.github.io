(function() {
  const script = document.createElement('script');
  script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
  script.onload = function() {
    kofiWidgetOverlay.draw('y0rfa1se', {
      'type': 'floating-chat',
      'floating-chat.donateButton.text': 'Support me',
      'floating-chat.donateButton.background-color': '#323842',
      'floating-chat.donateButton.text-color': '#fff'
    });
  };
  document.head.appendChild(script);
})();