export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup);
        this._handleEscapeClose = this._handleEscapeClose.bind(this);
        //this._setEventListeners();
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscapeClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscapeClose);
    }

    _handleEscapeClose(evt) {
        console.log('popup->', this);
        if (evt.key === "Escape") {
            this.close();
        }
    }

    _setEventListeners() {

    }
}
