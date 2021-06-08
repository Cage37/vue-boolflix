// Milestone 2:
// Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).
// Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)

const app = new Vue ({

    el: "#app",

    data:{
        urlM:"https://api.themoviedb.org/3/search/movie",
        urlS:"https://api.themoviedb.org/3/search/tv",
        apiKey:"96db8a45cc612ab5f1bf96bcc1c494ac",
        query: "",
        movies: [],
        series: [],
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
            })
        },
    },

    mounted () {}

})