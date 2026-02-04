const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsContainer = document.querySelector(".buttons");

// Start position relative to container
let posX = 120;
let posY = 30;

document.addEventListener("mousemove", (e) => {
  const containerRect = buttonsContainer.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Calculate button center relative to viewport
  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  // Distance from cursor to button center
  const distX = e.clientX - btnCenterX;
  const distY = e.clientY - btnCenterY;
  const distance = Math.sqrt(distX * distX + distY * distY);

  const triggerDistance = 100;

  if (distance < triggerDistance) {
    const moveAmount = 80;

    // Move button position opposite cursor direction
    posX -= (distX / distance) * moveAmount;
    posY -= (distY / distance) * moveAmount;

    // Calculate limits relative to container size (noBtn left/top are relative to container)
    const minX = 0;
    const minY = 0;
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    // Clamp position inside container boundaries
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
