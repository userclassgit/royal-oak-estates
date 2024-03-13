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
picturePointer > 1 ? picturePointer-- : picturePointer = 7;
pictureBox.style.backgroundImage = `url("./assets/media/pictures/${picturePointer}.jpg")`;
});
// Right button click action
rightBtn.addEventListener('click', () => {
  picturePointer < 7 ? picturePointer++ : picturePointer = 0;
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