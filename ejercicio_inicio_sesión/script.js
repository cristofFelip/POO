function inicioSesion(){
    let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    let Contraseña = prompt("Ingrese su contraseña: ");

    const usuario = "usuario123"
    const contr = "secreto"

    if (nombreUsuario == usuario && Contraseña == contr){
        nombreUsuario = document.getElementById("lista").innerHTML = "<h2>¡Acceso concedido!</h2>";
    } else {
        Contraseña = document.getElementById("lista").innerHTML = "<h2>Acceso denegado :c</h2>";
    }
}