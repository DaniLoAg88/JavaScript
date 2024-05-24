let numero1;
let numero2;
let resultado;
let contador = 0;

do{
    numero1 = parseInt(Math.random()*100+1);
    numero2 = parseInt(Math.random()*100+1);
    resultado = Number(prompt("Introduzca resultado de " + numero1 + " + " + numero2));
    if(resultado == numero1 + numero2){
        contador++;
    }

}while (resultado == numero1 + numero2);

alert("Ha fallado, el total de aciertos ha sido " + contador);
