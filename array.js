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
console.log('matrix', matrix);

arr = [1, 2, 3, 4, 5];
// length - не количество элементов массива, а последний индекс + 1
console.log('length', arr.length);
// усечение массива
arr.length = 2; // укоротить до 2 элементов
console.log('length', arr);
arr.length = 5;
console.log('length', arr[4]); // undefined: значения не вернулись

let fruits = ["Яблоко", "Апельсин", "Груша"];
// pop - удаляет последний элемент из массива и возвращает его
let last = fruits.pop()
console.log('pop', last); 
console.log('pop', fruits);
// push - добавляет элемент в конец массива (можно добавлять сразу по несколько элементов)
fruits.push("Груша");
console.log('push', fruits);
// shift - удаляет из массива первый элемент и возвращает его
let first = fruits.shift();
console.log('shift', fruits);
// unshift - добавляет элемент в начало массива (можно добавлять сразу по несколько элементов)
fruits.unshift('Яблоко');
console.log('unshift', fruits);
//join - склеивает массив в строку, используя разделитель
let s = fruits.join(';')
console.log('join', s);
// split - превратить строку в массив, разбив ее по разделителю
console.log('split', s.split(';'));
console.log('split', "тест".split(''));
// splice – удалять элементы, вставлять элементы, заменять элементы
  // arr.splice(indexDel, numberDel, elem1, ...)
  // indexDel - индекс элемента с которого удалять
  // numberDel - кол-во элементов для удаления
  // elem1 - элемент вставить
// slice(begin, end) - опирует участок массива от begin до end, не включая end
let fruits2 = fruits.slice(1, 3); // элементы 1, 2 (не включая 3)
console.log('slice', fruits2);
// sort - сортирует массив на месте
let arr2 = [1, 2, 15]
console.log('sort', arr2.sort());

function compareNumeric(a, b) {
  return a - b;
}
console.log('sort', arr2.sort(compareNumeric));
// reverse - меняет порядок элементов в массиве на обратный.
console.log('reverse', arr2.reverse());
// concat(value1, value2, … valueN) создаёт новый массив, в который копируются элементы из arr, а также value1, value2, ... valueN.
console.log('concat', arr2.concat(3, 4));
// indexOf/lastIndexOf(earchElement, fromIndex)  возвращает номер элемента в массиве или -1, если его нет.
  // fromIndex Поиск начинается с номера
console.log('indexOf', arr2.indexOf(3)); 

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


function addClass(obj, cls) {
  // добавляет в список класс cls, но только если его там еще нет
  arr = obj.className.split(' ');
  if (arr.indexOf(cls) >= 0) {
  } else {
    arr.push(cls);
    obj.className = arr.join(' ');    
  }
  return obj.className; 
}

var obj = {
  className: 'open menu'
}
console.log(obj);
addClass(obj, 'new');
console.log(obj);
addClass(obj, 'open');
console.log(obj);
addClass(obj, 'me')
console.log(obj);


function camelizeEach(str) {
  //преобразует строки вида «my-short-string» в «myShortString»
  let arrIn = str.split('-');
  let arrOut = [];
    arrIn.forEach(function(elem) { 
    arrOut.push(elem.charAt(0).toUpperCase() + elem.slice(1));
  })
  return arrOut.join('');
}
console.log('camelizeEach', camelizeEach("background-color")); // backgroundColor
console.log('camelizeEach', camelizeEach("list-style-image")); // listStyleImage
console.log('camelizeEach', camelizeEach("-webkit-transition")); // WebkitTransition

function camelizeFor(str) {
  //преобразует строки вида «my-short-string» в «myShortString»
  let arrIn = str.split('-');
    for (let i = 0; i < arrIn.length; i++) {
      arrIn[i] = arrIn[i].charAt(0).toUpperCase() + arrIn[i].slice(1);
    }
  return arrIn.join('');
}
console.log('camelizeFor', camelizeFor("background-color")); // backgroundColor
console.log('camelizeFor', camelizeFor("list-style-image")); // listStyleImage
console.log('camelizeFor', camelizeFor("-webkit-transition")); // WebkitTransition


function removeClass(obj, cls) {
  // удаляет класс cls, если он есть
  let classes = obj.className.split(' ');
  for (let i = 0; i < classes.length; i++) {
     if (classes[i] == cls) {
      classes.splice(i, 1); // удалить класс
      i--;
    }
  }
  obj.className = classes.join(' ');
  return obj.className; 
}

obj = {
  className: 'my menu menu open'
};
console.log('removeClass', removeClass(obj, 'blabla')); // без изменений
console.log('removeClass', removeClass(obj, 'open')); // obj.className='my menu menu'
console.log('removeClass', removeClass(obj, 'menu')); // 'my'


function filterRangeInPlace(arr, a, b) {
  // удаляет из массива все числа вне диапазона a..b
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
    } else {
      arr.splice(i, 1); // удалить элемент
      i--;
    }
  }
}

let arrIn = [-1, 0, 1, 2, 3, 4, 5, 6];
console.log('Входной массив', arrIn);
filterRangeInPlace(arrIn, 2, 4);
console.log('Массив после фильтрации', arrIn);


function compareNumericReversed(a, b) {
  return b - a;
}
let arr3 = [5, 2, 1, -10, 8];
console.log('sortRevers', arr3.sort(compareNumericReversed)); // 8, 5, 2, 1, -10