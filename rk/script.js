const openMenuBtn = document.getElementById('btn-a');
const closeMenuBtn = document.getElementById('btn-b');
const sideMenu = document.getElementById('side-menu');
const languageBtn = document.querySelector('#language-btn');
const languageList = document.querySelector('#language-list');

function toggleSideMenu() {
  sideMenu.classList.toggle('open');
  languageList.classList.remove('open');
}

openMenuBtn.addEventListener('click', toggleSideMenu);
closeMenuBtn.addEventListener('click', toggleSideMenu);

languageBtn.addEventListener('click', () => {
  languageList.classList.toggle('open');
});
