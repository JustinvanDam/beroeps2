function navigateTo(page) {
  window.location.href = page;
}

// Parallax-effect voor decoratieve achtergrond
document.body.addEventListener('mousemove', (e) => {
  const gridOverlay = document.querySelector('.grid-overlay');
  const moveX = e.clientX * 0.01;
  const moveY = e.clientY * 0.01;
  gridOverlay.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
// Globale Loading Indicator
const loadingIndicator = document.getElementById('loadingIndicator');

// Pagina-navigatie met vertraging
function navigateTo(page) {
  // Toon de loading-indicator
  loadingIndicator.classList.add('active');

  // Simuleer een laadvertraging (bijv. 2 seconden) voordat je navigeert
  setTimeout(() => {
    window.location.href = page;
  }, 2000);
}
