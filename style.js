const sections = document.querySelectorAll(".section-anchor");
const navLinks = document.querySelectorAll(".nav-link");
const reveals = document.querySelectorAll(".reveal");

function onScroll() {
  const scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(
        `.nav-link[href="#${id}"]`
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });

  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", onScroll);
onScroll();

