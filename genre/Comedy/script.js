const movies = [
  {
    title: "The Hangover",
    img: "https://flxt.tmsimg.com/assets/p192248_p_v10_ap.jpg",
    poster: "https://3.bp.blogspot.com/-eT71cjdg8j0/Tj6XwhF7IWI/AAAAAAAABXA/obTiSIYSpwE/s1600/hangover_5.jpg",
    desc: "After a wild stag party, three groomsmen must find their missing pal before his wedding.\nRelease date: June 26, 2009\nDirector: Todd Phillips",
    link: "https://drive.google.com/file/d/17CXZOZZkq5KwNKxqEjiNFVq2LOrLOoGB/view?usp=sharing"
  },
  {
    title: "Ted",
    img: "https://m.media-amazon.com/images/I/61CmznRcivL.jpg",
    poster: "https://media.timeout.com/images/100538089/image.jpg",
    desc: "A grown man (Mark Wahlberg) has a live teddy bear (Seth MacFarlane) as a constant companion.\nRelease date: October 26, 2012\nDirector: Seth MacFarlane",
    link: "https://drive.google.com/file/d/19iorV1uPK8MC8wHs33TLxisy5BQC2nnv/view?usp=sharing"
  },
  {
    title: "Superbad",
    img: "https://media-cache.cinematerial.com/p/500x/0fgyhz4e/superbad-movie-poster.jpg?v=1456236318",
    poster: "https://www.rollingstone.de/wp-content/uploads/2021/05/04/16/superbad2-scaled-992x560.jpg",
    desc: "Co-dependent high school teens hope to score booze and babes at a party.\nRelease date: October 26, 2007\nDirector: Greg Mottola",
    link: "https://drive.google.com/file/d/1O39VF9VXYje-yRK_E_qrDA_u7p5B0ncA/view?usp=sharing"
  },
  {
    title: "The Dictator",
    img: "https://image.tmdb.org/t/p/original/dlK2YEPLSMqV9qAbvdTQKvqsGeD.jpg",
    poster: "http://4.bp.blogspot.com/-QmIV5wXX7PI/UCIOQnAqwYI/AAAAAAAAANM/-QDAUBYM9OY/s1600/the-dictator-movie-poster.jpg",
    desc: "A North African tyrant risks his life to ensure that democracy never comes to his country.\nRelease date: August 31, 2018\nDirector: Larry Charles",
    link: "https://drive.google.com/file/d/1ME6XT8vn-Jq380ZAPJpCCeOusUvJreg1/view?usp=sharing"
  },
  {
    title: "We're the Millers",
    img: "https://lh3.googleusercontent.com/proxy/Zbdgrm1f57nuuc_RRunoSunDpLl7RacosqRG0Ud4Z0AiLmxb1QkpIv6dFgZ2Cd0rf4CHOSlqoPFnwbwerNYAPZ-VTfaRZ1hfytf5GG_NQYpdDoumEfA",
    poster: "http://images6.fanpop.com/image/photos/35500000/We-re-the-Millers-were-the-millers-35546784-1600-960.jpg",
    desc: "A drug dealer heads to Mexico with a fake family to smuggle a big shipment back into the U.S.\nRelease date: August 30, 2013\nDirector: Rawson Marshall Thurber",
    link: "https://drive.google.com/file/d/1ZgQM4bfSKzplkqFHTl92R26xtXcsnr5x/view?usp=sharing"
  },
  {
    title: "Due Date",
    img: "https://flxt.tmsimg.com/assets/p8129741_p_v10_am.jpg",
    poster: "http://img.xcitefun.net/users/2010/08/206109,xcitefun-due-date-poster-6.jpg",
    desc: "A high-strung man (Robert Downey Jr.) takes a road trip with an annoying stranger.\nRelease date: November 5, 2010\nDirector: Todd Phillips",
    link: "https://drive.google.com/file/d/1ovdEQLtsfae4i0kPytqQilX0hhGav7SR/view?usp=sharing"
  },
  {
    title: "Central Intelligence",
    img: "https://images.justwatch.com/poster/241404564/s718/central-intelligence.jpg",
    poster: "https://i.pinimg.com/originals/b1/74/46/b174461c7c23569f43f9942946bb7c02.jpg",
    desc: "A CIA agent and his ex-classmate encounter shootouts, espionage and double-crosses while on a case.\nRelease date: June 17, 2016\nDirector: Rawson Marshall Thurber",
    link: "https://drive.google.com/file/d/14kU4ZUTUrBD70MWp4rvMLJgqfdwIhdsP/view?usp=sharing"
  },
  {
    title: "Rush Hour",
    img: "https://images.moviesrankings.com/image/thumb/Video114/v4/8d/b4/e1/8db4e112-55b0-a246-7b39-6c6d9411aec3/pr_source.jpg/900x900bb.jpg",
    poster: "https://www.elmstba.com/wp-content/uploads/2020/03/Rush-Hour-1.jpg",
    desc: "Mismatched police partners (Jackie Chan, Chris Tucker) seek a kidnapped girl.\nRelease date: September 18, 1998\nDirector: Brett Ratner",
    link: "https://drive.google.com/file/d/1A9N3bdHro0tNwrZjx8apaaecP-Z3g3DA/view?usp=sharing"
  },
  {
    title: "21 Jump Street",
    img: "https://www.regarder-films.net/wp-content/uploads/2019/06/21-jump-street.jpg",
    poster: "http://www.filmofilia.com/wp-content/uploads/2012/02/21_Jump_Street.jpg",
    desc: "Two cops working undercover at a high school must confront their teenage issues all over again.\nRelease date: April 20, 2012\nDirectors: Phil Lord and Christopher Miller",
    link: "https://drive.google.com/file/d/1JabJFBI7ltk1Zf9EbYnXyx8w3vIHHuAi/view?usp=sharing"
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
