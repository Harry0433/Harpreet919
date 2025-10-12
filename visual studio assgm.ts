document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  let position = 0;
  const interval = setInterval(() => {
    if (position >= 250) {
      clearInterval(interval);
    } else {
      position++;
      box.style.left = position + "px";
    }
  }, 5);
});
