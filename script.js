// Seleccionamos el botón y el párrafo por su ID
const boton = document.getElementById('cambiarMensaje');
const mensaje = document.getElementById('mensaje');

// Agregamos un evento 'click' al botón
boton.addEventListener('click', () => {
    // Cambiamos el texto del párrafo
    mensaje.textContent = '¡El mensaje ha cambiado con JavaScript!';
});