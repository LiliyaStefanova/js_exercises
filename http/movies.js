var fetch = require("node-fetch");

const movie_list = "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/movies.json";

//Fetch returns a Response object
fetch(
    movie_list
)
//response.json() returns a promise that resolves with result of parsing the response text as json
    .then(response => response.json())
    //chain the promises as what is passed to the second is an array
    .then(movies => {
        movies.forEach(movie => {
            console.log(movie.title);
        });
    })
    .catch(err => console.log(err.message));