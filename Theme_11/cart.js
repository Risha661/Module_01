'use strict'
const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    get totalPrice() {
        return this.calculateItemPrice();
    },

    calculateItemPrice() {
        return (this.items.reduce((total, item) => total + item.price * item.quantity, 0)); // отрабатывает и выводит в консоль
    },

    add(name, price, quantity = 1) {
        const newItem = { name, price, quantity };
        this.items.push(newItem);
        this.increaseCount(quantity);
    },

    increaseCount(number) {
        this.count += number;
    },

    clear() {
        this.items = [];
        this.count = 0;
    },
    
    print() {
        const cartStr = JSON.stringify(this.items);
        const cartStr2 = JSON.stringify(this.totalPrice.toString());
        console.log(cartStr);
        console.log(cartStr2);
    },
}
cart.add('milk', 100, 3); // отрабатывает и выводит в консоль
cart.add('eggs', 75, 1); // отрабатывает и выводит в консоль
cart.add('tomato', 250, 4); // отрабатывает и выводит в консоль
cart.calculateItemPrice();
cart.print();
cart.clear();
cart.print();

