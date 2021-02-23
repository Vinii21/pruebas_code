const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje (id, callback) {
    const URL = API_URL + PEOPLE_URL.replace(':id', id)
    $.get(URL, opts, function (people) {
        console.log('Hola, yo soy ' + people.name)

        if (callback) {
            callback()
        }
    })
}

obtenerPersonaje(1, function (){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4), function(){
                obtenerPersonaje(5)
            }
        })
    })
})