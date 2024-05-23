/*
Actividad propuesta 2.7
*/

let operando1 = 9;
let operando2 = 5;
console.log("Actualmente el valor de operando1 es " + operando1 + " y el de operando2 es " + operando2);

let resultado = operando1 % operando2;
console.log("Resultado usando % -> " + resultado);


console.log("El valor de operando1 es -> " + operando1);
console.log("El valor de operando1 con incremento anterior es -> " + ++operando1);
console.log("El valor de operando1 con incremento posterior es -> " + operando1++);
console.log("Saco de nuevo el valor de operando1 sin hacer nada, para comprobar el incremento anterior -> " + operando1);


console.log("El valor de operando1 es -> " + operando1);
console.log("El valor de operando1 con decremento anterior es -> " + --operando1);
console.log("El valor de operando1 con decremento posterior es -> " + operando1--);
console.log("Saco de nuevo el valor de operando1 sin hacer nada, para comprobar el incremento anterior -> " + operando1);


console.log("El valor de operando2 es -> " + operando2);
operando2 = operando2**3;
console.log("El valor de operando2 tras hacerle **3 es -> " + operando2);

console.log("El valor de operando2 con el negativo unario es -> " + -operando2);
console.log("El valor de operando2 con el positivo unario es -> " + +operando2);

//El positivo unario convierte en número, un string o un boolean
resultado = +"3";
console.log(typeof(resultado)); //Nos devuelve el tipo de dato de cualquier variable
console.log(resultado);

resultado = +true;
console.log(typeof(resultado)); //Nos devuelve el tipo de dato de cualquier variable
console.log(resultado);

