// Tienda de productos
// Crea un programa que: simule la venta de productos. El usuario podrá registrar la compra
// de varios artículos hasta que decida no comprar más. Se debe calcular el total de la
// compra y aplicar un descuento del 10% si el valor supera los $100.000.

//definimos variable para el total de la compra
total=0;
//definimos variable para el descuento
descuento=0;
//definimos variable para el total con descuento
totalConDescuento=0;
//definimos variable para continuar registrando artículos
continuar=true;

//mientras el usuario quiera registrar artículos
while(continuar){
    //preguntamos si quiere registrar un artículo
    let registrar=prompt("¿Desea registrar un artículo? (si/no):");
    //si quiere registrar un artículo
    if (registrar .toLowerCase() === "si"){
        //pedimos el nombre y precio del artículo
        let nombreArticulo = prompt("Ingrese el nombre del artículo:");
        //pedimos el precio del artículo
        let precioArticulo = parseFloat(prompt("Ingrese el precio del artículo:"));
        //sumamos el precio al total
        total += precioArticulo;
        //mostramos el artículo registrado
        console.log("Artículo '" + nombreArticulo + "' registrado con un precio de $" + precioArticulo);
    }
    //si no quiere registrar más artículos
    else {
        continuar = false;
    }
}
//mostramos el total de la compra
console.log("El total de la compra es: $" + total);
//verificamos si aplica descuento
if (total > 100000){
    //calculamos el descuento y el total con descuento    
    descuento = total * 0.10;
    totalConDescuento = total - descuento;
    //mostramos el descuento y el total con descuento
    console.log("Se ha aplicado un descuento del 10% de $" + descuento + ". Total con descuento: $" + totalConDescuento);
}
//si no aplica descuento
else {
    console.log("No se ha aplicado ningún descuento. Total a pagar: $" + total);
}

