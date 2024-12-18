const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a'); // Target all links

// Toggle the nav menu visibility
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Add active class to the clicked link and remove it from others
navItems.forEach((link) => {
  link.addEventListener('click', () => {
    // Remove 'active' class from all links
    navItems.forEach((item) => item.classList.remove('active'));
    // Add 'active' class to the clicked link
    link.classList.add('active');
  });
});


// Translation Section
  const translations = {
    en: {
      heroTitle: "Welcome to My Portfolio",
      heroSubtitle: "I’m a passionate web developer crafting modern, responsive websites.",
      buttonText: "View My Work",
      translateButton: "Español",
      aboutTitle: "About Me",
      aboutSubtitle: "Hello! I'm a passionate web developer with a focus on creating clean, modern, and responsive websites. I enjoy turning ideas into reality through code and design. My skills include HTML, CSS, and JavaScript. When I’m not coding, you’ll find me exploring new technologies or learning something new"
    },
    es: {
      heroTitle: "Bienvenido a Mi Portafolio",
      heroSubtitle: "Soy un apasionado desarrollador web que crea sitios modernos y responsivos.",
      buttonText: "Observa Mi Trabajo",
      translateButton: "English",
      aboutTitle: "Sobre Mi",
      aboutSubtitle: "¡Hola! Soy un desarrollador web apasionado con un enfoque en crear sitios web limpios, modernos y responsivos. Disfruto convirtiendo ideas en realidad a través del código y el diseño. Mis habilidades incluyen HTML, CSS y JavaScript. Cuando no estoy codificando, me encontrarás explorando nuevas tecnologías o aprendiendo algo nuevo."
    },
  };

  let currentLang = "en"; // Start with English

  const translateBtn = document.getElementById("translate-btn");
  const heroTitle = document.querySelector(".hero-content h1");
  const aboutTitle = document.querySelector(".about-container h2");
  const aboutSubtitle = document.querySelector(".about-container p");
  const heroSubtitle = document.querySelector(".hero-content p");
  const ctaButton = document.querySelector(".hero-content .btn");

  translateBtn.addEventListener("click", () => {
    // Toggle language
    currentLang = currentLang === "en" ? "es" : "en";

    // Update text content
    heroTitle.textContent = translations[currentLang].heroTitle;
    heroSubtitle.textContent = translations[currentLang].heroSubtitle;
    aboutTitle.textContent = translations[currentLang].aboutTitle;
    aboutSubtitle.textContent = translations[currentLang].aboutSubtitle;
    ctaButton.textContent = translations[currentLang].buttonText;
    translateBtn.textContent = translations[currentLang].translateButton;
  });

  // Select modal elements
const modal = document.getElementById('project-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const liveSiteBtn = document.getElementById('live-site-btn');
const githubRepoBtn = document.getElementById('github-repo-btn');
const closeBtn = document.querySelector('.close-btn');

// Add event listeners to project buttons
const projectButtons = document.querySelectorAll('.view-project-btn');
projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const title = button.dataset.title;
    const image = button.dataset.image;
    const description = button.dataset.description;
    const liveLink = '#'; // Replace with actual live link
    const githubLink = '#'; // Replace with actual GitHub link

    // Update modal content
    modalTitle.textContent = title;
    modalImage.src = image;
    modalDescription.textContent = description;
    liveSiteBtn.href = liveLink;
    githubRepoBtn.href = githubLink;

    // Show modal
    modal.style.display = 'flex';
  });
});

// Close modal when the close button is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
