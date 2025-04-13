// Function to add 'visible' class when a section enters the viewport
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// JavaScript for toggling the navbar
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active"); // Toggle the active class to show/hide the menu
});

// Typing animation for name
const text = "Ms. ASHWITHA C THOMAS";
const typedName = document.querySelector(".typed-name");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typedName.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // typing speed
  }
}

window.addEventListener("load", () => {
  typeWriter();
});
