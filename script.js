// Seleccionamos el bot�n y el p�rrafo por su ID
const boton = document.getElementById('cambiarMensaje');
const mensaje = document.getElementById('mensaje');

// Agregamos un evento 'click' al bot�n
boton.addEventListener('click', () => {
    // Cambiamos el texto del p�rrafo
    mensaje.textContent = '�El mensaje ha cambiado con JavaScript!';
});