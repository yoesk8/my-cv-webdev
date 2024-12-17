// Select the hamburger menu and nav-links
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Add event listener to toggle the 'active' class
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
