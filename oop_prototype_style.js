"use strict";

/*
ООП в прототипном стиле
*/


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