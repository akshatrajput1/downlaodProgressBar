const percentage = document.querySelector(".percentage");
const speed = document.querySelector(".speed");
const progressFill = document.querySelector(".progress-fill");

let progress = 0;

const interval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(interval);
    speed.textContent = "Completed";
    return;
  }

  progress += 1;

  // Update percentage text
  percentage.textContent = progress + "%";

  // Update progress bar width
  progressFill.style.width = progress + "%";

  // Download speed
  let downloadSpeed = (Math.random() * 2 + 0.5).toFixed(2);
  speed.textContent = downloadSpeed + "MB/s";
}, 80);
