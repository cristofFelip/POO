function contarWhile(){
    let contador = 0;
    let numerosPares = [];
    
    while (contador <= 20){
        array.push(contador);
        contador+=2;
    }
    document.getElementById("lista").innerHTML = `<p>Números pares con While: </p> <br> <h2>${numerosPares}</h2>`
}