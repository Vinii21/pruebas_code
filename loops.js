var Yosmuel = {
    nombre: 'Yosmuel',
    familia: 'Osglon',
    edad: 18,
    peso: 55,
    reino: 'Malia',
    academia: 'Teo',
    arma: 'Hacha',
    armaDos: 'Arco'
}

/* Vamos a simular el transcurso de un año, para ver al final cúal será el peso de Yosmuel */

console.log('Al inicio del año ' + Yosmuel.nombre + ' pesa ' + Yosmuel.peso + 'kg') /* Peso original */
const DIAS_AÑO = 375
const VARIACION_PESO = 0.2

const AUMENTAR_PESO = persona => persona.peso += VARIACION_PESO
const DISMINUIR_PESO = persona => persona.peso -= VARIACION_PESO

for (var i = 1; i <= DIAS_AÑO; i++) {
    var random = Math.random()
    if (random < 0.25) {
        AUMENTAR_PESO(Yosmuel)
    } else if (random < 0.5) {
        DISMINUIR_PESO(Yosmuel)
    }
}

console.log('Al final de año ' + Yosmuel.nombre + ' pesa ' + Yosmuel.peso.toFixed(1) + 'kg') /* Peso final */
