const resultGrid = document.getElementById('result-grid');
const posterContainer = document.getElementById('poster-container');
const urlParams = new URLSearchParams(window.location.search);
const imdbID = urlParams.get('id');

async function loadMovieDetailsById(id) {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=fc1fef96`);
  const details = await res.json();

  const posterURL = details.Poster !== 'N/A' ? details.Poster : 'https://via.placeholder.com/300x450';

  posterContainer.innerHTML = `
    <img src="${posterURL}" alt="Movie Poster">
  `;

  resultGrid.innerHTML = `
    <h3>${details.Title}</h3>
    <p><b>Year:</b> ${details.Year}</p>
    <p><b>Rated:</b> ${details.Rated}</p>
    <p><b>Released:</b> ${details.Released}</p>
    <p><b>Genre:</b> ${details.Genre}</p>
    <p><b>Director:</b> ${details.Director}</p>
    <p><b>Actors:</b> ${details.Actors}</p>
    <p><b>Plot:</b> ${details.Plot}</p>
    <p><b>Awards:</b> ${details.Awards}</p>
  `;
}

if (imdbID) {
  loadMovieDetailsById(imdbID);
}