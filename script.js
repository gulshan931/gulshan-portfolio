// Fade on scroll
const fadeElements = document.querySelectorAll(".fade");

function reveal(){
  fadeElements.forEach(el=>{
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight - 100){
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Particles Background
particlesJS("particles-js", {
  particles:{
    number:{value:60},
    size:{value:2},
    move:{speed:1},
    line_linked:{enable:true,color:"#444"},
  }
});
