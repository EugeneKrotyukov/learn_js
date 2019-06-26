"use strict";

/*
ООП в функциональном стиле
*/



function User() {
  // конструктор для создания объектов

  let firstName, surName; // приватное свойство

  this.setFirstName = function(newFirstName) {
    firstName = newFirstName;
  }

  this.setSurname = function(newSurName) {
    surName = newSurName;
  }

  this.getFullName = function() {
    return firstName + ' ' + surName;
  };
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");
console.log(user.getFullName()); // Петя Иванов




function CoffeeMachine(power, capacity) {
  // Конструктор кофеварок
  // power – мощность кофеварки, Вт (приватное свойство)
  // capacity - ёмкость кофеварки, мл (приватное свойство)

  let waterAmount = 0; // количество воды (приватное свойство)
  
  let WATER_HEAT_CAPACITY = 4200; // удельная теплоёмкость воды

  let timeId;
  
  // v1: вызвать getBoilTime с явным указанием контекста: getBoilTime.call(this)
  // v2: при объявлении привязать getBoilTime к объекту через bind
  // v3: скопировать this во вспомогательную переменную let self = this;

  this.getBoilTime = function() {
    // расчёт времени для кипячения (приватный метод)
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  };

  this.setWaterAmount = function(amount) {
    // метод для записи свойства waterAmount с проверкой
    let tempWaterAmount = waterAmount;
    tempWaterAmount += amount;

    if (tempWaterAmount < 0) {
      console.log('Значение должно быть положительным');
    } else if (tempWaterAmount > capacity) {
      console.log('Нельзя залить воды больше, чем ' + capacity);
    } else {
      waterAmount += amount;  
    }
  };

  this.getWaterAmount = function() {
    // метод для чтения приватного свойства waterAmount
    return waterAmount;
  };

  this.getPower = function() {
    return power;
  };

  function onReady() {
    // что делать по окончании процесса (приватный метод)
    console.log('Кофе готов!');
  };

  this.setOnReady = function(newOnReady) {
    // изменят onReady() в любой момент до её срабатывания
    onReady = newOnReady;
  };

  this.run = function() {
    // запуск кофеварки (публичный метод)
    timeId = setTimeout(onReady, getBoilTime());
  };
  
  this.stop = function(){
    // останавливать кипячение (публичный метод)
    clearTimeout(timeId);
  };

}

// создать кофеварку
let coffeeMachine = new CoffeeMachine(50000, 1000);
console.log('мощность кофеварки ' + coffeeMachine.getPower() + ' Вт');
coffeeMachine.setWaterAmount(200); // залить воды  
console.log('в кофеварке сейчас ' + coffeeMachine.getWaterAmount() + ' мл воды');
coffeeMachine.setWaterAmount(300); // залить воды  
console.log('в кофеварке сейчас ' + coffeeMachine.getWaterAmount() + ' мл воды');

coffeeMachine.setOnReady(function() {
  let amount = coffeeMachine.getWaterAmount();
  let boilTime = coffeeMachine.getBoilTime();
  console.log('Готов кофе: ' + amount + 'мл. Время приготовления: ' + boilTime);
});

coffeeMachine.run();
//coffeeMachine.stop();




