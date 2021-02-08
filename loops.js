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

var dias = 0
var contador = 0
var pesosTotales = []


console.log('Al inicio del año ' + Yosmuel.nombre + ' pesa ' + Yosmuel.peso + 'kg') /* Peso original */
const META = Yosmuel.peso - 3
const DIAS_AÑO = 365
const VARIACION_PESO = 0.3

const AUMENTAR_PESO = persona => persona.peso += VARIACION_PESO   /* array function que aumenta el peso */
const DISMINUIR_PESO = persona => persona.peso -= VARIACION_PESO /* array function que disminuye el peso */
const COME_MUCHO =() => Math.random() < 0.3 /* array function que indica cuanto varia el peso si come mucho */
const ENTRENA = () => Math.random() < 0.4   /* array function que indica cuanto varia el peso si entrena */
const llueve = () => Math.random() < 0.25  /* array function que dice llueve el 25% de las veces  */

/* for */
/* Vamos a simular el transcurso de un año, para ver al final cúal será el peso de Yosmuel */
for (var i = 1; i <= DIAS_AÑO; i++) {
    var random = Math.random()
    if (random < 0.25) {
        AUMENTAR_PESO(Yosmuel)
    } else if (random < 0.5) {
        DISMINUIR_PESO(Yosmuel)
    }
    var añadeArray = pesosTotales.push(random.toFixed(1))
}

console.log('Al final de año ' + Yosmuel.nombre + ' pesa ' + Yosmuel.peso.toFixed(1) + 'kg') /* Peso final */

/* while */

while (Yosmuel.peso > META) {
    if (COME_MUCHO()) {
        AUMENTAR_PESO(Yosmuel)
    } 
    if (ENTRENA()) {
        DISMINUIR_PESO(Yosmuel)
    }
    dias += 1
}

console.log('Pasaron ' + dias + ' días, hasta que ' + Yosmuel.nombre + ' adelgazo 3kg')


/* Do ... While */
/* En este ejemplo se verá cuantas veces va alguien a la esquina a ver si llueve */
do {
    contador++
} while (!llueve()) 
/* Con este if resolvemos que diga vez o veces dependiendo del número */
if (contador === 1) {
    console.log('Fui a ver si llovía ' + contador + ' vez')
} else if (contador > 1 || contador === 0) {
    console.log('Fui a ver si llovía ' + contador + ' veces')
}

