const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Store current position
let posX = 120;
let posY = 30;

document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const btnCenterX = rect.left + rect.width / 2;
  const btnCenterY = rect.top + rect.height / 2;

  // distance from cursor to button center
  const distX = e.clientX - btnCenterX;
  const distY = e.clientY - btnCenterY;
  const distance = Math.sqrt(distX * distX + distY * distY);

  const triggerDistance = 100;

  if (distance < triggerDistance) {
    const moveAmount = 80;

    posX -= (distX / distance) * moveAmount;
    posY -= (distY / distance) * moveAmount;

    // constraints so button stays fully visible
    const minX = 0;
    const minY = 0;
    const maxX = window.innerWidth - rect.width - 10;
    const maxY = window.innerHeight - rect.height - 10;

    posX = Math.max(minX, Math.min(posX, maxX));
    posY = Math.max(minY, Math.min(posY, maxY));

    noBtn.style.left = posX + "px";
    noBtn.style.top = posY + "px";
  }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-size:40px;text-align:center;">
      YAY!!! 💖 Can't wait for our date 😍
    </div>
  `;
});
