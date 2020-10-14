export default class Card {

  constructor(card, template, position) {
    this._card=card;
    this._position = position;
    this._imagePopup = document.querySelector('#image');
    this._imagePopupPicture = this._imagePopup.querySelector('.popup__image');
    this._imagePopupTitle = this._imagePopup.querySelector('.popup__image-title');
    this._cardsList = document.querySelector('.cards__list');
    this._cardTemplate = document.querySelector(template).content;
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardImage = this._cardElement.querySelector('.card__image');
  }

  _addCard(card, position) {
    //Второй аргумент необязательный. Он отвечает за место в которое карточка будет добавлена:
    //'start' -  добавление в начало списка
    //Любую другое значение - в конец
  
    this._cardElement.querySelector('.card__delete-button').addEventListener('click', evt => evt.target.closest('.card').remove());
    this._cardImage.setAttribute('src', card.link);
    this._cardImage.setAttribute('alt', card.name);
  
    this._cardImage.addEventListener('click', () => {
      this._imagePopupPicture.setAttribute('src', card.link);
      this._imagePopupPicture.setAttribute('alt', card.name);
      this._imagePopupTitle.textContent = card.name;
      //togglePopup(imagePopup);
      
      document.addEventListener('keydown', (evt) => {
        if (evt.key === "Escape") {
          this._imagePopup.classList.remove('popup_opened');
        }
      });
      this._imagePopup.addEventListener('mousedown', (evt) => {
        if (evt.target === evt.currentTarget) {
          this._imagePopup.classList.remove('popup_opened');
        }
      });

      this._imagePopup.classList.add('popup_opened');

      
    });
  
    this._cardElement.querySelector('.card__name').textContent = card.name;
    this._cardElement.querySelector('.card__like-button').addEventListener('click', evt => evt.target.classList.toggle('card__like-button_active'));
    if (position != 'start') {
      this._cardsList.append(this._cardElement);
    }
    else {
      this._cardsList.prepend(this._cardElement);
    }
  }
  generateCard() {
    return this._addCard(this._card,this._position);
  };
}
