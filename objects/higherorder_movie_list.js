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

const titles = movies => movies.map(movie => movie.title);
const byNolan = movie => movie.director === 'Christopher Nolan'; //predicate
const filter = (movies, func) => movies.filter(func);
const goodRating = movie => movie.imdbRating>=7.5; //predicate
const ratings = movies => movies.map(movie => movie.imdbRating);
const average = array => array.reduce((sum, value) => sum + value, 0)/array.length;

//movies released before year 2000
const oldMovies = movie => movie.year<2000;

console.log(titles(movie_list));
console.log(filter(movie_list, byNolan).length);
const nolanMovieList = filter(movie_list, byNolan);
console.log(titles(filter(movie_list, goodRating)));
console.log(average(ratings(nolanMovieList)));
console.log(titles(filter(movie_list, oldMovies)));