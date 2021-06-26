let number = 7;

if (number == 6) {
    console.log("El numero es igual a 6");
}

if (number != 6) {
    console.log("El numero es diferente a 6")
}

//Mejor
number == 6 && console.log("El numero es igual a 6");
number == 6 || console.log("El numero es diferente a 6");