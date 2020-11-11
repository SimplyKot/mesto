import '../pages/index.css';

//import {initialCards as oldCards} from  './data.js'; 
import {validationConfig as config} from  './data.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWIthForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const formList = Array.from(document.querySelectorAll(config.formSelector));
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const authorPopup = document.querySelector('#author');
const authorPopupForm = authorPopup.querySelector('.popup__content')
const inputNameField = authorPopupForm.querySelector('input[name=name]');
const inputInfoField = authorPopupForm.querySelector('input[name=info]');

const profile = document.querySelector('.profile__text');
const authorAvatar = document.querySelector('.profile__avatar');
const authorName = profile.querySelector('.profile__name');
const authorInfo = profile.querySelector('.profile__info');


//console.log(authorAvatar);

const cardsList = document.querySelector('.cards__list')

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
    authorization: '5b28e3f6-a4ef-488b-b893-2830e6e47a17',
    'Content-Type': 'application/json'
  }
}); 

//Получаем с сервера и отображаем первоначальный массив карточек
api.getInitialCards().then((data) => {
  const items = data.map(card => {
    return {
      name : card.name,
      link: card.link,
    }
  });
  //console.log(items);
  const cardSectionContent = new Section({items:items, renderer:addCard},'.cards');
  cardSectionContent.renderAllItems();
});





function setAuthorFields() {
  const data = Info.getUserInfo();
  //console.log(data);
      authorName.textContent = data.name;
      authorInfo.textContent = data.about;
      authorAvatar.setAttribute('src', data.avatar);
}

//api.editProfile('Kot','Web student_v1');



// function setAuthorFields() {
//   const userInfo = Info.getUserInfo();
//   authorName.textContent = userInfo.name;
//   authorInfo.textContent = userInfo.info;
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

//FIXME: Здесь засада какая-то

// Создаем новый экземпляр класса, чтобы можно было обратьиться к нему из промиса
const Info = new UserInfo({name:'Жак Ив Кусто', about:'Исследователь океана'});

// Получаем с сервера информацию о пользователе
api
  .getUserInfo()
  .then((data) => {
    // Обновляем имя и описание пользователя в классе
    Info.setUserInfo({name:data.name, about:data.about, avatar:data.avatar});
    // Обновляем аватар пользователя в классе
    Info.setUserAvatar({avatar:data.avatar})
  });

// Выводим в консоль экземпляр класса
  console.log(Info);
// Выводим в коснсоль вывод метода получени данных
  console.log(Info.getUserInfo());

setAuthorFields();

const authorSection = new PopupWithForm({popup:'#author',submitHandler:editAuthorHandler});
editButton.addEventListener('click', evt => {
  const currentInfo = Info.getUserInfo();
  inputNameField.value=currentInfo.name;
  inputInfoField.value=currentInfo.about;
  authorSection.open()}
  );

const imageSection = new PopupWithForm({popup:'#place',submitHandler:addImageAddHandler});
addButton.addEventListener('click', evt => imageSection.open());

formList.forEach((form)=>{
  const formValidator = new FormValidator(config, form);
  console.log();
  formValidator.enableValidation();
});

// console.log(cards);
// console.log(oldCards);
// const cardSectionContentNew = new Section({items:cards, renderer:addCard},'.cards');
// const cardSectionContent = new Section({items:oldCards, renderer:addCard},'.cards');
// //console.log(cardSectionContent);
// cardSectionContent.renderAllItems();

function addImageAddHandler(cardValues) {
  addCard(cardValues,'start');
  imageSection.close();
}

function editAuthorHandler(infoValues) {
  //console.log(infoValues);
  authorName.textContent = infoValues.name;
  authorInfo.textContent = infoValues.about;
  Info.setUserInfo(infoValues);
  setAuthorFields();
  authorSection.close();
}



