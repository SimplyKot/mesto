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
    .then((res) => {
      if (!res.ok) {
        return Promise.reject('Server error');
    }
    return res.json();
    })
    .then((data) => {
      return data
    })
    .catch(err => console.log(err))
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
    name: data.name,
    about: data.about
  })
}).then((res) => {
  if (!res.ok) {
    return Promise.reject('Server error');
}
return res.json();
})
.catch(err => {
  console.log(err);
}); 
  }

  addCard(data) {
    //console.log(data);
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
      name: data.name,
      link: data.link,
      likes: data.likes
    })
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject('Server error');
  }
  return res.json();
  })
  .catch(err => {
    console.log(err);
  }); 
  }
}
