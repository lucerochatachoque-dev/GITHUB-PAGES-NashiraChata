// Scroll suave para los enlaces del menú
const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));

    destino.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mensaje en consola
console.log('Página de turismo cargada correctamente');
