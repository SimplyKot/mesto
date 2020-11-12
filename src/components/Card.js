export default class Card {
  constructor(
    card,
    template,
    handleCardClick,
    handleCardDelete,
    handleCardLike,
    id
  ) {
    this._card = card;
    this._imagePopup = document.querySelector("#image");
    this._imagePopupPicture = this._imagePopup.querySelector(".popup__image");
    this._imagePopupTitle = this._imagePopup.querySelector(
      ".popup__image-title"
    );
    this._cardTemplate = document.querySelector(template).content;
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardLike = this._cardElement.querySelector(".card__like-button");
    this._cardLikes = this._cardElement.querySelector(".card__likes");
    this._cardDelete = this._cardElement.querySelector(".card__delete-button");
    this._userId = id;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
    this._liked = this._card.likes.some((like) => like._id == this._userId);
    //console.log(this._liked);
  }

  _updateCard(data) {
    //console.log(this._card.likes.length);
    this._card = data;
    this._liked = this._card.likes.some((like) => like._id == this._userId);
    this._cardLikes.textContent = this._card.likes.length;
    //console.log(this._card.likes.length);
  }

  _deleteCard() {
    //console.log("Удалим это:", this._card._id);
    return this._handleCardDelete(this._card._id);
  }

  _handleTrashButton(evt) {
    evt.target.closest(".card").remove();
  }

  _handleLikeButton(evt) {
    evt.target.classList.toggle("card__like-button_active");
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", (evt) => {
        this._deleteCard().then(this._handleTrashButton(evt));
      });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });

    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", (evt) => {
        const action = !this._liked ? "ADD" : "DELETE";
        this._handleCardLike(this._card._id, action)
          .then((res) => {this._updateCard(res)})
          .then(this._handleLikeButton(evt));
      });
  }

  _isOwner() {
    return this._card.owner._id == this._userId;
  }

  getCard() {
    //console.log(this._card);
    //console.log(this._isOwner());
    if (!this._isOwner()) {
      this._cardDelete.classList.add("card__delete-button_disabled");
    }
    this._cardImage.setAttribute("src", this._card.link);
    this._cardImage.setAttribute("alt", this._card.name);
    this._cardElement.querySelector(
      ".card__name"
    ).textContent = this._card.name;
    if (this._liked) {
      this._cardLike.classList.add("card__like-button_active");
    }
    this._cardLikes.textContent = this._card.likes.length;
    this._setEventListeners();
    return this._cardElement;
  }
}
