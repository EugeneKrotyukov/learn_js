console.log('Object methods and call context')


//При объявлении объекта можно указать метод
let userOne = {
  name: 'Василий',
  sayHi: function() {
  	// метод
    console.log('Привет!');
  }
};
// Вызов метода у объекта
userOne.sayHi();



//методы объектов можно добавлять и удалять, в том числе и явным присваиванием
let userTwo = {
  name: 'Сеня'
};
userTwo.sayHi = function() { 
// присвоили метод после создания объекта
  console.log('Привет!');
};

// Вызов метода:
userTwo.sayHi();



let userThree = {
  name: "Cаша",
  hi: function() { console.log(this.name); },
  bye: function() { console.log("Пока"); }
};
userThree.name == "Петя" ? userThree.hi() : userThree.bye();



let arr = ["a", "b"];
arr.push( function() {
  console.log('вызов в контексте массива', this);
})
arr[2]();  // выведет массив



let calculator = {
  // калькулятор через объект
  read: function () {
    // метод read() запрашивает prompt два значения и сохраняет их как свойства объекта
    this.a = Number(prompt('введите первое число', 0));
    this.b = Number(prompt('введите второе число', 0));
  },
  sum: function () {
  	// метод sum() возвращает сумму этих двух значений
    return this.a + this.b;
  },
  mul: function () {
  	// метод mul() возвращает произведение этих двух значений
    return this.a * this.b;
  }
};

//calculator.read();
console.log('сумма ', calculator.sum());
console.log('произведение ', calculator.mul());



let ladderStandart = {
  // лестница
  step: 0,
  up: function() { 
  // вверх по лестнице
    this.step++;
  },
  down: function() { 
  // вниз по лестнице
    this.step--;
  },
  showStep: function() { 
  // вывести текущую ступеньку
    console.log('текущая ступенька стандарт', this.step);
  }
};
ladderStandart.up();
ladderStandart.up();
ladderStandart.down();
ladderStandart.showStep(); // 1


let ladderChaining = {
  // лестница методом чейнинг
  step: 0,
  up: function() { 
  // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { 
  // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { 
  // вывести текущую ступеньку
    console.log('текущая ступенька чейнинг', this.step);
    return this;
  }
};
ladderChaining.up().up().down().up().down().showStep(); // 1



function Calculator() {
  // калькулятор через конструктор

  this.read = function () {
    // метод read() запрашивает prompt два значения и сохраняет их как свойства объекта
    this.a = Number(prompt('введите первое число', 0));
    this.b = Number(prompt('введите второе число', 0));
  };
  this.sum = function () {
  	// метод sum() возвращает сумму этих двух значений
    return this.a + this.b;
  };
  this.mul = function () {
  	// метод mul() возвращает произведение этих двух значений
    return this.a * this.b;
  };
}

let calc = new Calculator();
//calc.read();
console.log('сумма ', calc.sum());
console.log('произведение ', calc.mul());



function Accumulator(startingValue) {
  // Аккумулятор через конструктор
 
  // startingValue устанавливает начальное значение
  // свойство value хранит текущее значение
  this.value = startingValue;
  
  this.read = function () {
    // запрашивает число и прибавляет к value
    this.value += Number(prompt('Сколько добавлять будем?', 0));
  };   
}

let accumulator = new Accumulator(1); // начальное значение 1
//accumulator.read(); // прибавит ввод prompt к текущему значению
console.log('Текущая сумма ', accumulator.value); // выведет текущее значение



function Calculator2() {
  // конструктор Calculator, который создаёт расширяемые объекты-калькуляторы
  let methods = {
    "-": function(a, b) { return a - b; },
    "+": function(a, b) { return a + b; }
  };

  this.calculate = function(str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]
    return methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    // name имя операции 
    // функция func(a,b), которая должна реализовывать операцию
    methods[name] = func;
  };
}

let calc2 = new Calculator2;
calc2.addMethod("*", function(a, b) { return a * b; });
calc2.addMethod("/", function(a, b) { return a / b; });
calc2.addMethod("**", function(a, b) { return Math.pow(a, b); });
console.log('результат calc2 ', calc2.calculate("2 ** 3") ); // 8



// Добавить get/set-свойства

function User(fullName) {
  this.fullName = fullName;
  
  Object.defineProperties(this, {

    firstName: {
      get: function() {
        return this.fullName.split(' ')[0];
      },
      set: function(newFirstName) {
        this.fullName = newFirstName + ' ' + this.lastName;
      }
    },

    lastName: {
      get: function() {
        return this.fullName.split(' ')[1];
      },
      set: function(newLastName) {
        this.fullName = this.firstName + ' ' + newLastName;
      } 
    }
    
  });
}

 
let vasya = new User("Василий Попкин");
console.log('чтение firstName ', vasya.firstName ); // Василий
console.log('чтение lastName ', vasya.lastName ); // Попкин
vasya.firstName = 'Петр'; // запись в firstName
vasya.lastName = 'Сидоров'; // запись в lastName
console.log('чтение нового fullName ', vasya.fullName); // Василий Сидоров