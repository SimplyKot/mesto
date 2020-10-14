export default class Card {

  constructor(card, template) {
    this._card = card;
    this._imagePopup = document.querySelector('#image');
    this._imagePopupPicture = this._imagePopup.querySelector('.popup__image');
    this._imagePopupTitle = this._imagePopup.querySelector('.popup__image-title');
    this._cardTemplate = document.querySelector(template).content;
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardImage = this._cardElement.querySelector('.card__image');
  }

  _handleMouseClick(evt) {
    if (evt.target === evt.currentTarget) {
      const _imagePopup = document.querySelector('#image');
      _imagePopup.classList.remove('popup_opened');
    }
  }

  _handleEnterKey(evt) {
    const _imagePopup = document.querySelector('#image');
    if (evt.key === "Escape") {
      _imagePopup.classList.remove('popup_opened');
    }
  }

  _handleTrashButton(evt) {
    evt.target.closest('.card').remove();
  }

  _handleLikeButton(evt) {
    evt.target.classList.toggle('card__like-button_active');
  }

  getCard() {
    this._cardElement.querySelector('.card__delete-button').addEventListener('click', this._handleTrashButton);
    this._cardImage.setAttribute('src', this._card.link);
    this._cardImage.setAttribute('alt', this._card.name);

    this._cardImage.addEventListener('click', () => {
      this._imagePopupPicture.setAttribute('src', this._card.link);
      this._imagePopupPicture.setAttribute('alt', this._card.name);
      this._imagePopupTitle.textContent = this._card.name;
      document.addEventListener('keydown', this._handleEnterKey);
      this._imagePopup.addEventListener('mousedown', this._handleMouseClick);
      this._imagePopup.classList.add('popup_opened');
    });
    this._cardElement.querySelector('.card__name').textContent = this._card.name;
    this._cardElement.querySelector('.card__like-button').addEventListener('click', this._handleLikeButton);

    return this._cardElement;
  }
}
