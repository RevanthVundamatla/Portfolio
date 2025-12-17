// Smooth scroll
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({ behavior:"smooth" });
}

// Contact form
function handleContact(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if(!name || !email || !message){
    status.textContent = "Please fill all fields.";
    return;
  }

  const subject = encodeURIComponent("Portfolio Contact From " + name);
  const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");

  window.location.href =
    `mailto:revanthvundamatla@gmail.com?subject=${subject}&body=${body}`;

  status.textContent = "Opening email app...";
}

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));