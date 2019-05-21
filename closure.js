function makeSimpleCounter() {
  // простой счетчик 
  let currentCount = 1;

  return function() {
    return currentCount++;
  };
}

let simpleCounter1 = makeSimpleCounter();
let simpleCounter2 = makeSimpleCounter();
console.log('Counter1: ', simpleCounter1()); // 1
console.log('Counter1: ', simpleCounter1()); // 2
console.log('Counter2: ', simpleCounter2()); // 1



function makeCounter() {
  // счетчик с методами
  let currentCount = 1;

  function counter() {
    return currentCount++;
  }

  counter.set = function(value) {
  	// метод set - устанавливает начальное значение
    currentCount = value;
  };
  
  counter.reset = function() {
  	// метод reset - сбрасывает счетчик
    currentCount = 1;
  };

  return counter;
}

let counter3 = makeCounter();
console.log('Counter3: ', counter3()); // 1
console.log('Counter3: ', counter3()); // 2
counter3.set(5);
console.log('set Counter3: ', counter3()); // 5



function sum(a){
  //  сумма через замыкание
  console.log(arguments.length);
  return function(b){
  	return a + b;
  };
}
console.log('Sum: ', sum(2)(3));



function makeBuffer(){
  // строковый буфер
  let stringBuffer = "";
  
  function buffer (value){
    if (arguments.length !== 0){
    	// buffer(value) - добавляет значение в буфер
      return stringBuffer += value; 
    };
    // buffer() – возвращает содержимое буфера
    return stringBuffer; 
  };
        
  buffer.clear = function(){
  	// очистить буфер
    stringBuffer = "";
  };
  return buffer;
}

// Создание объекта
let buffer = makeBuffer();
// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
// получить текущее значение
console.log('Содержимое буфера: ', buffer()); // Замыкания Использовать Нужно!
// очистить буфер
buffer.clear();
console.log('Содержимое буфера: ', buffer());



// Сортировка объекта по заданному полю 

// создать объект
let users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

// вариант1: сортировка по полю name
users.sort(function(a, b) {
  return a.name > b.name ? 1 : -1;
});
users.forEach(function(user) {
  console.log('v11 сортировка по name ', user.name);
}); // Вася, Маша, Петя

// вариант1: сортировка по полю age
users.sort(function(a, b) {
  return a.age > b.age ? 1 : -1;
});
users.forEach(function(user) {
  console.log('v12 сортировка по age ', user.name);
}); // Маша, Вася, Петя


function byField(fild) {
  return function(a, b) {
    return a[fild] > b[fild] ? 1 : -1;	
  };
}
// вариант2: сортировка по полю name
users.sort(byField('name'));
users.forEach(function(user) {
  console.log('v21 сортировка по name ', user.name);
}); // Вася, Маша, Петя

// вариант2: сортировка по полю age
users.sort(byField('age'));
users.forEach(function(user) {
  console.log('v22 сортировка по name ', user.name);
}); // Вася, Маша, Петя



// Фильтрация через функцию

function filter(arr, func) {
  // получает массив и возвращает новый, в который входят только те элементы, для которых func возвращает true
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function inBeetween(start, end) {
  // между start и end
  return function(elemInArrForFilter) {
    return elemInArrForFilter >= start && elemInArrForFilter <= end;
  };
}

function inArray(arr) {
  // равные массиву arr
  return function(elemInArrForFilter) {
    return arr.indexOf(elemInArrForFilter) != -1;
  };
}

let arrForFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('inBeetween', filter(arrForFilter, inBeetween(3, 6))); // 3,4,5,6
console.log('inArray', filter(arrForFilter, inArray([1, 2, 10]))); // 1,2



function makeArmy() {
  // Армия стрелков
  // каждый стрелок должен выводить свой номер
  // работает только через let
  // чтобы работал с var нужно использовать дополнительную функцию для того, чтобы «поймать» текущее значение i
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    let shooter = function() {
      console.log('номер стрелка ', i); // выводит свой номер
    };
    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy();
army[0](); // стрелок выводит 0
army[5]();