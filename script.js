function generateRandomShape() {
  const shapes = ["star", "square", "circle"];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

function createParticle() {
  const container = document.querySelector(".container");
  const particle = document.createElement("div");
  particle.classList.add("particle", generateRandomShape());
  particle.style.left = Math.random() * 100 + "vw";
  container.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 10000);
}

setInterval(createParticle, 500);