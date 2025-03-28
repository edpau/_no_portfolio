const btn = document.getElementById('toggleThemeBtn');

const sunIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="orange" viewBox="0 0 24 24">
    <path d="M12 4V1M12 23v-3M4.22 4.22l-2.12-2.12M21.9 21.9l-2.12-2.12M1 12H4m16 0h3M4.22 19.78l-2.12 2.12M21.9 2.1l-2.12 2.12M12 6a6 6 0 100 12 6 6 0 000-12z"/>
  </svg>`;

const moonIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
  </svg>`;

btn.addEventListener('click', () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  btn.innerHTML = newTheme === 'light' ? moonIcon : sunIcon;
});

// Set initial icon on load
window.addEventListener('DOMContentLoaded', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  btn.innerHTML = currentTheme === 'light' ? moonIcon : sunIcon;
});