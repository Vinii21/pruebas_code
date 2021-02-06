var skin = {
    nombre: 'Gunnar',
    oficio: 'Caballero',
    reino: 'Benoar',
    arma: 'Espada',
    edad: 22
};

var skin2 = {
    nombre: 'Lewis',
    oficio: 'Cazador',
    reino: 'Malia',
    arma: 'Arco',
    edad: 17
};

var skin3 = {
    ...skin2
}

var caracteristicas = [];

const MAYORIA_EDAD = 18;
/* -------- FUNCIONES --------- */

function seleccionDeSkin (personaje) {
    var nombre = personaje.nombre.toUpperCase()
    console.log(nombre)
    var add = caracteristicas.push(nombre)
};

function seleccionDeSkin2 ({nombre, oficio}) {
    console.log(nombre.toUpperCase() + " ES " + oficio.toUpperCase())
    var add = caracteristicas.push(nombre)
}

seleccionDeSkin(skin);
seleccionDeSkin2(skin2);

var yo = {
    nombre: 'Vinicio',
    apellido: 'Chavarría',
    edad: 23,
    estudio: 'Desarrollo Web',
    gusto: 'Escribir',
    nickname: 'Timmy',
    seudonimo: 'J.K. Noel',
    twitter: '@ViChavarria',
    desarrollo_web: true
}

function imprimirNombreYEdad(human) {
    var { nombre, edad } = human
    console.log("Hola me llamo " + nombre + " y tengo " + edad + " años")
}
imprimirNombreYEdad(yo);
/* --------CONDICIONALES --------- */
function mayorDeEdad (persona) {
    return persona.edad >= MAYORIA_EDAD
}

const FLECHA_MAYOR_DE_EDAD = persona => persona.edad >= MAYORIA_EDAD  /* Esto es un ARROW FUNCTION, es lo mismo que
que esta escrito en la function mayorDeEdad() */

function imprimirSiEsMayorDeEdad (persona) {
    if (FLECHA_MAYOR_DE_EDAD(persona)) {
        console.log(persona.nombre + " es mayor de edad")
    } else {
        console.log(persona.nombre + " es menor de edad")
    }
}
imprimirSiEsMayorDeEdad(yo);
imprimirSiEsMayorDeEdad(skin2);
imprimirSiEsMayorDeEdad(skin);


function imprimirEstudio (persona) {
    console.log(persona.nombre + " estudia:")
    if (persona.desarrollo_web === true) {
        console.log(persona.estudio)
    } else {
        console.log('Alguien que aún no estudia.')       
    }
}
imprimirEstudio(yo)

function permitirAcceso (sujeto) {
    if (!FLECHA_MAYOR_DE_EDAD(sujeto)) {
        console.log('Acceso Denegado')
    } else (
        console.log('Acceso Permitido')
    )
} 

permitirAcceso(yo)
