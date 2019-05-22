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
  // калькулятор
  a: 0,
  b: 0, 
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

calculator.read();
console.log('сумма ', calculator.sum());
console.log('произведение ', calculator.mul());