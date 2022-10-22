let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');
let popupBackdrop = document.querySelector('.popup-backdrop');

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
console.log(evt);
evt.preventDefault();
loginPopup.classList.toggle('show-popup');
popupBackdrop.classList('show-backdrop');
}

