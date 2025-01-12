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


// Circle Moving Away on Click
const interactiveBox = document.querySelector('.interactive-box');
const circle = document.querySelector('.circle');

circle.addEventListener('click', (e) => {
  // Get dimensions of the box
  const boxRect = interactiveBox.getBoundingClientRect();

  // Calculate random position for the circle within the box
  const circleSize = circle.offsetWidth; // Circle's size (assuming width = height)
  const maxX = boxRect.width - circleSize; // Max X position (box width - circle width)
  const maxY = boxRect.height - circleSize; // Max Y position (box height - circle height)

  const randomX = Math.random() / 2 * maxX; // Random X within the box
  const randomY = Math.random() / 2 * maxY; // Random Y within the box

  // Apply the new position, keeping the circle fully visible inside the box
  circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', () => {
  // Center the circle by resetting top and left
  circle.style.top = '50%';
  circle.style.left = '50%';

  // Apply translate(-50%, -50%) to center the circle relative to its dimensions
  circle.style.transform = 'translate(-50%, -50%)';
});

const exampleTag = document.querySelector('.try-me-tag');

const updateExampleTagText = () => {
  if (window.innerWidth <= 430) {
    exampleTag.textContent = 'Flip the phone';
  } else {
    exampleTag.textContent = 'Resize the screen';
  }
};

updateExampleTagText();

// Accordion Toggle Functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;

    // Close other open items
    document.querySelectorAll('.accordion-item').forEach(item => {
      if (item !== accordionItem) {
        item.classList.remove('active');
      }
    });

    // Toggle the current item
    accordionItem.classList.toggle('active');
  });
});