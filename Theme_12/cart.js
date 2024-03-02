'use strict';
const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },
  set discountSet(promocode) {
    if (promocode === 'METHED') {
      this.discount += 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount += 21;
    }
  },
  calculateItemPrice() {
    const totalDiscount = this.items.reduce((total, item) =>
      total + item.price * item.quantity, 0);
    return totalDiscount * (1 - this.discount / 100);
  },
  add(name, price, quantity = 1) {
    const newItem = {name, price, quantity};
    this.items.push(newItem);
    this.increaseCount(quantity);
  },
  increaseCount(number) {
    this.count += number;
  },
  clear() {
    this.items = [];
    this.count = 0;
    this.discount = 0;
  },
  print() {
    const cartStr = JSON.stringify(this.items);
    const cartStr2 = JSON.stringify(this.totalPrice.toString());
    console.log(cartStr);
    console.log(cartStr2);
  },
};

cart.add('milk', 100, 3); // отрабатывает и выводит в консоль
cart.add('eggs', 75, 1); // отрабатывает и выводит в консоль
cart.add('tomato', 250, 4); // отрабатывает и выводит в консоль
cart.discountSet = 'METHED'; // применяем промокод
cart.print(); // выводим сумму корзины с скидкой

cart.clear();
cart.add('salt', 100, 2); // отрабатывает и выводит в консоль
cart.discountSet = 'NEWYEAR'; // применяем промокод
cart.print(); // выводим сумму корзины с скидкой
