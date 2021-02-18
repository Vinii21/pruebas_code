/* Hablar de Programación orientada a objetos, clases, en Js es hablar de prototipos */
/* Para definir un prototipo lo único que se debe hacer es definir una function */
function personaje (nombre, habilidad, altura, genero) {
    this.nombre = nombre
    this.habilidad = habilidad
    this.altura = altura
    this.genero = genero
}

personaje.prototype.saludar = function () {
    console.log('Hola, me llamo ' + this.nombre)   /*  */
}
personaje.prototype.soyAlto = function () {
    if (this.altura >= 1.8) {
        switch(true) {
            case this.genero === 'M':
                console.log(this.nombre + ' es alto')
            break
            case this.genero === 'F':
                console.log(this.nombre + ' es alta')
            break
        }
    } else {
        switch(true) {
            case this.genero === 'M':
                console.log(this.nombre + ' es bajo')
            break
            case this.genero === 'F':
                console.log(this.nombre + ' es baja')
            break
        }
    }
}

var Edrei = new personaje('Edrei', 'Coloso', 1.8, 'M') /* new seguida del prototipo hace que se cree un nuevo objeto  */
var Luna = new personaje('Luna', 'Exploradora', 1.6, 'F')
var Alphonse = new personaje('Alphonse', 'Potencia Agua', 1.9, 'M')
var Nicole = new personaje('Nicole', 'Arquera', 1.5, 'F')
var Elin = new personaje('Elin', 'Arquera', 1.8, 'F')

Edrei.saludar()
Alphonse.soyAlto()
Luna.soyAlto()
Edrei.soyAlto()
Nicole.soyAlto()
Elin.soyAlto()