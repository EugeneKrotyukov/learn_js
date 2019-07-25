"use strict";

/*
ООП в прототипном стиле
*/

console.dir([1,2,3]);

// Изменение встроенных прототипов

String.prototype.repeat = function(times) {
	// repeat: метод для многократного повторения строки
  return new Array(times + 1).join(this);
};
console.log('repeat: ', 'ля'.repeat(3)); // ляляля




Object.prototype.each = function(f) {
	// each: метод который будет применять func к каждому свойству
  for (let prop in this) {
    let value = this[prop];
    f.call(value, prop, value);
  }
};

// дескриптор: Object.defineProperty(obj, prop, descriptor)
Object.defineProperty(Object.prototype, 'each', {
  enumerable: false
});

let user = {
  name: 'Вася',
  age: 25
};
user.each(function(prop, val) {
  console.log('each: ', prop); // name -> age
});



Function.prototype.defer = function(ms) {
	// добавляет всем функциям в прототип метод defer(ms), 
	// который возвращает обёртку, откладывающую вызов функции на ms миллисекунд
	let f = this;
	return function() {
	  let args = arguments,
	      context = this;
	  setTimeout(function() {
	  	f.apply(context, args);
	  }, ms);
	}
}

function fTest(a, b) {
  console.log('вывод результат через ms', a + b);
}
fTest.defer(1000)(1, 2); // выведет результат через 1 секунду




// Кофеварка в прототипном стиле
function CoffeeMachine(power) {
  this._waterAmount = 0;
  this._power = power;
}

CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;  

CoffeeMachine.prototype._getTimeToBoil = function(){
  return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;	
}

CoffeeMachine.prototype.run = function() {
  setTimeout(function() {
    console.log('Кофе готов!');
  }, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
  this._waterAmount = amount;
};

let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();




// ПОЛНЫЙ КОД НАСЛЕДОВАНИЯ
// rabbit -> Rabbit.prototype -> Animal.prototype
// Rabbit.prototype.__proto__ = Animal.prototype; // не поддерживается в IE10-

function Animal(name) {
  // Конструктор Animal
  this.name = name;
  this.speed = 0;
}

Animal.prototype.stop = function() {
  // Метод stop в прототип
  this.speed = 0;
  console.log(this.name + ' стоит');
}

Animal.prototype.run = function(speed) {
	// Метод run в прототип
  this.speed += speed;
  console.log(this.name + ' бежит, скорость ' + this.speed);
};


function Rabbit(name) {
  // Конструктор Rabbit
  Animal.apply(this, arguments); //запустит Animal в контексте текущего объекта, со всеми аргументами, она выполнится и запишет в this всё, что нужно
}

// Наследование 
Rabbit.prototype = Object.create(Animal.prototype); // сразу после объявления конструктора
Rabbit.prototype.constructor = Rabbit; // сохраняем свойство constructor

Rabbit.prototype.jump = function() {
  // Методы Rabbit
  this.speed++;
  console.log(this.name + ' прыгает, скорость ' + this.speed);
}

Rabbit.prototype.run = function(speed) {
  // расширение метода родителя
  Animal.prototype.run.apply(this, arguments); // вызвать метод родителя, передав ему текущие аргументы
  this.jump();
 }

// Готово, можно создавать объекты
let rabbit = new Rabbit('Кроль');
rabbit.run();