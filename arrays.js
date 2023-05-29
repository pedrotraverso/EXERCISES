/*
    3. Arrays
    a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

console.log('Ejercicio 3a');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(months[4]); // Mayo
console.log(months[10]); // Noviembre



/*
    3. Arrays
    b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

console.log('Ejercicio 3b');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

months.sort();

console.log(months); // ['Abril', 'Agosto', 'Diciembre', 'Enero', 'Febrero', 'Julio', 'Junio', 'Marzo', 'Mayo', 'Noviembre', 'Octubre', 'Septiembre']



/*
    3. Arrays
    c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

console.log('Ejercicio 3c');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

months.unshift('Inicio');
months.push('Fin');

console.log(months); // ['Inicio', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Fin']



/*
    3. Arrays
    d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

console.log('Ejercicio 3d');

var months = ['Inicio', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Fin'];

months.shift();
months.pop();

console.log(months); // ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']



/*
    3. Arrays
    e. Invertir el orden del array (utilizar reverse).
*/

console.log('Ejercicio 3e');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

months.reverse();

console.log(months); // ['Diciembre', 'Noviembre', 'Octubre', 'Septiembre', 'Agosto', 'Julio', 'Junio', 'Mayo', 'Abril', 'Marzo', 'Febrero', 'Enero']



/*
    3. Arrays
    f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/

console.log('Ejercicio 3f');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var result = months.join('-');

console.log(result); // Enero-Febrero-Marzo-Abril-Mayo-Junio-Julio-Agosto-Septiembre-Octubre-Noviembre-Diciembre



/*
    3. Arrays
    g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

console.log('Ejercicio 3g');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var copyMonths = months.slice(4,11);

console.log(copyMonths); // ['Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre']