// let dia = prompt("Introduce la inicial del día de la semana (L M X J V S D)");

let horario ="";
let botones = document.querySelectorAll(".boton");
//Toma todos los elementos que tienen la clase botón y crea un ARRAY


//El forEach te recorre todos los elementos de Array y a cada elemento le da el nombre btn
botones.forEach(btn=>{

    //click es la función de evento de clickar, también tenemos mouseover, mouseout, change, etc...
    btn.addEventListener("click", function(){

        switch (btn.value) {
            case "L":
            case "l":
                horario = "Lunes: 09:00 - 14:00 y 15:00 - 18:00";
                break;
            case "M":
            case "m":
                horario = "Martes: 09:30 - 14:00 y 15:00 - 18:30";
                break;
            case "X":
            case "x":
                horario = "Miércoles: 09:00 - 14:00 y 15:30 - 18:30";
                break;
            case "J":
            case "j":
                horario = "Jueves: 09:00 - 14:00 y 16:00 - 19:00";
                break;
            case "V":
            case "v":
                horario = "Viernes: 07:30 - 15:30";
                break;
            case "S":
            case "s":
                horario = "Sábado: 10:00 - 14:00";
                break;
            case "D":
            case "d":
                horario = "Domingo: Cerrado";
                break;
            // default:
            //     console.log("Opción NO válida");
            //     break;
            // Como son botones no hay posibilidad de que haya otro valor
        }

        document.querySelector(".horario").innerHTML = "<h2>Horario</h2>" + horario
    })

} );



