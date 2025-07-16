const movies = [
  {
    title: "Shutter Island",
    img: "https://m.media-amazon.com/images/S/pv-target-images/f46fda372bee46fc493f53530e37cf357aca3a55a064c3aa2ff612a78c32da8e.jpg",
    poster: "https://i.pinimg.com/originals/d0/9d/c7/d09dc71ed02c010f9133c53caf6963ef.jpg",
    desc: "A 1950s lawman hunts a murderess who seemingly vanished from a locked hospital room.\nRelease date: June 4, 2010\nDirector: Martin Scorsese",
    link: "https://drive.google.com/file/d/1EJH5KIxj1zmSn9y8hIyEWFfzg7OjzTwu/view?usp=sharing"
  },
  {
    title: "Gone Girl",
    img: "https://i.pinimg.com/originals/2d/22/d1/2d22d1739957da0f54ca80b3c09a71ff.jpg",
    poster: "https://i.pinimg.com/736x/22/71/16/227116ac530138c55cbee00d4ca6530c.jpg",
    desc: "The husband of a missing woman becomes the chief suspect in her disappearance.\nRelease date: October 31, 2014\nDirector: David Fincher",
    link: "https://drive.google.com/file/d/1ebvOfFNXwK2qtBfWUrFoutac8LleeG_-/view?usp=sharing"
  },
  {
    title: "The Usual Suspects",
    img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/The-Usual-Suspects-Movie-Poster.jpg",
    poster: "https://image.tmdb.org/t/p/original/tH2daaaLsNHmQeye807szxvmjxY.jpg",
    desc: "A detective questions a con man about his relationships with assorted criminals and an explosion.\nRelease date: May 10, 1996\nDirector: Bryan Singer",
    link: "https://drive.google.com/file/d/1PqNMzT6-9VqjDAznu7bJaDKz9JF9V7wL/view?usp=sharing"
  },
  {
    title: "Training Day",
    img: "https://image.tmdb.org/t/p/original/bUeiwBQdupBLQthMCHKV7zv56uv.jpg",
    poster: "https://i.pinimg.com/originals/f7/13/77/f71377a60178b5c1b6f4c268f854aeb4.jpg",
    desc: "A rookie cop (Ethan Hawke) meets a corrupt Los Angeles narcotics officer (Denzel Washington).\nRelease date: October 5, 2001\nDirector: Antoine Fuqua",
    link: "https://drive.google.com/file/d/1b0sbwEUbzBam4eW_cGL0NK6Xh5ymK5o0/view?usp=sharing"
  },
  {
    title: "No Country for Old Men",
    img: "https://i.etsystatic.com/28349722/r/il/f7f7c1/3194621010/il_1140xN.3194621010_8dsp.jpg",
    poster: "https://img11.deviantart.net/54df/i/2015/028/2/c/no_country_for_old_men_custom_movie_poster_by_supernma-d8frjv5.jpg",
    desc: "A hunter (Josh Brolin) becomes the hunted after taking money from the scene of a drug deal gone bad.\nRelease date: January 18, 2008\nDirector: Coen brothers",
    link: "https://drive.google.com/file/d/1p9n40-M9Gsy_AARzAPeo0RRnZBfB53pU/view?usp=sharing"
  },
  {
    title: "Joker",
    img: "https://i.pinimg.com/originals/0f/a2/85/0fa28529e8d5819e3db7a806c6e02aaa.jpg",
    poster: "https://media.senscritique.com/media/000018727645/source_big/joker.jpg",
    desc: "A failed comedian begins a slow descent into madness as he transforms into a criminal mastermind.\nRelease date: October 4, 2019\nDirector: Todd Phillips",
    link: "https://drive.google.com/file/d/1YTXhawkFpjuKTOC8IF3bIsMoWYAwwVSm/view?usp=sharing"
  },
  {
    title: "Seven",
    img: "https://i.pinimg.com/originals/23/f4/85/23f485d04751b803635ee89b992cad05.jpg",
    poster: "https://m.media-amazon.com/images/I/71UoYMvTdHL._UF1000,1000_QL80_.jpg",
    desc: "Detectives (Brad Pitt, Morgan Freeman) probe murders based on the seven deadly sins.\nRelease date: September 22, 1995\nDirector: David Fincher",
    link: "https://drive.google.com/file/d/1lqtAxy0AynpjApngNhWKKrf21acZQyc6/view?usp=sharing"
  },
  {
    title: "The Silence of the Lambs",
    img: "https://alternativemovieposters.com/wp-content/uploads/2024/05/Josh-Beamish_SilenceOfLambs.jpg",
    poster: "https://m.media-amazon.com/images/I/81aGIc9Bh-L._UF894,1000_QL80_.jpg",
    desc: "An FBI agent (Jodie Foster) uses one murderer (Anthony Hopkins) to catch another.\nRelease date: February 14, 1991\nDirector: Jonathan Demme",
    link: "https://drive.google.com/file/d/1lifo7_c0fF8Ujx2fVLBM6yuqEYImtCik/view?usp=sharing"
  },
  {
    title: "Parasite",
    img: "https://image.tmdb.org/t/p/original/5uz9Se5HBxxPdJY38rPfyWUyjDZ.jpg",
    poster: "https://wallpaperaccess.com/full/1913793.jpg",
    desc: "Greed and class discrimination threaten the relationship between a poor family and a wealthy family.\nRelease date: January 31, 2020\nDirector: Bong Joon-ho",
    link: "https://drive.google.com/file/d/18VS6IS8XxNaotUuTCfyHYY4gnswlwjcq/view?usp=sharing"
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
