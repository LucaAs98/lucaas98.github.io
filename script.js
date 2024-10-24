// Select the navigation element and the hamburger menu button
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');

// Add a click event listener to the hamburger button
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open'); // Toggle the 'open' class on the navigation menu to show or hide it
});

// Close the menu when a navigation link is clicked
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open'); // Remove the 'open' class to hide the navigation menu
  });
});

// Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && nav.classList.contains('open'))
    nav.classList.remove('open'); // Remove the 'open' class to hide the navigation menu
});
