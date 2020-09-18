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

const popup = document.querySelector('.popup');
const popup_form = popup.querySelector('.popup__content')
const popup_close = popup.querySelector('.popup__close-button');
const inputNameField = popup_form.querySelector('input[name=name-input]');
const inputInfoField = popup_form.querySelector('input[name=info-input]');

const profile = document.querySelector('.profile__text');
const authorName = profile.querySelector('.profile__name');
const authorInfo = profile.querySelector('.profile__info');
const cardsList = document.querySelector('.cards__list');

const popupImage = document.querySelector('.popup-image');


function togglePopup() {
    if (!popup.classList.contains('popup_opened')) {
        inputNameField.value = authorName.textContent;
        inputInfoField.value = authorInfo.textContent;
    }
        popup.classList.toggle('popup_opened');
    
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    authorName.textContent = inputNameField.value;
    authorInfo.textContent = inputInfoField.value;
    togglePopup();
}

function renderCardList() {
  const cardTemplate = document.querySelector('#card-template').content;
  initialCards.forEach(card => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__delete-button').addEventListener('click',  evt => evt.target.closest('.card').remove());
  cardElement.querySelector('.card__image').setAttribute('src',card.link);
  cardElement.querySelector('.card__image').setAttribute('alt',card.name);

  cardElement.querySelector('.card__image').addEventListener('click', evt => {
    const imagePopupTemplate = document.querySelector('#popup-image').content;
    const imagePopup = imagePopupTemplate.cloneNode(true);
    imagePopup.querySelector('.popup__close-button').addEventListener('click', evt => {
      console.log(evt.target.closest('.popup-image__image-container'));
      evt.target.closest('.popup-image__container').remove();
      popupImage.classList.toggle('popup-image_opened');
    });
    
    imagePopup.querySelector('.popup-image__image').setAttribute('src',card.link);
    imagePopup.querySelector('.popup-image__image').setAttribute('alt',card.name);
    imagePopup.querySelector('.popup-image__image-title').textContent=card.name;
    console.log(popupImage);
    console.log(imagePopup);
    popupImage.append(imagePopup);
    popupImage.classList.toggle('popup-image_opened');
  });

  cardElement.querySelector('.card__name').textContent=card.name;
  cardElement.querySelector('.card__like-button').addEventListener('click', evt => evt.target.classList.toggle('card__like-button_active'));
  cardsList.append(cardElement);
  });
}

editButton.addEventListener('click', togglePopup);
popup_close.addEventListener('click', togglePopup);
popup_form.addEventListener('submit', formSubmitHandler);

renderCardList();