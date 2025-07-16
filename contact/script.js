const text = "Shivraj";
const target = document.getElementById("typed-name");

function startTyping() {
  target.textContent = "";
  let index = 0;
  function typeChar() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeChar, 150);
    } else {
      setTimeout(startTyping, 2000);
    }
  }
  typeChar();
}
startTyping();

// Star background
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let w, h, particles = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.size = Math.random() * 2;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = (Math.random() - 0.5) * 0.6;
    this.color = `rgba(${Math.floor(Math.random()*100)},${Math.floor(Math.random()*255)},255,${Math.random()})`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

for (let i = 0; i < 300; i++) particles.push(new Particle());

function animate() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();
