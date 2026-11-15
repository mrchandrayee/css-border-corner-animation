const motionToggle = document.getElementById("motionToggle");

motionToggle.addEventListener("click", () => {
  const paused = document.body.classList.toggle("paused");
  motionToggle.textContent = paused ? "Play animations" : "Pause animations";
  motionToggle.setAttribute("aria-pressed", String(paused));
});
