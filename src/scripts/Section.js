export default class Section {
  constructor ({items, renderer}, containerElement) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerElement);
  }

  renderAllItems(){
    this._items.forEach((item)=>this.addItem(item,this._container));
  }

  addItem(item) {
    this._renderer(item,this._container);
  }
}