let letra = "";

while (letra != "s") {
    letra = prompt("Introduce una letra");

    if (letra == "s") {
        console.log("¡Enhorabuena! La letra elegida es la correcta");
    } else{
        console.log("¡Lo sentimos! La letra no es correcta");
    }
}

alert("¡Enhorabuena! Encontraste la letra");
