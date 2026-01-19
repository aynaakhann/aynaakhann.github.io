document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // 1) MOBILE NAV (ALL PAGES)
  // =========================
  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
      toggleBtn.setAttribute("aria-expanded", String(!expanded));
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
        navLinks.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // =========================
  // 2) TYPED EFFECT (HOME ONLY)
  // =========================
  if (window.Typed && document.querySelector(".typing")) {
    new Typed(".typing", {
      strings: [
        "a Data Analytics Explorer",
        "an AI & ML Enthusiast",
        "a Problem Solver",
        "a Tech Graduate"
      ],
      typeSpeed: 70,
      backSpeed: 45,
      loop: true
    });
  }

  // =========================
  // 3) SCROLL ANIMATION (HOME)
  // =========================
  const elementsToAnimate = document.querySelectorAll(
    ".about-section, .skills-section, .profiles, .profile-box"
  );

  if (elementsToAnimate.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 0.8s ease-out forwards";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(el => {
      el.style.opacity = "0";
      observer.observe(el);
    });

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }

});
