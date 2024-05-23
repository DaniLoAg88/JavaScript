/* Entrada a un pub -> mayor de 18 años*/
//let edad = Number(prompt("Dime tu edad")); //Conversión manual del tipo de dato a numérico, el prompt recoge string

//Verificamos que edad sea tipo de dato numérico
// console.log(typeof (edad)); //Si es string tengo que pasarlo a numérico

//Si tiene más de 18 años....
// let entrada = false; //Iniciamos en falso para que nadie entre si no cumple la condición
// if (edad >= 18) {
//     entrada = true;
// }

// console.log("Puede entrar al pub? " + entrada);

/********************/

/* Ejemplo de if anidados, donde se declara un animal y luego se va entrando en diferentes if hasta llegar al último else */
// let mascota = "gato";
// if (mascota == "perro") {
//     console.log("La mascota es perro");
// } else if (mascota == "tortuga") {
//     console.log("La mascota es una tortuga");
// } else if (mascota == "canario") {
//     console.log("La mascota es un canario");
// } else {
//     console.log("La mascota es " + mascota);
// }

/** NOTA: En el ejemplo anterior no se cumple ninguna de las condiciones llega hasta el if final */


/**********************/

/* Si Ana tiene dinero y el articulo está en venta podrá irse de compras, si no, no irá */
// let dinero = Boolean(prompt("¿Tienes dinero?"));
// let enVenta = Boolean(prompt("¿Está en venta?"));

// if(dinero && enVenta){
//     console.log("Ana va de compras");
// } else{
//     console.log("Ana se queda en casa");
// }



/***************************************************/

/**** SWITCH ****/
console.log("Menú iniciado");
let letra = prompt("Indica tu opción: [c]opiar [a]brir [p]egar");

switch (letra) {
    case "a":
    case "A":
        console.log("Se abre el archivo");
        break;
    case "c":
    case "C":
        console.log("Se copia el archivo");
        break;
    case "p":
    case "P":
        console.log("Se pega el archivo");
        break;
    default:
        console.log("Opción no válida");
        break;
}
/* Se puede poner varios CASE juntos que tengan las mismas acciones y funciona como un OR*/

console.log("Menú finalizado");


