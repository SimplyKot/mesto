export default class Section {
  constructor ({items, renderer}, containerElement) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerElement);
    //console.log(this._items);
  }

  renderAllItems(){
    const items = this._items;
    console.log(items);
    items.forEach(
      function(item)  {
        console.log(item)}
        );
      //this.addItem(item,this._container)
      //});
  }

  addItem(item, container) {
    
    this._renderer(item, container);    
  }
}