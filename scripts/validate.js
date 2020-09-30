function showInputError(formElement, inputElement, errorMessage, inputErrorClass, inputClass) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(inputClass);
}

function hideInputError(formElement, inputElement, inputErrorClass, inputClass) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(inputClass);
};


function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  }
  else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
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





function enableValidation(params) {

  const formList = Array.from(document.querySelectorAll(params.formSelector));

  formList.forEach((form) => {
  const fieldList = Array.from(form.querySelectorAll(params.inputSelector));
  const buttonElement = form.querySelector(params.submitButtonSelector);
  toggleButtonState(fieldList,buttonElement,params.inactiveButtonClass);
  fieldList.forEach((field)=>{
    field.addEventListener('input', function () {
      checkInputValidity(form, field, params.inputErrorClass, params.errorClass);
      toggleButtonState(fieldList,buttonElement,params.inactiveButtonClass);
  });
});
})
}

enableValidation({
  formSelector: '.popup__content',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__input_type_error'
});

/*
// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.popup__content', +
  inputSelector: '.popup__field', +
  submitButtonSelector: '.popup__button', +
  inactiveButtonClass: 'popup__button_disabled', +
  inputErrorClass: 'popup__input_type_error', +
  errorClass: 'popup__error_visible'
});
*/