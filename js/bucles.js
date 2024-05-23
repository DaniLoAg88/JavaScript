let pases = 0;

//Bucle WHILE, evalua la condición y si es true entra, si no lo salta
while(pases < 10){
    console.log("Número de pase -> " + (pases + 1));
    pases++;
}

/* Mostrar la tabla de multiplicar */
let x = 1;
let y = 1;

while(x < 10){
    while(y <= 10){
        console.log(x + " x " + y + " = " + (x*y));
        y++
    }
    y = 1;
    x++;
}



