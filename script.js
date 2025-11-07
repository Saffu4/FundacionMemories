// ====== ANIMACIÓN AL HACER SCROLL ======
const elements = document.querySelectorAll('.fade-up');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

// Ejecutar al cargar y al hacer scroll
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
