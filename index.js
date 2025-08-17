const roles = ["Programmer", "Gamer", "Front-End Developer", "AI Automation Enthusiast", "Web Security Learner"];
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

const sections = document.querySelectorAll(".page, .page1, .page2, .page3");
const navLinks = document.querySelectorAll(".nav-links a");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

function highlightNav() {
  let index = sections.length;
  while(--index && window.scrollY + 150 < sections[index].offsetTop) {}
  navLinks.forEach(link => link.classList.remove("active"));
  navLinks[index].classList.add("active");
}

window.addEventListener("scroll", () => {
  revealSections();
  highlightNav();
});

revealSections();
highlightNav();

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('#Contact form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const formData = new FormData(this);
      const name = formData.get('name');
      
      const submitButton = this.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      setTimeout(() => {
        this.reset();        
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
        showSuccessMessage(name || 'User');
      }, 2000);
    });
  }
});

function showSuccessMessage(name) {
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <h3>Thank you, ${name}!</h3>
    <p>Your message has been sent successfully. I'll get back to you soon!</p>
  `;  
  const form = document.querySelector('#Contact form');
  form.parentNode.insertBefore(successMessage, form.nextSibling);  
  setTimeout(() => {
    if (successMessage.parentNode) {
      successMessage.parentNode.removeChild(successMessage);
    }
  }, 5000);
}
