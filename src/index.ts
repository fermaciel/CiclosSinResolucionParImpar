/* 4-Realizar un algoritmo que dado un numero
entero ingresado por el usuario muestre en pantalla
si es par o impar
 En caso de ingresar el cero se debera pedir
 que se vuelva a ingresar
 */

let numero: number | null = 0;
//Ingreso un numero
numero = Number(prompt("Ingrese un numero: "));
//Comparo si el numero ingresado es igual a 0 o negativo
while (numero <= 0 || numero % 1 !== 0) {
  numero = Number(prompt("Ingrese un numero: "));
}
if (numero % 1 === 0) {
  if (numero % 2 === 0) {
    console.log("El numero ingresado es PAR");
  } else {
    console.log("El numero ingresado es IMPAR");
  }
} else {
  console.log("No ingreso ningun numero ");
}
