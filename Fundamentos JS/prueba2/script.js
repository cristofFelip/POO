function sumaArray(){
    let x = 0;
    let array = [];

    while( x < 5 ) {
        let valores = parseInt(prompt("Ingrese valores: "))
        array.push(valores);
        x++;
    }
    let total = array.reduce(
        (acumulador, valorActual) => acumulador + valorActual,
        0,
        );
        document.getElementById("lista").innerHTML = `<p>El array es:</p> <h2>${array.join( )}</h2> <br><p>La suma de todos los valores del array es: </p> <h2>${total}</h2>  `
}