
document.getElementById("scrollBtn").addEventListener("click", function () {
  document.getElementById("info").scrollIntoView({ behavior: "smooth" });
});

const slide = document.getElementById("carouselSlide");
const images = slide.querySelectorAll("img");
let counter = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  if (counter < images.length - 1) {
    counter++;
    slide.style.transform = `translateX(-${counter * 100}%)`;
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    slide.style.transform = `translateX(-${counter * 100}%)`;
  }
});

document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje");

  if (nombre.length < 2 || !email.includes("@")) {
    mensaje.textContent = "Por favor, completa los campos correctamente.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = `¡Gracias por suscribirte, ${nombre}!`;
    mensaje.style.color = "green";
    this.reset();
  }
});

const sections = document.querySelectorAll(".reveal");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);
