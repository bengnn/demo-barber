document.addEventListener("DOMContentLoaded", () => {

  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section-anchor");
  const reveals = document.querySelectorAll(".reveal");

  /* ===== MENU ACTIF AU SCROLL ===== */
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));
        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }, {
    rootMargin: "-40% 0px -40% 0px"
  });

  sections.forEach(section => sectionObserver.observe(section));

  /* ===== FADE IN AU SCROLL ===== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => revealObserver.observe(el));

});



window.addEventListener("scroll", onScroll);
onScroll();

