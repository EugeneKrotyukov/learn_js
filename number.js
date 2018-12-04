"use strict";

/*

Числа могут быть записаны в десятеричной, шестнадцатиричной системах, а также «научным» способом.
В JavaScript существует числовое значение бесконечность Infinity.
Ошибка вычислений дает NaN.
Арифметические и математические функции преобразуют строку в точности в число, игнорируя начальные и конечные пробелы.
Функции parseInt/parseFloat делают числа из строк, которые начинаются с числа.
Есть четыре способа округления: Math.floor, Math.round, Math.ceil и битовый оператор. Для округления до нужного знака используйте +n.toFixed(p) или трюк с умножением и делением на 10p.
Дробные числа дают ошибку вычислений. При необходимости ее можно отсечь округлением до нужного знака.
Случайные числа от 0 до 1 генерируются с помощью Math.random(), остальные – преобразованием из них.

*/



(function () { // паттерн МОДУЛЬ
  // предлагает ввести два числа и выводит их сумму

  function isNumeric(n) {
    /* Проверка на число
    isFinite(n) преобразует аргумент к числу и возвращает true, если это не Infinity/-Infinity/NaN
    parseFloat преобразует аргумент к строке, а затем считывает из неё число, при этом пустая строка даёт NaN 
    */
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  let a;
  let b;
  let isround = 0;
  // ввод чисел от пользователя
  let enter = true;
  while (enter == true) {
    a = prompt('Введите первое число', 0); // typeof(first) -> string
    isNumeric(a) ? enter = false : alert('не верное число');
  }
  enter = true;
  while (enter == true) {
    b = prompt('Введите второе число', 0);
    isNumeric(b) ? enter = false : alert('не верное число');  
  }
  // округление N знаков после запятой
  let a_match = a.search(/./); 
  let b_match = b.search(/./);
  if ((a_match >= 0) || (b_match >= 0)) {
    isround = ((a_match) >= (b_match)) ? (a.length - a_match - 1) : (b.length - b_match - 1);
  }

  const result = (+a) + (+b); // typeof(result) -> number
  alert(`${a} + ${b} = ${result.toFixed(isround)}`); // шаблонные строки
}/*()*/)



function random_0_n(n) {
  // случайное значение в диапазоне от 0 до n
  return (n * Math.random());  
}
console.log(random_0_n(10));


function random_n_m(n, m) {
  // случайное число от n до m
  return (Math.random() * (m - n) + n); 
}
console.log(random_n_m(10, 20));


function randomInteger(n, m) {
  // случайное целое число между n и m, включая n,m
  return (Math.floor(Math.random() * (m - n + 1)) + n); 
}
console.log(randomInteger(10, 20));