const movies = [
  {
    title: "The Notebook",
    img: "https://i.pinimg.com/originals/af/83/20/af8320a8a03c38b054e737845537a2cf.jpg",
    poster: "http://images2.fanpop.com/images/photos/3800000/The-Notebook-Wallpaper-the-notebook-3877378-1280-800.jpg",
    desc: "A man tells a story to a woman about two lovers.\n Release date: October 4, 2017 \n Director: Nick Cassavetes.",
    link: "https://drive.google.com/file/d/1A6z2drV3m3BuHIoAFhXZd5EL8Hd-O4y_/view?usp=sharing"
  },
  {
    title: "Titanic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwEm3_xfGZcUKil5bnjq0RQ7oYKmey862oZQ&s",
    poster: "https://wallpaperaccess.com/full/1162492.jpg",
    desc: "A woman falls for an artist aboard the ill-fated ship.\nRelease date: March 13, 1998\nDirector: James Cameron.",
    link: "https://drive.google.com/file/d/1DNvIaZkBxhn82Cfr4TC5eD4JCeKG5S4r/view?usp=sharing"
  },
  {
    title: "Blue Valentine",
    img: "http://madeinatlantis.com/wp-content/uploads/2019/09/blue-valentine-2010-movie-poster.jpg",
    poster: "https://nowthenmagazine.com/assets/img/content/_1920xAUTO_crop_center-center_85_none/blue-valentine-film.jpg",
    desc: "A couple cannot halt the downward spiral of their marriage.\nRelease date: December 29, 2010\nDirector: Derek Cianfrance.",
    link: "https://drive.google.com/file/d/1Z8BEpZkso8KV4W5FUUFUlclI14Oy47bq/view?usp=sharing"
  },
  {
    title: "Meet Joe Black",
    img: "https://flxt.tmsimg.com/assets/p21971_p_v10_ah.jpg",
    poster: "https://pics.filmaffinity.com/Meet_Joe_Black-143070741-large.jpg",
    desc: "Death makes a deal with a principled widower.\nRelease date: November 13, 1998\nDirector: Martin Brest.",
    link: "https://drive.google.com/file/d/1Lp1kiDFKSZA7hjz0bHY4T01ZO3VAVX0e/view?usp=sharing"
  },
  {
    title: "Beauty and the Beast",
    img: "https://image.tmdb.org/t/p/original/4s6fYhtYakH21LHtwBUEMEBuCZG.jpg",
    poster: "https://www.wallpaperflare.com/static/332/676/867/belle-beast-beauty-and-the-beast-2017-wallpaper.jpg",
    desc: "A young woman discovers the kind heart of a beast.\nRelease date: March 17, 2017\nDirector: Bill Condon.",
    link: "https://drive.google.com/file/d/1DGdrH2ftSqVMqUcFjIsBxhbeoQfUOOJP/view?usp=sharing"
  },
  {
    title: "Revolutionary Road",
    img: "https://image.tmdb.org/t/p/original/63PKnmHjaDcTAjZIfj6bWVN8gvw.jpg",
    poster: "http://vignette3.wikia.nocookie.net/filmguide/images/f/f5/849432fafce17273b7406553b4207b4d.jpg/revision/latest?cb=20150812164830",
    desc: "Two suburbanites become stuck in a stifling life.\nRelease date: March 6, 2009\nDirector: Sam Mendes.",
    link: "https://drive.google.com/file/d/13xf8M0uHZTdaJDqpn3URrcU5ArA2VEPM/view?usp=sharing"
  },
  {
    title: "Silver Linings Playbook",
    img: "http://orig03.deviantart.net/fb03/f/2013/129/c/4/silver_linings_playbook_poster_by_xnitroz-d64mnn9.jpg",
    poster: "http://www.filmofilia.com/wp-content/uploads/2012/10/Silver-Linings-Playbook-poster.jpg",
    desc: "A man tries to rebuild his life and reunite with his wife.\nRelease date: December 7, 2012\nDirector: David O. Russell.",
    link: "https://drive.google.com/file/d/1kCTAgphNe4Rjv29M8RLHtW2yw6lz62bb/view?usp=sharing"
  },
  {
    title: "Past Lives",
    img: "https://image.tmdb.org/t/p/original/rzO71VFu7CpJMfF5TQNMj0d1lSV.jpg",
    poster: "https://media-cache.cinematerial.com/p/500x/sl5gmqvq/past-lives-british-movie-poster.jpg?v=1691847087",
    desc: "Two childhood friends reunite after decades apart.\nRelease date: June 23, 2023\nDirector: Celine Song.",
    link: "https://drive.google.com/file/d/13-KnwVTyqEuyTfRFhfmGR-qhI9ACiy8q/view?usp=sharing"
  },
  {
    title: "After",
    img: "https://i.pinimg.com/originals/c6/2d/67/c62d672543d8c3ff032283b72e9ecb8d.jpg",
    poster: "https://i.pinimg.com/originals/19/f2/0f/19f20f636312be0851d5ba27c75c3b39.jpg",
    desc: "A college freshman meets a mysterious rebel.\nRelease date: April 19, 2019\nDirector: Jenny Gage.",
    link: "https://drive.google.com/file/d/1WfWyElo8mrC5u2lPAlbhlQIhyjWBdhs0/view?usp=sharing"
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
