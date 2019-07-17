"use strict";

/*
ООП в функциональном стиле
*/



function User() {
  // конструктор для создания объектов

  let firstName, surName; // приватное свойство

  this.setFirstName = function(newFirstName) {
    firstName = newFirstName;
  }

  this.setSurname = function(newSurName) {
    surName = newSurName;
  }

  this.getFullName = function() {
    return firstName + ' ' + surName;
  };
}

let user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");
//console.log(user.getFullName()); // Петя Иванов




function CoffeeMachine(power, capacity) {
  let waterAmount = 0;

  let timerId;

  this.isRunning = function() {
    return !!timerId;
  };

  const WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

 this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.addWater = function(amount) {
    this.setWaterAmount(waterAmount + amount);
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  this.getPower = function() {
    return power;
  };

  function onReady() {
    console.log( 'Кофе готов!' );
  }

  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };

  this.run = function() {
    timerId = setTimeout(function() {
      timerId = null;
      onReady();
    }, getTimeToBoil());
  };

}
/*
let coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);
coffeeMachine.addWater(200);
console.log( 'До: ' + coffeeMachine.isRunning() ); // До: false
coffeeMachine.run();
console.log( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true
coffeeMachine.setOnReady(function() {
  console.log( "После: " + coffeeMachine.isRunning() ); // После: false
});
coffeeMachine.run();
*/


/* 
Функциональное наследование

1. Объявляется конструктор родителя

function Machine(params) {
  // приватные (private) переменные и функции доступны только внутри Machine
  var privateProperty;

  // публичные (public) доступны снаружи
  this.publicProperty = ...;

  // защищённые (protected) доступны внутри Machine и для потомков
  // мы договариваемся не трогать их снаружи
  this._protectedProperty = ...
}

2. Для наследования конструктор потомка вызывает родителя в своём контексте через apply

function CoffeeMachine(params) {
  // универсальный вызов с передачей любых аргументов
  Machine.apply(this, arguments);

  this.coffeePublicProperty = ...
}

3. В CoffeeMachine свойства, полученные от родителя, можно перезаписать своими. 
Но обычно требуется не заменить, а расширить метод родителя. 
Для этого он предварительно копируется в переменную:

function CoffeeMachine(params) {
  Machine.apply(this, arguments);

  var parentProtected = this._protectedProperty;
  this._protectedProperty = function(args) {
    parentProtected.apply(this, args); 
  };
}
*/

function Machine(power) {
  this._power = power;
  this._enabled = false;

  let self = this;

  this.enable = function() {
    // используем внешнюю переменную вместо this
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };

}

function CoffeeMachine2(power) {
  Machine.apply(this, arguments); //наследование 

  let waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  let parentEnable = this.enable;
  this.enable = function() {
      parentEnable(); // теперь можно вызывать как угодно, this не важен
      this.run();
    }

  function onReady() {
    console.log( 'Кофе готово!' );
  }

  let parentDisable = this.disable; // переопределили метод 
      this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
      }

  this.run = function() {
    if (!this._enabled) {
      throw new Error("Кофеварка выключена");
    }
    setTimeout(onReady, 1000);
  };

}
/*
let coffeeMachine2 = new CoffeeMachine2(10000);
coffeeMachine2.run(); // ошибка, кофеварка выключена!
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!
*/



function Fridge(power) {
  Machine.apply(this, arguments); //наследование

  var parentDisable = this.disable; //расширение метода родителя
  this.disable = function() {
    if (foods.length) {
      throw new Error('Нельзя выключить. Внутри еда');
    }
    parentDisable(); 
  };

  let foods = [];

  this.addFood = function(...items) {
    if (!this._enabled) {
      throw new Error("Холодильник выключен. Добавить еду нельзя");
    }
    
    if (foods.length + items.length > this._power / 100) {
      throw new Error("Нельзя добавить, не хватает мощности");
    }
    
    items.forEach(function(item) {
        foods.push(item);
    });
  };

  this.removeFood = function(...items) {
      items.forEach(function(item) {
        let newFoods = foods.filter(function(food) {
        return food !== item;
        }); 
        foods = newFoods;
      });
  };

  this.filterFood = function(filter) {
    // возвращает всю еду, для которой func(item) == true
    return foods.filter(filter);
  };

  this.getFood = function() {
    return foods; 
  };
}


let fridge5 = new Fridge(700);
fridge5.enable();
fridge5.addFood('котлета');
fridge5.addFood('сок', 'варенье');
fridge5.removeFood('сок');
fridge5.addFood('тарелка', 'вилка', 'нож');
fridge5.removeFood('котлета', 'варенье', 'тарелка', 'вилка', 'нож');
console.log(`В холодильнике находиться ${fridge5.getFood()}`);

fridge5.addFood({
  title: "котлета",
  calories: 100
},
{
  title: "сок",
  calories: 30
},
{
  title: "зелень",
  calories: 10
},
{
  title: "варенье",
  calories: 150
});

console.log(`В холодильнике находиться ${fridge5.getFood().length} продукта`);
fridge5.removeFood("нет такой еды");

let dietItems = fridge5.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  console.log(item.title); // сок, зелень
  fridge5.removeFood(item);
});
console.log(`В холодильнике находиться ${fridge5.getFood().length} продукта`);
fridge5.disable(); // ошибка, в холодильнике есть еда









