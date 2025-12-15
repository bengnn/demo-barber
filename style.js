const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const reveals = document.querySelectorAll(".reveal");

function onScroll() {
  let scrollPos = window.scrollY + 200;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => link.classList.remove("active"));
      const id = section.getAttribute("id");
      document.querySelector(`a[href="#${id}"]`).classList.add("active");
    }
  });

  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", onScroll);
onScroll();

