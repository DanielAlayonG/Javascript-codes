const multiArray = [1, [2, 3], 4, [5, [6], 7]];
//Flat saca los valores de los array internos, al poner infinity saca todos los valores sin inportar cuantos niveles de array existan
const array = multiArray.flat(Infinity);
console.log(array);