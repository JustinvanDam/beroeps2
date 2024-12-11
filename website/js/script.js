function navigateTo(page) {
  window.location.href = page;
}

// Dynamische achtergrondparallax-effect
document.body.addEventListener('mousemove', (e) => {
  const layers = document.querySelector('.background-animation');
  const moveX = e.clientX * 0.02;
  const moveY = e.clientY * 0.02;
  layers.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Toevoegen van een hovergeluid (optioneel)
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const hoverSound = new Audio('assets/hover.mp3');
    hoverSound.play();
  });
});
