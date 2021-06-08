// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
// Titolo
// Titolo Originale
// Lingua
// Voto

const app = new Vue ({

    el: "#app",

    data:{
        url:"https://api.themoviedb.org/3/search/movie",
        apiKey:"96db8a45cc612ab5f1bf96bcc1c494ac",
        query: "",
        movies: [],
    },

    methods: {

        searchMovie (params) {
            
            let search = document.getElementById("search").value;
            let completeURL = `${this.url}?api_key=${this.apiKey}&query=${search}`
            console.log(completeURL);

            axios
            .get(completeURL)
            .then(resp => { 
                this.movies = resp.data.results
                console.log(this.movies);
                console.log(resp);
            })
        }
    },

    mounted () {}

})