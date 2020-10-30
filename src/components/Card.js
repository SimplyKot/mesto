export default class Card {

  constructor(card, template, handleCardClick) {
    this._card = card;
    this._imagePopup = document.querySelector('#image');
    this._imagePopupPicture = this._imagePopup.querySelector('.popup__image');
    this._imagePopupTitle = this._imagePopup.querySelector('.popup__image-title');
    this._cardTemplate = document.querySelector(template).content;
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardImage = this._cardElement.querySelector('.card__image');
    this._handleCardClick = handleCardClick;
  }

  _handleTrashButton(evt) {
    evt.target.closest('.card').remove();
  }

  _handleLikeButton(evt) {
    evt.target.classList.toggle('card__like-button_active');
  }

  _setEventListeners() {
    this._cardElement.querySelector('.card__delete-button').addEventListener('click', this._handleTrashButton);

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });

    this._cardElement.querySelector('.card__like-button').addEventListener('click', this._handleLikeButton);
  }

  getCard() {
    this._cardImage.setAttribute('src', this._card.link);
    this._cardImage.setAttribute('alt', this._card.name);
    this._cardElement.querySelector('.card__name').textContent = this._card.name;
    this._setEventListeners();
    return this._cardElement;
  }
}
