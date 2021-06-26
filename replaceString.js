let sentence = 'replaceable is one of the best programming lenguage, you must use replaceable';

//Al poner el string dentro de las barras y al final la letra 'g': /palabra/g se remplazan todas las instancias del string

let javascript = sentence.replace(/replaceable/g, 'Javascript');

let python = sentence.replace(/replaceable/g, 'Python');

console.log(javascript);
console.log(python);