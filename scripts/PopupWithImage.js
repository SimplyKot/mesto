import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    open(link,title) {
        this._popup.querySelector('.popup__image').setAttribute('src',link);
        this._popup.querySelector('.popup__image').setAttribute('alt',title);
        this._popup.querySelector('.popup__image-title').textContent = title;
        super.open();
    }
}