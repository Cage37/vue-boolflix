// Milestone 3: In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. 
// Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse.
// Dovremo prendere quindi l’URL base delle immagini di TMDB:https://image.tmdb.org/t/p/​ per poi aggiungere la dimensione che vogliamo generare(troviamo tutte le dimensioni possibili a questo link:https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400​) per poi aggiungere laparte finale dell’URL passata dall’API.Esempio di URL:https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

const app = new Vue ({

    el: "#app",

    data:{
        urlM:"https://api.themoviedb.org/3/search/movie",
        urlS:"https://api.themoviedb.org/3/search/tv",
        apiKey:"96db8a45cc612ab5f1bf96bcc1c494ac",
        query: "",
        movies: [],
        series: [],
        error: null,
    },

    methods: {

        searchMoviesAndSeries () {
            
            let search = document.getElementById("search").value;
            
            let completeURLM = `${this.urlM}?api_key=${this.apiKey}&query=${search}`

            axios
            .get(completeURLM)
            .then(resp => { 
                this.movies = resp.data.results
                console.log(this.movies);
                console.log(resp);

                for (let index = 0; index < this.movies.length; index++) {
                    
                    if(this.movies[index].original_language == "en") {
                        this.movies[index].original_language = "US" 
                    }
                }
            }).catch(e =>{
                console.error(e);
                this.error = "Sorry, something went wrong! " + e;
            })

            let completeURLS = `${this.urlS}?api_key=${this.apiKey}&query=${search}`

            axios
            .get(completeURLS)
            .then(resp => { 
                this.series = resp.data.results
                console.log(this.series);
                console.log(resp);

                for (let index = 0; index < this.series.length; index++) {
                    
                    if(this.series[index].original_language == "en") {
                        this.series[index].original_language = "US" 
                    } 
                }
            }).catch(e =>{
                console.error(e);
                this.error = "Sorry, something went wrong! " + e;
            })
        },
    },

    mounted () {}

})