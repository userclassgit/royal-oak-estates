'use strict';

//banner
const tumbnails = [...document.querySelectorAll('.tumbnail')];
const pictureBox = document.querySelector('.picture-box');
const leftBtn = document.querySelector('.left-button');
const rightBtn = document.querySelector('.right-button');
let picturePointer = 0;

// Assigning tumbnail picurese and onclick changing picture
tumbnails.forEach((tumb, index) => {
  tumb.style.backgroundImage = `url("./assets/media/pictures/${index}.jpg")`;
  tumb.addEventListener('click', () => {
    picturePointer = index;
    pictureBox.style.backgroundImage = `url("./assets/media/pictures/${picturePointer}.jpg")`
  });
});
// left button click action
leftBtn.addEventListener('click', () => {
picturePointer > 1 ? picturePointer-- : picturePointer = 5;
pictureBox.style.backgroundImage = `url("./assets/media/pictures/${picturePointer}.jpg")`;
});
// Right button click action
rightBtn.addEventListener('click', () => {
  picturePointer < 5 ? picturePointer++ : picturePointer = 0;
  pictureBox.style.backgroundImage = `url("./assets/media/pictures/${picturePointer}.jpg")`;
});

//more homes

const homes = [...document.querySelectorAll('.home')];

homes.forEach((home, index) => {
  home.style.backgroundImage = `url("./assets/media/homes/${index}.jpg")`;
});

//Login dialog interaction
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#login-btn");
const xButton = document.querySelector('.x-mark');
// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

//closes by clicking ouside of the dialog box
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
//closes with x button
xButton.addEventListener('click', () => dialog.close() );


const header = document.querySelector('header');
const navBar = document.querySelector('nav ul');
const menuButton = document.querySelector('.menu-icon');

menuButton.addEventListener("click", menuToggle);
let isToggled = false;
function menuToggle() {
 if (!isToggled) {
  isToggled = true;
  header.style.height = '300px';
  navBar.style.display = 'block';
 } else {
  isToggled = false;
  header.style.height = '60px';
  navBar.style.display = 'flex';
 }
}

//animations
const imagesSection = document.getElementById('images-section');
const houseInfo = document.getElementById('house-info'); 
/* const moreHouses = document.getElementById('more-houses'); */

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
      }
  });
}, { threshold: 0.5 });

const animationList = [
  header,
  imagesSection,
  houseInfo,
  /* moreHouses, */
];

animationList.forEach(element => {
  observer.observe(element);
});