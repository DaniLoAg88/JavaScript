let numeroUsuario;
let numeroSecreto = parseInt(Math.random() * 100 + 1);

let acertado = false;

while (!acertado) {
    numeroUsuario = Number(prompt("Introduzca un número"));

    if(numeroSecreto < numeroUsuario){
        alert("El número debe ser menor");
    } else if(numeroSecreto > numeroUsuario){
        alert("El número debe ser mayor")
    } else if(numeroSecreto == numeroUsuario){
        alert("¡ACERTASTE!");
        acertado = true;
    } else{
        alert("NO has introducido un valor correcto");
    }
}