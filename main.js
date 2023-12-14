console.log("main.js!!");

let counter = 0;
let interid = -1;
let snd1 = null;
let snd2 = null;
let snd3 = null;
let snd4 = null;
let snd5 = null;
let soundicon = $("#soundicon");
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

// Ready
$(document).ready(() => {
  soundicon.on("mouseover", function () {
    dropdownContent.addClass("show");
  });

  dropdownContent.on("mouseleave", function () {
    dropdownContent.removeClass("show");
  });
});
