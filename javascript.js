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
    twitter: '@ViChavarria'
}

function imprimirNombreYEdad(human) {
    var { nombre, edad } = human
    console.log("Hola me llamo " + nombre + " y tengo " + edad + " años")
}

imprimirNombreYEdad(yo);

function imprimirSiEsMayorDeEdad (persona) {
    if (persona.edad >= 18) {
        console.log(persona.nombre + " es mayor de edad")
    } else {
        console.log(persona.nombre + " es menor de edad")
    }
}

imprimirSiEsMayorDeEdad(yo);
