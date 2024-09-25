function mensage(button) {
    if (button.classList.contains('liked')) {
        alert("Ya has dado like a esta definición.");
        return; 
    }

    let currentText = button.innerText;
    let likeCount = parseInt(currentText.split(' ')[0]);
    likeCount += 1;
    button.innerText = `${likeCount} likes`;
    button.classList.add('liked');
}
function texto(button) {
    alert("¿de verdad tenemos que hacer esta parte?");
}
function addDefinition(button) {
    const definitionContainer = document.querySelector('.row');
    const newDefinition = document.createElement('div');
    newDefinition.className = 'box_definition';
    newDefinition.innerHTML = `
        <div class="left">
            <h1>nueva definición</h1>
            <p><em>noun</em></p>
            <p>Plural: <em>nuevas definiciones</em></p>
            <button class="btn_like" onclick="mensage(this)">0 likes</button>
        </div>
        <p class="definition-text">Definición de la nueva palabra aquí.</p>
    `;

    definitionContainer.appendChild(newDefinition);
    button.remove();
}
