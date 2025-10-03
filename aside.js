	
  // Lógica para mostrar/ocultar sidebars en móvil
  function toggleSidebar(side) {
    const aside = document.querySelector(`aside.${side}`);
    aside.classList.toggle('active');
  }

  // Centrar contenido aunque haya zoom
  window.addEventListener('resize', centerLayout);
  window.addEventListener('load', centerLayout);
  function centerLayout() {
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
  }
