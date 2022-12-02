// Attach event listeners (on page load)
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    player.moveLeft();
  }
  if (event.key === "s") {
    player.moveRight();
  }
  if (event.key === "d") {
    player.moveUp();
  }
  if (event.key === "f") {
    player.moveDown();
  }
  if (event.key === "j") {
    player.shoot();
  }
});
