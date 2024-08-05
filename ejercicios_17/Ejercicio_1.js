function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML += mensaje + "<br>";
}

function leerDatosPersona() {
    const nombre = prompt("Ingrese su nombre:");
    const apellidos = prompt("Ingrese sus apellidos:");
    const edad = prompt("Ingrese su edad:");
    mostrarResultado(`Nombre: ${nombre}, Apellidos: ${apellidos}, Edad: ${edad}`);
}

function procesarNumero() {
    const numero = parseFloat(prompt("Ingrese un número:"));
    const parte1 = numero / 3;
    const resultado = (parte1 + 10) * 2;
    mostrarResultado(`Resultado: ${resultado}`);
}

function ordenarNumeros() {
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    if (num1 < num2) {
        mostrarResultado("Los números están en orden creciente.");
    } else if (num1 > num2) {
        mostrarResultado("Los números están en orden decreciente.");
    } else {
        mostrarResultado("Los números son iguales.");
    }
}

function promedioNumeros() {
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        const num = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        suma += num;
    }
    const promedio = suma / 5;
    mostrarResultado(`Promedio: ${promedio}`);
}

function sumaPrimerosNaturales() {
    const N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i;
    }
    mostrarResultado(`Suma de los primeros ${N} números naturales: ${suma}`);
}

function primerosPares() {
    let pares = "";
    for (let i = 0; i < 100; i++) {
        pares += (i * 2) + "<br>";
    }
    mostrarResultado(pares);
}

function primerosImpares() {
    let impares = "";
    for (let i = 0; i < 100; i++) {
        impares += (i * 2 + 1) + "<br>";
    }
    mostrarResultado(impares);
}

function sumarCienNumeros() {
    let suma = 0;
    for (let i = 0; i < 100; i++) {
        const num = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        suma += num;
    }
    mostrarResultado(`Suma total: ${suma}`);
}

function sumarNNumeros() {
    const N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    for (let i = 0; i < N; i++) {
        const num = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        suma += num;
    }
    mostrarResultado(`Suma total: ${suma}`);
}

function operacionesNumeros() {
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    const operacion = prompt("Ingrese la operación (suma, resta, multiplicación, división):");
    let resultado;
    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "Suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "Resta":
            resultado = num1 - num2;
            break;
        case "multiplicación":
            resultado = num1 * num2;
            break;
        case "Multiplicación":
            resultado = num1 * num2;
            break;
        case "división":
            resultado = num1 / num2;
            break;
        case "División":
            resultado = num1 / num2;
            break;
        default:
            mostrarResultado("Operación no válida.");
            return;
    }
    mostrarResultado(`Resultado: ${resultado}`);
}

function sumarNPares() {
    const N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    for (let i = 0; i < N; i++) {
        suma += i * 2;
    }
    mostrarResultado(`Suma de los primeros ${N} números pares: ${suma}`);
}

function sumarPrimerosNPares() {
    const N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    for (let i = 0; i < N; i++) {
        suma += i * 2;
    }
    mostrarResultado(`Suma de los primeros ${N} pares: ${suma}`);
}

function sumarNImpares() {
    const N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    for (let i = 0; i < N; i++) {
        suma += i * 2 + 1;
    }
    mostrarResultado(`Suma de los primeros ${N} números impares: ${suma}`);
}

function sumarPrimerosNImpares() {
    const N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    for (let i = 0; i < N; i++) {
        suma += i * 2 + 1;
    }
    mostrarResultado(`Suma de los primeros ${N} impares: ${suma}`);
}

function sumarPrimerosMultiplesDeTres() {
    const N = parseInt(prompt("Ingrese el valor de N:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i * 3;
    }
    mostrarResultado(`Suma de los primeros ${N} múltiplos de 3: ${suma}`);
}

function diagramaFlujoFactorial() {
    mostrarResultado("1. Leer N.<br>2. Inicializar resultado en 1.<br>3. Para i desde 1 hasta N, hacer:<br>   a. resultado *= i;<br>4. Imprimir resultado.");
}

function celsiusAFahrenheit() {
    const celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
    const fahrenheit = (celsius * 9/5) + 32;
    mostrarResultado(`Temperatura en Fahrenheit: ${fahrenheit}`);
}

function palabraMasLarga() {
    const frase = prompt("Ingrese una frase:");
    const palabras = frase.split(" ");
    let palabraLarga = "";
    for (const palabra of palabras) {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    }
    mostrarResultado(`La palabra más larga es: ${palabraLarga}`);
}

function numerosPrimos() {
    const limite = parseInt(prompt("Ingrese un número:"));
    let primos = "";
    for (let num = 2; num <= limite; num++) {
        let esPrimo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            primos += num + "<br>";
        }
    }
    mostrarResultado(primos);
}

function contadorCaracteres() {
    const texto = prompt("Ingrese una cadena de texto:");
    const contador = {};
    for (const caracter of texto) {
        contador[caracter] = (contador[caracter] || 0) + 1;
    }
    mostrarResultado(JSON.stringify(contador));
}
