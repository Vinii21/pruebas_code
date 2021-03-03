const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 4


class Juego {
    constructor() {
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel(),500)   
    }

    inicializar() {
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this) /* Este bind(this) hace, que quede atado al this, es decir que this siempre haga referencia a la class Juego */
        this.toggleBtnEmpezar()/* toggle es parecido a switch, la idea es si tiene una clase se oculta o no el boton de empezar juego */
        this.nivel = 1/* A medida que avance el nivel sube */
        this.colores = {
            celeste : celeste,
            violeta : violeta,
            naranja : naranja,
            verde : verde
        } /* Guarde este objeto aqui que hace referencia a las const de arriba para usarlas mas fácil */
    }
    
    toggleBtnEmpezar() {/* Esta es la logica que se utiliza para que el boton de empezar juego, aparezca o no */
        if(btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
        } else {
            btnEmpezar.classList.add('hide')
        }
    }

    generarSecuencia(){/* math.random da un valor entre cero y uno | math.floor redondea para abajo el numero */
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4)) 
    } /* .fill() define que valor sera el que tenga el array */

    siguienteNivel() {/* Cada vez que se llegue a un nuevo nivel, se iluminará la secuencia */
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformarDeNumeroAColor(number) {
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

    transformarDeColorANumero(color) {
        switch (color){ /* A la hora de usar un return en el switch no hace falta colocar un break */
            case 'verde':
                return 0
            case 'naranja':
                return 1
            case 'violeta':
                return 2
            case 'celeste':
                return 3
        }
    }

    iluminarSecuencia() {/* los for siempre deben tener let en lugar de var */
        for(let i = 0; i < this.nivel; i++) { /*Se obtiene el color que se debe iluminar y llamar una function para que lo haga  */
            const color = this.transformarDeNumeroAColor(this.secuencia[i]) /* const para que simepre se mantenga */
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

    agregarEventosClick() { /* Esto es para obtner el Input del usuario, saber donde hizo click */
        this.colores.celeste.addEventListener('click', this.elegirColor) /* Aqui se hace efectivo el .bind(this) del inicializador */
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
    }

    eliminarEventosClick() {
        this.colores.celeste.removeEventListener('click', this.elegirColor) 
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
    }

    elegirColor(ev){ /* Esto es la logica que se usa para verificar si el color elegido es correcto */
        /* console.log(ev) --- con esto su puede ir a sacar el target y el dataset*/ 
        const nombreColor = ev.target.dataset.color /* toma el color que el usuario dio click | ese target y dataset se saca del código*/
        const numeroColor = this.transformarDeColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subnivel]) { /* Esta condicion indica si realmente toco bien el boton */
            this.subnivel++ /* si el usuario elige bien, el subnivel aumenta, sino pues pierde */
            if(this.subnivel === this.nivel){
                this.nivel++ /* Si esto ocurre, entonces el usuario pasa de nivel */
                this.eliminarEventosClick()
                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                    this.ganoElJuego()
                } else {
                    setTimeout(this.siguienteNivel, 2000) 
                }

            } 
            } else {
                this.perdioElJuego()
        }
    }

    ganoElJuego(){
        swal('BOOYHA', 'FELICIDADES, ERES UN GANADOR!', 'success')
            .then(() => {
                this.inicializar()
            })
    }

    perdioElJuego(){
        swal('Platzi', 'Perdió!', 'error')
            .then(() => {
                this.eliminarEventosClick()
                this.inicializar()
            })
    }
}


function empezarJuego () {
    var juego = new Juego()
}

