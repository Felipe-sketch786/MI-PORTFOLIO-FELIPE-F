// / Menu responsive /
const btnMenu = document.getElementById('btn-menu');
const navLinks = document.getElementById('nav-links');

if (btnMenu && navLinks) {
  btnMenu.addEventListener('click', () => {
    const active = navLinks.classList.toggle('active');
    btnMenu.textContent = active ? '✕' : '☰';
  });

  document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      btnMenu.textContent = '☰';
    });
  });
}

// / Modo Oscuro /
const btnTheme = document.getElementById('btn-theme');

if (btnTheme) {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    btnTheme.textContent = '☀️';
  }

  btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    btnTheme.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
