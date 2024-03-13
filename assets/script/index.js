'use strict';

// Assigning tumbnail picurese
const homes = [...document.querySelectorAll('.home')];
homes.forEach((home, index) => {
  home.style.backgroundImage = `url("./assets/media/homes/${index}.jpg")`;
  home.addEventListener('click', () => {
    window.location.href = 'detail.html'      
  });
});

//Login dialog interaction
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#login-btn");

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