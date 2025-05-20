const switchTheme = document.querySelector('[data-switch]');

switchTheme.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
