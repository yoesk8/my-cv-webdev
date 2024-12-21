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
      aboutSubtitle: "Hello! I'm a passionate web developer with a focus on creating clean, modern, and responsive websites. I enjoy turning ideas into reality through code and design. My skills include HTML, CSS, and JavaScript. When I’m not coding, you’ll find me exploring new technologies or learning something new",
      projectsTitle: "My Projects",
      viewProjectButton: "View Project",
      projectOneTitle: "Website for Freelancer",
      projectTwoTitle: "Bitcoin Quiz app",
      projectThreeTitle: "Pool Testing Buddy",
      projectFourTitle: "Fitness blog with e-commerce",
      projecOneDescription: "A responsive website built with HTML, CSS, and Bootstrap to showcase clean design and interactivity.",
      projectTwoDescription: "A quiz game built with HTML, CSS, and JavaScript to test your knowledge about Bitcoin while displaying Bitcoin's real time price.",
      projectThreeDescription: "A fullstack website built with Flask to keep track of pool testing logs",
      projectFourDescription: " A fitness blog built with django and stripe with CRUD functionality and an e-commerce platform",
    },
    es: {
      heroTitle: "Bienvenido a Mi Portafolio",
      heroSubtitle: "Soy un apasionado desarrollador web que crea sitios modernos y responsivos.",
      buttonText: "Observa Mi Trabajo",
      translateButton: "English",
      aboutTitle: "Sobre Mi",
      aboutSubtitle: "¡Hola! Soy un desarrollador web apasionado con un enfoque en crear sitios web limpios, modernos y responsivos. Disfruto convirtiendo ideas en realidad a través del código y el diseño. Mis habilidades incluyen HTML, CSS y JavaScript. Cuando no estoy programando, me encontrarás explorando nuevas tecnologías o aprendiendo algo nuevo.",
      projectsTitle: "Mis Proyectos",
      viewProjectButton: "Ver Proyecto",
      projectOneTitle: "Sitio web para Negocio autónomo",
      projectTwoTitle: "Juego de Trivia sobre Bitcoin",
      projectThreeTitle: "Ayudante para tests de piscinas",
      projectFourTitle: "Blog de Fitness con e-commerce",
      projecOneDescription: "Un sitio web adaptivo construido con HTML, CSS y Bootstrap para mostrar un diseño limpio e interactividad.",
      projectTwoDescription: "Un juego de preguntas y respuestas construido con HTML, CSS y JavaScript para poner a prueba tus conocimientos sobre Bitcoin mientras muestra el precio en tiempo real de Bitcoin.",
      projectThreeDescription: "Un sitio web fullstack construido con Flask para llevar un registro de los registros de pruebas de piscina.",
      projectFourDescription: "Un blog de fitness construido con Django y Stripe con funcionalidad CRUD y una plataforma de comercio electrónico.",
    },
  };

  let currentLang = "en"; // Start with English

  const translateBtn = document.getElementById("translate-btn");
  const heroTitle = document.querySelector(".hero-content h1");
  const aboutTitle = document.querySelector(".about-container h2");
  const aboutSubtitle = document.querySelector(".about-container p");
  const heroSubtitle = document.querySelector(".hero-content p");
  const ctaButton = document.querySelector(".hero-content .btn");
  const projectsTitle = document.getElementById("projects-title");
  const projectOneTitle = document.getElementById("project-one-title");
  const projectTwoTitle = document.getElementById("project-two-title");
  const projectThreeTitle = document.getElementById("project-three-title");
  const projectFourTitle = document.getElementById("project-four-title");
  const projecOneDescription = document.getElementById("project-one-description");
  const projectTwoDescription = document.getElementById("project-two-description");
  const projectThreeDescription = document.getElementById("project-three-description");
  const projectFourDescription = document.getElementById("project-four-description");
  const viewProjectButton = document.querySelectorAll(".view-project-btn")

  translateBtn.addEventListener("click", () => {
    // Toggle language
    currentLang = currentLang === "en" ? "es" : "en";

    // Button update

    viewProjectButton.forEach(button=> button.textContent = translations[currentLang].viewProjectButton);

    // Update text content
    heroTitle.textContent = translations[currentLang].heroTitle;
    heroSubtitle.textContent = translations[currentLang].heroSubtitle;
    aboutTitle.textContent = translations[currentLang].aboutTitle;
    aboutSubtitle.textContent = translations[currentLang].aboutSubtitle;
    ctaButton.textContent = translations[currentLang].buttonText;
    translateBtn.textContent = translations[currentLang].translateButton;
    projectsTitle.textContent = translations[currentLang].projectsTitle;
    projectOneTitle.textContent = translations[currentLang].projectOneTitle;
    projectTwoTitle.textContent = translations[currentLang].projectTwoTitle;
    projectThreeTitle.textContent = translations[currentLang].projectThreeTitle;
    projectFourTitle.textContent = translations[currentLang].projectFourTitle;
    projecOneDescription.textContent = translations[currentLang].projecOneDescription;
    projectTwoDescription.textContent = translations[currentLang].projectTwoDescription;
    projectThreeDescription.textContent = translations[currentLang].projectThreeDescription;
    projectFourDescription.textContent = translations[currentLang].projectFourDescription;
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
