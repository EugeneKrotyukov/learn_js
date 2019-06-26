"use strict";

/*
ООП в функциональном стиле
*/


function CoffeeMachine(power, capacity) {
  // Конструктор кофеварок
  // power – мощность кофеварки (приватное свойство)
  // capacity - ёмкость кофеварки (приватное свойство)

  let waterAmount = 0; // количество воды (приватное свойство)
  
  let WATER_HEAT_CAPACITY = 4200; // удельная теплоёмкость воды

  let timeId;
  
  // v1: вызвать getBoilTime с явным указанием контекста: getBoilTime.call(this)
  // v2: при объявлении привязать getBoilTime к объекту через bind
  // v3: скопировать this во вспомогательную переменную let self = this;

  function getBoilTime() {
    // расчёт времени для кипячения (приватный метод)
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // метод для записи  свойства waterAmount с проверкой
    if (amount < 0) {
      throw new Error('Значение должно быть положительным');
    }
    if (amount > capacity) {
      throw new Error('Нельзя залить воды больше, чем ' + capacity);
    }
    waterAmount = amount;
  }

  this.getWaterAmount = function() {
    // метод для чрения приватного свойства waterAmount
    return waterAmount;
  };

  function onReady() {
    // что делать по окончании процесса (приватный метод)
    console.log('Кофе готов!');
  }

  this.run = function() {
    // запуск кофеварки (публичный метод)
    timeId = setTimeout(onReady, getBoilTime());
  }
  
  this.stop = function(){
    // останавливать кипячение (публичный метод)
    clearTimeout(timeId);
  };

}

// создать кофеварку
let coffeeMachine = new CoffeeMachine(50000);
// залить воды
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
//coffeeMachine.stop();