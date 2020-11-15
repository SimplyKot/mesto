export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _transmit(url, method, body = "") {
    const localParam = { method: method, headers: this._headers };
    if (body) {
      console.log(body);
      localParam.body = JSON.stringify(body);
    }

    return fetch(url, localParam)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(
            `Ошибка сервера (${res.status}): ${res.statusText}`
          );
        }
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getInitialCards() {
    // `${this._baseUrl}/cards` GET
    return this._transmit(`${this._baseUrl}/cards`, "GET");
  }

  getUserInfo() {
    // `${this._baseUrl}/users/me` GET
    return this._transmit(`${this._baseUrl}/users/me`, "GET");
  }

  editProfile(data) {
    // `${this._baseUrl}/users/me` PATCH
    return this._transmit(`${this._baseUrl}/users/me`, "PATCH", {
      name: data.name,
      about: data.about,
    });
  }

  addCard(data) {
    // `${this._baseUrl}/cards POST
    return this._transmit(`${this._baseUrl}/cards`, "POST", {
      name: data.name,
      link: data.link,
      likes: data.likes,
    });
  }

  deleteCard(id) {
    // `${this._baseUrl}/cards/${id}` DELETE
    return this._transmit(`${this._baseUrl}/cards/${id}`, "DELETE");
  }

  // Атрибут action со значением DELETE снимает лайк
  setLike(id, action = "") {
    // `${this._baseUrl}/cards/likes/${id}` action == "DELETE" ? "DELETE" : "PUT"
    return this._transmit(
      `${this._baseUrl}/cards/likes/${id}`,
      action == "DELETE" ? "DELETE" : "PUT"
    );
  }

  updateAvatar(data) {
    // `${this._baseUrl}/users/me/avatar` PATCH
    return this._transmit(`${this._baseUrl}/users/me/avatar`, "PATCH", {
      avatar: data.link,
    });
  }
}
