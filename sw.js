self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});
self.addEventListener('fetch', (e) => {
  // Пустой обработчик нужен для прохождения проверки на PWA
});
