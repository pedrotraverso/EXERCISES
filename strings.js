/*
    2. Strings
    a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
*/

console.log('Ejercicio 2a');

var string = 'JavaScript';
var newString = string.toLocaleUpperCase();

console.log(newString); // JAVASCRIPT



/*
    2. Strings
    b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

console.log('Ejercicio 2b');

var string = 'JavaScript';
var newString = string.substring(0,5);

console.log(newString); // JavaS



/*
    2. Strings
    c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

console.log('Ejercicio 2c');

var string = 'JavaScript';
var newString = string.substring(7,10);

console.log(newString); // ipt



/*
    2. Strings
    d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

console.log('Ejercicio 2d');

var string = 'JavaScript';
var newString = string.substring(0,1).toLocaleUpperCase() + string.substring(1).toLocaleLowerCase();

console.log(newString); // Javascript



/*
    2. Strings
    e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

console.log('Ejercicio 2e');

var string = 'Java Script';
var spacePosition = string.indexOf(' ');

console.log(spacePosition); // 4



/*
    2. Strings
    f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

console.log('Ejercicio 2f');

var string = 'LENGUAJE JavaScript';
var spacePosition = string.indexOf(' ');
var firstWord = string.substring(0,spacePosition);
var secondWord = string.substring(spacePosition + 1);
var capitalLetterFirstWord = firstWord.substring(0,1).toUpperCase() + firstWord.slice(1).toLocaleLowerCase();
var capitalLetterSecondWord = secondWord.substring(0,1).toUpperCase() + secondWord.slice(1).toLocaleLowerCase();
var newString = capitalLetterFirstWord + ' ' + capitalLetterSecondWord;

console.log(newString); // Lenguaje Javascript