import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popup, submitHandler}) {
    super(popup);
    this._submitHandler = submitHandler;
    this._inputValues ={};
  }

  close() {
    this._formElement = this._popup.querySelector('.popup__content');
    this._formElement.reset();
    super.close();
  }

  _getInputValues() {
    Array.from(this._popup.querySelectorAll('input')).forEach((inputValue) => {
      this._inputValues[inputValue.name] = inputValue.value;
    })
    return this._inputValues;
  }

  _setEventListeners() {
    this._formElement = this._popup.querySelector('.popup__content');
      this._formElement.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues())});
      super._setEventListeners();
  }

}