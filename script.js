const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a'); // Target all links

// Toggle the nav menu visibility
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Function to update active class on navbar links
function setActiveNav() {
  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove 'active' class from all links
      navItems.forEach((item) => item.classList.remove("active"));
      // Add 'active' class to the clicked link
      link.classList.add("active");
    });
  });
}

// Initialize the active class functionality on page load
setActiveNav();

// Translation Section

let currentLang = "en"; // Start with English

  const translations = {
    en: {
      heroTitle: "Welcome to My Portfolio",
      heroSubtitle: "I’m a passionate web developer crafting modern, responsive websites.",
      buttonText: "View My Work",
      navAbout: "About",
      navProjects: "Projects",
      navContact: "Contact",
      translateButton: "Español",
      sendButton: "Send",
      aboutTitle: "About Me",
      aboutSubtitle: "Hello! I'm a passionate web developer with a focus on creating clean, modern, and responsive websites. I enjoy turning ideas into reality through code and design. My skills include HTML, CSS, and JavaScript. When I’m not coding, you’ll find me exploring new technologies or learning something new",
      projectsTitle: "My Projects",
      viewProjectButton: "View Project",
      phoneNumber: "+44 7895628993",
      projectCeroTitle: "Website for Freelancer",
      projectCeroOneTitle: "Website for Freelancer",
      projectOneTitle: "Website for Freelancer",
      projectTwoTitle: "Bitcoin Quiz app",
      projectThreeTitle: "Pool Testing Buddy",
      projectFourTitle: "Fitness blog with e-commerce",
      projecOneDescription: "A responsive website built with HTML, CSS, and Bootstrap to showcase clean design and interactivity.",
      projectTwoDescription: "A quiz game built with HTML, CSS, and JavaScript to test your knowledge about Bitcoin while displaying Bitcoin's real time price.",
      projectThreeDescription: "A fullstack website built with Flask to keep track of pool testing logs",
      projectFourDescription: " A fitness blog built with django and stripe with CRUD functionality and an e-commerce platform",
      nameForm: "Name",
      emailForm: "Email",
      messageForm: "Message",
      footerCredits: "Built with ❤️ using HTML, CSS, and JavaScript."
    },
    es: {
      heroTitle: "Bienvenido a Mi Portafolio",
      heroSubtitle: "Soy un apasionado desarrollador web que crea sitios modernos y responsivos.",
      buttonText: "Observa Mi Trabajo",
      navAbout: "Sobre mi",
      navProjects: "Proyectos",
      navContact: "Contáctame",
      translateButton: "English",
      sendButton: "Enviar",
      aboutTitle: "Sobre Mi",
      aboutSubtitle: "¡Hola! Soy un desarrollador web apasionado con un enfoque en crear sitios web limpios, modernos y responsivos. Disfruto convirtiendo ideas en realidad a través del código y el diseño. Mis habilidades incluyen HTML, CSS y JavaScript. Cuando no estoy programando, me encontrarás explorando nuevas tecnologías o aprendiendo algo nuevo.",
      projectsTitle: "Mis Proyectos",
      viewProjectButton: "Ver Proyecto",
      phoneNumber: "+593 980528893",
      projectOneTitle: "Sitio web para Negocio autónomo",
      projectTwoTitle: "Juego de Trivia sobre Bitcoin",
      projectThreeTitle: "Ayudante para tests de piscinas",
      projectFourTitle: "Blog de Fitness con e-commerce",
      projecOneDescription: "Un sitio web adaptivo construido con HTML, CSS y Bootstrap para mostrar un diseño limpio e interactividad.",
      projectTwoDescription: "Un juego de preguntas y respuestas construido con HTML, CSS y JavaScript para poner a prueba tus conocimientos sobre Bitcoin mientras muestra el precio en tiempo real de Bitcoin.",
      projectThreeDescription: "Un sitio web fullstack construido con Flask para llevar un registro de los registros de pruebas de piscina.",
      projectFourDescription: "Un blog de fitness construido con Django y Stripe con funcionalidad CRUD y una plataforma de comercio electrónico.",
      nameForm: "Nombre",
      emailForm: "Correo electrónico",
      messageForm: "Mensaje",
      footerCredits: "Hecho con ❤️ usando HTML, CSS, y JavaScript."
    },
  };

  const translateBtn = document.getElementById("translate-btn");
  const heroTitle = document.querySelector(".hero-content h1");
  const contactTitle = document.querySelector(".contact-container h2");
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
  const navAbout = document.querySelector('#nav-about a');
  const navProjects = document.querySelector('#nav-projects a');
  const navContact = document.querySelector('#nav-contact a');
  const aboutFooter = document.getElementById("about-footer");
  const projectsFooter = document.getElementById("projects-footer");
  const contactFooter = document.getElementById("contact-footer");
  const phoneFooter = document.getElementById("phone-selector");
  const nameForm = document.getElementById("name-form");
  const emailForm = document.getElementById("email-form");
  const messageForm = document.getElementById("message-form");
  const sendButton = document.querySelector(".contact-container .send-button");
  const footerCredits = document.querySelector(".footer-credits p")

  translateBtn.addEventListener("click", () => {
    // Toggle language
    currentLang = currentLang === "en" ? "es" : "en";
      // Reinitialize active class functionality after translation
    setActiveNav();

    // view project Button update

    viewProjectButton.forEach(button=> button.textContent = translations[currentLang].viewProjectButton);

    // Update text content
    heroTitle.textContent = translations[currentLang].heroTitle;
    heroSubtitle.textContent = translations[currentLang].heroSubtitle;
    aboutTitle.textContent = translations[currentLang].aboutTitle;
    navAbout.textContent = translations[currentLang].navAbout;
    navProjects.textContent = translations[currentLang].navProjects;
    navContact.textContent = translations[currentLang].navContact;
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
    aboutFooter.textContent = translations[currentLang].navAbout;
    contactFooter.textContent = translations[currentLang].navContact;
    projectsFooter.textContent = translations[currentLang].navProjects;
    phoneFooter.textContent = translations[currentLang].phoneNumber;
    contactTitle.textContent = translations[currentLang].navContact;
    nameForm.textContent = translations[currentLang].nameForm;
    emailForm.textContent = translations[currentLang].emailForm;
    messageForm.textContent = translations[currentLang].messageForm;
    sendButton.textContent = translations[currentLang].sendButton;
    footerCredits.textContent = translations[currentLang].footerCredits;
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
    const title = button.dataset[currentLang === "en" ? "titleEn" : "titleEs"];
    const description = button.dataset[currentLang === "en" ? "descriptionEn" : "descriptionEs"];
    const image = button.dataset.image;
    const liveLink = button.dataset.livelink;
    const githubLink = button.dataset.githublink; 
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

// Initialize EmailJS Public Key
(function () {
  emailjs.init("sg8m7PJKFYgFbwxTG");
})();

// Get elements from dom
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

// Send From with EmailJS
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get values needed
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    const serviceID = "service_97oty2i";
    const templateID = "contact_form";

    // Create object with form data
    const formData = { name, email, message };

    // Send data with EmailJS
    emailjs
      .send(serviceID, templateID, formData)
      .then(() => {
        alert("Message sent successfully! 🎉");
        form.reset(); // Limpia el formulario
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send the message. Please try again.");
      });
  } else {
    alert("Please fill in all fields!");
  }
});

// Validación y efecto de "escapar" del botón
form.addEventListener("mousemove", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    const randomX = (Math.random() > 0.5 ? 1 : -1) * Math.random() * 50;
    const randomY = (Math.random() > 0.5 ? 1 : -1) * Math.random() * 50;

    submitBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  } else {
    submitBtn.style.transform = "none"; // Resetear posición del botón
  }
});
// Back to top button
// Get elements
const backToTopBtn = document.getElementById("back-to-top");
const patrickMeme = document.getElementById("patrick-meme");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add("visible");
    patrickMeme.src = "patrick-down.png"; // Patrick pointing down
  } else if (window.scrollY < 100) {
    setTimeout(() => {
      backToTopBtn.classList.remove("visible");
    }, 800); // Delay of 2 seconds before fading out
    patrickMeme.src = "patrick-up.png"; // Patrick pointing up
  }
});

// Smooth scroll to the top with a midway image change
backToTopBtn.addEventListener("click", () => {
  const scrollDuration = 1000; // Total scroll duration in milliseconds
  const halfwayPoint = scrollDuration / 2;

  // Smooth scroll to the top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Change Patrick's image halfway through the scroll
  setTimeout(() => {
    patrickMeme.src = "patrick-up.png"; // Patrick pointing up
  }, halfwayPoint);
});

