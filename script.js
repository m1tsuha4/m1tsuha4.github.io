// Theme toggle + year + smooth anchor focus
const root = document.documentElement;
document.getElementById('themeToggle').addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});
const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('light');
document.getElementById('year').textContent = new Date().getFullYear();
