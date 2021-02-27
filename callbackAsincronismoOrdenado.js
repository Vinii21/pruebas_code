const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje (id, callback) {
    const URL = API_URL + PEOPLE_URL.replace(':id', id)
    $.get(URL, opts, callback).fail(() => console.log('Ha ocurrido un ERROR. No se pudo obtener el personaje'))
}

obtenerPersonaje(1, function (personaje){
        console.log('Hola, yo soy ' + personaje.name)
            obtenerPersonaje(2,function(personaje){
                console.log('Hola, yo sor ' + personaje.name)
                    obtenerPersonaje(3, function(personaje){
                        console.log('Hola, yo soy ' + personaje.name)
                            obtenerPersonaje(4, function(personaje){
                                console.log('Hola, yo soy ' + personaje.name)
                            })
                    })
                
            })
})