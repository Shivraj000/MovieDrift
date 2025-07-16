const movies = [
  {
    title: "Killers of the Flower Moon",
    img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/killers-of-the-flower-moon-movie-poster.jpg",
    poster: "https://image.tmdb.org/t/p/w1280/fn0OTgE3pPdD7SUCKpowb8WngkL.jpg",
    desc: "Members of the oil-wealthy Osage Nation are murdered under mysterious circumstances in the 1920s.\nRelease date: October 20, 2023\nDirector: Martin Scorsese",
    link: "https://drive.google.com/file/d/1L64ZbmC7Eq5yxcEGbEikbai8_m291X6d/view?usp=sharing"
  },
  {
    title: "Requiem for a Dream",
    img: "https://image.tmdb.org/t/p/original/nOd6vjEmzCT0k4VYqsA2hwyi87C.jpg",
    poster: "https://media.senscritique.com/media/000005725792/1200/Requiem_for_a_Dream.jpg",
    desc: "Brooklynites (Ellen Burstyn, Jared Leto, Jennifer Connelly) want to better their lives.\nRelease date: December 15, 2000\nDirector: Darren Aronofsky",
    link: "https://drive.google.com/file/d/1JNSc8YcL8aLTIGv9L5Q1NpEdNu41BGg5/view?usp=sharing"
  },
  {
    title: "American Psycho",
    img: "https://image.tmdb.org/t/p/original/i3ZBZltw103y5hBCyq1yL4sOXRE.jpg",
    poster: "https://image.tmdb.org/t/p/w1280/oFDPh2ilXgJnTFgT3p8bycs1xds.jpg",
    desc: "An insane '80s-era yuppie (Christian Bale) indulges in kinky sex and mayhem.\nRelease date: July 17, 2020\nDirector: Mary Harron",
    link: "https://drive.google.com/file/d/1-W-LRP630MMYXuTvXcaK17n9JrOwzVb1/view?usp=sharing"
  },
  {
    title: "Scent of a Woman",
    img: "https://image.tmdb.org/t/p/original/yzNuWdCnwEAwthvnqEruggEfCS0.jpg",
    poster: "https://static.cinemagia.ro/img/db/movie/00/28/37/scent-of-a-woman-729428l.jpg",
    desc: "Blind ex-colonel (Al Pacino) takes his preppie guide (Chris O'Donnell) to New York.\nRelease date: November 5, 2013\nDirector: Martin Brest",
    link: "https://drive.google.com/file/d/17Iu1hBuRrlthdZz-jtucraZWgj9ybLah/view?usp=sharing"
  },
  {
    title: "Serpico",
    img: "https://ilarge.lisimg.com/image/5579610/1000full-serpico-(1973)-poster.jpg",
    poster: "https://i-viaplay-com.akamaized.net/viaplay-prod/137/368/1626937631-a12b1528fcadc2cd0494a86f6c718e31aab086c3.jpg?width=1600&height=900",
    desc: "New York Detective Frank Serpico (Al Pacino) exposes corruption seen while working under cover.\nRelease date: December 5, 1973\nDirector: Sidney Lumet",
    link: "https://drive.google.com/file/d/1QnRDYcCJJvS9iQFItNAtRPFB7j-TZjxe/view?usp=sharing"
  },
  {
    title: "Once Upon a Time in Hollywood",
    img: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2021/08/IMG_2935-scaled.jpeg",
    poster: "https://images2.alphacoders.com/102/thumb-1920-1021836.jpg",
    desc: "A TV star and his longtime stunt double make their way around a changing industry in 1969 Hollywood.\nRelease date: August 15, 2019\nDirector: Quentin Tarantino",
    link: "https://drive.google.com/file/d/1t9O7DT1j1aFlbqJGpLuqRWdd5k5yEHtf/view?usp=sharing"
  },
  {
    title: "Bombshell",
    img: "https://popcornusa.s3.amazonaws.com/movies/650/12959-5874-Bombshel.jpg",
    poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/11/Bombshell-movie-poster.jpg",
    desc: "The provocative real story of three strong newswomen who stand up to the man who made them famous.\nRelease date: December 13, 2019\nDirector: Jay Roach",
    link: "https://drive.google.com/file/d/1o2nWIut9Y7pVMeVYBQQtpgDcyqXzA-8_/view?usp=sharing"
  },
  {
    title: "The Shawshank Redemption",
    img: "https://irs.www.warnerbros.com/gallery-jpeg/the_shawshank_redemption_posterlarge_0-675188670.jpg",
    poster: "https://img.moviesrankings.com/t/p/w1280/36ewyr1LdwwedDQhrlmhsi1nlnc.jpg",
    desc: "An innocent man (Tim Robbins) goes to a Maine penitentiary for life in 1947.\nRelease date: October 14, 1994\nDirector: Frank Darabont",
    link: "https://drive.google.com/file/d/1fzbNts6KwjV612_z2RHPIXnHbQNiMmSk/view?usp=sharing"
  },
  {
    title: "Pulp Fiction",
    img: "https://i.pinimg.com/originals/b3/87/9a/b3879a322f8317b4a48d90ebc5e8988a.jpg",
    poster: "https://i.pinimg.com/originals/21/80/d6/2180d6470db7bae6e013f3e6ce0d416d.jpg",
    desc: "Two hit men (John Travolta, Samuel L. Jackson), a boxer and a crime boss meet their fates.\nRelease date: October 14, 1994\nDirector: Quentin Tarantino",
    link: "https://drive.google.com/file/d/18vkv0lGKCtQiCaOOKDIB9APmW-KoHs-4/view?usp=sharing"
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
