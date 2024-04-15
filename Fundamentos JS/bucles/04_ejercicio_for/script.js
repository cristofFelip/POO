function numeroMayor(){
    let arrayNum = [];
    let numMayor = 0;

    for(let i = 0; i < 5; i++){
        let num = parseInt(prompt("Ingrese un número para determinar mayor: "));
        arrayNum.push(num);
        //if(num > numMayor) numMayor = num;
        numMayor = (numMayor < num) ? num : numMayor;
    }
    document.getElementById("lista").innerHTML = `De los elementos ingresados: ${arrayNum.join(", ")} <h2>El numero mayor es: </h2> <h1>${numMayor}</h1>`
}