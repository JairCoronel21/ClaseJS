// objetos
function describirPersona(p) {

    console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);
}



let persona = {
    nombre: 'Jair',
    edad: 18,
    estatura: 1.72
}

describirPersona(persona);