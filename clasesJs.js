/* Esto es una mejor manera de entender los prototipos, las clases en JavaScript */
class rey {
    constructor(nombre, reino, edad, arma, genero) {
        this.nombre = nombre
        this.reino = reino
        this.edad = edad
        this.arma = arma
        this.genero = genero
    }

    saludar(){
        console.log('Saludos, soy el rey ' + this.nombre + ' soberano del reino ' + this.reino)
    }
}

class personaje extends rey {
    constructor(nombre, reino, edad, arma, genero) {
        super(nombre, reino, edad, arma, genero)
    }


    saludar(){
        console.log('Hola')
        }
    
    generoo(){
        switch (true) {
            case this.genero === 'M':
                console.log('Soy varón')
            break
            case this.genero === 'F':
                console.log('Soy mujer')
            break
        }
    }
}
    


var magnur = new rey('Magnur', 'Benoar', 44, 'Espada', 'M')
var Luna = new personaje('Luna', 'Esperanza', 25, 'Coloso', 'F')

