const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }

    inicializar() {
        btnEmpezar.classList.add('hide')
        this.nivel = 1/* A medida que avance el nivel sube */
        this.colores = {
            celeste : celeste,
            violeta : violeta,
            naranja : naranja,
            verde : verde
        } /* Guarde este objeto aqui que hace referencia a las const de arriba para usarlas mas fácil */
    } 

    generarSecuencia(){/* math.random da un valor entre cero y uno | math.floor redondea para abajo el numero */
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4)) 
    } /* .fill() define que valor sera el que tenga el array */

    siguienteNivel() {/* Cada vez que se llegue a un nuevo nivel, se iluminará la secuencia */
        this.iluminarSecuencia()
    }

    transformarDeColorANumero(number) {
        switch (number){ /* A la hora de usar un return en el switch no hace falta colocar un break */
            case 0:
                return 'verde'
            case 1:
                return 'naranja'
            case 2:
                return 'violeta'
            case 3:
                return 'celeste'
        }
    }

    iluminarSecuencia() {/* los for siempre deben tener let en lugar de var */
        for(let i = 0; i < this.nivel; i++) { /*Se obtiene el color que se debe iluminar y llamar una function para que lo haga  */
            const color = this.transformarDeColorANumero(this.secuencia[i]) /* const para que simepre se mantenga */
            setTimeout(() => this.iluminarColor(color), 1000 * i ) /* Es muy importante colocar el * i para que se ilumine el primer color al instante */ 
        }
    }

    iluminarColor(color) {
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }
}


function empezarJuego () {
    var juego = new Juego()
}

