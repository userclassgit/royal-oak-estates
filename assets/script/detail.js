'use strict';

'use strict';

const tumbnails = [...document.querySelectorAll('.tumbnail')];
const pictureBox = document.querySelector('.picture-box');
const leftBtn = document.querySelector('.left-button');
const rightBtn = document.querySelector('.right-button');
let picturePointer = 0;

tumbnails.forEach((tumb, index) => {
  tumb.style.backgroundImage = `url("./assets/media/pictures/${index}.jpg")`;
  tumb.addEventListener('click', () => {
    picturePointer = index;
    pictureBox.style.backgroundImage = `url("./assets/media/pictures/${picturePointer}.jpg")`
  });
});

leftBtn.addEventListener('click', () => {
picturePointer > 1 ? picturePointer-- : picturePointer = 7;
pictureBox.style.backgroundImage = `url("./assets/media/pictures/${picturePointer}.jpg")`;
});

rightBtn.addEventListener('click', () => {
  picturePointer < 7 ? picturePointer++ : picturePointer = 0;
  pictureBox.style.backgroundImage = `url("./assets/media/pictures/${picturePointer}.jpg")`;
});