import Popup from "./Popup.js";

export class PopupWithImage extends Popup{
    constructor(popup) {
        super.constructor(popup);
        this._link = this._popup.querySelector('.popup__image');
        this._title = this._popup.querySelector('.popup__image-title');
    }
    show() {
        console.log(this);
    }
}