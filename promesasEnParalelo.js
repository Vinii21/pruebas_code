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

var ids =[1, 2, 3, 4, 5, 6, 7]
var promises = ids.map( id => obtenerPersonaje(id))
Promise
    .all(promises) /* Para obtener los valores de las promesas metidas en el array promises cuando se resuelvan */
    .then(personajes => console.log(personajes))
    .catch(onError)
