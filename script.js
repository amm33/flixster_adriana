const apikey = 'd672ab0084c627e8b1f0d8cb22ae96aa';
const pageSize = 8; 
var currentSearch = ''; 
var currentPage = 0; 
const offset = currentPage *pageSize;
var searchBar = document.querySelector('#form');
var search = document.querySelector('#search')
var movieBody = document.querySelector('#movies-grid');
const main = document.querySelector('main');
const showMoreMoviesBtn = document.querySelector('#load-more-movies-btn')
const url = `https://api.themoviedb.org/3/movie/now_playing?offset=${offset}&api_key=d672ab0084c627e8b1f0d8cb22ae96aa`;
const imageURL = `https://image.tmdb.org/t/p/w500`;
const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=d672ab0084c627e8b1f0d8cb22ae96aa`;


async function getData(url){ 
    const results = await fetch(url);
    const data = await results.json();
    console.log(data);
    displayMovies(data.results);
}
console.log(getData(url))

getData(url); 

//displaying data 

function displayMovies(data){
    main.innerHTML = '';

    //title, poster_path, vote_average, overview 
    data.forEach(movie =>{
        const {title,poster_path,vote_average,overview} = movie;
        const movEl = document.createElement('div');
        movEl.classList.add('movie');
        movEl.innerHTML = `
        <img class = "movie-poster" src="${imageURL+poster_path}" alt="${title}">

        <div class = "movieInfo"></div>
            <h3 class ="movie-title" >${title}</h3>
            <span class = "movie-votes">${vote_average}</span>
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
async function formSubmit(event){
    event.preventDefault();
    currentSearch = search.value; 
    if (currentSearch){
        getData(searchURL + '&query='+currentSearch)
    }else{
        getData(url)
    }
}
searchBar.addEventListener('submit', formSubmit)

//Close button -clears search and shows original movies 
const closeBtn = document.querySelector(".close-search-btn"); 
closeBtn.addEventListener('click', () =>{
    search.value = " ";
})


//show more 
// showMoreMoviesBtn.addEventListener('click', (e) => {
//     const results = await getData(currentSearch);
//     displayResults; 
//     currentPage++; 
// }) 

async function showMore(event){
    const results = await getData(currentSearch); 
    displayMovies(results);
    currentPage++; 
}
showMoreMoviesBtn.addEventListener('click', showMore)