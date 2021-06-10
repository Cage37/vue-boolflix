// Milestone 4:
// Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:
// ● Un header che contiene logo e search bar
// ● Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto formadi “card” in cui lo sfondo è rappresentato dall’immagine di copertina (​consigliola poster_path con w342​)
// ● Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview.

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