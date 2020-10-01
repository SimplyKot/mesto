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
const authorPopupForm = authorPopup.querySelector('.popup__content')
const AuthorPopupCloseButton = authorPopup.querySelector('.popup__close-button');
const inputNameField = authorPopupForm.querySelector('input[name=name-input]');
const inputInfoField = authorPopupForm.querySelector('input[name=info-input]');

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
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');
const imagePopupPicture = imagePopup.querySelector('.popup-image__image');
const imagePopupTitle = imagePopup.querySelector('.popup-image__image-title');

const cardTemplate = document.querySelector('#card-template').content;

function closeOpenedPopup() {
  togglePopup(document.querySelector('.popup_opened'));
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    closeOpenedPopup()
  }
}

function closeByOverlayClick(evt) {
  if (evt.target===evt.currentTarget)
  {
    closeOpenedPopup();
  }
}


function togglePopup(popupElement) {
  if (!popupElement.classList.contains('popup_opened')) {
    inputNameField.value = authorName.textContent;
    inputInfoField.value = authorInfo.textContent;
    document.addEventListener('keydown',closeByEscape);
    popupElement.addEventListener('mousedown',closeByOverlayClick);
  }
  else
  {
    document.removeEventListener('keydown', closeByEscape);
    popupElement.removeEventListener('mousedown',closeByOverlayClick);
  }
  popupElement.classList.toggle('popup_opened');
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

function addCard(card, position = 'end') {
//Второй аргумент необязательный. Он отвечает за место в которое карточка будет добавлена:
//'start' -  добавление в начало списка
//Любую другое значение - в конец
  
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
AuthorPopupCloseButton.addEventListener('click', evt=>togglePopup(authorPopup));
authorPopupForm.addEventListener('submit', formAuthorSubmitHandler);

addButton.addEventListener('click',evt=>togglePopup(addPopup));
addPopupCloseButton.addEventListener('click', evt=>togglePopup(addPopup));
addPopupForm.addEventListener('submit', formSubmitPlaceHandler);

imagePopupCloseButton.addEventListener('click', evt=>togglePopup(imagePopup));

renderCardList();