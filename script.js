const editButton = document.querySelector('.edit-button');

const popup = document.querySelector('.popup');
const popup_form = popup.querySelector('.popup__content')
const popup_close = popup.querySelector('.popup_close');
const saveButton = popup.querySelector('.save-button');
const inputFields = popup.querySelectorAll('.popup__field');


const profile = document.querySelector('.profile__text');
const authorName = profile.querySelector('.author__name');
const authorInfo = profile.querySelector('.author__info');


function togglePopup() {
    popup.classList.toggle('popup_hidden');
    inputFields[0].value = authorName.textContent;
    inputFields[1].value = authorInfo.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameInput = inputFields[0].value;
    let jobInput = inputFields[1].value;
    authorName.textContent = nameInput;
    authorInfo.textContent = jobInput;
}

editButton.addEventListener('click', togglePopup);
popup_close.addEventListener('click', togglePopup);
popup_form.addEventListener('submit', formSubmitHandler);