const editButton = document.querySelector('.edit-button');

const popup = document.querySelector('.popup');
const popup_close = popup.querySelector('.popup_close');
const saveButton = popup.querySelector('.save-button');


const profile = document.querySelector('.profile__text');
let authorName = profile.querySelector('.author__name');
let authorInfo = profile.querySelector('.author__info');


console.log(authorInfo);


function togglePopup() {
    popup.classList.toggle('popup_hidden');
}





console.log({editButton, popup, popup_close, saveButton, authorName, authorInfo});


editButton.addEventListener('click', togglePopup);
popup_close.addEventListener('click', togglePopup);

