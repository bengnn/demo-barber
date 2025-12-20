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


const modal = document.getElementById("bookingModal");
const serviceInput = document.getElementById("selectedService");
const closeBtn = document.querySelector(".close");

/* CLICK SUR TARIFS */
document.querySelectorAll(".card.price").forEach(card => {
  card.addEventListener("click", () => {
    const service = card.getAttribute("data-service");
    serviceInput.value = service;
    modal.style.display = "block";
  });
});


/* FERMER */
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

/* FAKE CONFIRMATION */
const successModal = document.getElementById("successModal");
const closeSuccess = document.getElementById("closeSuccess");

form.addEventListener("submit", e => {
  e.preventDefault();
  modal.style.display = "none";
  successModal.style.display = "block";
});

closeSuccess.addEventListener("click", () => {
  successModal.style.display = "none";
});

});
