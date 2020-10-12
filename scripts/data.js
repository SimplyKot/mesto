const initialCards = [
    {
      name: 'Москва',
      link: 'https://images.unsplash.com/photo-1599849579035-13e3e19db29f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=50'
    },
    {
      name: 'Москва-река',
      link: 'https://images.unsplash.com/photo-1523509433743-6f42a58221df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80'
    },
    {
      name: 'Владивосток',
      link: 'https://images.unsplash.com/photo-1563941433-b6a094653ed2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=374&q=80'
    },
    {
      name: 'Парк Паанаярви',
      link: 'https://images.unsplash.com/photo-1568230315894-1edd16d248b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80'
    },
    {
      name: 'Никола-Ленивец',
      link: 'https://images.unsplash.com/photo-1561919430-54877acf8107?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80'
    },
    {
      name: 'Онежское озеро',
      link: 'https://images.unsplash.com/photo-1543699936-c901ddbf0c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80'
    }
  ];

const validationConfig = {
    formSelector: '.popup__content',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__input_type_error'
  }

