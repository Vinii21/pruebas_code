/* Esto es una mejor manera de entender los prototipos, las clases en JavaScript */
class rey {
    constructor(nombre, reino, edad, arma, genero) {
        this.nombre = nombre
        this.reino = reino
        this.edad = edad
        this.arma = arma
        this.genero = genero
    }

    saludar(fn){
        console.log('Saludos, soy el rey ' + this.nombre + ' soberano del reino ' + this.reino)
        switch (true){
            case this.reino === 'Malia':
                fn(this.nombre, this.reino, true)
            break
            case this.reino != 'Malia':
                fn(this.nombre, this.reino, false)
            break
        }
    }
}

class personaje extends rey {
    constructor(nombre, reino, edad, arma, genero) {
        super(nombre, reino, edad, arma, genero)
    }


    saludar(fn){
        console.log('Mi nombre es ' + this.nombre + ', soy de ' + this.reino)
        switch (true){
            case this.reino === 'Malia':
                fn(this.nombre, this.reino, true)
            break
            case this.reino != 'Malia':
                fn(this.nombre, this.reino, false)
            break
        }
    
}
}

/* Esta es una function que se usa como parametro para responder el saludo, y secciona la respuesta en si es o no cazador */
function responderSaludo (nombre, reino, cazador) {
    console.log('Saludos ' + nombre + ' de ' + reino + ', es un gusto')
    if (cazador) {
        console.log('Siendo de ' + reino + ' debes tener que ver con la cacería')
    }
}
    


var magnur = new rey('Magnur', 'Benoar', 44, 'Espada', 'M')
var Luna = new personaje('Luna', 'Esperanza', 25, 'Coloso', 'F')
var Lewis = new personaje('Lewis', 'Malia', 20, 'Arco', 'M')

magnur.saludar(responderSaludo)
Luna.saludar(responderSaludo)
Lewis.saludar(responderSaludo)


