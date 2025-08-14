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
    submitBtn.innerHTML = '<span class="loading"></span> Enviando...'
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
