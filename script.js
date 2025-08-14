// Modern JavaScript for enhanced interactions
document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle Functionality
  const themeToggle = document.getElementById("themeToggle")
  const themeIcon = document.querySelector(".theme-icon")
  const html = document.documentElement

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem("theme") || "dark"
  html.setAttribute("data-theme", savedTheme)
  updateThemeIcon(savedTheme)

  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    html.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    updateThemeIcon(newTheme)
  })

  function updateThemeIcon(theme) {
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙"
  }

  // Navigation scroll effect
  const nav = document.querySelector(".nav")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      nav.style.background = "var(--bg-primary)"
      nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      nav.style.background = "var(--bg-primary)"
      nav.style.boxShadow = "none"
    }
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
  const hamburger = document.getElementById("hamburger")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      // Add mobile menu functionality if needed
    })
  }

  // Experience Modal Functionality
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
      technologies: ["PHP", "WordPress", "Laravel", "Symfony", ".NET", "MySQL", "PostgreSQL"],
      achievements: [
        "Desarrollo de aplicaciones web personalizadas para múltiples clientes",
        "Implementación de soluciones escalables y mantenibles",
        "Adaptación rápida a nuevas tecnologías y metodologías",
        "Colaboración efectiva en equipos multidisciplinarios",
      ],
      responsibilities: [
        "Desarrollo frontend y backend de aplicaciones web",
        "Mantenimiento y optimización de sitios WordPress",
        "Implementación de APIs y servicios web",
        "Gestión de bases de datos y optimización de consultas",
      ],
    },
    nayar: {
      title: "Desarrollador Full Stack - Prácticas TFG",
      company: "Nayar",
      date: "3 meses",
      description:
        "Desarrollo de una aplicación web en Flutter y Go para la empresa durante 3 meses, aprendiendo de su forma de trabajar y desarrollando mi habilidad para adaptarme a nuevas tecnologías.",
      technologies: ["Flutter", "Go", "Web Development", "Git", "Agile"],
      achievements: [
        "Primera experiencia profesional en desarrollo de software",
        "Aprendizaje de metodologías empresariales y buenas prácticas",
        "Desarrollo exitoso de aplicación web con tecnologías modernas",
        "Integración efectiva en equipo de desarrollo",
      ],
      responsibilities: [
        "Desarrollo de interfaz de usuario con Flutter",
        "Implementación de backend con Go",
        "Participación en reuniones de planificación y seguimiento",
        "Documentación técnica del proyecto",
      ],
    },
    audio: {
      title: "Técnico de Sonido y Audiovisuales",
      company: "Freelance",
      date: "Varios años",
      description:
        "Durante varios años he colaborado como técnico de sonido responsable en diferentes actividades, festivales, conciertos. Técnico para la Escuela de Música y diferentes cómicos como Galder Varas, Monaguillo, David Puerto o Miguel Lago.",
      technologies: ["Audio Engineering", "Live Sound", "Event Management", "Hardware Setup"],
      achievements: [
        "Trabajo con artistas reconocidos a nivel nacional",
        "Gestión técnica exitosa de eventos en vivo",
        "Experiencia en producción audiovisual profesional",
        "Desarrollo de habilidades de liderazgo y coordinación",
      ],
      responsibilities: [
        "Configuración y operación de equipos de sonido",
        "Coordinación técnica durante eventos en vivo",
        "Mantenimiento y troubleshooting de equipos",
        "Colaboración con artistas y organizadores de eventos",
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
          <div style="margin-bottom: 2rem;">
            <h2 style="font-family: var(--font-heading); color: var(--text-primary); margin-bottom: 0.5rem;">${data.title}</h2>
            <h3 style="color: var(--obligatorio-color); margin-bottom: 0.5rem; font-size: 1.25rem;">${data.company}</h3>
            <p style="color: var(--obligatorio-border); font-weight: 600; margin-bottom: 1rem; background: var(--obligatorio-bg); padding: 0.5rem 1rem; border-radius: 20px; display: inline-block;">${data.date}</p>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <p style="line-height: 1.7; color: var(--text-secondary); font-size: 1.1rem;">${data.description}</p>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h4 style="color: var(--text-primary); margin-bottom: 1rem; font-family: var(--font-heading);">🛠️ Tecnologías utilizadas:</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
              ${data.technologies
                .map(
                  (tech) => `
                <span style="
                  background: var(--obligatorio-color); 
                  color: white; 
                  padding: 0.5rem 1rem; 
                  border-radius: 20px; 
                  font-size: 0.9rem; 
                  font-weight: 600;
                ">${tech}</span>
              `,
                )
                .join("")}
            </div>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h4 style="color: var(--text-primary); margin-bottom: 1rem; font-family: var(--font-heading);">🎯 Logros destacados:</h4>
            <ul style="margin-left: 1.5rem; line-height: 1.7; color: var(--text-secondary);">
              ${data.achievements
                .map(
                  (achievement) => `
                <li style="margin-bottom: 0.75rem; position: relative;">
                  <span style="color: var(--obligatorio-color); font-weight: 600;">▸</span> ${achievement}
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>
          
          ${
            data.responsibilities
              ? `
            <div>
              <h4 style="color: var(--text-primary); margin-bottom: 1rem; font-family: var(--font-heading);">📋 Responsabilidades:</h4>
              <ul style="margin-left: 1.5rem; line-height: 1.7; color: var(--text-secondary);">
                ${data.responsibilities
                  .map(
                    (responsibility) => `
                  <li style="margin-bottom: 0.75rem; position: relative;">
                    <span style="color: var(--obligatorio-color); font-weight: 600;">▸</span> ${responsibility}
                  </li>
                `,
                  )
                  .join("")}
              </ul>
            </div>
          `
              : ""
          }
        `
        modal.style.display = "block"
        document.body.style.overflow = "hidden" // Prevent background scrolling
      }
    })
  })

  // Close modal events
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    })
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })

  // CV Download functionality
  const cvBtn = document.getElementById("cvBtn")
  if (cvBtn) {
    cvBtn.addEventListener("click", (e) => {
      e.preventDefault()
      // Replace with actual CV file path
      const cvUrl = "/cv-izan-rivera.pdf" // You'll need to add your CV file

      // Create temporary link and trigger download
      const link = document.createElement("a")
      link.href = cvUrl
      link.download = "CV-Izan-Rivera-Romero.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Show feedback
      const originalText = cvBtn.innerHTML
      cvBtn.innerHTML = '<span class="icon">✅</span>Descargando...'

      setTimeout(() => {
        cvBtn.innerHTML = originalText
      }, 2000)
    })
  }

  // Form submission with better UX
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const submitBtn = this.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent

      // Show loading state
      submitBtn.innerHTML = "📤 Enviando..."
      submitBtn.disabled = true
      submitBtn.style.opacity = "0.7"

      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        submitBtn.innerHTML = "✅ ¡Mensaje enviado!"
        submitBtn.style.background = "var(--obligatorio-color)"
        submitBtn.style.opacity = "1"

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
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".skill-category, .experience-card, .education-card, .contact-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Add subtle hover effects to skill items
  document.querySelectorAll(".skill-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (!item.classList.contains("primary")) {
        item.style.background = "var(--obligatorio-bg)"
        item.style.color = "var(--obligatorio-color)"
      }
    })

    item.addEventListener("mouseleave", () => {
      if (!item.classList.contains("primary")) {
        item.style.background = ""
        item.style.color = ""
      }
    })
  })

  // Dynamic year in footer
  const currentYear = new Date().getFullYear()
  const yearElement = document.querySelector(".footer-content p")
  if (yearElement) {
    yearElement.textContent = yearElement.textContent.replace("2024", currentYear)
  }

  // Add loading animation to page
  window.addEventListener("load", () => {
    document.body.style.opacity = "0"
    document.body.style.transition = "opacity 0.5s ease"

    setTimeout(() => {
      document.body.style.opacity = "1"
    }, 100)
  })

  // Console easter egg
  console.log(`
    🚀 ¡Hola! Soy Izan Rivera
    
    Si estás viendo esto, probablemente seas un desarrollador como yo.
    ¡Me encanta conocer gente apasionada por la tecnología!
    
    📧 Contacto: izanriro@gmail.com
    💼 LinkedIn: https://linkedin.com/in/izan-rivera
    🐙 GitHub: https://github.com/IzanRiRo
    
    ¿Hablamos? 😊
  `)
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
