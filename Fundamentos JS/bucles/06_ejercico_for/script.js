function numeroPromedio(){
    let arrayNum = [];
    let numMayor = 0;

    for(let i = 0; i < 5; i++){
        let promedio = parseInt(prompt("Ingrese un número para determinar mayor: "));
        arrayNum.push(promedio);
        let total = arrayNum.reduce(
            (acumulador, valorActual) => acumulador + valorActual / 5,
            0,
            );
            let Total = total.toFixed(1);
            document.getElementById("lista").innerHTML = `De las notas ingresadas: ${arrayNum.join(", ")} <h2>El promedio es: </h2> <h1>${Total}</h1>`
    }
    
}