const donateBtn = document.getElementById("donateBtn");
const donasiPopup = document.getElementById("donasiPopup");
const closePopup = document.getElementById("closePopup");
const videoPlayer = document.getElementById("videoPlayer");
const mainVideo = document.getElementById("mainVideo");

donateBtn.onclick = () => {
  donasiPopup.style.display = "flex";
};

closePopup.onclick = () => {
  donasiPopup.style.display = "none";
};

function playFilm(src) {
  mainVideo.src = src;
  videoPlayer.style.display = "flex";
}

function closeVideo() {
  mainVideo.pause();
  videoPlayer.style.display = "none";
  mainVideo.src = "";
}
