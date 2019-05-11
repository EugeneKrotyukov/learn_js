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
  // buffer(value) - добавляет значение
  // buffer() – возвращает содержимое буфера
  let stringBuffer = "";
  
  function buffer (value){
    if (arguments.length !== 0){
      return stringBuffer += value;
    };
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
buffer.clear();
console.log('Содержимое буфера: ', buffer());
