var progressBar = document.getElementById("progressBar");
var progressText = document.getElementById("progressText");
var progressBarContainer = document.getElementById("progressBarContainer");
var toggleButton = document.getElementById("toggleButton");
var progressInterval;

function startMigration() {
  progressBarContainer.style.display = "block";
  progressBar.style.width = "0%";
  progressText.innerText = "0%";
  progressInterval = setInterval(updateProgress, 100);
}

function updateProgress() {
  var currentWidth = parseInt(progressBar.style.width);
  var currentPercentage = parseInt(progressText.innerText);
  if (currentPercentage >= 100) {
    clearInterval(progressInterval);
    alert("Migration process completed!");
  } else {
    var newWidth = currentWidth + 10;
    progressBar.style.width = newWidth + "%";
    progressText.innerText = newWidth + "%";
  }
}

function toggleProgressBar() {
  if (progressBarContainer.style.display === "none") {
    progressBarContainer.style.display = "block";
    toggleButton.classList.add("open");
  } else {
    progressBarContainer.style.display = "none";
    toggleButton.classList.remove("open");
  }
}
