const movies = [
  {
    title: "Hereditary",
    img: "https://xl.movieposterdb.com/20_01/2018/7784604/xl_7784604_202963fa.jpg",
    poster: "https://image.tmdb.org/t/p/original/4GFPuL14eXi66V96xBWY73Y9PfR.jpg",
    desc: "After their grandmother passes away, a family tries to outrun the sinister fate they've inherited.\nRelease date: June 22, 2018\nDirector: Ari Aster",
    link: "https://drive.google.com/file/d/1SE8MF8b64BANtyeqSqdraDfdV9HB5YW5/view?usp=sharing"
  },
  {
    title: "The Conjuring",
    img: "https://m.media-amazon.com/images/I/81yAfVk+7UL._AC_SY606_.jpg",
    poster: "https://image.tmdb.org/t/p/original/fCd6RUNep4R2DbDyaoxw35VocBe.jpg",
    desc: "Paranormal investigators (Vera Farmiga, Patrick Wilson) confront a powerful demonic entity.\nRelease date: August 2, 2013\nDirector: James Wan",
    link: "https://drive.google.com/file/d/1XC7Gt1uFaotzuNhI5sOoXABfXl7h8qlh/view?usp=sharing"
  },
  {
    title: "The Shining",
    img: "https://image.tmdb.org/t/p/original/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg",
    poster: "https://i.pinimg.com/originals/38/6a/19/386a196ca9e158fe5d039fb2289fc731.jpg",
    desc: "Writer (Jack Nicholson) goes mad with wife (Shelley Duvall), son (Danny Lloyd) at snowbound hotel.\nRelease date: October 4, 2017\nDirector: Stanley Kubrick",
    link: "https://drive.google.com/file/d/16xSfHkFgGYRpUSCtKRRjDaRoS94LT_Zr/view?usp=sharing"
  },
  {
    title: "The Ring",
    img: "https://i0.wp.com/moviesandmania.com/wp-content/uploads/2016/09/the-ring-2002-cover.jpg?resize=413%2C578&ssl=1",
    poster: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/86e5ec44637089.5818f76d704aa.jpg",
    desc: "A journalist (Naomi Watts) investigates a bizarre videotape that brings death to all who view it.\nRelease date: February 7, 2003\nDirector: Gore Verbinski",
    link: "https://drive.google.com/file/d/178MrElzkOF1-7XK6GnaWZEB1QzmzPNjm/view?usp=sharing"
  },
  {
    title: "Insidious",
    img: "https://lh4.googleusercontent.com/proxy/EcHkRsO__AQBOSGbiGqqSCHpARiL5Sj89z-qbs8r-H5KZsYAbXxp4aFQdWa7HloJCRuAC8lW8d_oFKOSJZa4WDE_oTkQ3vfHLDEH",
    poster: "http://www.horror.land/wp-content/uploads/2014/06/insidious2d.jpg",
    desc: "Parents (Patrick Wilson, Rose Byrne) must protect their comatose son from malevolent forces.\nRelease date: April 1, 2011\nDirector: James Wan",
    link: "https://drive.google.com/file/d/1FKDfphX-HqBisorcgAUfI1-0Sf1C_6O8/view?usp=sharing"
  },
  {
    title: "A Quiet Place",
    img: "https://image.tmdb.org/t/p/original/sWWemmKm9WPX2gEKj2otnskrtSv.jpg",
    poster: "https://montasefilm.com/wp-content/uploads/2018/04/A-Quiet-Place.jpg",
    desc: "A family must live in silence to avoid mysterious creatures that hunt by sound.\nRelease date: April 6, 2018\nDirector: John Krasinski",
    link: "https://drive.google.com/file/d/1y6MMemPy1FBS-DKgz7ADl_1NNpjac3qC/view?usp=sharing"
  },
  {
    title: "Get Out",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPwSWY8iFMqVl9Tn78CfLA2jA2gSdsNKsbcml2rzHRLcen2vNe2VP_DtzhBwl7LF7Qj8&usqp=CAU",
    poster: "https://miro.medium.com/v2/resize:fit:1400/1*BcebFFAa-0rv9jWkiE-K2A.jpeg",
    desc: "A young man uncovers a dark secret when he meets his girlfriend's parents for the first time.\nRelease date: February 24, 2017\nDirector: Jordan Peele",
    link: "https://drive.google.com/file/d/1V8Gm7PLg-nC654lcw7T28G1MLx7_BLR_/view?usp=sharing"
  },
  {
    title: "I Saw the Devil",
    img: "https://i.pinimg.com/originals/f5/e3/68/f5e368a5d55b2454550fbd5fb5b12600.jpg",
    poster: "https://is2-ssl.mzstatic.com/image/thumb/IEOrrHpi3QmtNkZTsYrGPw/2000x1125.jpg",
    desc: "The line between good and evil blurs when an agent tracks down his fiancee's killer.\nRelease date: August 12, 2010\nDirector: Kim Jee-woon",
    link: "https://drive.google.com/file/d/12fJsL-n3ve22rb2jZY-jWUEDxD8JdQc5/view?usp=sharing"
  },
  {
    title: "Tumbbad",
    img: "https://data1.ibtimes.co.in/photo/en/full/92155/first-look-soham-shahs-upcoming-bollywood-thriller-film-tumbbad-out-it-pretty-scary.jpg?w=841",
    poster: "https://i.pinimg.com/originals/38/99/48/389948792e5200d747b11c3a907aa1e0.jpg",
    desc: "A man and his son encounter a legendary demon while searching for hidden treasure in India.\nRelease date: October 12, 2018\nDirector: Adesh Prasad, Anand Gandhi, Rahi Anil Barv",
    link: "https://drive.google.com/file/d/1Zd8rtbRyt6w8bB2QUHc3Mh5XQIgjvbQK/view?usp=sharing"
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
