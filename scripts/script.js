import Validator from './FormValidator.js'
import Card from './Card.js'

const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
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

const addPopup = document.querySelector('#place');
const addPopupCloseButton = addPopup.querySelector('.popup__close-button');
const addPopupForm = addPopup.querySelector('.popup__content');
const inputPlaceField = addPopupForm.querySelector('input[name=place-input]');
const inputLinkField = addPopupForm.querySelector('input[name=link-input]');

const imagePopup = document.querySelector('#image');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function оpenPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    togglePopup(document.querySelector('.popup_opened'));
  }
}

function closeByOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    togglePopup(document.querySelector('.popup_opened'));
  }
}

function setAuthorFields() {
  inputNameField.value = authorName.textContent;
  inputInfoField.value = authorInfo.textContent;
}

function togglePopup(popupElement) {
  if (!popupElement.classList.contains('popup_opened')) {
    if (popupElement.id === 'author') {
      setAuthorFields(popupElement)
    };
    document.addEventListener('keydown', closeByEscape);
    popupElement.addEventListener('mousedown', closeByOverlayClick);
    оpenPopup(popupElement);
  }
  else {
    document.removeEventListener('keydown', closeByEscape);
    popupElement.removeEventListener('mousedown', closeByOverlayClick);
    closePopup(popupElement);
  }
}

function formAuthorSubmitHandler(evt) {
  evt.preventDefault();
  authorName.textContent = inputNameField.value;
  authorInfo.textContent = inputInfoField.value;
  togglePopup(authorPopup);
}

function formSubmitPlaceHandler(evt) {
  evt.preventDefault();
  const submitButton = evt.target.querySelector('.popup__button');
  
  const newCard = {};
  newCard.name = inputPlaceField.value;
  newCard.link = inputLinkField.value;
  
  const cardFormClass = new Card(newCard,'start');
  cardFormClass.generateCard();

  inputPlaceField.value = '';
  inputLinkField.value = '';
  submitButton.classList.add('popup__button_disabled');
  togglePopup(addPopup);
}

function renderCardList() {
  initialCards.forEach((card)=>{
    const cardFormClass = new Card(card,'end');
    cardFormClass.generateCard();
  })
  
}

editButton.addEventListener('click', evt => togglePopup(authorPopup));
AuthorPopupCloseButton.addEventListener('click', evt => togglePopup(authorPopup));
authorPopupForm.addEventListener('submit', formAuthorSubmitHandler);

addButton.addEventListener('click', evt => togglePopup(addPopup));
addPopupCloseButton.addEventListener('click', evt => togglePopup(addPopup));
addPopupForm.addEventListener('submit', formSubmitPlaceHandler);

imagePopupCloseButton.addEventListener('click', evt => togglePopup(imagePopup));

renderCardList();

formList.forEach((form)=>{
  const formValidator = new Validator(validationConfig, form);
  formValidator.enableValidation();
});