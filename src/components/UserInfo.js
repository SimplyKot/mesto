export default class UserInfo {
  constructor({name,about,avatar = ''}) {
    this._name = name;
    this._info = about;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {name:this._name,about:this._info,avatar:this._avatar}
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