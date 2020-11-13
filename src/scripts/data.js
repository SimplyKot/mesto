
const validationConfig = {
    formSelector: '.popup__content',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__input_type_error'
  }

const connectConfig = {
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-17",
    headers: {
      authorization: "5b28e3f6-a4ef-488b-b893-2830e6e47a17",
      "Content-Type": "application/json",
    }
  }

  export {connectConfig, validationConfig};

