const inventory = {
  items: ['Knife', 'Gas mask'],

  add(itemName) {
    //console.log(itemName);
    console.log(`Adding ${itemName} to inventory`);
    //console.log(this);
    inventory.items.push(itemName);
  },

  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    //console.log(this.items);
    inventory.items = inventory.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
  //itemName;
};

invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
//
invokeInventoryAction('Gas mask', inventory.remove);
//// Invoking action on Gas mask
//// Removing Gas mask from inventory
//
console.log(inventory.items); // ['Knife', 'Medkit']
