document.addEventListener("DOMContentLoaded", function () {
  const navToggle =
    document.querySelector(".nav-toggle") ||
    document.getElementById("navToggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    const navLinksInMenu = navMenu.querySelectorAll("a");
    navLinksInMenu.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    document.addEventListener("click", function (event) {
      if (
        !navToggle.contains(event.target) &&
        !navMenu.contains(event.target)
      ) {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  }

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;
    if (navbar) {
      if (currentScroll > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    }
  });

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  };

  const animateOnScroll = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        animateOnScroll.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".benefit-card, .service-card, .value-card, .gallery-item, " +
      ".stat-item, .fade-in-up, .contact-info, .contact-form, " +
      ".about-text, .about-image, .service-detail, .contact-form-wrapper, " +
      ".contact-info-wrapper, .map-container"
  );

  animatedElements.forEach((el) => {
    animateOnScroll.observe(el);
  });

  const counterElements = document.querySelectorAll(".stat-number");

  const animateCounter = (element) => {
    const targetAttr = element.getAttribute("data-target");
    const target = targetAttr ? parseInt(targetAttr, 10) : NaN;
    if (Number.isNaN(target)) return;

    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current) + "+";
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + "+";
      }
    };

    updateCounter();
  };

  if (counterElements.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterElements.forEach((counter) => {
      counterObserver.observe(counter);
    });
  }

  const backToTopButton = document.querySelector(".back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) backToTopButton.classList.add("visible");
      else backToTopButton.classList.remove("visible");
    });

    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href !== "#!") {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a");

  function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`)
            link.classList.add("active");
        });
      }
    });
  }

  window.addEventListener("scroll", setActiveNav);

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameEl = document.getElementById("name");
      const emailEl = document.getElementById("email");
      const phoneEl = document.getElementById("phone");
      const companyEl = document.getElementById("company");
      const serviceEl = document.getElementById("service");
      const messageEl = document.getElementById("message");

      const formData = {
        name: nameEl ? nameEl.value : "",
        email: emailEl ? emailEl.value : "",
        phone: phoneEl ? phoneEl.value : "",
        company: companyEl ? companyEl.value : "",
        service: serviceEl ? serviceEl.value : "",
        message: messageEl ? messageEl.value : "",
      };

      if (!formData.name || !formData.email || !formData.message) {
        showNotification("Please fill in all required fields", "error");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showNotification("Please enter a valid email address", "error");
        return;
      }

      const submitBtn = contactForm.querySelector(".btn-primary");
      const originalText = submitBtn ? submitBtn.textContent : "";

      if (submitBtn) {
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        showNotification(
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
          "success"
        );
        contactForm.reset();
        if (submitBtn) {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
      }, 1500);
    });
  }

  function showNotification(message, type = "info") {
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) existingNotification.remove();

    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${
                  type === "success" ? "✓" : type === "error" ? "✗" : "ℹ"
                }</span>
                <span class="notification-message">${message}</span>
            </div>
        `;

    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${
              type === "success"
                ? "#10B981"
                : type === "error"
                ? "#EF4444"
                : "#3B82F6"
            };
            color: white;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
        `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "fadeOut 0.3s ease";
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  const galleryItems = document.querySelectorAll(".gallery-item");

  if (galleryItems.length > 0) {
    galleryItems.forEach((item) => {
      item.addEventListener("click", function () {
        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";
        lightbox.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.95);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                    cursor: pointer;
                `;

        const captionEl = item.querySelector(".gallery-caption h3");
        const caption = captionEl ? captionEl.textContent : "Gallery Image";
        const placeholderEl = item.querySelector(".gallery-placeholder");
        const placeholderText = placeholderEl ? placeholderEl.textContent : "⧉";

        lightbox.innerHTML = `
                    <div style="text-align: center; max-width: 90%; color: white;">
                        <div style="font-size: 6rem; margin-bottom: 20px;">${placeholderText}</div>
                        <h3 style="color: white;">${caption}</h3>
                        <p style="margin-top: 10px; opacity: 0.8;">Click anywhere to close</p>
                    </div>
                `;

        document.body.appendChild(lightbox);
        document.body.style.overflow = "hidden";

        lightbox.addEventListener("click", function () {
          lightbox.style.animation = "fadeOut 0.3s ease";
          setTimeout(() => {
            lightbox.remove();
            document.body.style.overflow = "auto";
          }, 300);
        });
      });
    });
  }

  const heroSections = document.querySelectorAll(".hero");

  if (heroSections.length > 0) {
    window.addEventListener("scroll", function () {
      heroSections.forEach((hero) => {
        const scrolled = window.pageYOffset;
        const heroTop = hero.offsetTop;
        const heroHeight = hero.offsetHeight;

        if (
          scrolled > heroTop - window.innerHeight &&
          scrolled < heroTop + heroHeight
        ) {
          const yPos = (scrolled - heroTop) * 0.5;
          hero.style.backgroundPosition = `center ${yPos}px`;
        }
      });
    });
  }

  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .notification-icon {
            font-size: 1.5rem;
            font-weight: bold;
        }
    `;
  document.head.appendChild(styleSheet);

  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
