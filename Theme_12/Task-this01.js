'use strict';

const rectangle = {
  width: 5,
  height: 5,
  setWidth: function(value) {
    if (typeof value === 'number') {
      this.width = value;
    } else { console.log('Введите корректный размер ширины прямоугольника'); }
  },
  setHeight: function(value) {
    if (typeof value === 'number') {
      this.height = value;
    } else { console.log('Введите корректный размер высоты прямоугольника'); }
  },
  getPerimeter: function() {
    return ((this.width + this.height) * 2);
  },
  getSquare: function() {
    return (this.width * this.height);
  },
} 
rectangle.setWidth(20);
rectangle.setHeight(30);
console.log(rectangle.getPerimeter() + ' ' + 'см');
console.log(rectangle.getSquare() + ' ' + 'см');