/*
function closePlacePopupByEscape(evt) {
  if (evt.key === "Escape") {
    imagePopup.classList.remove('popup_opened');
  }
}

function closePlacePopupByOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    imagePopup.classList.remove('popup_opened');
  }
}
*/

function addCard(card, position = 'end') {
    //Второй аргумент необязательный. Он отвечает за место в которое карточка будет добавлена:
    //'start' -  добавление в начало списка
    //Любую другое значение - в конец

    const imagePopup = document.querySelector('#image');
    
    const imagePopupPicture = imagePopup.querySelector('.popup__image');
    const imagePopupTitle = imagePopup.querySelector('.popup__image-title');
    
    const cardsList = document.querySelector('.cards__list');
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
  
    cardElement.querySelector('.card__delete-button').addEventListener('click', evt => evt.target.closest('.card').remove());
    cardImage.setAttribute('src', card.link);
    cardImage.setAttribute('alt', card.name);
  
    cardImage.addEventListener('click', () => {
      imagePopupPicture.setAttribute('src', card.link);
      imagePopupPicture.setAttribute('alt', card.name);
      imagePopupTitle.textContent = card.name;
      //togglePopup(imagePopup);
      
      document.addEventListener('keydown', (evt) => {
        if (evt.key === "Escape") {
          imagePopup.classList.remove('popup_opened');
        }
      });
      imagePopup.addEventListener('mousedown', (evt) => {
        if (evt.target === evt.currentTarget) {
          imagePopup.classList.remove('popup_opened');
        }
      });

      imagePopup.classList.add('popup_opened');

      
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