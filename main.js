// Ativar menu ativo ao rolar
const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((item) => {
          item.classList.remove("active");
          if (item.getAttribute("href") === `#${entry.target.id}`) {
            item.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((sec) => observer.observe(sec));

// Lightbox da galeria
Fancybox.bind("[data-fancybox]");

// Smooth scroll suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
