// Juego del adivinador
// Crea un programa que: genere un número aleatorio entre 1 y 20. El usuario intentará
// adivinarlo y el ciclo repetirá los intentos hasta que lo logre. Cada vez que falle, el
// programa debe indicar si el número buscado es mayor o menor que el ingresado.


//generamos un número aleatorio entre 1 y 20
let numeroSecreto = Math.floor(Math.random() * 20) + 1;
//definimos variable para el número ingresado por el usuario
let numeroIngresado = 0;
//iniciamos el ciclo hasta que el usuario adivine el número
while (numeroIngresado !== numeroSecreto) {
    //solicitamos al usuario que ingrese un número
    numeroIngresado = parseInt(prompt("Adivina el número entre 1 y 20:"));
    //verificamos si el número ingresado es mayor, menor o igual al número secreto
    if (numeroIngresado < numeroSecreto) {
        //indicamos que el número secreto es mayor
        console.log("El número es mayor que " + numeroIngresado);
        //si el número ingresado es mayor al número secreto
    } else if (numeroIngresado > numeroSecreto) {
        //indicamos que el número secreto es menor
        console.log("El número es menor que " + numeroIngresado);
        //si el número ingresado es igual al número secreto
    } else {
        //indicamos que el usuario ha adivinado el número
        console.log("¡Felicidades! Has adivinado el número " + numeroSecreto);
    }
}






