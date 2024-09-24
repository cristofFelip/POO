// Función para manejar el clic en el botón de "me gusta"
function mensage(button) {
    // Verificar si el botón ya ha sido presionado
    if (button.classList.contains('liked')) {
        alert("Ya has dado like a esta definición.");
        return; // Salir de la función si ya se ha dado like
    }

    // Obtener el texto actual del botón
    let currentText = button.innerText;
    
    // Extraer el número de "likes" del texto
    let likeCount = parseInt(currentText.split(' ')[0]);
    
    // Incrementar el contador de "likes" en 1
    likeCount += 1;
    
    // Actualizar el texto del botón con el nuevo conteo
    button.innerText = `${likeCount} likes`;

    // Marcar el botón como "liked"
    button.classList.add('liked');
}

// Función para manejar el clic en el botón "Add Definition"
function texto(button) {
    // Definición de Dojonary
    alert("¿de verdad tenemos que hacer esta parte?");
}