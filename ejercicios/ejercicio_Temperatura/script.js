function Temperatura(){
    let temperatura = prompt("Ingrese la temperatura: ")

    if (temperatura < 0) {
        temperatura = (`Hace frio`)
    } else if (temperatura > 0 && temperatura <= 25) {
        temperatura = (`La temperatura es agradable`)
    }else if(temperatura > 25){
        temperatura = (`Hace calor`)
    }
    document.getElementById("lista").innerHTML = temperatura;
}