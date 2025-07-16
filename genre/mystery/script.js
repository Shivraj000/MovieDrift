const movies = [
  {
    title: "Zodiac",
    img: "https://static.rogerebert.com/uploads/movie/movie_poster/zodiac-2007/large_nkUbb208RW6LTpj1A4GrbE4Oub5.jpg",
    poster: "https://image.tmdb.org/t/p/original/41pke1VcV9rI94RmlThLiceIW8O.jpg",
    desc: "The Zodiac Killer terrorizes San Francisco in the 1960s and '70s.\nRelease date: July 20, 2007\nDirector: David Fincher",
    link: "https://drive.google.com/file/d/1aO-1t0tAQzlxst4rkHkkQdsUa43AxtgA/view?usp=sharing"
  },
  {
    title: "Burning",
    img: "https://www.hancinema.net/photos/fullsizephoto964389.jpg",
    poster: "https://4.bp.blogspot.com/-EPeesXHADH0/W78yE-ztrII/AAAAAAAACYw/v2l5m3q4QDQ5vzWYNmsK31BDjz1rkPjtACLcBGAs/w1200-h630-p-k-no-nu/Burning_%2528Korean_Movie%2529-P1.jpg",
    desc: "Hae-mi introduces Jong-soo to Ben, who proceeds to tell Jong-soo about his unique hobby.\nRelease date: October 27, 2018\nDirector: Lee Chang-dong",
    link: "https://drive.google.com/file/d/1WqSqXz1R-_sWhZy7BmODrt2ih7js7jhk/view?usp=sharing"
  },
  {
    title: "Knives Out",
    img: "https://media-cache.cinematerial.com/p/500x/8idfhoyb/knives-out-movie-poster.jpg?v=1606027480",
    poster: "https://www.filmandtvnow.com/wp-content/uploads/2019/09/Knives-Out-poster.jpg",
    desc: "A detective sifts through a web of lies while questioning a dead novelist's dysfunctional family.\nRelease date: November 27, 2019\nDirector: Rian Johnson",
    link: "https://drive.google.com/file/d/1225ySLRNRhV8u3_Mw21qjeqkb1r973pZ/view?usp=sharing"
  },
  {
    title: "Enola Holmes",
    img: "https://ih1.redbubble.net/image.1590005732.8960/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    poster: "https://www.tvmovie.de/assets/2022/10/12/91063-enola-holmes-2.jpg",
    desc: "The intrepid sister of Sherlock Holmes sets out to find their missing mother.\nRelease date: September 23, 2020\nDirector: Harry Bradbeer",
    link: "https://drive.google.com/file/d/1JNdUhpYdwWYkOcfU8UCCsmS1-zMG9nNf/view?usp=sharing"
  },
  {
    title: "Drishyam",
    img: "https://www.filmibeat.com/ph-big/2015/07/drishyam-poster_143694542700.jpg",
    poster: "http://v3img.voot.com/kimg/kimg/59a297733c884b8fb45cbc7b2f59b75c_1280X720.jpg",
    desc: "A man tries to save his family from the dark side of the law after they commit an unexpected crime.\nRelease date: July 31, 2015\nDirector: Nishikant Kamat",
    link: "https://drive.google.com/file/d/1FjK-18rc6gTx-gbSBGbM1ETTeF8Sq9Kt/view?usp=sharing"
  },
  {
    title: "Prisoners",
    img: "https://www.newdvdreleasedates.com/images/posters/large/prisoners-2013-08.jpg",
    poster: "https://otakukart.com/wp-content/uploads/2021/10/Prisoners-Ending-explained1-1024x576.jpg",
    desc: "A desperate father takes the law into his own hands after police fail to find two kidnapped girls.\nRelease date: September 27, 2013\nDirector: Denis Villeneuve",
    link: "https://drive.google.com/file/d/1xl3QsU-vajdmnEJaiBzoXDRXK4IfG4Bs/view?usp=sharing"
  },
  {
    title: "Sicario",
    img: "https://www.bestmovieposters.co.uk/wp-content/uploads/2019/01/j5WmzZOM.jpeg",
    poster: "https://c4.wallpaperflare.com/wallpaper/759/950/484/movie-sicario-wallpaper-preview.jpg",
    desc: "A task force travels across the U.S.-Mexican border, using one cartel boss to flush out another.\nRelease date: October 9, 2015\nDirector: Denis Villeneuve",
    link: "https://drive.google.com/file/d/1VNVAX2nAKP4XAgMe1XByDchjlHNRZLkS/view?usp=sharing"
  },
  {
    title: "Escape from Alcatraz",
    img: "https://i.pinimg.com/originals/8c/ef/2d/8cef2d91bde62df74e4d785963d11a82.jpg",
    poster: "https://theactionelite.com/wp-content/uploads/2020/06/1eb4ca9d-a18d-4a67-a4aa-86c912d1a446.jpg",
    desc: "Frank Morris (Clint Eastwood) and two brothers plan their 1962 escape from the rock-island prison.\nRelease date: June 22, 1979\nDirector: Don Siegel",
    link: "https://drive.google.com/file/d/14JSmDuqCnNYubN42O3Ggh7sbgKAsgYMV/view?usp=sharing"
  },
  {
    title: "The Wailing",
    img: "https://picfiles.alphacoders.com/351/351902.jpg",
    poster: "https://1.bp.blogspot.com/-ZRfR6YWS7yU/WFN1aOv3c9I/AAAAAAAAC4Q/VqcYEKgboLITab1THl4BbelvotwhXbwDgCLcB/s1600/PhotoGrid_1481811200963.jpg",
    desc: "Suspicion leads to hysteria when rural villagers link a series of murders to a mysterious stranger.\nRelease date: May 20, 2016\nDirector: Na Hong-jin",
    link: "https://drive.google.com/file/d/1XUKk_ETgfRo7UmP2OVoahtS1F_aQD6TZ/view?usp=sharing"
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
