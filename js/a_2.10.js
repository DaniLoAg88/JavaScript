let letra = "";

// while (letra != "s") {
//     letra = prompt("Introduce una letra");

//     if (letra == "s") {
//         console.log("¡Enhorabuena! La letra elegida es la correcta");
//     } else{
//         console.log("¡Lo sentimos! La letra no es correcta");
//     }
// }


do{

    letra = prompt("Introduce una letra");
    
    if (letra == "s") {
        console.log("¡Enhorabuena! La letra elegida es la correcta");
    } else{
        console.log("¡Lo sentimos! La letra no es correcta");
    }

}while (letra != "s");


//Random o aleatorio numérico
let numeroAleatorio = parseInt(Math.random() * 100 + 1); //El 100 es el número mayor que podemos recibir y el +1 es para empezar desde el 1, si no lo ponemos empieza desde 0
console.log(numeroAleatorio);

//Random o aleatorio para letras
let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
numeroAleatorio = parseInt(Math.random() * 26); //Aquí empezamos desde el 0 que es la primera posición de la letra A hasta 26 que es la posición de la letra Z
console.log(abecedario[numeroAleatorio]);

//JUEGO adivinar la letra
let letra2 = "";
while(letra2 != abecedario[numeroAleatorio]){
    letra2 = prompt("Indica una letra").toUpperCase();
}
alert("¡Adivinaste la letra! " + letra2);