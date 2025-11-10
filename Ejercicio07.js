// Contador de pares e impares
// Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos
// fueron pares y cuántos impares.

//definimos variables para contar pares e impares
i=1;
pares=0;
impares=0;
//iniciamos el ciclo para solicitar 10 números al usuario
while (i <= 10) {
    //solicitamos al usuario que ingrese un número
    numero = parseInt(prompt("Ingresa el número " + i + ":"));
    //verificamos si el número es par o impar
    if (numero % 2 === 0) {
        //incrementamos el contador de pares
        pares++;
    }
    else {
        //incrementamos el contador de impares
        impares++;
    }
    i++;
}
//mostramos la cantidad de números pares e impares ingresados
console.log("Cantidad de números pares: " + pares);
console.log("Cantidad de números impares: " + impares);