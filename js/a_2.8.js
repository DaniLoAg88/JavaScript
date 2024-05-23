let boton=document.querySelector(".boton");
//Necesitamos que cuando pulse el botón haga una condición para analizar la edad y mandar un mensaje

//EVENTOS de JavaScript
boton.addEventListener("click",function(){
    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;

    /* PODEMOS PROBAR LO QUE RECOGEMOS CON EL LOG
    console.log(nombre);
    console.log(edad);
    */

    let mensaje;
    if(edad >= 0 && edad <= 12){
        mensaje = "niñ@";
    } else if(edad > 12 && edad <= 17){
        mensaje="adolescente";
    } else if(edad > 17 && edad <= 64){
        mensaje = "trabajador";
    } else if(edad > 64){
        mensaje="jubilado";
    } else{
        mensaje = "¡edad introducida no válida!";
    }

    document.querySelector(".mensaje").innerHTML = `${nombre} tiene ${edad} años y es ${mensaje}`;
})