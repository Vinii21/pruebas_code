const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
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
}


function empezarJuego () {
    window.juego = new Juego()
}

