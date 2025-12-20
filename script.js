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
  }, { rootMargin: "-40% 0px -40% 0px" });

  sections.forEach(section => sectionObserver.observe(section));

  /* ===== FADE IN ===== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => revealObserver.observe(el));

  /* ===== MODAL RDV ===== */
  const modal = document.getElementById("bookingModal");
  const serviceInput = document.getElementById("selectedService");
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("bookingForm");

  document.querySelectorAll(".card.price").forEach(card => {
    card.addEventListener("click", () => {
      serviceInput.value = card.dataset.service;
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

  /* ===== MODAL SUCCESS ===== */
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
  
const confirmBtn = document.getElementById("confirmBtn");
const inputs = document.querySelectorAll(
  "#bookingForm input, #bookingForm select"
);

function checkForm() {
  let allFilled = true;

  inputs.forEach(input => {
    if (!input.value) {
      allFilled = false;
    }
  });

  if (allFilled) {
    confirmBtn.disabled = false;
    confirmBtn.classList.add("enabled");
  } else {
    confirmBtn.disabled = true;
    confirmBtn.classList.remove("enabled");
  }
}

inputs.forEach(input => {
  input.addEventListener("input", checkForm);
  input.addEventListener("change", checkForm);
});

});

