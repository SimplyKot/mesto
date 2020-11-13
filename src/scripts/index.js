import "../pages/index.css";

import { validationConfig as config } from "./data.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWIthForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWDeleteConfirm from "../components/PopupDeleteConfirm";

const formList = Array.from(document.querySelectorAll(config.formSelector));
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const authorPopup = document.querySelector("#author");
const authorPopupForm = authorPopup.querySelector(".popup__content");
const inputNameField = authorPopupForm.querySelector("input[name=name]");
const inputInfoField = authorPopupForm.querySelector("input[name=about]");

const profile = document.querySelector(".profile__text");
const authorAvatar = document.querySelector(".profile__avatar");
const editAvatar = document.querySelector(".profile__edit-avatar");
const authorName = profile.querySelector(".profile__name");
const authorInfo = profile.querySelector(".profile__info");

const cardsList = document.querySelector(".cards__list");
//const avatarPopup = document.querySelector("#avatar");

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-17",
  headers: {
    authorization: "5b28e3f6-a4ef-488b-b893-2830e6e47a17",
    "Content-Type": "application/json",
  },
});

//Получаем с сервера и отображаем первоначальный массив карточек
api.getInitialCards().then((data) => {
  const items = data.map((card) => {
    return card;
  });
  const cardSectionContent = new Section(
    { items: items, renderer: addCard },
    ".cards"
  );
  cardSectionContent.renderAllItems();
});

function setAuthorFields() {
  const data = info.getUserInfo();
  authorName.textContent = data.name;
  authorInfo.textContent = data.about;
  authorAvatar.setAttribute("src", data.avatar);
}

function handleCardClick() {
  const imagePopup = new PopupWithImage("#image");
  imagePopup.open(this._card.name, this._card.link);
}

function handleCardDelete(id) {
  return api.deleteCard(id);
}

const deletePopup = new PopupWDeleteConfirm({
  popup: "#delete",
  id: "",
  submitHandler: handleCardDelete,
});

function openPopupCardDelete(cardId) {
  deletePopup.setId(cardId);
  deletePopup.open();
}

function handleCardLike(id, action) {
  return api.setLike(id, action);
}

// Создаем новый экземпляр класса, чтобы можно было обратьиться к нему из промиса
//const info = new UserInfo({name:'Жак Ив Кусто', about:'Исследователь океана'},api);
const info = new UserInfo({ name: "", about: "", avatar: "", id: "" }, api);

// Получаем с сервера информацию о пользователе
api
  .getUserInfo()
  .then((res) => {
    info.setUserInfo(res);
    info.setUserAvatar(res);
    info.setUserId(res);
  })
  .then(() => setAuthorFields());

function addCard(card, position) {
  //Второй аргумент необязательный. Он отвечает за место в которое карточка будет добавлена:
  //'start' -  добавление в начало списка
  //Любую другое значение - в конец

  const cardFormClass = new Card(
    card,
    "#card-template",
    handleCardClick,
    openPopupCardDelete,
    handleCardLike,
    info.getUserId()
  );

  if (position != "start") {
    cardsList.append(cardFormClass.getCard());
  } else {
    cardsList.prepend(cardFormClass.getCard());
  }
}

const authorSection = new PopupWithForm({
  popup: "#author",
  submitHandler: editAuthorHandler,
});

editButton.addEventListener("click", (evt) => {
  const currentInfo = info.getUserInfo();
  inputNameField.value = currentInfo.name;
  inputInfoField.value = currentInfo.about;
  authorSection.open();
});

function updateAvararHandler(data) {
  api.updateAvatar(data).then((res) => {
    authorAvatar.setAttribute("src", data.link);
    })
    .then(()=>avatarSection.close());
}

const avatarSection = new PopupWithForm({
  popup: "#avatar",
  submitHandler: updateAvararHandler,
});
editAvatar.addEventListener("click", (evt) => avatarSection.open());

const imageSection = new PopupWithForm({
  popup: "#place",
  submitHandler: addImageAddHandler,
});
addButton.addEventListener("click", (evt) => imageSection.open());

formList.forEach((form) => {
  const formValidator = new FormValidator(config, form);
  console.log();
  formValidator.enableValidation();
});

function addImageAddHandler(cardValues) {
  api.addCard(cardValues).then((res) => {
    addCard(res, "start");
  });
  imageSection.close();
}
function editAuthorHandler(infoValues) {
  api.editProfile(infoValues).then((data) => {
    authorName.textContent = data.name;
    authorInfo.textContent = data.about;
    info.setUserInfo(infoValues);
    setAuthorFields();
  })
  .finally(() => authorSection.close());

  
}
