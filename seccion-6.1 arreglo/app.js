// objetos
function describirPersona(p) {

    console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);
}



let persona1 = {
    nombre: 'Jair',
    edad: 18,
    
};

let persona2 = {
    nombre: 'Gladys',
    edad: 42,
    
};

let persona3 = {
    nombre: 'Jose',
    edad: 32,
    
};

let personas = [persona1, persona2, persona3];




//mensaje que diga nombre de persona junto a su edad con un ciclo for
//let personas = ['Fernando', 'Melissa', 'Maria'];
let edad = [persona1, persona2, persona3];


for(let i = 0; i < personas.length; i++ ){
   

    //let persona = personas[i];
    console.log(`${personas[i].nombre} --- ${personas[i].edad}`);
}

