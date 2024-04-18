// A modo de comentario, el trabajo es un selector de asientos para el cine//

alert ("Bienvenido al CinemaArgentina, escribe tu nombre");

const nombre = prompt("ingresa tu nombre");


if ((nombre == "Martin") || (nombre == "Martina")) {
    alert ("Bienvenido/a " + nombre);
} else {
    alert("Bienvenido/a");
}

let asientosdisponibles;

do{
    asientosdisponibles = parseInt(prompt("ingresa la zona de ubicacion: \n\n1. pasillo izquierdo\n2. pasillo derecho\n3. centro\n4. delantero\n\npara salir, ingresa 0"));
    
    switch (asientosdisponibles) {
        case 0:
            alert("vuelve si necesitas algo mas");
            break;
        case 1:
            alert("Tiene lugares disponibles");
            break;
        case 2:
            alert("No tiene lugares disponibles");
            break;
        case 3:
            alert("Tiene lugares disponibles");
            break;
        case 4:
            alert("Quedan dos asientos disponibles");
            break;
        default:
            alert("la opcion que ingresaste no es valida, intentalo de nuevo");
            break;
    }
} while(asientosdisponibles !== 0);