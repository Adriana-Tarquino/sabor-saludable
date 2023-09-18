// Obtén una referencia al botón y al cuerpo del documento
const modoOscuroBtn = document.getElementById('modo-oscuro-btn');
const cuerpo = document.body;

// Agrega un evento de clic al botón
modoOscuroBtn.addEventListener('click', () => {
    // Alternar la clase modo-oscuro en el cuerpo del documento
    cuerpo.classList.toggle('modo-oscuro');
});
