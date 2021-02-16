var Narnia = {
    nombre: 'Narnia',
    escritor: 'C. S. Lewis',
    alturaescritor: 1.90,
    genero: 'Aventura fantastica',
    caps: 5
}
var ElNombreDelViento = {
    nombre: 'El Nombre Del Viento',
    escritor: 'Patrick Rothfuss',
    alturaescritor: 1.50,
    genero: 'Fántasia pura y dura',
    caps: 2
}
var ReyesDelOceano = {
    nombre: 'Reyes del Océano',
    escritor: 'J. K. Noel',
    alturaescritor: 1.80,
    genero: 'Fántasia aventura',
    caps: 3
}

/* const esLargo = (libro) => {
    return libro.caps > 2.5
} */
const esLargo = libro => libro.caps > 2.5 /* Es equivalente qe lo de arriba */
const esCorto = libro => libro.caps < 2.5


var libros = [Narnia, ElNombreDelViento, ReyesDelOceano]

/* for(var i = 0; i < libros.length; i++) {
    var libro = libros[i]
    console.log('El nombre de la obra ' + libro.nombre + ' es ' + libro.escritor)
} */

var librosLargos = libros.filter(esLargo)
var librosCortos = libros.filter(esCorto)

/* console.log(librosLargos)
console.log(librosCortos) */

/* metodo map() para pasar la altura de cada escritor de metros a centimetros */

/* const pasarAlturaACms = libro => {
    libro.alturaescritor *= 100
    **libro.alturaescritor = libro.alturaescritor * 100**
    return libro
} */ /* Este array function devuelve un array nuevo gracias a .map() modificando el original */

const pasarAlturaACms = libro => ({
    ...libro,
    alturaescritor: libro.alturaescritor * 100
})  /* Este array function devuelve un array nuevo gracias a .map() con sin modificar el original */

var escritoresCms = libros.map(pasarAlturaACms)

console.log(escritoresCms)

/* Cantidad de capitulos de cada libro */

const reducer = (acum, libro) => acum + libro.caps

var totalCaps = libros.reduce(reducer, 0)

console.log("En total tienen entre todos los escritores " + totalCaps + " capítulos")