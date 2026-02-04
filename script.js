// Create floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heart.style.fontSize = 15 + Math.random() * 20 + "px";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 400);

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const distanceX = e.clientX - (rect.left + rect.width / 2);
  const distanceY = e.clientY - (rect.top + rect.height / 2);

  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

  if (distance < 120) {
    let newX = rect.left - distanceX * 0.8;
    let newY = rect.top - distanceY * 0.8;

    // Keep inside screen
    newX = Math.max(0, Math.min(window.innerWidth - rect.width, newX));
    newY = Math.max(0, Math.min(window.innerHeight - rect.height, newY));

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
  }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = "<h1 style='text-align:center;margin-top:20%;font-size:40px;'>YAY!! 💖 Can't wait for our date!</h1>";
});
