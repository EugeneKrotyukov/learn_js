"use strict";

/*

Ассоциативный массив – структура данных, в которой можно хранить любые данные в формате ключ-значение
Объект может содержать в себе любые значения, которые называются свойствами объекта
оступ к свойствам осуществляется по имени свойства («по ключу»).

Порядок перебора соответствует порядку объявления для нечисловых ключей, 
а числовые – сортируются (в современных браузерах).

В переменной, которой присвоен объект, хранится не сам объект, а «ссылка» на него.

*/


// создание пустого объекта
let person = {};
// запись свойства
person.name = 'Вася';
person.age = 25;
// если имя свойства хранится в переменной, то единственный способ к нему обратиться – это квадратные скобки person[key]
person['любимый стиль музыки'] = 'Джаз';
// чтение свойства
console.log(person.name  + ' : ' + person.age)
// удаление свойства
delete person.age;
// проверка на существование у объекта свойства
if ("name" in person) {
  console.log( "Свойство name существует!" );
}
// Объект можно заполнить значениями при создании
let user = {
  name: "Таня",
  age: 25,
  size: {
    top: 90,
    middle: 60,
    bottom: 90
  }
}
console.log(user.size.top);

//перебор свойств
for (let key in user) {
  console.log( "Ключ: " + key + " значение: " + user[key] );
}



function isEmpty(obj) {
  // возвращает true, если в объекте нет свойств
  // false – если хоть одно свойство есть
  for (let key in obj) {
    return false;
  }
  return true;  
}
let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "подъём";
console.log(isEmpty(schedule)); // false



var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
function sum_salary(obj) {
  // сумма всех зарплат
  // если объект пустой, то результат должен быть 0
  let sum = 0; 
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;   
}
console.log(sum_salary(salaries));



let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj) {
  // умножает все численные свойства на 2
  function isNumeric(n) {
  	// если n число - true
  	// если n не число - false
  return !isNaN(parseFloat(n)) && isFinite(n)
  }
  for (let key in obj) {
  	if (isNumeric(obj[key])) {
  	  obj[key] *= 2;	
  	}
  }
}

multiplyNumeric(menu);
for (let key in menu) {
  console.log(key + ' : ' + menu[key]);
}