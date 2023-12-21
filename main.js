console.log("main.js!!");

let counter = 0;
let interid = -1;
let snd1 = null;
let snd2 = null;
let snd3 = null;
let snd4 = null;
let snd5 = null;
let soundicon = $("#soundicon");
const controlArea = $("#controlarea");
const controlWave = $("#musicwave");
const stopImageSrc = "images/stopicon.png";
const playImageSrc = "images/playicon.png";
const playMusicWave = "images/musicwave.gif";
let isMusicPlaying = false;
let dropdownContent = $("#dropdownContent");

const sounds = [
  "./sounds/Mitsukiyo Constant Moderato.mp3",
  "./sounds/Mitsukiyo Unwelcome School.mp3",
  "./sounds/Mitsukiyo Romantic Smile.mp3",
  "./sounds/Mitsukiyo Lovely Picnic.mp3",
  "./sounds/Nor Aoharu.mp3",
];

const howls = [];

// Initialize Howl instances
for (let i = 0; i < sounds.length; i++) {
  howls[i] = new Howl({
    src: [sounds[i]],
    loop: true,
    volume: 1.0,
    autoplay: false,
    onplay: function () {
      // ミュージック再生時に画像を変更
      $("#wallImage").attr("src", "images/hosino-unscreen.gif");
      isMusicPlaying = true;
      controlWave.html(`<img src="${playMusicWave}" id="playMusicWave" />`);
      controlArea.html(`<img src="${stopImageSrc}" id="stopMusic" />`);
      this.isPlaying = true; // 現在再生中のフラグを更新
      // $("#musicwave").css("display", "initial");
      $("#musicwave").css("opacity", "1");
    },
    onpause: function () {
      // ミュージック一時停止時に画像を元に戻す
      $("#wallImage").attr("src", "images/blue archive.png");
      isMusicPlaying = false;
      controlArea.html(`<img src="${playImageSrc}" id="playMusic" />`);
      this.isPlaying = false; // 現在再生中のフラグを更新
      // $("#musicwave").css("display", "none");
      $("#musicwave").css("opacity", "0");
    },
    onstop: function () {
      // ミュージック停止時に画像を元に戻す
      $("#wallImage").attr("src", "images/blue archive.png");
      isMusicPlaying = false;
      controlArea.html(`<img src="${playImageSrc}" id="playMusic" />`); // ミュージック停止時に画像を削除
      this.isPlaying = false; // 現在再生中のフラグを更新
      // $("#musicwave").css("display", "none");
      $("#musicwave").css("opacity", "0");
    },
  });

  $(`#music${i + 1}`).click(() => {
    // Check if the sound is already playing
    if (!howls[i].playing()) {
      // Stop all other sounds
      for (let j = 0; j < howls.length; j++) {
        if (j !== i && howls[j].playing()) {
          howls[j].stop();
        }
      }
      // Play the selected sound
      howls[i].play();
    }
  });
}
controlArea.on("click", "#stopMusic", function () {
  for (let i = 0; i < howls.length; i++) {
    if (howls[i].playing()) {
      howls[i].stop();
    }
  }
});
controlArea.on("click", "#playMusic", function () {
  for (let i = 0; i < howls.length; i++) {
    if (howls[i].playing()) {
      howls[i].pause();
    }
  }
});

// Ready
$(document).ready(() => {
  soundicon.on("mouseover", function () {
    dropdownContent.addClass("show");
  });

  dropdownContent.on("mouseleave", function () {
    dropdownContent.removeClass("show");
  });
});
