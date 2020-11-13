import Popup from "./Popup.js";

export default class PopupWDeleteConfirm extends Popup {
  constructor({ popup, id, submitHandler }) {
    super(popup);
    this._submitHandler = submitHandler;
    //this._id = document.querySelector(`#${id}`);
    this._id = id;
  }

  close() {
    this._formElement = this._popup.querySelector(".popup__content");
    this._formElement.reset();
    super.close();
  }

  _setEventListeners() {
    this._formElement = this._popup.querySelector(".popup__content");
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      //console.log('Delete=> ', this._id);
      return (
        this._submitHandler(this._id)
          .then((res) => {
            document.getElementById(this._id).remove();
          })
          //.then(()=>this._card.handleTrashButton())
          .catch((err) => console.log("Произошла ошибка: ", err))
          .finally(this.close())
      );
    });
    super._setEventListeners();
  }
}
