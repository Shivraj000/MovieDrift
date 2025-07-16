const movies = [
  {
    title: "Hobbs & Shaw",
    img: "https://resizing.flixster.com/nueif8QgjxjyAubMaxv4fPqOxT8=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15512904_p_v10_ac.jpg",
    poster: "https://wallpapercave.com/wp/wp3944676.jpg",
    desc: "A lawman and an operative battle a cybernetically enhanced soldier.\nRelease: Aug 2, 2019\nDirector: David Leitch",
    link: "https://drive.google.com/file/d/1vOXy0QoL4Gt0LhHbYXfUjhehWLNyRw40/view"
  },
  {
    title: "John Wick",
    img: "http://www.newdvdreleasedates.com/images/posters/large/john-wick-2014-06.jpg",
    poster: "https://i.etsystatic.com/26881902/r/il/88d0c5/3914964769/il_fullxfull.3914964769_kgcl.jpg",
    desc: "An ex-hitman comes out of retirement.\nRelease: Oct 24, 2014\nDirector: Chad Stahelski",
    link: "https://drive.google.com/file/d/1P3APBF0THrXoseNrJWsAM_voiQPnjkcJ/view"
  },
  {
    title: "Mad Max: Fury Road",
    img: "https://i.etsystatic.com/21028910/r/il/3c6029/2796712209/il_fullxfull.2796712209_d1z7.jpg",
    poster: "https://orig00.deviantart.net/5183/f/2015/025/5/a/mad_max__fury_road__2015____poster_by_camw1n-d8fbn8z.png",
    desc: "Max and rebels flee a warlord.\nRelease: May 15, 2015\nDirector: George Miller",
    link: "https://drive.google.com/file/d/1S2CbCdR1Vkkf4xocFHK1r9zL2TLkEAo8/view"
  },
  {
    title: "Mr. & Mrs. Smith",
    img: "https://cdn.kinocheck.com/i/ltdyho7ube.jpg",
    poster: "https://i.pinimg.com/originals/ea/83/aa/ea83aa31e6ad8040c106997802517437.jpg",
    desc: "A couple are assassins for rival groups.\nRelease: June 10, 2005\nDirector: Doug Liman",
    link: "https://drive.google.com/file/d/1K03jWo94_i6ReMnroQebrUD-HVPJ6QT4/view"
  },
  {
    title: "Civil War",
    img: "https://i.pinimg.com/originals/79/d3/82/79d382da2da72021fb9c71058314902b.jpg",
    poster: "https://i.pinimg.com/originals/9f/6a/a7/9f6aa7e86578c22033a36654cbb7557a.jpg",
    desc: "Cap vs Iron Man splits the Avengers.\nRelease: May 6, 2016\nDirector: Russo Brothers",
    link: "https://drive.google.com/file/d/1dEEv5SxZ7J-JFY4P0ZLM9rbAr8jgXwBX/view"
  },
  {
    title: "300",
    img: "https://i.pinimg.com/736x/d7/30/d8/d730d8dacf22cdee771c46f4e2480ba9---movie-brady.jpg",
    poster: "http://images2.fanpop.com/images/photos/6400000/300-the-movie-movies-6443657-1280-960.jpg",
    desc: "Spartans fight the Persian army.\nRelease: Mar 16, 2007\nDirector: Zack Snyder",
    link: "https://drive.google.com/file/d/15E07idR_gzzVzuEvf6QqlZsKKkpsJ8a-/view"
  },
  {
    title: "Knight and Day",
    img: "https://image.tmdb.org/t/p/original/zu9N5J9X2DjEVSycf1DE0iMpgf1.jpg",
    poster: "https://i.pinimg.com/originals/fd/64/01/fd6401f3d9dd64f9a79b0f6d78f79f0a.jpg",
    desc: "Woman meets spy fugitive.\nRelease: June 23, 2010\nDirector: James Mangold",
    link: "https://drive.google.com/file/d/1ixkEuI703VlMtBDH3FRccb8WWJG-NY10/view"
  },
  {
    title: "The Expendables",
    img: "https://image.tmdb.org/t/p/original/zhe97i9wJ5WgZ0JJnJj3zSLLZt2.jpg",
    poster: "https://image.tmdb.org/t/p/original/tZW421SKb9KtaVKHEJ9EOnCvQ9W.jpg",
    desc: "Mercs on a deadly mission.\nRelease: Aug 13, 2010\nDirector: Sylvester Stallone",
    link: "https://drive.google.com/file/d/1z5z5exZGFm9gzbdI0AcSygzPn4AKG5vT/view"
  },
  {
    title: "Extraction",
    img: "https://cdn.flickeringmyth.com/wp-content/uploads/2020/04/extraction-poster-2-600x889.jpg",
    poster: "https://image.tmdb.org/t/p/original/96ovd9JPD57R8cIMmGluFMFWt10.jpg",
    desc: "Merc rescues kidnapped boy.\nRelease: Apr 24, 2020\nDirector: Sam Hargrave",
    link: "https://drive.google.com/file/d/1dLYC9loCU1e7d4m__qxEOKGjnhDeXM3s/view"
  }
];

const wrapper = document.querySelector('.swiper-wrapper');
movies.forEach((movie) => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.style.backgroundImage = `url('${movie.img}')`;
  slide.innerHTML = `<div class="caption"><h3>${movie.title}</h3><p>Click for details</p></div>`;
  slide.addEventListener('click', () => {
    document.getElementById("modalPoster").src = movie.poster;
    document.getElementById("modalTitle").textContent = movie.title;
    document.getElementById("modalDescription").textContent = movie.desc;
    document.getElementById("modalLink").href = movie.link;
    document.getElementById("modal").classList.add("show");
  });
  wrapper.appendChild(slide);
});

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 120,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener('load', () => {
  document.getElementById('disclaimerPopup').style.display = 'flex';
});

function closeDisclaimer() {
  document.getElementById('disclaimerPopup').style.display = 'none';
}
