// Typing animation
const roles = ["Programmer", "Gamer", "Front-End Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleSpan = document.getElementById("dynamic-role");

function typeRole() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    charIndex--;
    roleSpan.textContent = currentRole.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 500);
    } else {
      setTimeout(typeRole, 50);
    }
  } else {
    charIndex++;
    roleSpan.textContent = currentRole.substring(0, charIndex);
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeRole, 1000);
    } else {
      setTimeout(typeRole, 100);
    }
  }
}
typeRole();

function toggleMenu() {
  document.getElementById("navLinks").parentElement.classList.toggle("active");
}
