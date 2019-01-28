"use strict";

/*

Массив – это объект, где в качестве ключей выбраны цифры, 
с дополнительными методами и свойством length.

в функцию Массив передаётся по ссылке
*/


// создания нового массива
let arr = [];
// Многомерные массивы
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix);

arr = [1, 2, 3, 4, 5];
// length - не количество элементов массива, а последний индекс + 1
console.log(arr.length);
// усечение массива
arr.length = 2; // укоротить до 2 элементов
console.log(arr);
arr.length = 5;
console.log(arr[4]); // undefined: значения не вернулись

let fruits = ["Яблоко", "Апельсин", "Груша"];
// pop - удаляет последний элемент из массива и возвращает его
let last = fruits.pop()
console.log(last); 
console.log(fruits);
// push - добавляет элемент в конец массива (можно добавлять сразу по несколько элементов)
fruits.push("Груша");
console.log(fruits);
// shift - удаляет из массива первый элемент и возвращает его
let first = fruits.shift();
console.log(fruits);
// unshift - добавляет элемент в начало массива (можно добавлять сразу по несколько элементов)
fruits.unshift('Яблоко');
console.log(fruits);

// Перебор элементов
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

function random_value(arr) {
  // случайное значение из массива
  const min = 0;
  const max = arr.length - 1;
  const rand = min + Math.floor(Math.random() * (max + 1 - min)); // случайного целого от min to max включительно
  return arr[rand];  
}
console.log(random_value([1, 2, 3, 4, 5, 6, 7, 8, 9]));




(function () { // паттерн МОДУЛЬ
  // Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
  // Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
  // При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
  // Выводит сумму всех значений массива

  function isNumeric(n) {
    /* Проверка на число
    isFinite(n) преобразует аргумент к числу и возвращает true, если это не Infinity/-Infinity/NaN
    parseFloat преобразует аргумент к строке, а затем считывает из неё число, при этом пустая строка даёт NaN 
    */
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  let val;
  let arr = [];
  // ввод чисел от пользователя
  while (true) {
    val = prompt('Введите число', 0); // typeof(a) -> string
    if (!isNumeric(val)) {
      break;
    }
    arr.push(+val);
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  }
  alert(`Сумма всех значений массива ${sum}`);
}/*()*/)

function find(arr, value) {
  // ищет в массиве значение и возвращает его номер или -1, если не найдено
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
console.log(find(["test", 2, 1.5, false], "test"));
console.log(find(["test", 2, 1.5, false], 1))


function filterRange(arr, a, b) {
  // возвращает новый массив, который содержит числа из диапазона от a до b
  // Imperative approach
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filtered.push(arr[i]);
    } 
  }
  return filtered;
}
console.log(filterRange([5, 4, 3, 8, 0], 3, 5)); // [5, 4, 3]


console.log('--------------------------------------------');

//Declarative approach

function filterArray(arr, a, b) {
  arr.filter(function(elem) {
    console.log(a, b, elem);
    return (elem >= a && elem <= b);
  })
  return arr;
}

console.log(filterArray([5, 4, 3, 8, 0], 3, 5)); // [5, 4, 3]