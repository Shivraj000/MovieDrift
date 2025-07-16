const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');
const suggestedList = document.getElementById('suggested-list');

const keywords = ["Batman", "Thor", "Avengers", "Matrix", "Joker", "Dune", "Interstellar", "Moana", "Coco"];
const usedIds = new Set();

async function loadSuggestedMovies() {
  const genreMovies = [];

  for (const keyword of keywords) {
    const res = await fetch(`https://www.omdbapi.com/?s=${keyword}&page=1&apikey=fc1fef96`);
    const data = await res.json();
    if (data.Response === "True") {
      const valid = data.Search.filter(m => !usedIds.has(m.imdbID));
      valid.forEach(m => {
        usedIds.add(m.imdbID);
        m.genre = keyword;
      });
      genreMovies.push(valid);
    }
  }

  let index = 0;
  let added = true;

  while (added) {
    added = false;
    for (const genreList of genreMovies) {
      if (genreList[index]) {
        const movie = genreList[index];
        const item = document.createElement('div');
        item.className = 'suggested-movie';
        item.dataset.id = movie.imdbID;
        item.innerHTML = `
          <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300'}">
          <div class="suggested-movie-title">${movie.Title}</div>
          <div class="suggested-movie-year">${movie.Year}</div>
          <div class="genre-label">${movie.genre}</div>
        `;
        item.addEventListener('click', () => {
          window.location.href = "MovieDetails/index.html?id=" + movie.imdbID;
        });
        suggestedList.appendChild(item);
        added = true;
      }
    }
    index++;
  }
}

async function findMovies() {
  let searchTerm = movieSearchBox.value.trim();
  if (searchTerm.length > 0) {
    const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`);
    const data = await res.json();
    if (data.Response === "True") {
      displayMovieList(data.Search);
      searchList.classList.remove('hide-search-list');
    }
  } else {
    searchList.classList.add('hide-search-list');
  }
}

function displayMovieList(movies) {
  searchList.innerHTML = "";
  movies.forEach(movie => {
    const div = document.createElement('div');
    div.className = 'search-list-item';
    div.dataset.id = movie.imdbID;
    div.innerHTML = `
      <div class="search-item-thumbnail"><img src="${movie.Poster}" /></div>
      <div><h3>${movie.Title}</h3><p>${movie.Year}</p></div>
    `;
    div.addEventListener('click', () => {
      window.location.href = "MovieDetails/index.html?id=" + movie.imdbID;
    });
    searchList.appendChild(div);
  });
}

window.addEventListener('click', (e) => {
  if (e.target !== movieSearchBox) {
    searchList.classList.add('hide-search-list');
  }
});

loadSuggestedMovies();
