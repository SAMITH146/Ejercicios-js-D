// // Promedio de notas
// Crea un programa que: lea las notas de 5 estudiantes. Calcula el promedio de cada uno y
// determina, mediante condicionales, si aprueba (nota ≥ 3.0) o reprueba. Usa ciclos para
// ingresar los datos de manera ordenada.

//definimos el número total de estudiantes
const totalEstudiantes = 5;

//recorremos el número de estudiantes
for (let i = 1; i <= totalEstudiantes; i++) {
    //pedimos la nota del estudiante
    let nota = parseFloat(pront ("Inggrese la nota del estudainte "+ i + ":"));
    //verificamos si aprueba o reprueba

     //SI aprueba
    if (nota >= 3.0){
       
        console.log("El estudiante " + i + " ha aprobado con una nota de " + nota);
        //si reprueba
    } else {
        console.log("El estudiante " + i + " ha reprobado con una nota de " + nota);
    }
}

