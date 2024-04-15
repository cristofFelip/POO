function numeroPar(){
    let arrayPares = [];
    let pares = parseInt(prompt("Ingrese un número para ver cantidad de pares: "));

    for(let i = 1; i <= pares; i++){
            arrayPares.push(i*2);
    }
    document.getElementById("lista").innerHTML = `<h2>Pares encontrados: </h2> <h1>${arrayPares}</h1>` ;
}