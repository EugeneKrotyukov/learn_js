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


function filterRangeFor(arr, a, b) {
  // возвращает новый массив, который содержит только числа из arr из диапазона от a до b
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filtered.push(arr[i]);
    } 
  }
  return filtered;
}

function filterRangeEach(arr, a, b) {
  // возвращает новый массив, который содержит только числа из arr из диапазона от a до b
  let filtered = [];
    arr.forEach(function(elem) {
      if (elem >= a && elem <= b) {
        filtered.push(elem);
      } 
    })
  return filtered;
}

function filterRangeFilter(arr, a, b) {
  // возвращает новый массив, который содержит только числа из arr из диапазона от a до b
  return arr.filter(function(elem) {
    return elem >= a && elem <= b;
  });
}

console.log('filterRangeFor', filterRangeFor([5, 4, 3, 8, 0], 3, 5)); // теперь filtered = [5, 4, 3]
console.log('filterRangeEach', filterRangeEach([5, 4, 3, 8, 0], 3, 5));
console.log('filterRangeFilter', filterRangeFilter([5, 4, 3, 8, 0], 3, 5));


function eratosthenesSieve(n) {
  // решето Эратосфена до n включительно
  let simple = []; 
  // список последовательных чисел от 2 до n
  for (let i = 2; i <= n; i++) {
      simple.push(i);
    }
  // взять первое число
  for (let i = 0; i < n; i++) {
    let p = simple[i];
    if (Boolean(p)) {
      //  все числа 2*р, 3*р и т.д. обнулить
      for (let j = 2; j*p <= n; j++) {
        let index = simple.indexOf(j*p);
        if (index > 0) {
          simple[index] = 0;
        }
      }
    }
  }
  // сумма всех простых чисел до n
  return simple.reduce(function(sum, elem){
    return sum + elem;
  })   
}

console.log('Eratosthenes Sieve', eratosthenesSieve(100)); // для 100 - 1060


function getMaxSubSum(arr) {
  // Подмассив наибольшей суммы
  // Будем идти по массиву и накапливать в некоторой переменной s текущую частичную сумму. 
  // Если в какой-то момент s окажется отрицательной, то мы просто присвоим s=0. 
  // Максимум из всех значений переменной s, случившихся за время работы, и будет ответом. 
  let ans = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    ans = Math.max(ans, sum);
    sum = Math.max(sum, 0);
    // console.log('i=', i, 'sum=', sum, 'ans=', ans);
  }
  return ans;
}
console.log('getMaxSubSum: ', getMaxSubSum([-1, 2, 3, -9])); // 5
console.log('getMaxSubSum: ', getMaxSubSum([2, -1, 2, 3, -9])); // 6
console.log('getMaxSubSum: ', getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log('getMaxSubSum: ', getMaxSubSum([-2, -1, 1, 2])); // 3
console.log('getMaxSubSum: ', getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log('getMaxSubSum: ', getMaxSubSum([1, 2, 3])); // 6
console.log('getMaxSubSum: ', getMaxSubSum([-1, -2, -3])); // -1