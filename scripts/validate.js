class Validator {
  constructor (params, form) {
    this._form = form;
    this._params = params;
  }


_showInputError(formElement, inputElement, errorMessage, params) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(params.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(params.inputClass);
}

_hideInputError(formElement, inputElement, params) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(params.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(params.inputClass);
};


_checkInputValidity(formElement, inputElement, params) {
  if (!inputElement.validity.valid) {
    this._showInputError(formElement, inputElement, inputElement.validationMessage, params);
  }
  else {
    this._hideInputError(formElement, inputElement, params);
  }
};

_hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

_toggleButtonState = (inputList, buttonElement, params) => {
  if (this._hasInvalidInput(inputList)) {
    buttonElement.classList.add(params.inactiveButtonClass);
    buttonElement.setAttribute('disabled','disabled');
  }
  else {
    buttonElement.classList.remove(params.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

enableValidation() {
    const fieldList = Array.from(this._form.querySelectorAll(this._params.inputSelector));
    const buttonElement = this._form.querySelector(this._params.submitButtonSelector);
    this._toggleButtonState(fieldList, buttonElement, this._params);
    fieldList.forEach((field) => {
      field.addEventListener('input', () => {
        this._checkInputValidity(this._form, field, this._params);
        this._toggleButtonState(fieldList, buttonElement, this._params);
      });
    });
}

}




