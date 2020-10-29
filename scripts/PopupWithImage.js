import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    open(name, link) {
        this._popup.querySelector('.popup__image').setAttribute('src',link);
        this._popup.querySelector('.popup__image').setAttribute('alt',name);
        this._popup.querySelector('.popup__image-title').textContent = name;
        super.open();
    }

}