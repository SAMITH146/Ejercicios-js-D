//Ejercicio 2 – Tabla de multiplicar personalizada

//Crea un programa que: dado un número ingresado por el usuario, muestre su tabla de
//multiplicar hasta el 12. El ciclo debe permitir repetir el proceso si el usuario desea
//consultar otra tabla.

//definimos variable para continuar consultando tablas
let  continuar=true;
while(continuar){
    //pedimos el número al usuario
    let numero=prompt("Ingrese un número para ver su tabla de multiplicar hasta el 12:");
    console.log("Tabla de multiplicar del " + numero + ":");
    //mostramos la tabla de multiplicar
    for(let i=1;i<=12;i++){
        console.log(numero + " x " + i + " = " + (numero*i));
    }
    //preguntamos si quiere continuar
    let respuesta=prompt("¿Desea consultar otra tabla de multiplicar? (si/no):");
    if(respuesta.toLowerCase()!="si"){
        continuar=false;
    }
}




