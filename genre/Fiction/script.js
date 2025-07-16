const movies = [
  {
    title: "Avatar",
    img: "https://cdna.artstation.com/p/assets/images/images/031/645/214/large/shreyas-raut-avatar-2.jpg?1604210989",
    poster: "https://i.pinimg.com/736x/45/9d/00/459d00d7e5a1b108bc29d929b0ed07db--avatar-poster-fantasy-movies.jpg",
    desc: "A former Marine (Sam Worthington) falls in love with a native (Zoe Saldana) of a lush alien world.\nRelease date: December 18, 2009\nDirector: James Cameron",
    link: "https://drive.google.com/file/d/1khf_SDOLinMSk-H7rgsoSJNoEJFpBapb/view?usp=sharing"
  },
  {
    title: "Annihilation",
    img: "https://4.bp.blogspot.com/-ZDwKrj89sb0/WpRQZyzYUFI/AAAAAAAB_1U/AD7DNbVo-UM_tAnriFks8Sy1k3LtGhAOwCLcBGAs/s1600/annihilation-movie-poster-2.jpg",
    poster: "https://i.pinimg.com/736x/dd/b1/61/ddb1611acca6d7d04dce6fa8ed1a0fe0.jpg",
    desc: "A biologist signs up for a dangerous, secret expedition in which the laws of nature don't apply.\nRelease date: February 23, 2018\nDirector: Alex Garland",
    link: "https://drive.google.com/file/d/1FPkRIilRw6uE9V0-yY00b1CVQKy7vVRN/view?usp=sharing"
  },
  {
    title: "Arrival",
    img: "https://image.tmdb.org/t/p/original/mSgYBWMybY9Ug4ZnCGsttPIjUx7.jpg",
    poster: "https://cdn.traileraddict.com/content/paramount-pictures/arrival-2016-poster-18.jpg",
    desc: "A linguist leads a team of investigators to try and communicate with extraterrestrial visitors.\nRelease date: November 16, 2016\nDirector: Denis Villeneuve",
    link: "https://drive.google.com/file/d/1d_4mBAtcVIT8H27inSwwzfC1g2A-HLok/view?usp=sharing"
  },
  {
    title: "Inception",
    img: "https://xl.movieposterdb.com/10_09/2010/1375666/xl_1375666_98809d80.jpg",
    poster: "https://i.pinimg.com/originals/72/3d/50/723d5099b430dd39d0a203e06eb61452.jpg",
    desc: "A thief (Leonardo DiCaprio) steals people's secrets from their subconscious while they dream.\nRelease date: July 16, 2010\nDirector: Christopher Nolan",
    link: "https://drive.google.com/file/d/1tfwXoHuX5lVSrg-9L0o1tMiTkJmExro0/view?usp=sharing"
  },
  {
    title: "Interstellar",
    img: "https://cdn.shopify.com/s/files/1/1416/8662/products/interstellar_2014_advance_original_film_art_682852f2-23f6-46de-a1db-4029d5b6f0b4_5000x.jpg?v=1574284010",
    poster: "https://posterspy.com/wp-content/uploads/2016/12/interstellar_behance_01-1.jpg",
    desc: "With Earth becoming incapable of supporting life, explorers set out to find a new home for humanity.\nRelease date: November 7, 2014\nDirector: Christopher Nolan",
    link: "https://drive.google.com/file/d/1FNhznfm_h0_habgu7PwlMBpoTjtsKP3d/view?usp=sharing"
  },
  {
    title: "Lucy",
    img: "http://m.cdn.blog.hu/tr/transfesser/image/2014/Lucy_Exclusive_Poster_MxPosters.jpg",
    poster: "https://wallpapercave.com/wp/wp7057881.jpg",
    desc: "A drug mule's illicit cargo is absorbed into her system, giving her incredible powers.\nRelease date: August 8, 2014\nDirector: Luc Besson",
    link: "https://drive.google.com/file/d/113m_Q64Edo0qQw6e2PoYTOI2Dsaoh3Ga/view?usp=sharing"
  },
  {
    title: "Jurassic Park",
    img: "https://image.tmdb.org/t/p/original/3MSKv8P0jFTpgFD5mQGVktDrp3m.jpg",
    poster: "https://i.redd.it/nw5dvr5w85131.jpg",
    desc: "Scientists (Sam Neill, Laura Dern, Jeff Goldblum) visit a park of DNA-regenerated dinosaurs.\nRelease date: April 15, 1994\nDirector: Steven Spielberg",
    link: "https://drive.google.com/file/d/1w59QJxG-Dp0NIwjVEp3UuZZaRq3skF_1/view?usp=sharing"
  },
  {
    title: "The Avengers",
    img: "https://image.tmdb.org/t/p/original/pdhOE0NAZaPzjsgTvatRP1xFhG3.jpg",
    poster: "https://orig00.deviantart.net/c2f5/f/2015/071/b/1/avengers__age_of_ultron__hi_res_textless_poster__by_ihaveanawesomename-d8jk9vx.jpg",
    desc: "Superheroes join forces to save the world from an unexpected enemy.\nRelease date: April 27, 2012\nDirector: Joss Whedon",
    link: "https://drive.google.com/file/d/13G3Xo8o7bk4-X6wxUGwh9GW7Lxa2wDqh/view?usp=sharing"
  },
  {
    title: "San Andreas",
    img: "https://media-cache.cinematerial.com/p/500x/tw2ynlm7/san-andreas-movie-cover.jpg?v=1456060197",
    poster: "http://images6.fanpop.com/image/photos/39200000/San-Andreas-Movie-Wallpaper-3-san-andreas-2015-39249753-1920-1280.jpg",
    desc: "A rescue pilot must save his family after a magnitude 9 earthquake devastates California.\nRelease date: May 29, 2015\nDirector: Brad Peyton",
    link: "https://drive.google.com/file/d/1ahsIqHzH70stJOL7EueuvdRv83bYCOcb/view?usp=sharing"
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
