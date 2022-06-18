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

//getting data------------------------------------------------------------------------
async function getData(url){ 
    const results = await fetch(url);
    const data = await results.json();
    console.log(data);
    displayMovies(data.results);
}
console.log(getData(url))

getData(url); 
//------------------------------------------------------------------------------------

//displaying data --------------------------------------------------------------------

function displayMovies(data){
    main.innerHTML = '';

    //title, poster_path, vote_average, overview 
    data.forEach(movie =>{
        const {title,poster_path,vote_average,overview, id} = movie;
        const movEl = document.createElement('div');
        movEl.classList.add('movie');
        movEl.innerHTML = `
        <img class = "movie-poster" src="${imageURL+poster_path}" alt="${title}">

        <div class = "movieInfo"></div>
            <h3 class ="movie-title" >${title}</h3>
            <span class = "movie-votes">&#x2B50; ${vote_average}</span>
        </div>

        <div class="overview">
            <h3>Overview</h3>
            ${overview}
            <br/>
            <button class="know-more" id="${id}">More</button>
        </div>
        `
        main.appendChild(movEl);

        document.getElementById(id).addEventListener('click', () =>{
          openNav(movie);
          console.log(id)
        })
    })
}

// w3schools overlay open and close------------------------------------------
/* Open */
const overlayVideos = document.querySelector(".overlay-content")
function openNav(movie) {
    let id = movie.id;
    let{title, vote_average, overview} = movie; 
    fetch('https://api.themoviedb.org/3/movie/' + id +"/videos?api_key=" + apikey).then(res => res.json()).then (videoData =>{
        console.log(videoData);
        if (videoData){
            document.getElementById("myNav").style.display = "block";
            if (videoData.results.length > 0){
                var embed = [];
                embed.push(`
                        <div>
                            <h3 class ="movie-title" >${title}</h3>
                            <span class = "movie-votes"> &#x2B50;${vote_average}</span>

                            <h3>Overview</h3>
                            ${overview}
                        </div>`)
                videoData.results.forEach(video => {
                    let {id, name, key, site, type} = video;
                    if (type == "Trailer" && site == "YouTube"){
                        embed.push(`
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        `)
                    }
                })

                //adding videos to overlay 
                overlayVideos.innerHTML = embed.join('');
            }
        }
    })
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.display = "none";
  //stopping the videos when you close the overlay 
  const close = document.getElementsByTagName('iframe');
  if (close != null){
    for (let i=0; i<close.length;i++){
        close[i].src=close[i].src;  //shoul reload 
    }
  }
}

//--------------------------------------------------



// -----------------------------------------------------------------------------------



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