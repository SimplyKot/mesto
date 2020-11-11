export default class UserInfo {
  constructor({name,about,avatar = ''},api) {
    this._name = name;
    this._info = about;
    this._avatar = avatar;
    this.api = api;
  }

  _updateData(newData) {
      this._name = newData.name;
      this._info = newData.about;
      this._avatar = newData.avatar;
  }

  getUserInfo() {
    this.api.getUserInfo().then((data)=>
    {this._updateData({name:data.name, about:data.about, avatar: data.avatar})
      return data;
    });

    return {name:this._name,about:this._info,avatar:this._avatar};
    }


  setUserInfo({name,about}) {
    //console.log(name, about, avatar);
    this._name = name;
    this._info = about;
  }

  setUserAvatar({avatar}) {
    //console.log(name, about, avatar);
    this._avatar = avatar;
  }
}