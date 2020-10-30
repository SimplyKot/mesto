import '../pages/index.css';

import {initialCards as cards, validationConfig as config} from  './data.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
//import Popup from './Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWIthForm.js';
import UserInfo from '../components/UserInfo.js';

const formList = Array.from(document.querySelectorAll(config.formSelector));
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const authorPopup = document.querySelector('#author');
const authorPopupForm = authorPopup.querySelector('.popup__content')
//const AuthorPopupCloseButton = authorPopup.querySelector('.popup__close-button');
const inputNameField = authorPopupForm.querySelector('input[name=name]');
const inputInfoField = authorPopupForm.querySelector('input[name=info]');

const profile = document.querySelector('.profile__text');
const authorName = profile.querySelector('.profile__name');
const authorInfo = profile.querySelector('.profile__info');

//const addPopup = document.querySelector('#place');
//const addPopupCloseButton = addPopup.querySelector('.popup__close-button');
//const addPopupForm = addPopup.querySelector('.popup__content');
//const inputPlaceField = addPopupForm.querySelector('input[name=place-input]');
//const inputLinkField = addPopupForm.querySelector('input[name=link-input]');

//const imagePopup = document.querySelector('#image');
//const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');

const cardsList = document.querySelector('.cards__list')

// function closePopup(popupElement) {
//   popupElement.classList.remove('popup_opened');
// }

// function оpenPopup(popupElement) {
//   popupElement.classList.add('popup_opened');
// }

// function closeByEscape(evt) {
//   if (evt.key === "Escape") {
//     togglePopup(document.querySelector('.popup_opened'));
//   }
// }

// function closeByOverlayClick(evt) {
//   if (evt.target === evt.currentTarget) {
//     togglePopup(document.querySelector('.popup_opened'));
//   }
// }

function setAuthorFields() {
  const userInfo = Info.getUserInfo();
  authorName.textContent = userInfo.name;
  authorInfo.textContent = userInfo.info;
}

// export function togglePopup(popupElement) {
//   if (!popupElement.classList.contains('popup_opened')) {
//     if (popupElement.id === 'author') {
//       setAuthorFields(popupElement)
//     };
//     document.addEventListener('keydown', closeByEscape);
//     popupElement.addEventListener('mousedown', closeByOverlayClick);
//     оpenPopup(popupElement);
//   }
//   else {
//     document.removeEventListener('keydown', closeByEscape);
//     popupElement.removeEventListener('mousedown', closeByOverlayClick);
//     closePopup(popupElement);
//   }
// }

// function formAuthorSubmitHandler(evt) {
//   evt.preventDefault();
//   authorName.textContent = inputNameField.value;
//   authorInfo.textContent = inputInfoField.value;
//   togglePopup(authorPopup);
// }

function handleCardClick() 
{
  const imagePopup = new PopupWithImage('#image');
  imagePopup.open(this._card.name,this._card.link);
}

function addCard(card,position) {
  //Второй аргумент необязательный. Он отвечает за место в которое карточка будет добавлена:
  //'start' -  добавление в начало списка
  //Любую другое значение - в конец
  
  const cardFormClass = new Card(card,'#card-template',handleCardClick);

  if (position != 'start') {
    cardsList.append(cardFormClass.getCard());
  }
  else {
    cardsList.prepend(cardFormClass.getCard());
  }
}

// function formSubmitPlaceHandler(evt) {
//   //const submitButton = evt.target.querySelector('.popup__button');
//   evt.preventDefault();
//   const newCard = {};
//   newCard.name = place;
//   newCard.link = link;

//   addCard(newCard,'start');
//   inputPlaceField.value = '';
//   inputLinkField.value = '';
//   //submitButton.classList.add('popup__button_disabled');
//   togglePopup(addPopup);
// }

// function renderCardList() {
//   cards.forEach((card)=>{
//     addCard(card,'end');
//   });
//   }

//editButton.addEventListener('click', evt => togglePopup(authorPopup));

const Info = new UserInfo({name:'Жак-Ив Кусто', info:'Исследователь океана'});
setAuthorFields();

const authorSection = new PopupWithForm({popup:'#author',submitHandler:editAuthorHandler});
editButton.addEventListener('click', evt => {
  const currentInfo = Info.getUserInfo();
  inputNameField.value=currentInfo.name;
  inputInfoField.value=currentInfo.info;
  authorSection.open()}
  );
//AuthorPopupCloseButton.addEventListener('click', evt => togglePopup(authorPopup));
//authorPopupForm.addEventListener('submit', formAuthorSubmitHandler);



const imageSection = new PopupWithForm({popup:'#place',submitHandler:addImageAddHandler});
addButton.addEventListener('click', evt => imageSection.open());
//addButton.addEventListener('click', evt => togglePopup(addPopup));
//addPopupCloseButton.addEventListener('click', evt => togglePopup(addPopup));
//addPopupForm.addEventListener('submit', formSubmitPlaceHandler);

//imagePopupCloseButton.addEventListener('click', evt => togglePopup(imagePopup));

//renderCardList();


formList.forEach((form)=>{
  const formValidator = new FormValidator(config, form);
  console.log();
  formValidator.enableValidation();
});

const cardSectionContent = new Section({items:cards, renderer:addCard},'.cards');
cardSectionContent.renderAllItems();

function addImageAddHandler(cardValues) {
  addCard(cardValues,'start');
  imageSection.close();
}

function editAuthorHandler(infoValues) {
  console.log(infoValues);
  authorName.textContent = infoValues.name;
  authorInfo.textContent = infoValues.info;
  Info.setUserInfo(infoValues);
  setAuthorFields();
  authorSection.close();


}

