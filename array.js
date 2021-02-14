var Narnia = {
    nombre: 'Narnia',
    escritor: 'C. S. Lewis',
    genero: 'Aventura fantastica',
    caps: 5
}
var ElNombreDelViento = {
    nombre: 'El Nombre Del Viento',
    escritor: 'Patrick Rothfuss',
    genero: 'Fántasia pura y dura',
    caps: 2
}
var ReyesDelOceano = {
    nombre: 'Reyes del Océano',
    escritor: 'J. K. Noel',
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

console.log(librosLargos)
console.log(librosCortos)