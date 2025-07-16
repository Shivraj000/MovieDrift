const movies = [
  {
    title: "The Godfather",
    img: "https://static1.squarespace.com/static/51f10800e4b01bb187e47d39/51f10800e4b01bb187e47d41/51f10e19e4b042671f329d1c/1379964848707/GodfatherW.jpg",
    poster: "https://1.bp.blogspot.com/-5A46hyz-axE/Xm4TFV55ORI/AAAAAAAB2U0/cpdS-dhuQT4Qy9WPgjcxRl-gyXoW9HY8gCLcBGAsYHQ/s1600/6195-the-godfather-1280x800-movie-wallpaper.png",
    desc: "Crime boss Vito Corleone and his sons rule their New York empire with mafia justice.\nRelease date: March 24, 1972\nDirector: Francis Ford Coppola",
    link: "https://drive.google.com/file/d/1GJEO9dYPsTErNSismIPWGt0pxaKs9v-C/view?usp=sharing"
  },
  {
    title: "Goodfellas",
    img: "https://image.tmdb.org/t/p/original/tch5eikHtOcfgRlQP1cOPeFXoFi.jpg",
    poster: "https://image.tmdb.org/t/p/original/bTZ1plf5045xQU3AfG8K3vCqJE1.jpg",
    desc: "An Irish-Italian hoodlum joins the 1950s New York Mafia but it is not what he had expected.\nRelease date: July 31, 2019\nDirector: Martin Scorsese",
    link: "https://drive.google.com/file/d/1Iwa_I22-NaUWNnA76YBOYcLx7anFbKU1/view?usp=sharing"
  },
  {
    title: "Scarface",
    img: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/02/IMG_0861-scaled.jpeg",
    poster: "https://a.1stdibscdn.com/archivesE/upload/1722654/f_50796331489413353220/PC0634_org_master.jpg",
    desc: "Brutal Cuban refugee Tony Montana (Al Pacino) becomes the cocaine king of 1980s Miami.\nRelease date: November 5, 2013\nDirector: Brian De Palma",
    link: "https://drive.google.com/file/d/1cfz4PMcZnKSdLXGq2JzygroUwY1yjtzb/view?usp=sharing"
  },
  {
    title: "Taxi Driver",
    img: "https://image.tmdb.org/t/p/original/5EduOlOAPX1t9FslccJvILbv8co.jpg",
    poster: "https://johnsneaker.com/wp-content/uploads/2021/06/il_fullxfull.2368513847_2hh5-scaled-1-1448x2048.jpg",
    desc: "A disturbed New York cabby (Robert De Niro) befriends a teen hooker (Jodie Foster).\nRelease date: March 13, 1978\nDirector: Martin Scorsese",
    link: "https://drive.google.com/file/d/188U0Gr2-nywLK6SJQsbOvSHPLGKLQdnn/view?usp=sharing"
  },
  {
    title: "Satya",
    img: "https://flxt.tmsimg.com/assets/p80462_p_v10_aa.jpg",
    poster: "https://i.ytimg.com/vi/tQ7gMwmnLT0/maxresdefault.jpg",
    desc: "An East Indian gangster reflects on his lifestyle after he falls in love.\nRelease date: July 3, 1998\nDirector: Ram Gopal Varma",
    link: "https://drive.google.com/file/d/1oKaQvdCJiSPHDanF9s436HOdaqPwZeka/view?usp=sharing"
  },
  {
    title: "Casino",
    img: "https://www.dvdsreleasedates.com/posters/800/C/Casino-1995-movie-poster.jpg",
    poster: "http://hnmag.ca/wp-content/uploads/2019/04/casino.png",
    desc: "A bookie (Robert De Niro) and his pal (Joe Pesci) make a Las Vegas casino an empire.\nRelease date: November 22, 1995\nDirector: Martin Scorsese",
    link: "https://drive.google.com/file/d/1eZXT8_PPwVyK9HPq__FL0SbNoaL6sg6t/view?usp=sharing"
  },
  {
    title: "Gangs of Wasseypur (Part-1)",
    img: "http://www.topteny.com/wp-content/uploads/2014/11/Gangs-of-Wasseypur.jpg?x38733",
    poster: "http://blastatrumpet.files.wordpress.com/2012/06/gangs_of_wasseypur_poster.jpg",
    desc: "A gangster (Manoj Bajpayee) clashes with the mining kingpin who killed his father (Jaideep Ahlawat).\nRelease date: June 22, 2012\nDirector: Anurag Kashyap",
    link: "https://drive.google.com/file/d/19j-3xSp1yZmT3t_nfWL3wzVUa1QXQNMf/view?usp=sharing"
  },
  {
    title: "Legend",
    img: "https://www.assignmentx.com/wp-content/uploads/2015/11/LEGEND-movie-poster2.jpg",
    poster: "http://fr.web.img2.acsta.net/pictures/15/12/02/14/56/399325.jpg",
    desc: "Twin brothers Reggie (Tom Hardy) and Ronnie Kray rule the London underworld in the 1960s.\nRelease date: December 4, 2015\nDirector: Brian Helgeland",
    link: "https://drive.google.com/file/d/1ekhQZ8RJf2gciGEjMHgXdR6OV5w0oUeA/view?usp=sharing"
  },
  {
    title: "Raman Raghav 2.0",
    img: "https://3.bp.blogspot.com/-uPPgDmDfU3c/V2y33OH0ncI/AAAAAAAARMw/oD4qos8ZnWcocl0SdLQDHi-oLxXV4x1cwCLcB/s1600/raman-raghav-2.0.jpg",
    poster: "https://d229kpbsb5jevy.cloudfront.net/zee/resources/0-0-8143/list/1170x658/1170x658withlogo74972223.jpg",
    desc: "A serial killer stalks the drug-addicted detective who's investigating his grisly murders.\nRelease date: June 24, 2016\nDirector: Anurag Kashyap",
    link: "https://drive.google.com/file/d/12ivcxjIcJZ4QvnXcAAJvS5csrfpWopTu/view?usp=sharing"
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
