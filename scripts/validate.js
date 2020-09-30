console.log('Start validation!');

const testform = document.querySelector('.popup__content');
const field1 = testform.querySelectorAll('.popup__field')[0];
const field2 = testform.querySelectorAll('.popup__field')[1];
console.log(testform);
console.log(field1);
console.log(field2);

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
        buttonElement.classList.add('button_inactive');
      }
  else
  {
    buttonElement.classList.remove('button_inactive');
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


field1.addEventListener('input', (evt) => {
  checkInputValidity(testform, field1);
}
);

field2.addEventListener('input', (evt) => {
  checkInputValidity(testform, field2);
}
);





/*
// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
*/