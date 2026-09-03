const menuBtn = document.getElementById('btn-a');
const menuBtn1 = document.getElementById('btn-b');
const sideMenu = document.getElementById('side-menu');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  languageList.classList.remove("open");
});
menuBtn1.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  languageList.classList.remove("open");
});

// ① LANGUAGEを探す
const languageBtn =
  document.querySelector("#language-btn");

// ② 言語一覧を探す
const languageList =
  document.querySelector("#language-list");


// ③ LANGUAGEが押されたら
languageBtn.addEventListener("click", function () {

  // ④ 言語一覧を出す・隠す
  languageList.classList.toggle("open");

});