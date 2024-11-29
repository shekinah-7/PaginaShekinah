// Selección del botón y párrafo
const boton = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');

// Cambiar el texto del mensaje al hacer clic en el botón
boton.addEventListener('click', () => {
    mensaje.textContent = '¡El texto ha cambiado!';
});
