function traerTablas(){
    let num = parseFloat(document.getElementById("inputText").value);
    let result = `La tabla de multiplicación de ${num} es: <br>`

    for (let i = 1; i <= 10; i++) {
        result += `${num} x ${i} = ${i * num}<br>`;
    }

    document.getElementById("lista").innerHTML = result
}