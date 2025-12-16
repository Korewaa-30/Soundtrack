document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playMelodyBtn");
  const audio = document.getElementById("melodyAudio");

  playBtn.addEventListener("click", function (e) {
    e.preventDefault();

    audio.play().catch((error) => {
      console.log("Playback error:", error);
    });
  });
});

const audioPlayer = document.getElementById("globalAudio");
const songs = document.querySelectorAll(".song-item");

let currentSong = null;

songs.forEach((song) => {
  song.addEventListener("click", () => {
    const src = song.dataset.src;
    const icon = song.querySelector(".play-icon i");
    const title = song.querySelector(".song-title");

    if (!src) {
      console.error("No data-src found");
      return;
    }

    if (currentSong === song && !audioPlayer.paused) {
      audioPlayer.pause();
      icon.className = "fas fa-play";
      title.classList.remove("playing");
      return;
    }

    songs.forEach((s) => {
      s.querySelector(".play-icon i").className = "fas fa-play";
      s.querySelector(".song-title").classList.remove("playing");
    });

    audioPlayer.src = src;
    audioPlayer.load();
    audioPlayer.play().catch((err) => console.error(err));

    icon.className = "fas fa-pause";
    title.classList.add("playing");

    currentSong = song;
  });
});

audioPlayer.addEventListener("ended", () => {
  if (currentSong) {
    currentSong.querySelector(".play-icon i").className = "fas fa-play";
    currentSong.querySelector(".song-title").classList.remove("playing");
    currentSong = null;
  }
});
