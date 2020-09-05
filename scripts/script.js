const editButton = document.querySelector('.edit-button');

const popup = document.querySelector('.popup');
const popup_form = popup.querySelector('.popup__content')
const popup_close = popup.querySelector('.popup_close');
const saveButton = popup.querySelector('.save-button');
const inputNameField = popup_form.querySelector('input[name=nameInput]');
const inputInfoField = popup_form.querySelector('input[name=infoInput]');

const profile = document.querySelector('.profile__text');
const authorName = profile.querySelector('.profile__name');
const authorInfo = profile.querySelector('.profile__info');

function togglePopup() {
    if (popup.classList.contains('popup_hidden')) {
        inputNameField.value = authorName.textContent;
        inputInfoField.value = authorInfo.textContent;
    }
        popup.classList.toggle('popup_hidden');
    
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    authorName.textContent = inputNameField.value;
    authorInfo.textContent = inputInfoField.value;
    togglePopup();
}

editButton.addEventListener('click', togglePopup);
popup_close.addEventListener('click', togglePopup);
popup_form.addEventListener('submit', formSubmitHandler);