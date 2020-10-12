function showInputError(formElement, inputElement, errorMessage, params) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(params.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(params.inputClass);
}

function hideInputError(formElement, inputElement, params) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(params.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(params.inputClass);
};


function checkInputValidity(formElement, inputElement, params) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, params);
  }
  else {
    hideInputError(formElement, inputElement, params);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement, params) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(params.inactiveButtonClass);
  }
  else {
    buttonElement.classList.remove(params.inactiveButtonClass);
  }
};





function enableValidation(params) {

  const formList = Array.from(document.querySelectorAll(params.formSelector));

  formList.forEach((form) => {
    const fieldList = Array.from(form.querySelectorAll(params.inputSelector));
    const buttonElement = form.querySelector(params.submitButtonSelector);
    toggleButtonState(fieldList, buttonElement, params);
    fieldList.forEach((field) => {
      field.addEventListener('input', function () {
        checkInputValidity(form, field, params);
        toggleButtonState(fieldList, buttonElement, params);
      });
    });
  })
}


