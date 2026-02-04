const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

/* 💖 Floating Hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 15 + Math.random() * 25 + "px";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);

/* 🏊 No Button Swimming Away */
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const dx = e.clientX - (rect.left + rect.width / 2);
  const dy = e.clientY - (rect.top + rect.height / 2);

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    let newX = rect.left - dx * 0.6;
    let newY = rect.top - dy * 0.6;

    newX = Math.max(0, Math.min(window.innerWidth - rect.width, newX));
    newY = Math.max(0, Math.min(window.innerHeight - rect.height, newY));

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
  }
});

/* 💚 Yes Button Action */
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="text-align:center;margin-top:20%;font-size:40px;">
      YAYYY 💖 Can't wait!!
    </h1>
  `;
});
