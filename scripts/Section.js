export default class Section {
  constructor ({items, renderer},containerElement) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = containerElement;
    console.log(this);
  }

  renderAllItems(){
    this._items.forEach((item)=>this.addItem(item));
  }

  addItem(item) {
    this._renderer(item,'end');
  }
}