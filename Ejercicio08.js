// Control de acceso
// Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta
// 3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si
// acierta, mostrar “Bienvenido”.

//definimos variables para los intentos
let intentos = 1;
let maxIntentos = 3;

//iniciamos el ciclo para permitir hasta 3 intentos
while (intentos <= maxIntentos) {
    //solicitamos al usuario que ingrese su usuario y contraseña
    let usuario = prompt("Ingrese su usuario:");
    let contrasena = prompt("Ingrese su contraseña:");
    //verificamos si el usuario y contraseña son correctos

    //usuario: admin, contraseña: 1234
    if (usuario === "admin" && contrasena === "1234") {
        console.log("¡Bienvenido!");
        break;
        //si el usuario o contraseña son incorrectos
    } else {
        console.log("Usuario o contraseña incorrectos.");
        intentos++;
    }
    //si se han agotado los intentos mostramos mensaje de acceso denegado
    if (intentos > maxIntentos) {
        console.log("Acceso denegado.");
    }
}
