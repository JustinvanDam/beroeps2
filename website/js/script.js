function navigateTo(page) {
  window.location.href = page;
}

document.body.addEventListener('mousemove', (e) => {
  const gridOverlay = document.querySelector('.grid-overlay');
  const moveX = e.clientX * 0.01;
  const moveY = e.clientY * 0.01;
  gridOverlay.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

const loadingIndicator = document.getElementById('loadingIndicator');


function navigateTo(page) {

  loadingIndicator.classList.add('active');


  setTimeout(() => {
    window.location.href = page;
  }, 2000);
  function navigateTo(page) {
    window.location.href = page;
  }
  
}
