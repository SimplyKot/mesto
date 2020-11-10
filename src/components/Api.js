export default class Api {
  constructor({baseUrl,headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    let cards = [];
    fetch(`${this._baseUrl}/cards`, {
    headers: this._headers
})
  .then(res => res.json())
  .then((res) => {
    res.forEach(item => cards.push(item));
  });
  return cards;
  }

  // другие методы работы с API
}
