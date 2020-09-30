

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

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList))
      {
        buttonElement.classList.add(inactiveButtonClass);
      }
  else
  {
    buttonElement.classList.remove(inactiveButtonClass);
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



function enableValidation(params) {

  console.log(params.formSelector);

  const testform = document.querySelector(params.formSelector);
  const fieldList = Array.from(testform.querySelectorAll(params.inputSelector));
  const buttonElement = testform.querySelector(params.submitButtonSelector);

  fieldList.forEach((field)=>{
    field.addEventListener('input', function () {
      checkInputValidity(testform, field);
      toggleButtonState(fieldList,buttonElement,params.inactiveButtonClass);
  });
}

);
}

enableValidation({
  formSelector: '.popup__content',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled'
});

/*
// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.popup__content', +
  inputSelector: '.popup__field', +
  submitButtonSelector: '.popup__button', +
  inactiveButtonClass: 'popup__button_disabled', +
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
*/