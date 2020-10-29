import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popup, submitHandler}) {
    super(popup);
    this._submitHandler = submitHandler;
    this._InputValues ={};
  }

  open() {
    super.open();
  }

  _getInputValues() {
    Array.from(this._popup.querySelectorAll('input')).forEach((inputValue) => {
      this._InputValues[inputValue.name] = inputValue.value;
    })
    return  this._InputValues;
  }

}