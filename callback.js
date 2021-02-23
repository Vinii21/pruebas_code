/* Esto es un requests con ayuda de jQuery creando un callback con la API swapi */
/* Este ejemplo compone un simple callback, un solo request */
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = API_URL + PEOPLE_URL.replace(':id', 1)
const opts = { crossDomain: true }
const onePeopleResponse = function (people) {
    console.log('Hola, yo soy ' + people.name)
}

$.get(lukeUrl, opts, onePeopleResponse) /* Callback es una funcion que se va a ejecutar en algún futuro, $.get es el encargado de llamarlo */

