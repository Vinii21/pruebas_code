const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onePeopleResponse = function (people) {
    console.log('Hola, yo soy ' + people.name)
}

function obtenerPersonaje (id) {
    const URL = API_URL + PEOPLE_URL.replace(':id', id)
    $.get(URL, opts, onePeopleResponse)
}

obtenerPersonaje(1)