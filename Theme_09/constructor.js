"use strict";

class Cart {
  constructor(items = []) {
    this.goods = items;
    this.totalPrice = 0;
    this.count = 0;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  calculateGoodsPrice() {
    this.totalPrice = this.goods.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return this.totalPrice;
  }

  addGoods(item) {
    this.goods.push(item);
    this.increaseCount();
    this.calculateGoodsPrice();
  }

  increaseCount() {
    this.count += 1;
  }

  clear() {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
  }

  print() {
    console.log(JSON.stringify(this.goods));
    console.log("Общая стоимость корзины = " + this.totalPrice);
  }
};

class Goods {
  constructor(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }
};

class FoodGoods extends Goods {
  constructor(name, price, discount, calories) {
    super(name, price, discount);
    this.calories = calories;
  }
};

class ClothingGoods extends Goods {
  constructor(name, price, discount, material) {
    super(name, price, discount);
    this.material = material;
  }
};

class TechnicsGoods extends Goods {
  constructor(name, price, discount, technic) {
    super(name, price, discount);
    this.technic = technic;
  }
};

const cart = new Cart();
const apple = new FoodGoods('Яблоко', 10, 0, 52);
const shirt = new ClothingGoods('Футболка', 20, 0, 'Хлопок');
const mobile = new TechnicsGoods('Смартфон Xiaomi', 223, 12, 'Металл');

cart.addGoods({ ...apple, quantity: 2 });
cart.addGoods({ ...shirt, quantity: 1 });
cart.addGoods({ ...mobile, quantity: 13 });

cart.print();
