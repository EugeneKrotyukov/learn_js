

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
  var waterAmount = 0;

  var timerId;

  this.isRunning = function() {
    return !!timerId;
  };

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

 this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.addWater = function(amount) {
    this.setWaterAmount(waterAmount + amount);
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  this.getPower = function() {
    return power;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };

  this.run = function() {
    timerId = setTimeout(function() {
      timerId = null;
      onReady();
    }, getTimeToBoil());
  };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);
coffeeMachine.addWater(200);
console.log( 'До: ' + coffeeMachine.isRunning() ); // До: false
coffeeMachine.run();
console.log( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true
coffeeMachine.setOnReady(function() {
  console.log( "После: " + coffeeMachine.isRunning() ); // После: false
});
coffeeMachine.run();








