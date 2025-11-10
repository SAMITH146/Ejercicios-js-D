//– Cajero automático
//Crea un programa que: simule un cajero automático. El usuario inicia con un saldo
//definido en una variable constante. Podrá retirar dinero varias veces mientras tenga
//fondos suficientes. Si intenta retirar más de lo que tiene, debe aparecer un mensaje de
//error y no permitir la transacción.

//definimos el saldo inicial
const saldo_inicial = 1000;
//definimos el saldo actual
saldo = saldo_inicial;
//definimos variable para continuar retirando
let continuar=true;

//mientras el usuario quiera continuar
while(continuar){
    //preguntamos si quiere retirar dinero
    let opcion=prompt("Su saldo actual es: $" + saldo  + "\n¿Desea retirar dinero? (si/no):");
    //si quiere retirar dinero
    if(opcion.toLowerCase()==="si"){
        let retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
        //verificamos si hay fondos suficientes
        if (retiro > saldo) {
            console.log("Error: Fondos insuficientes para realizar el retiro de $" + retiro);
        //si hay fondos suficientes realizamos el retiro
        } else {
            saldo -= retiro;
            console.log ("EL RETIRO A SIDO EXITOSO SU SALDO ACTUAL ES DE $" + saldo);
        }
    //si no quiere retirar dinero
    } else {
        continuar = false;
    }
}
    console.log("Gracias por usar el cajero automático. Su saldo final es: $" + saldo);
