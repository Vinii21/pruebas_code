const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id){
    return new Promise(function(resolve, reject){
        const URL = API_URL + PEOPLE_URL.replace(':id', id)
        $.get(URL, opts, function(data){
            resolve(data)
        })
        .fail(() => reject = id)
    })
}

function onError (id){
    console.log('Ocurrio un error repentino con el personaje ' + id)
}

async function obtenerPersonajes() {
    var ids =[1, 2, 3, 4, 5, 6, 7]
    var promises = ids.map( id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promises)
        console.table(personajes)
    } catch (id) {
        onError
    }
}

obtenerPersonajes()

