console.log("main.js!!");

let counter = 0;
let interid = -1; //ここで-1を入れているからif文で0以下しか実行出来ない場合に対応出来る。
let snd1 = null; //サウンド１
let soundicon = $("#soundicon");
let dropdownContent = $("#dropdownContent");
// Ready
$(document).ready(() => {
  soundicon.on("mouseover", function () {
    // クリックされたときに行いたいアクションをここに記述
    dropdownContent.addClass("show");
  });

  dropdownContent.on("mouseleave", function () {
    dropdownContent.removeClass("show");
  });
});
