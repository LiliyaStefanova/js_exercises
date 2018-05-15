const movie_list = [
    {
        title:'Batman',
        year: 1989,
        director: 'Tim Burton',
        imdbRating: 7.6
    },
    {
        title:'Batman Returns',
        year: 1992,
        director: 'Tim Burton',
        imdbRating: 7.0
    },
    {
        title:'Batman Forever',
        year: 1995,
        director: 'Joel Schumacher',
        imdbRating: 5.4
    },
    {
        title:'Batman & Robin',
        year: 1997,
        director: 'Joel Schumacher',
        imdbRating: 3.7
    },
    {
        title:'Batman Begins',
        year: 2005,
        director: 'Christopher Nolan',
        imdbRating: 8.3
    },
    {
        title:'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        imdbRating: 9.0
    },
    {
        title:'The Dark Knight Rises',
        year: 2012,
        director: 'Christopher Nolan',
        imdbRating: 8.5
    }
];

//Get movie titles

// const titles = () =>{
//     const titles = [];
//     for(const movie of movie_list){
//         titles.push(movie.title);
//     }
//    return titles;
// };

const titles = movies => {return movies.map(movie => movie.title)}

//Count movies by Christopher Nolan
// const nolanMovieList = () =>{
//     const nolanMovies = [];
//     for(const movie of movie_list){
//         if(movie.director==='Christopher Nolan'){
//             nolanMovies.push(movie);
//         }
//     }
//     return nolanMovies;
// };
const nolanMovieList = movies => {return movies.filter(movie => movie.director === 'Christopher Nolan')};


//Get titles of movies with an IMDB rating greater than or equal to 7.5
// const bestTitles = () => {
//     const bestTitles = [];
//     for(const movie of movie_list){
//         if(movie.imdbRating>=7.5){
//             bestTitles.push(movie.title);
//         }
//     }
//     return bestTitles;
// };

const bestTitles = movies => {return movies.filter(m=>m.imdbRating>=7.5).map(movie => movie.title)};

//Compute the average rating of Christopher Nolan's movies
// const averageMovieRating = (movies) => {
//     let ratingSum = 0;
//     for(const movie of movies){
//         ratingSum += movie.imdbRating;
//     }
//     return ratingSum/movies.length;
// };
const averageRating = movies => {
    //NB The starting value of the summing variable should be specified, otherwise it will be NaN
    const sum = movies.reduce((ratingSum, movie) => ratingSum + movie.imdbRating, 0);
    return sum/movies.length;
};

console.log(titles(movie_list));
console.log(nolanMovieList(movie_list).length);
console.log(bestTitles(movie_list));
console.log(averageRating(nolanMovieList(movie_list)));


