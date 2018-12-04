"use strict";

/*

- Строки в JavaScript имеют внутреннюю кодировку Юникод. 
При написании строки можно использовать специальные символы, например \n и вставлять юникодные символы по коду.
- свойства length и методами charAt, toLowerCase/toUpperCase, substring/substr/slice (предпочтителен slice), trim
- Строки сравниваются побуквенно.
- буквы сравниваются по их кодам. Поэтому большая буква меньше маленькой, а буква ё вообще вне основного алфавита.
- Для правильного сравнения существует целый стандарт ECMA 402. Это не такое простое дело, много языков и много правил. 
Такое сравнение работает через вызов str1.localeCompare(str2).

*/


function ucFirst(str) {
  // возвращает строку str с заглавным первым символом
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('eugene'))


function checkSpam_(str) {
  // true, если строка содержит „viagra“ или „XXX“
  // false в остальных случаях
  if ((str.search(/viagra/i) != -1) || (str.search(/xxx/i) != -1)) {
    return true;
  }
  return false;
}
function checkSpam(str) {
  return ((str.search(/viagra/i) != -1) || (str.search(/xxx/i) != -1));
}
function checkSpam__(str) {
  var lowerStr = str.toLowerCase();

  return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
}
console.log(checkSpam('buy ViAgRA now')); // true
console.log(checkSpam('free xxxxx')); // true
console.log(checkSpam('innocent rabbit')); // false


function truncate(str, maxlength) {
  // если длина str превосходит maxlength – заменяет конец str на "...", 
  // так чтобы ее длина стала равна maxlength
  return (str.length > maxlength) ? (str.slice(0, maxlength - 3) + '...') :  str;  
}
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate('Всем привет!', 20));


function extractCurrencyValue(str) {
//из строки <стоимость товара> выделить число
  return str.match(/\d+.?\d+/)[0]; //match возвращает массив 
}
console.log(extractCurrencyValue('UA567 *'));
console.log(extractCurrencyValue('$0.50 '));
console.log(extractCurrencyValue('rub 4321.09 #'));