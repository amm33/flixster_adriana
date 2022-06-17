const apikey = 'd672ab0084c627e8b1f0d8cb22ae96aa';
var searchBar = document.querySelector('#form');
var search = document.querySelector('#search')
var movieBody = document.querySelector('#movieBody');
const main = document.querySelector('main');
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=d672ab0084c627e8b1f0d8cb22ae96aa`
const imageURL = `https://image.tmdb.org/t/p/w500`
const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=d672ab0084c627e8b1f0d8cb22ae96aa&query=`


async function getData(){
    const results = await fetch(url);
    const data = await results.json();
    console.log(data);
    displayMovies(data.results);
}
console.log(getData())

getData(); 

//displaying data 

function displayMovies(data){
    main.innerHTML = '';

    //title, poster_path, vote_average, overview 
    data.forEach(movie =>{
        const {title,poster_path,vote_average,overview} = movie;
        const movEl = document.createElement('div');
        movEl.classList.add('movie');
        movEl.innerHTML = `
        <img src="${imageURL+poster_path}" alt="${title}">

        <div class = "movieInfo"></div>
            <h3>${title}</h3>
            <span class = "movieRating">${vote_average}</span>
        </div>

        <div class="overview">
            ${overview}
        </div>
        `
        main.appendChild(movEl);
    })
}




// //this works but does not show rating 
// const displayMovies = (movies) => {
//     movies.forEach((movie) => {
//         movieBody.innerHTML += 
//         `<div class ="movieContainers">
//         <img src= "${imageURL}${movie.poster_path}"
//         alt="${movie.title}"
//         <h3 class="movieTitle" >${movie.title}</h3>
//         <span class="movieRating> ${movie.vote_average}<span>
//         </div>
//         <div class="movieOverview">
//         <h3>Overview:</h3>${movie.overview}
//         </div>`;
//     });
// }

//searching stuff 
form.addEventListener('submit', (e) => {
    //e.preventDefault(); 
    const searchValue = search.value; 
    if(searchValue){
        getData(searchURL + searchValue) //want to get the search data 
    }
})