const fadeElements = document.querySelectorAll(".fade");

function reveal() {
  fadeElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
