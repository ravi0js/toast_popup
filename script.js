function updateDurationDisplay() {
  const duration = document.getElementById("duration").value;
  const durationMsg = document.getElementById("duration_msg");
  durationMsg.innerText = `Duration: ${duration} ms (${(
    duration / 1000
  ).toFixed(1)} s)`;
}

document.getElementById("duration").addEventListener("input", updateDurationDisplay);

updateDurationDisplay();

document.getElementById("showToast").addEventListener("click", function () {
  const positionX = document.getElementById("positionX").value;
  const positionY = document.getElementById("positionY").value;
  const type = document.getElementById("type").value;
  const message = document.getElementById("message").value;
  const duration = document.getElementById("duration").value;

  const toast = document.getElementById("toast");

  toast.innerText = message;
  toast.className = `toast ${positionX} ${positionY} ${type}`;

  toast.style.display = "block";
  toast.style.animation = `fadeInOut ${duration / 1000}s forwards`;


setTimeout(() => {
    toast.style.display = "none";
  }, duration);
});
