//Ejercicios Creación de variables

//una variable global
var global = "Global";
//Variable local
let local = "Local";
//Constante
const constante = "Constante";

console.log("Variables: Global: " + global + " Local: " + local + " Constante: " + constante);

//Variable tipo entero
let int = 3;
//Variable tipo decimal
let decimal = 1.3;
//Variable tipo cadena
let string = "Hello World";
//Variable tipo boolean
let Booleano = true;
//Variable Array(Arreglo)
let myArray = ["Cristóbal", 18 , "Aron" , 17];
//Variable tipo objeto
let miTazaDeCafé = new Object();
    miTazaDeCafé.color ="Negro";
    miTazaDeCafé.tamaño ="Mediano";
let objeto = {
    Edad:17,
    Nombre:"Cristóbal",
    Teléfono:"8116851",
    Dirección:"Calle nose cuanto 1235"
};
//Variable tipo indefinida
let indefinido;
//Variable null
let variableNula = null;
//Función tipo operación
function suma(num1, num2){
    return num1 + num2;
};
console.log("Entero: " + int + "\nDecimal: " + decimal + "\nCadena: " + string + "\nBooleano: " + Booleano + 
"\nArreglo: " + myArray + "\nObjeto: " + JSON.stringify(objeto) + "\nIndefinido: " + indefinido + "\nNulo: " + variableNula + "\nResultado función: " + suma(5,10));
console.log(suma(5,10));