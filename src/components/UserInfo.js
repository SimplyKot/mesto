export default class UserInfo {
  constructor({name,about,avatar,id = ''}) {
    this._name = name;
    this._info = about;
    this._avatar = avatar;
    this._id = id;
  }

  getUserInfo() {
    return {name:this._name,about:this._info,avatar:this._avatar,id:this._id}
    }

  setUserId({_id}) {
    this._id=_id;
  }

  getUserId() {
    return (this._id);
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