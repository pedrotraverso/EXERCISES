/*
    6. Funciones
    a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/

console.log('Ejercicio 6a');

function suma(number1, number2) {
    return number1 + number2;
}
  
var result = suma(3, 6);

console.log(result); // 9



/*
    6. Funciones
    b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/

console.log('Ejercicio 6b');

function suma(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        alert('Uno de los parámetros tiene error. Deben ser números.');
        return NaN;
    }
  
    return number1 + number2;
}
  
var result = suma(3, 'letter');

console.log(result); // NaN



/*
    6. Funciones
    c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
*/

console.log('Ejercicio 6c');

function validateInteger(number) {
    return Number.isInteger(number);
}

var number1 = 35;
var isInteger1 = validateInteger(number1);

console.log(isInteger1); // true
    
var number2 = 1.5;
var isInteger2 = validateInteger(number2);

console.log(isInteger2); // false



/*
    6. Funciones
    d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

console.log('Ejercicio 6d');

function suma(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        alert('Uno de los parámetros tiene error. Deben ser números.');
        return NaN;
    } else if (!validateInteger(number1) || !validateInteger(number2)) {
        alert('Uno de los parámetros contiene decimales. Se realizará la suma con los números convertidos a enteros (redondeados).');
        number1 = Math.round(number1);
        number2 = Math.round(number2);
    }
  
    return number1 + number2;
}
  
function validateInteger(number) {
    return Number.isInteger(number);
}
  
var result = suma(7.2, 9.8);

console.log(result); // 17



/*
    6. Funciones
    e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/

console.log('Ejercicio 6e');

function suma(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        alert('Uno de los parámetros tiene error. Deben ser números.');
        return NaN;
    } else if (!validateInteger(number1) || !validateInteger(number2)) {
        alert('Uno de los parámetros contiene decimales. Se realizará la suma con los números convertidos a enteros (redondeados).');
        number1 = roundToInteger(number1);
        number2 = roundToInteger(number2);
    }
  
    return number1 + number2;
}
  
function validateInteger(number) {
    return Number.isInteger(number);
}

function roundToInteger(number) {
    return Math.round(number);
}
  
var result = suma(7.2, 9.8);

console.log(result); // 17