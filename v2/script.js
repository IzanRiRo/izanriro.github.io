// Modern JavaScript for enhanced interactions
document.addEventListener("DOMContentLoaded", () => {
  // Navigation scroll effect
  const nav = document.querySelector(".nav")
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      nav.classList.add("scrolled")
    } else {
      nav.classList.remove("scrolled")
    }
    lastScrollY = window.scrollY
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  const modal = document.getElementById("experienceModal")
  const modalBody = document.getElementById("modalBody")
  const closeModal = document.querySelector(".modal-close")

  const experienceData = {
    current: {
      title: "Desarrollador Full Stack",
      company: "Infoware",
      date: "Octubre 2024 - Actualidad",
      description:
        "Actualmente trabajo creando páginas web en PHP y WordPress, aplicaciones a medida para clientes utilizando Laravel, Symfony o .NET. He aprendido muchas tecnologías diferentes, pero sobre todo a adaptarme a cualquier tipo de tarea.",
      technologies: ["PHP", "WordPress", "Laravel", "Symfony", ".NET"],
      achievements: [
        "Desarrollo de aplicaciones web personalizadas",
        "Implementación de soluciones escalables",
        "Adaptación rápida a nuevas tecnologías",
      ],
    },
    nayar: {
      title: "Desarrollador Full Stack",
      company: "Nayar (Prácticas TFG)",
      date: "3 meses",
      description:
        "Desarrollo de una aplicación web en Flutter y Go para la empresa durante 3 meses, aprendiendo de su forma de trabajar y desarrollando mi habilidad para adaptarme a nuevas tecnologías.",
      technologies: ["Flutter", "Go", "Web Development"],
      achievements: [
        "Primera experiencia profesional en desarrollo",
        "Aprendizaje de metodologías empresariales",
        "Desarrollo con tecnologías modernas",
      ],
    },
    audio: {
      title: "Técnico de Sonido y Audiovisuales",
      company: "Freelance",
      date: "Varios años",
      description:
        "Durante varios años he colaborado como técnico de sonido responsable en diferentes actividades, festivales, conciertos. Técnico para la Escuela de Música y diferentes cómicos como Galder Varas, Monaguillo, David Puerto o Miguel Lago.",
      technologies: ["Audio Engineering", "Live Sound", "Event Management"],
      achievements: [
        "Trabajo con artistas reconocidos",
        "Gestión técnica de eventos en vivo",
        "Experiencia en producción audiovisual",
      ],
    },
  }

  // Add click event to experience buttons
  document.querySelectorAll(".experience-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".experience-card")
      const experienceKey = card.dataset.experience
      const data = experienceData[experienceKey]

      if (data) {
        modalBody.innerHTML = `
          <h2>${data.title}</h2>
          <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">${data.company}</h3>
          <p style="color: var(--accent-color); font-weight: 600; margin-bottom: 1rem;">${data.date}</p>
          <p style="margin-bottom: 1.5rem; line-height: 1.6;">${data.description}</p>
          
          <h4 style="margin-bottom: 0.75rem;">Tecnologías utilizadas:</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
            ${data.technologies.map((tech) => `<span style="background: var(--light-green); color: var(--primary-color); padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.875rem;">${tech}</span>`).join("")}
          </div>
          
          <h4 style="margin-bottom: 0.75rem;">Logros destacados:</h4>
          <ul style="margin-left: 1.5rem; line-height: 1.6;">
            ${data.achievements.map((achievement) => `<li style="margin-bottom: 0.5rem;">${achievement}</li>`).join("")}
          </ul>
        `
        modal.style.display = "block"
      }
    })
  })

  // Close modal events
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
  })

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
    }
  })

  // Intersection Observer for scroll animations (fallback)
  if (!CSS.supports("animation-timeline: scroll()")) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
      })
    }, observerOptions)

    // Observe elements for animation
    document
      .querySelectorAll(".section-header, .about-content, .skill-category, .timeline-item, .contact-item")
      .forEach((el) => {
        el.classList.add("animate-on-scroll")
        observer.observe(el)
      })
  }

  // Form submission
  const contactForm = document.querySelector(".contact-form")
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const submitBtn = this.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent

    // Show loading state
    submitBtn.innerHTML = "Enviando..."
    submitBtn.disabled = true

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      submitBtn.textContent = "¡Mensaje enviado!"
      submitBtn.style.background = "#10b981"

      // Reset form
      this.reset()

      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.textContent = originalText
        submitBtn.style.background = ""
        submitBtn.disabled = false
      }, 3000)
    }, 2000)
  })

  // Parallax effect for floating cards
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".floating-card")

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1
      const yPos = -(scrolled * speed)
      element.style.transform = `translateY(${yPos}px)`
    })
  })

  // Typing effect for hero title (optional enhancement)
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const text = heroTitle.textContent
    heroTitle.textContent = ""
    let i = 0

    function typeWriter() {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    // Uncomment to enable typing effect
    // setTimeout(typeWriter, 1000);
  }

  // Add hover sound effects (optional)
  const buttons = document.querySelectorAll(".btn, .skill-item, .contact-item")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      // Add subtle hover feedback
      button.style.transform = button.style.transform + " scale(1.02)"
    })

    button.addEventListener("mouseleave", () => {
      button.style.transform = button.style.transform.replace(" scale(1.02)", "")
    })
  })

  // Dynamic year in footer
  const currentYear = new Date().getFullYear()
  const yearElement = document.querySelector(".footer-content p")
  if (yearElement) {
    yearElement.textContent = yearElement.textContent.replace("2024", currentYear)
  }

  // Performance optimization: Lazy load images
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img)
    })
  }
})

// Service Worker registration for PWA capabilities (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}

// Dark mode toggle (optional feature)
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode")
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"))
}

// Load dark mode preference
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode")
}
