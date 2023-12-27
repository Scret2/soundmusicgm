let soundicon = $("#soundicon");
const controlArea = $("#controlarea");
const controlWave = $("#musicwave");
const stopImageSrc = "images/stopicon.png";
const playImageSrc = "images/playicon.png";
const playMusicWave = "images/musicwave.gif";
let dropdownContent = $("#dropdownContent");

const sounds = [
  "./sounds/Mitsukiyo Constant Moderato.mp3",
  "./sounds/Mitsukiyo Unwelcome School.mp3",
  "./sounds/Mitsukiyo Romantic Smile.mp3",
  "./sounds/Mitsukiyo Lovely Picnic.mp3",
  "./sounds/Mitsukiyo 09 Honey Jam.mp3",
  "./sounds/Mitsukiyo Hifumi Daisuki.mp3",
  "./sounds/Shooting Stars.mp3",
  "./sounds/KARUT 03 Connected Sky.mp3",
  "./sounds/Nor 09 Signal of Abydos.mp3",
  "./sounds/Nor Aoharu.mp3",
  "./sounds/RE Aoharu.mp3",
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
      controlWave.html(`<img src="${playMusicWave}" id="playMusicWave" />`);
      controlArea.html(`<img src="${stopImageSrc}" id="stopMusic" />`);
      $("#musicwave").css("opacity", "1");
    },
    onpause: function () {
      // ミュージック一時停止時に画像を元に戻す
      $("#wallImage").attr("src", "images/blue archive.png");
      controlArea.html(`<img src="${playImageSrc}" id="playMusic" />`);
      $("#musicwave").css("opacity", "0");
    },
  });

  $(`#music${i + 1}`).click(() => {
    //全てのオーディオを停止する
    for (const howl of howls) {
      howl.stop();
    }
    //再生
    playingIndex = i;
    howls[i].play();
  });
}

// Ready
$(document).ready(() => {
  soundicon.on("mouseover", function () {
    dropdownContent.addClass("show");
  });
  dropdownContent.on("mouseleave", function () {
    dropdownContent.removeClass("show");
  });
  controlArea.on("click", "#stopMusic", function () {
    howls[playingIndex].pause();
  });
  controlArea.on("click", "#playMusic", function () {
    howls[playingIndex].play();
  });
});
