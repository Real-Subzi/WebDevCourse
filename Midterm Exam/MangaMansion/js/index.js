let MovieList = [];
const ListSection = document.querySelector("#movies-list");
const DetailSection = document.querySelector("#DetailSection");

window.onload = async () => {
  if (!localStorage.movies) { //In case there are no previously saved movies.
    await showMoviesFirstTime()
  } else { //In case the movies are already saved in local storage.
    MovieList = JSON.parse(localStorage.movies);
    DisplayMoviesList(MovieList);
  }
}
const BASE_URL = 'https://gist.githubusercontent.com/abdalabaaji/8a4c9f9aabddbab384693f746dfeab46/raw/ea2497811bc355bb737b5d8630a36bee7cbab303/animes.json'

async function showMoviesFirstTime() {
  const MovieData = await fetch(BASE_URL); //Fetch the data from the Api
  const Movies = await MovieData.json();
  MovieList = Movies; //We now have Movies list stored as an Array.
  localStorage.movies = JSON.stringify(MovieList); //store it in the localstorage
  DisplayMoviesList(MovieList)
}

function DisplayMoviesList(MovieList) {
  ListSection.innerHTML = MovieList.map((Movie) => MovieToHtml(Movie)).join(' ')
}

function MovieToHtml(Movie) {
  return `<div class="movie-card">
  <div class="poster">
  <img class="animeIMG" src="${Movie.images.jpg.large_image_url}">
  </div>

  <div class="movie-content">
      <h1 class="movie-title"> ${Movie.title}</h1>
      <div class="description">
          <p>${Movie.synopsis}</p>
      </div>
      <div class="movie-info">
          <span class="year">Release Date : ${Movie.aired.prop.from.year}</span>
          <span class="duration">Duration : ${Movie.duration}</span>
          <span class="rating">Rating : ${Movie.rating}</span>
          <span class="score">Score : ${Movie.score}</span>
      </div>
      <div class="action-btn">
        <button class="btn-show-more" onclick=displayMovieDetails(${Movie.mal_id})>SHOW MORE</button>
        <button class="btn-delete" id="delete" onclick=delMovie(${Movie.mal_id})>DELETE</button>
      </div>
  </div>
</div>`
}

function delMovie(MovieID) {
  const foundIndex = MovieList.findIndex((movie)=>movie.mal_id==MovieID)
  MovieList.splice(foundIndex,1);//deleted from the books list now we save it
  localStorage.movies = JSON.stringify(MovieList); //store it in the localstorage
  DisplayMoviesList(MovieList);
}

function displayMovieDetails(MovieID){
ListSection.classList.add("hidden"); 
DetailSection.classList.remove("hidden");
const foundMovie = MovieList.find((movie)=>movie.mal_id==MovieID);
DetailSection.innerHTML = detailMovieToHtml(foundMovie);
}

function detailMovieToHtml(movie){
  return `<div class="movie-card">
  <div class="poster">
  <img class="animeIMG" src="${movie.images.jpg.large_image_url}">
  </div>

  <div class="movie-content">
      <h1 class="movie-title"> ${movie.title}</h1>
      <div class="synopsis">
          <p> ${movie.synopsis}</p>
      </div>
      <div class="movie-info">
          <span class="year">Release Date : ${movie.aired.prop.from.year}</span>
          <span class="duration">Duration : ${movie.duration}</span>
          <span class="rating">Rating : ${movie.rating}</span>
          <span class="score">Score : ${movie.score}</span>
      </div>
      <iframe width="560" height="460"
          src="${movie.trailer.embed_url}"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="">
      </iframe>
      <div class="action-btn">
        <button class="btn-show-more" onclick=backFunction()>BACK</button>
        <button class="btn-delete" id="delete" onclick=delDetailMovie(${movie.mal_id})>DELETE</button>
      </div>
  </div>
</div>`
}

function delDetailMovie(MovieID){
  const foundIndex = MovieList.findIndex((movie)=>movie.mal_id==MovieID)
  MovieList.splice(foundIndex,1);//deleted from the books list now we save it
  localStorage.movies = JSON.stringify(MovieList); //store it in the localstorage
  DisplayMoviesList(MovieList);
  ListSection.classList.remove("hidden"); 
  DetailSection.classList.add("hidden");
}

function backFunction(){
  ListSection.classList.remove("hidden"); 
  DetailSection.classList.add("hidden");
}