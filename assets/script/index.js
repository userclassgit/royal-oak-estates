'use strict';

const homes = [...document.querySelectorAll('.home')];

homes.forEach((home, index) => {
  home.style.backgroundImage = `url("./assets/media/homes/${index}.jpg")`;
  home.addEventListener('click', () => {
    window.location.href = 'detail.html'      
  });
});