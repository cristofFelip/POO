function contarWhile(){
    let contador = 0;
    let array = [];

    while (contador <= 10){
        array.push(contador);
        contador++
    }
    let total = array.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0,
    );
    let array2 = array.join("+")
    document.getElementById("lista").innerHTML = `<p>numero del 0 al 10 con while: </p> <br> <h2>${array}</h2> <p>Sumando todo, el total es: </p> <h2>${array2}  =  ${total}</h2>`
};