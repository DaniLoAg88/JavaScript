//Random o aleatorio numérico
let numeroAleatorio = parseInt(Math.random() * 100 + 1); //El 100 es el número mayor que podemos recibir y el +1 es para empezar desde el 1, si no lo ponemos empieza desde 0
console.log(numeroAleatorio);

//Random o aleatorio para letras
let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
numeroAleatorio = parseInt(Math.random() * 26); //Aquí empezamos desde el 0 que es la primera posición de la letra A hasta 26 que es la posición de la letra Z
console.log(abecedario[numeroAleatorio]);

//JUEGO adivinar la letra
let letra = "";
while(letra != abecedario[numeroAleatorio]){
    letra = prompt("Indica una letra").toUpperCase();
}
alert("¡Adivinaste la letra! " + letra);