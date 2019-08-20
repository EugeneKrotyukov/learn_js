"use strict";

/*
Промисы
*/


function delay(ms) {
  // возвращает промис, который перейдёт в состояние «выполнен» через ms миллисекунд
  // или return new Promise(resolve => setTimeout(resolve, ms));
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(), ms);
  });
}

const MS = 2000;
delay(MS).then(() => console.log(`выполнилось через ${MS / 1000} секунд`));
  

