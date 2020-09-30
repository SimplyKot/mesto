

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  /*inputElement.classList.add('form__input_type_error');*/
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__field-error_visible');
}

function hideInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = '';
  errorElement.classList.remove('popup__field-error_visible');
};


function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
  }

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList))
      {
        buttonElement.classList.add('popup__button_disabled');
      }
  else
  {
    buttonElement.classList.remove('popup__button_disabled');
  }
};


function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
    hideInputError(formElement, inputElement);
  }
};



function enableValidation() {

  console.log('Start validation!');

  const testform = document.querySelector('.popup__content');
  const fieldList = Array.from(testform.querySelectorAll('.popup__field'));
  const buttonElement = testform.querySelector('.popup__button');

  fieldList.forEach((field)=>{
    field.addEventListener('input', function () {
      checkInputValidity(testform, field);
      toggleButtonState(fieldList,buttonElement);
  });
}

);
}

enableValidation();

/*
// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
*/