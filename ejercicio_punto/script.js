function Puntaje(){
    let puntaje = prompt("Ingrese su puntaje: ");

    if(puntaje >= 90){
        document.getElementById("lista").innerHTML = "<h2>Exelente!</h2>";
    } else if (puntaje <= 89 && 70){
        document.getElementById("lista").innerHTML = "<h2>Buen trabajo</h2>";
    } else{
        document.getElementById("lista").innerHYML = "<h2>Necesitas mejorar</h2>";
    }
}