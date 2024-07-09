function click(elemento){
    let contador =parseInt(element.getAttribute('data-contador') || '0');
    contador++;
    elemento.setAttribute('data.contador', contador);
    elemento.textContent = 'Clics ' + contador;
}