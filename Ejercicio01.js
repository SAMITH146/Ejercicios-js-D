//Crea un programa que: muestre todos los números primos entre 1 y 50. Utiliza ciclos y
//condicionales para verificar qué números cumplen la condición de ser primos.

//definimos variable para el número actual
let i=2;
//definimos variable para saber si es primo
while(i<=50){
    //suponemos que es primo
    esPrimo=true;
    //verificamos si es primo
    j=2;
    //mientras j sea menor que i
    while(j<i){
        //si i es divisible por j no es primo
        if(i%j==0){
            esPrimo=false;
        }
        //incrementamos j
        j++;
    }
    //si es primo lo mostramos
    if(esPrimo){
        console.log(i);
    }
    //incrementamos i
    i++;
}



