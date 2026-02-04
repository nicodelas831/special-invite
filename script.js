const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let btnX = 120;
let btnY = 0;

document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const btnCenterX = rect.left + rect.width / 2;
  const btnCenterY = rect.top + rect.height / 2;

  const distX = e.clientX - btnCenterX;
  const distY = e.clientY - btnCenterY;

  const distance = Math.sqrt(distX * distX + distY * distY);

  const triggerDistance = 120; // how close cursor gets before button escapes

  if (distance < triggerDistance) {
    const moveStrength = 80;

    // Move opposite direction of cursor
    btnX -= (distX / distance) * moveStrength;
    btnY -= (distY / distance) * moveStrength;

    // Keep inside screen bounds
    const maxX = window.innerWidth - rect.width - 20;
    const maxY = window.innerHeight - rect.height - 20;

    btnX = Math.max(0, Math.min(btnX, maxX));
    btnY = Math.max(0, Math.min(btnY, maxY));

    noBtn.style.left = btnX + "px";
    noBtn.style.top = btnY + "px";
  }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-size:40px;text-align:center;">
      YAY!!! 💖 Can't wait for our date 😍
    </div>
  `;
});
