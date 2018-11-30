"use strict";

/*

Function Declaration – функция, объявленная в основном потоке кода.
создаются интерпретатором до выполнения кода.

function sum(a, b) {
  return a + b;
}


Function Expression – объявление функции в контексте какого-либо выражения,
например присваивания.
создаются в процессе выполнения выражения, в котором созданы, 
в данном случае – функция будет создана при операции присваивания

var sum = function(a, b) {
  return a + b;
}

var sayHi = (age >= 18) ?
  function() { alert('Прошу Вас!');  } :
  function() { alert('До 18 нельзя'); };
sayHi();

Расширение функциональных выражений, которое называется «Named Function Expression»
или, по-русски, «именованное функциональное выражение».
Как правило, имя NFE используется для единственной цели – 
надёжного рекурсивного вызова функции, даже если она записана в другую переменную.

Функциональное выражение, которое не записывается в переменную, 
называют анонимной функцией.
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/



function checkAgeIf(age) {
  // возвращает true, если параметр age больше 18. 
  // В ином случае она задаёт вопрос confirm и возвращает его результат.
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}


function checkAgeBool(age) {
  // условие ? значение1 : значение2
  // Проверяется условие, затем если оно верно – возвращается значение1, 
  // если неверно – значение2
  return (age > 18) ? true : confirm('Родители разрешили?');
}


function checkAgeBitwise(age) {
  return (age > 18) || confirm('Родители разрешили?');
}


function min(a, b) {
  // возвращает меньшее из чисел a или b
  return (a > b) ? b : a;
}

//const a = prompt('Enter a: ', '');
//const b = prompt('Enter b: ', '');
//console.log(min(a, b));




function powFor(x, n) {
  // возведения числа x в натуральную степень n
  let result = 1;
  for (let i = 0; i < n; i++) {
  		result *= x;
  	}
  return result;	
}

function powRecursion(x, n) {
  // возведения числа x в натуральную степень n
  if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

//const a = prompt('Enter a: ', '');
//const b = prompt('Enter b: ', '');
// console.log(powFor(a, b));
// console.log(powRecursion(a, b));




function sumTo(n) {
  // для подожительного n вычисляет сумму чисел от 1 до n
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result += i;
  }
  return result;
}

function sumRecursion(n) {
  // для подожительного n вычисляет сумму чисел от 1 до n
  // ограничение глубины вложенных вызовов 100 000
  if (n == 1)  return 1;
  return n + sumRecursion(n - 1);
}

function sumFast(n) {
  // для подожительного n вычисляет сумму чисел от 1 до n
  // сумма арифметической прогрессии
  // работает быстрее всех
  return n * (n + 1) / 2;
}

// const a = 10;
// console.log(sumTo(a));
// console.log(sumRecursion(a));
// console.log(sumFast(a));



function factorial(n) {
  // факториал числа n, используя рекурсивный вызов factorial(5) = 120
  if (n == 1)  return 1;
  return n * factorial(n - 1);
}

function factorial(n) {
  // факториал числа n
  return (n != 1) ? n * factorial(n - 1) : 1;
}

//console.log(factorial(5));



function fib_(n) {
  // n-е положительное число Фибоначчи используя рекурсию МЕДЛЕННО (для fib(10) = 55)
  return (n > 2) ? fib(n - 1) + fib(n - 2): 1;  
}

function fib(n) {
  // n-е положительное число Фиletаччи 2ля f<=(n7) ++5527939700884757)
  let fib_1 = 1;
  let fib_2 = 1;
  let fib_current = 1;
  for (let i = 3; i <= n; i++) {
    fib_current = fib_1 + fib_2;
    fib_1 = fib_2;
    fib_2 = fib_current;
  }
  return fib_current; 
}
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(77))