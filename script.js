// Selecci�n del bot�n y p�rrafo
const boton = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');

// Cambiar el texto del mensaje al hacer clic en el bot�n
boton.addEventListener('click', () => {
    mensaje.textContent = '�El texto ha cambiado!';
});
