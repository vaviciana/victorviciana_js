const diasNoDisponibles = [5, 6, 12, 13, 19, 20, 26, 27, 17, 18, 23];
let diaSolicitado;

while (true) {
    diaSolicitado = parseInt(prompt('¿Qué día te gustaría reservar una sesión gratuita?'));

    if (diaSolicitado < 1 || diaSolicitado > 31) {
        alert("Por favor, introduce un número del 1 al 31.");
        continue;
    }

    if (!diasNoDisponibles.includes(diaSolicitado)) {
        console.log(`Reservado para el día ${diaSolicitado}`);
        diasNoDisponibles.push(diaSolicitado);
        break; 
    } else {
        alert("Lo sentimos, esa fecha no está disponible. Prueba otra.");
    }
}
