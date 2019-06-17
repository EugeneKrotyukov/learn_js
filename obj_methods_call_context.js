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



//Статические и фабричные методы
function Article() {
  this.created = new Date();
  // Подсчёт общего количества созданных объектов
  Article.count++;
  // Запоминание даты последнего созданного объекта
  Article.last = this.created;
  Article.showStats = function() {
    console.log('Всего создано объектов Article ', Article.count);
    console.log('Дата создания последнего объекта Article ', Article.last);
  }
}

Article.count = 0; // начальное значение
new Article();
new Article();
Article.showStats(); // Всего: 2, Последняя: (дата)
new Article();
Article.showStats(); // Всего: 3, Последняя: (дата)



// Явное указание this: "call", "apply"

function sumArgs() {
  // суммирует все свои аргументы
  arguments.reduce = [].reduce; // скопируем reduce из массива
  return arguments.reduce(function(a, b) {
    return a + b; 
  });
}

console.log('Сумма всех аргументов ', sumArgs(1, 2, 3)); // 6



function applyAll(func) {
  // applyAll(func, arg1, arg2...) => func(arg1, arg2...)
  //передать в func все аргументы, начиная со второго, и возвратить результат
  return func.apply(this, [].slice.call(arguments, 1));

}

function sum() {
  // суммирует аргументы
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { 
  // перемножает аргументы
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

console.log('сумма ', applyAll(sum, 1, 2, 3) ); // 6
console.log('произведение ', applyAll(mul, 2, 3, 4) ); // 24



// Декораторы

function workOneArg(a) {
  // work - произвольная функция, один аргумент
  return a;
}

function makeLogging(f, log) {
  // сохраняет аргумент функции
  // f - функция одного аргумента
  // log - массив в который сохраняются аргументы f
  function wrapper(a) {
    log.push(a);
    return f.call(this, a); // текущий контекст и аргументы передаются f
  }
  return wrapper;
}

let logOneArg = [];
workOneArg = makeLogging(workOneArg, logOneArg);
workOneArg(1); // 1, добавлено в log
workOneArg(5); // 5, добавлено в log
console.log('Лог функции одного аргумента: ' + logOneArg);



function workManyArg(a, b) {
  return (a + b);
}

function makeLoggingManyArg(f, log) {
  // сохраняет имя функции, аргументы и результат
  // f - функция многих аргументов
  // log - массив в который сохраняются аргументы f
  function wrapper() {
    let result = f.apply(this, arguments); // текущий контекст и аргументы передаются f
    log.push(f.name);
    log.push([].slice.call(arguments)); // копируем методы массива для объекта arguments
    log.push(result);
    return result;
  }
  return wrapper;
}

let logManyArg = [];
workManyArg = makeLoggingManyArg(workManyArg, logManyArg);
workManyArg(1, 2);
workManyArg(4, 5);
console.log('Лог функции многих аргументов: ' + logManyArg);



// Полиморфная функция
function formatDate(date) {
  // возвращает дату в формате dd.mm.yy
    // arg - объект Date.
    // arg- строку, yyyy-mm-dd
    // arg- число секунд с 01.01.1970.
    // arg- массив [гггг, мм, дд], месяц начинается с нуля

  let options = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
  };

  if (toString.call(date) === '[object Date]') { // Для получения [[Class]] нужна именно внутренняя реализация toString стандартного объекта Object
  
  } else if (typeof(date) === 'string') {
    // return date.split('-').reverse().join('.');
  
  } else if (typeof(date) === 'number') {
  
  } else if (toString.call(date) === '[object Array]') {
    date[1] = date[1] + 1;
  
  } else {
    console.log('Неизвестный формат данных');
  }
  
  let newDate = new Date(date);
  return newDate.toLocaleString("ru", options);
}

console.log('Date: ', formatDate(new Date(2011, 0, 1))); // 01.01.11
console.log('string: ', formatDate('2011-01-01'));  // 01.01.11
console.log('Milliseconds: ', formatDate(1407267771429)); // 05.08.14
console.log('Array: ', formatDate([2011, 0, 1])); // 01.01.11




// Формат JSON, метод toJSON

let leader = {
  name: "Василий Иванович",
  age: 35
};
leaderJSON = JSON.stringify(leader);
console.log('Метод JSON.stringify() - преобразование из JS в JSON: ', leaderJSON);
leaderJS = JSON.parse(leaderJSON);
console.log('Метод JSON.parse() - преобразование из JSON в JS: ', leaderJSON);