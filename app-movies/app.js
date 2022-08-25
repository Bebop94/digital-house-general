//
const movies = require('./movies.js')

const moviesDH = {
    movies : movies,
    listMovies : function(){
        this.movies.forEach(function(movie){
            console.log(movie)
        }
    )
    },
    searchMovie : function(title){
        let peliculaEncontrada = null
        this.movies.forEach(function(movie){
            if (movie.title == title) {
                let peliculaEncontrada = movie
            }
        })
        return(peliculaEncontrada)
    },
    searchMovie2 : function(title){
        let peliEncontrada = movies.filter(function(movie){
            return movie.title == title
        })

        if (peliEncontrada.length == 0) {
            return 'Perdimos los derechos de esta película'
            }
        else{
            return peliEncontrada[0]
        } 
    },
    searchMoviesByGenre : function(genero){
        let peliculasFiltradas = movies.filter(function(movie){
            return movie.genre == genero
        })
        if (peliculasFiltradas.length == 0) {
            return ('No tenemos peliculas del genero ' + genero)
            }
        else{
            return peliculasFiltradas
        }
    },
    totalPrice : function(){
        let listaPrecios = movies.map(function(movie){
            return movie.price
        })
        let sumPrice = listaPrecios.reduce(function(acum, price){
            return acum + price
        })
        console.log(sumPrice)
    },
    changeMovieGenre : function(title, newGenre){
        this.searchMovie(title).genre = newGenre
    }
}

//console.log(moviesDH)
//moviesDH.searchMoviesByGenre('Suspenso')
//moviesDH.totalPrice()
//moviesDH.changeMovieGenre('Birdbox','Feo')
//moviesDH.listMovies()
//console.log(moviesDH.searchMoviesByGenre('Suspenso'))

let peliculasDeDrama = moviesDH.searchMoviesByGenre('Drama')
console.log(peliculasDeDrama)