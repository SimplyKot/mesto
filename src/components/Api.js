export default class Api {
  constructor({baseUrl,headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
    headers: this._headers
    })
  .then((res) => {
    if (!res.ok) {
      return Promise.reject('Server error');
  }
  return res.json();
  })
  .then((data) => {
    return data;
  })
  .catch(err => {
    console.log(err);
});
  }  

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
      })
    .then(res => res.json())
    .then((data) => {
      return data
    })
    .catch(err => consile.log(err))
  }

  editProfile(name, about) {
    fetch(`${this._baseUrl}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
    name: name,
    about: about
  })
}); 
  }
}
