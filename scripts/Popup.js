export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup);
        this._closeButton = this._popup.querySelector('.popup__close-button');
        this._handleEscapeClose = this._handleEscapeClose.bind(this);
        this._handleMouseOverlayClose = this._handleMouseOverlayClose.bind(this);
        //console.log(evt);
        this._setEventListeners();
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscapeClose);
        this._popup.addEventListener('click', this._handleMouseOverlayClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscapeClose);
        this._popup.removeEventListener('click', this._handleMouseOverlayClose);
    }

    _handleEscapeClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    _handleMouseOverlayClose(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    _setEventListeners() {
        this._closeButton.addEventListener('click', evt => {
                this.close();
                }
            );
    }
}
