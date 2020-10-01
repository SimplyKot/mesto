const initialCards = [
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1599849579035-13e3e19db29f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=50'
  },
  {
    name: 'Москва-река',
    link: 'https://images.unsplash.com/photo-1523509433743-6f42a58221df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80'
  },
  {
    name: 'Владивосток',
    link: 'https://images.unsplash.com/photo-1563941433-b6a094653ed2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=374&q=80'
  },
  {
    name: 'Парк Паанаярви',
    link: 'https://images.unsplash.com/photo-1568230315894-1edd16d248b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80'
  },
  {
    name: 'Никола-Ленивец',
    link: 'https://images.unsplash.com/photo-1561919430-54877acf8107?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80'
  },
  {
    name: 'Онежское озеро',
    link: 'https://images.unsplash.com/photo-1543699936-c901ddbf0c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80'
  }
];

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const authorPopup = document.querySelector('#author');
const popupForm = authorPopup.querySelector('.popup__content')
const popupCloseButton = authorPopup.querySelector('.popup__close-button');
const inputNameField = popupForm.querySelector('input[name=name-input]');
const inputInfoField = popupForm.querySelector('input[name=info-input]');

const profile = document.querySelector('.profile__text');
const authorName = profile.querySelector('.profile__name');
const authorInfo = profile.querySelector('.profile__info');
const cardsList = document.querySelector('.cards__list');

const addPopup = document.querySelector('#place');
const addPopupCloseButton = addPopup.querySelector('.popup__close-button');
const addPopupForm = addPopup.querySelector('.popup__content');
const inputPlaceField = addPopupForm.querySelector('input[name=place-input]');
const inputLinkField = addPopupForm.querySelector('input[name=link-input]');

const imagePopup = document.querySelector('#image');
const imagePopup_close = imagePopup.querySelector('.popup__close-button');
const imagePopupPicture = imagePopup.querySelector('.popup-image__image');
const imagePopupTitle = imagePopup.querySelector('.popup-image__image-title');

const cardTemplate = document.querySelector('#card-template').content;


function togglePopup(popupElement) {
console.log(popupElement);
  if (!popupElement.classList.contains('popup_opened')) {
    inputNameField.value = authorName.textContent;
    inputInfoField.value = authorInfo.textContent;
  }
  popupElement.classList.toggle('popup_opened');
}

/*
function toggleaddPopup() {
  addPopup.classList.toggle('popup-add_opened');
}
*/

function toggleimagePopup() {
  imagePopup.classList.toggle('popup-image_opened');
}


function formAuthorSubmitHandler(evt) {
  evt.preventDefault();
  authorName.textContent = inputNameField.value;
  authorInfo.textContent = inputInfoField.value;
  togglePopup(authorPopup);
}

function formSubmitPlaceHandler(evt) {
  const submitButton = evt.target.querySelector('.popup__button');
  evt.preventDefault();
  const newCard = {};
  newCard.name = inputPlaceField.value;
  newCard.link = inputLinkField.value;
  addCard(newCard, 'start');
  inputPlaceField.value = '';
  inputLinkField.value = '';
  submitButton.classList.add('popup__button_disabled');
  togglePopup(addPopup);
}

/*Второй аргумент необязательный. Он отвечает за место в которое карточка будет добавлена:
'start' -  добавление в начало списка
Любоу другое значение - в конец
*/

function addCard(card, position = 'end') {
  
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');

  cardElement.querySelector('.card__delete-button').addEventListener('click', evt => evt.target.closest('.card').remove());
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);

  cardImage.addEventListener('click', () => {

    imagePopupPicture.setAttribute('src', card.link);
    imagePopupPicture.setAttribute('alt', card.name);
    imagePopupTitle.textContent = card.name;
    togglePopup(imagePopup);
  });

  cardElement.querySelector('.card__name').textContent = card.name;
  cardElement.querySelector('.card__like-button').addEventListener('click', evt => evt.target.classList.toggle('card__like-button_active'));
  if (position != 'start') {
    cardsList.append(cardElement);
  }
  else {
    cardsList.prepend(cardElement);
  }

}

function renderCardList() {
  initialCards.forEach(addCard);
}

editButton.addEventListener('click', evt=>togglePopup(authorPopup));
popupCloseButton.addEventListener('click', evt=>togglePopup(authorPopup));
popupForm.addEventListener('submit', formAuthorSubmitHandler);

addButton.addEventListener('click',evt=>togglePopup(addPopup));
addPopupCloseButton.addEventListener('click', evt=>togglePopup(addPopup));
addPopupForm.addEventListener('submit', formSubmitPlaceHandler);

imagePopup_close.addEventListener('click', evt=>togglePopup(imagePopup));

//Функция отслеживает все открытые попапы и их хакрывает
function closeOpenedPopups() {
  /*
  if (popup.classList.contains('popup_opened')) {
    togglePopup();
  }
  if (addPopup.classList.contains('popup-add_opened')) {
    toggleaddPopup();
  }
  if (imagePopup.classList.contains('popup-image_opened')) {
    toggleimagePopup();
  }
  */
  console.log('colse popup!!!');
}

authorPopup.addEventListener('click', evt=> {
  if (evt.target === evt.currentTarget) 
  {
    closeOpenedPopups();
  }
});

addPopup.addEventListener('click', evt=> {
  if (evt.target === evt.currentTarget) 
  {
    closeOpenedPopups();
  }
});

imagePopup.addEventListener('click', evt=> {
  if (evt.target === evt.currentTarget) 
  {
    closeOpenedPopups();
  }
});



// При нажении на Esc вызывает заврытие всех попапов
document.addEventListener('keydown', evt => {
  if (evt.key === "Escape") {
    closeOpenedPopups()
  }
});

renderCardList();