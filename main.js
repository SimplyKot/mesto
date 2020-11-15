(()=>{"use strict";var t={formSelector:".popup__content",inputSelector:".popup__field",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__field_type_error",errorClass:"popup__input_type_error"};function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var n,r;return n=t,(r=[{key:"renderAllItems",value:function(){var t=this;this._items.forEach((function(e){t.addItem(e,t._container)}))}},{key:"addItem",value:function(t){this._renderer(t,this._container)}}])&&e(n.prototype,r),t}();function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._params=e}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e,n,r){var o=t.querySelector("#".concat(e.id,"-error"));e.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.inputClass)}},{key:"_hideInputError",value:function(t,e,n){var r=t.querySelector("#".concat(e.id,"-error"));e.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.inputClass)}},{key:"_checkInputValidity",value:function(t,e,n){e.validity.valid?this._hideInputError(t,e,n):this._showInputError(t,e,e.validationMessage,n)}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(t,e,n){this._hasInvalidInput(t)?(e.classList.add(n.inactiveButtonClass),e.setAttribute("disabled","disabled")):(e.classList.remove(n.inactiveButtonClass),e.removeAttribute("disabled"))}},{key:"enableValidation",value:function(){var t=this,e=Array.from(this._form.querySelectorAll(this._params.inputSelector)),n=this._form.querySelector(this._params.submitButtonSelector);this._toggleButtonState(e,n,this._params),e.forEach((function(r){r.addEventListener("input",(function(){t._checkInputValidity(t._form,r,t._params),t._toggleButtonState(e,n,t._params)}))}))}}])&&r(e.prototype,n),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e,n,r,o,i,a){var u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._card=e,this._imagePopup=document.querySelector("#image"),this._imagePopupPicture=this._imagePopup.querySelector(".popup__image"),this._imagePopupTitle=this._imagePopup.querySelector(".popup__image-title"),this._deletePopup=document.querySelector("#delete"),this._cardTemplate=document.querySelector(n).content,this._cardElement=this._cardTemplate.cloneNode(!0),this._cardImage=this._cardElement.querySelector(".card__image"),this._cardLike=this._cardElement.querySelector(".card__like-button"),this._cardLikes=this._cardElement.querySelector(".card__likes"),this._cardDelete=this._cardElement.querySelector(".card__delete-button"),this._userId=a,this._handleCardClick=r,this._handleCardDelete=o,this._handleCardLike=i,this._liked=this._card.likes.some((function(t){return t._id==u._userId}))}var e,n;return e=t,(n=[{key:"_updateCard",value:function(t){var e=this;this._card=t,this._liked=this._card.likes.some((function(t){return t._id==e._userId})),this._cardLikes.textContent=this._card.likes.length}},{key:"_handleTrashButton",value:function(t){t.target.closest(".card").remove()}},{key:"_handleLikeButton",value:function(t){t.target.classList.toggle("card__like-button_active")}},{key:"_setEventListeners",value:function(){var t=this;this._cardElement.querySelector(".card__delete-button").addEventListener("click",(function(e){t._handleCardDelete(t._card._id)})),this._cardImage.addEventListener("click",(function(){t._handleCardClick()})),this._cardElement.querySelector(".card__like-button").addEventListener("click",(function(e){var n=t._liked?"DELETE":"ADD";t._handleCardLike(t._card._id,n).then((function(e){t._updateCard(e)})).then(t._handleLikeButton(e))}))}},{key:"_isOwner",value:function(){return this._card.owner._id==this._userId}},{key:"getCard",value:function(){return this._isOwner()||this._cardDelete.classList.add("card__delete-button_disabled"),this._cardElement.querySelector(".card").id=this._card._id,this._cardImage.setAttribute("src",this._card.link),this._cardImage.setAttribute("alt",this._card.name),this._cardElement.querySelector(".card__name").textContent=this._card.name,this._liked&&this._cardLike.classList.add("card__like-button_active"),this._cardLikes.textContent=this._card.likes.length,this._setEventListeners(),this._cardElement}}])&&i(e.prototype,n),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close-button"),this._handleEscapeClose=this._handleEscapeClose.bind(this),this._handleMouseOverlayClose=this._handleMouseOverlayClose.bind(this),this._setEventListeners()}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscapeClose),this._popup.addEventListener("click",this._handleMouseOverlayClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscapeClose),this._popup.removeEventListener("click",this._handleMouseOverlayClose)}},{key:"_handleEscapeClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleMouseOverlayClose",value:function(t){t.target===t.currentTarget&&this.close()}},{key:"_setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(e){t.close()}))}}])&&u(e.prototype,n),t}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(o){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return _(this,t)});function a(){return l(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"open",value:function(t,e){this._popup.querySelector(".popup__image").setAttribute("src",e),this._popup.querySelector(".popup__image").setAttribute("alt",t),this._popup.querySelector(".popup__image-title").textContent=t,p(h(a.prototype),"open",this).call(this)}}])&&f(e.prototype,n),a}(c);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return k(this,t)});function a(t){var e,n=t.popup,r=t.submitHandler;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,n))._submitButton=e._popup.querySelector(".popup__button"),e._submitButtonText=e._submitButton.textContent.trim(),e._submitHandler=r,e._inputValues={},e}return e=a,(n=[{key:"close",value:function(){this._formElement=this._popup.querySelector(".popup__content"),this._formElement.reset(),this._submitButton.textContent=this._submitButtonText,b(E(a.prototype),"close",this).call(this)}},{key:"_getInputValues",value:function(){var t=this;return Array.from(this._popup.querySelectorAll("input")).forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"_setEventListeners",value:function(){var t=this;this._formElement=this._popup.querySelector(".popup__content"),this._formElement.addEventListener("submit",(function(e){t._submitButton.textContent="Сохранение...",e.preventDefault(),t._submitHandler(t._getInputValues())})),b(E(a.prototype),"_setEventListeners",this).call(this)}}])&&m(e.prototype,n),a}(c);function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var C=function(){function t(e){var n=e.name,r=e.about,o=e.avatar,i=e.id,a=void 0===i?"":i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=n,this._info=r,this._avatar=o,this._id=a}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name,about:this._info,avatar:this._avatar,id:this._id}}},{key:"setUserId",value:function(t){var e=t._id;this._id=e}},{key:"getUserId",value:function(){return this._id}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._name=e,this._info=n}},{key:"setUserAvatar",value:function(t){var e=t.avatar;this._avatar=e}}])&&w(e.prototype,n),t}();function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var L=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var e,n;return e=t,(n=[{key:"_transmit",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={method:e,headers:this._headers};return n&&(r.body=JSON.stringify(n)),fetch(t,r).then((function(t){return t.ok?t.json():Promise.reject("Ошибка сервера (".concat(t.status,"): ").concat(t.statusText))})).catch((function(t){console.log(t)}))}},{key:"getInitialCards",value:function(){return this._transmit("".concat(this._baseUrl,"/cards"),"GET")}},{key:"getUserInfo",value:function(){return this._transmit("".concat(this._baseUrl,"/users/me"),"GET")}},{key:"editProfile",value:function(t){return this._transmit("".concat(this._baseUrl,"/users/me"),"PATCH",{name:t.name,about:t.about})}},{key:"addCard",value:function(t){return this._transmit("".concat(this._baseUrl,"/cards"),"POST",{name:t.name,link:t.link,likes:t.likes})}},{key:"deleteCard",value:function(t){return this._transmit("".concat(this._baseUrl,"/cards/").concat(t),"DELETE")}},{key:"setLike",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this._transmit("".concat(this._baseUrl,"/cards/likes/").concat(t),"DELETE"==e?"DELETE":"PUT")}},{key:"updateAvatar",value:function(t){return this._transmit("".concat(this._baseUrl,"/users/me/avatar"),"PATCH",{avatar:t.link})}}])&&O(e.prototype,n),t}();function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function q(t,e,n){return(q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return T(this,t)});function a(t){var e,n=t.popup,r=t.id,o=t.submitHandler;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,n))._submitHandler=o,e._id=r,e}return e=a,(n=[{key:"setId",value:function(t){this._id=t}},{key:"close",value:function(){this._formElement=this._popup.querySelector(".popup__content"),this._formElement.reset(),q(A(a.prototype),"close",this).call(this)}},{key:"_setEventListeners",value:function(){var t=this;this._formElement=this._popup.querySelector(".popup__content"),this._formElement.addEventListener("submit",(function(e){return e.preventDefault(),t._submitHandler(t._id).then((function(e){document.getElementById(t._id).remove(),t._id=""})).catch((function(t){return console.log("Произошла ошибка: ",t)})).finally(t.close())})),q(A(a.prototype),"_setEventListeners",this).call(this)}}])&&I(e.prototype,n),a}(c);function U(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var x=Array.from(document.querySelectorAll(t.formSelector)),D=document.querySelector(".profile__edit-button"),B=document.querySelector(".profile__add-button"),H=document.querySelector("#author").querySelector(".popup__content"),V=H.querySelector("input[name=name]"),M=H.querySelector("input[name=about]"),G=document.querySelector(".profile__text"),N=document.querySelector(".profile__avatar"),z=document.querySelector(".profile__edit-avatar"),J=G.querySelector(".profile__name"),$=G.querySelector(".profile__info"),F=document.querySelector(".cards__list"),K=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-17",headers:{authorization:"5b28e3f6-a4ef-488b-b893-2830e6e47a17","Content-Type":"application/json"}}),Q=new C({name:"",about:"",avatar:"",id:""},K);function W(){var t=Q.getUserInfo();J.textContent=t.name,$.textContent=t.about,N.setAttribute("src",t.avatar)}function X(){new y("#image").open(this._card.name,this._card.link)}Promise.all([K.getUserInfo().then((function(t){return Q.setUserInfo(t),Q.setUserAvatar(t),Q.setUserId(t),Q})),K.getInitialCards().then((function(t){return t}))]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(e,n)||function(t,e){if(t){if("string"==typeof t)return U(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=(r[0],r[1]);return W(),o})).then((function(t){var e=t.map((function(t){return t}));new n({items:e,renderer:et},".cards").renderAllItems()})).catch((function(t){console.log(t)}));var Y=new R({popup:"#delete",id:"",submitHandler:function(t){return K.deleteCard(t)}});function Z(t){Y.setId(t),Y.open()}function tt(t,e){return K.setLike(t,e)}function et(t,e){var n=new a(t,"#card-template",X,Z,tt,Q.getUserId());"start"!=e?F.append(n.getCard()):F.prepend(n.getCard())}var nt=new S({popup:"#author",submitHandler:function(t){K.editProfile(t).then((function(e){J.textContent=e.name,$.textContent=e.about,Q.setUserInfo(t),W()})).then((function(){return nt.close()}))}});D.addEventListener("click",(function(t){var e=Q.getUserInfo();V.value=e.name,M.value=e.about,nt.open()}));var rt=new S({popup:"#avatar",submitHandler:function(t){K.updateAvatar(t).then((function(e){N.setAttribute("src",t.link)})).then((function(){return rt.close()}))}});z.addEventListener("click",(function(t){return rt.open()}));var ot=new S({popup:"#place",submitHandler:function(t){K.addCard(t).then((function(t){et(t,"start")})).then((function(){return ot.close()}))}});B.addEventListener("click",(function(t){return ot.open()})),x.forEach((function(e){var n=new o(t,e);console.log(),n.enableValidation()}))})();