let pases = 0;

//Bucle WHILE, evalua la condición y si es true entra, si no lo salta
while(pases < 10){
    console.log("Número de pase -> " + (pases + 1));
    pases++;
}

/* Mostrar la tabla de multiplicar */
let x = 1;
let y = 1;

console.log("BUCLE WHILE");
while(x < 10){
    while(y <= 10){
        console.log(x + " x " + y + " = " + (x*y));
        y++
    }
    y = 1;
    x++;
}


/** BUCLE FOR */
console.log("BUCLE FOR");
for(let x = 1; x <= 10; x++){
    for(let y = 1; y <= 10; y++){
        console.log(x + " x " + y + " = " + (x*y));
    }
}


/******  FECHAS *******/
// for(let dia=1; dia<=31; dia++){
//     console.log(dia);
// }

// for(let mes=1; mes<=12; mes++){
//     console.log(mes);
// }

// for(let anio=2024; anio>=2014; anio--){
//     console.log(anio);
// }

/*** LOS INTEGRAMOS EN EL HTML ***/
let dias = document.querySelector("#dias"); //Recogemos el elemento del formulario HTML
let meses = document.querySelector("#mes"); //Recogemos el elemento del formulario HTML
let anios = document.querySelector("#anio"); //Recogemos el elemento del formulario HTML

for(let dia=1; dia<=31; dia++){
    opcion = document.createElement("option");
    //Creamos la variable opcion y le asignamos un elemento de formulario option que creamos
    opcion.textContent = dia;
    //Le metemos a la variable del option el texto del día
    opcion.value = dia;
    //Le metemos a la variable del option el valor del día
    
    opcion.classList.add("desplegable");
    //Le ponemos una clase al option
    opcion.setAttribute("id", dia);
    //Metemos al option como atributo el campo ID con el valor que tiene dia

    dias.appendChild(opcion);
    // Al objeto dias recogido del formulario le metemos la variable opcion con todas las características que le hemos puesto
    
}

for(let mes=1; mes<=12; mes++){
    opcion = document.createElement("option");
    opcion.textContent = mes;
    opcion.value = mes;
    meses.appendChild(opcion);
}

for(let anio=2024; anio>=2014; anio--){
    opcion = document.createElement("option");
    opcion.textContent = anio;
    opcion.value = anio;
    anios.appendChild(opcion);
}


/* SALTOS E INTRODUCCIONES */
// break
// Muestra la tabla de multiplicar del 9 y en 5 corta
const TABLA = 9;
for (let i = 0; i <= 10; i++) {
    console.log(`${TABLA} x ${i} = ${TABLA*i}`);
    if (i == 5) {
        break; //Interrumpe el bucle
    }
}

// continue
// Muestra los 10 primeros números impares que no sean multiplos de 3
let contadorSalto = 0;
let numeroSalto = 1;

while (contadorSalto < 10) {
    if (numeroSalto % 3 == 0) {
        numeroSalto++;
        continue; // Hace que vaya al siguiente ciclo del bucle obviando lo que haya a partir de aquí
    }

    if (numeroSalto % 2 != 0) {
        console.log("Es Impar");
        contadorSalto++;
    }

    numeroSalto++; //Si no hace el salto se incrementa
}
