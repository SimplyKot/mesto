const editButton = document.querySelector('.edit-button');

const popup = document.querySelector('.popup');
const popup_close = popup.querySelector('.popup_close');
const saveButton = popup.querySelector('.save-button');
const inputFields = popup.querySelectorAll('.popup__field');


const profile = document.querySelector('.profile__text');
const authorName = profile.querySelector('.author__name');
const authorInfo = profile.querySelector('.author__info');

function togglePopup() {
    popup.classList.toggle('popup_hidden');
    inputFields[0].value = authorName.textContent;;
    inputFields[1].value = authorInfo.textContent;
}

function saveAndClose () {
    authorName.textContent = inputFields[0].value;
    authorInfo.textContent = inputFields[1].value;
    togglePopup();
}

editButton.addEventListener('click', togglePopup);
popup_close.addEventListener('click', togglePopup);
saveButton.addEventListener('click', saveAndClose);
