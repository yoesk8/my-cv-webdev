// Select the hamburger menu and nav-links
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Add event listener to toggle the 'active' class
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  console.log(navLinks.classList + "Clicked");
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
