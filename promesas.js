const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje (id) {
    return new Promise((resolve, reject) => {
        const URL = API_URL + PEOPLE_URL.replace(':id', id)
        $.get(URL, opts, function(data){
            resolve(data)
        })
        .fail(() => reject=id)
    })
}

function onError (id){
    console.log('Ocurrio un error repentino con el personaje ' + id)
}

obtenerPersonaje(1)
    .then(personaje => {
        console.log('Hola, mi personaje se llama ' + personaje.name)
    })
    .catch(onError)