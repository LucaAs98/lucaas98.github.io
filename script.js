const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Chiudi il menu quando si clicca su un link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Chiudi il menu quando si clicca fuori
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && nav.classList.contains('open')) {
    nav.classList.remove('open');
  }
});