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
    },
    es: {
      heroTitle: "Bienvenido a Mi Portafolio",
      heroSubtitle: "Soy un apasionado desarrollador web que crea sitios modernos y responsivos.",
      buttonText: "Ver Mi Trabajo",
      translateButton: "English",
    },
  };

  let currentLang = "en"; // Start with English

  const translateBtn = document.getElementById("translate-btn");
  const heroTitle = document.querySelector(".hero-content h1");
  const heroSubtitle = document.querySelector(".hero-content p");
  const ctaButton = document.querySelector(".hero-content .btn");

  translateBtn.addEventListener("click", () => {
    // Toggle language
    currentLang = currentLang === "en" ? "es" : "en";

    // Update text content
    heroTitle.textContent = translations[currentLang].heroTitle;
    heroSubtitle.textContent = translations[currentLang].heroSubtitle;
    ctaButton.textContent = translations[currentLang].buttonText;
    translateBtn.textContent = translations[currentLang].translateButton;
  });
