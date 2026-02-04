const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartsContainer = document.querySelector(".hearts");

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  document.body.innerHTML =
    "<h1 style='text-align:center;margin-top:20%;font-size:40px;color:#333;'>YAY!! 💖 Can't wait to be your Valentine!</h1>";
});

/* NO BUTTON — smooth swim away */
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();
  const dx = e.clientX - (rect.left + rect.width / 2);
  const dy = e.clientY - (rect.top + rect.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    let moveX = rect.left - dx * 0.5;
    let moveY = rect.top - dy * 0.5;

    // keep inside screen
    moveX = Math.max(0, Math.min(window.innerWidth - rect.width, moveX));
    moveY = Math.max(0, Math.min(window.innerHeight - rect.height, moveY));

    noBtn.style.left = moveX + "px";
    noBtn.style.top = moveY + "px";
  }
});

/* FLOATING HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 300);
