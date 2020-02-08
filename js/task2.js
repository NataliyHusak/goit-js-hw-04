'use strict';

const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    this.items.push(itemName);
    return this.items
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
    return this.items
  },
};
console.log(inventory);

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking ${action.name} opeartion on ${itemName}`);
  action(itemName);
};

invokeInventoryAction('Аптечка', inventory.add.bind(inventory));
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction('Фильтр', inventory.remove.bind(inventory));
// Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']