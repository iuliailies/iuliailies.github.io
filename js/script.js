// Smooth scrolling (enhanced)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

// Toggle Burger Menu
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

// Function to toggle menu visibility
const toggleMenu = () => {
  navLinks.classList.toggle('active');
};

// Open/close menu when burger is clicked
burgerMenu.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click from closing the menu immediately
  toggleMenu();
});

// Close menu when clicking anywhere outside of it
document.addEventListener('click', (e) => {
  if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && e.target !== burgerMenu) {
    navLinks.classList.remove('active');
  }
});

// Close menu when a link inside the menu is clicked
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});

// Go to Top Button
const goToTopButton = document.getElementById('go-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    goToTopButton.classList.add('show');
  } else {
    goToTopButton.classList.remove('show');
  }
});

// Scroll to the top when the button is clicked
goToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});