//lección 6: Usar 'this'paracambiar texto y atributos
function changeImage(element){
    // Cambiar la imagen y el texto alternativo
    element.src = 'https://via.placeholder.com/200/0000ff/808080';
    element.alt = 'Nueva Imagen';
}

//Lección 7: Usar 'this' para mostrar descripciones
function showDescription(button){
    //Alternar la visualización de la descripción
    let description = button.nextElementSibling;
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
}

//lección 8: Usar 'this' para cambiar estilos
function completeTask(button){
    //marcar una tarea como completada
    let taskItem = button.parentElement;
    let taskText = taskItem.querySelector('span');
    taskText.classList.toggle('completed');
}

//Lección 9 y 10: Interacciones más complejas
function applyDiscount(button){
    //Aplicar un descuento al precio del producto
    let productCard = button.parentElement;
    let priceElement = productCard.querySelector('.price');
    let currentPrice = parseFloat (priceElement.textContent.replace('$',''));
    let newPrice = (currentPrice * 0,9).toFixed(2);
    priceElement.textContent = $$(newPrice);
}