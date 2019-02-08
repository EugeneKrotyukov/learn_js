// Дата и Время

let now1 = new Date();
console.log('текущаее дата и время', now1);
let now2 = new Date;
console.log('текущаее дата и время', now2);

/*
Получение компонентов даты
--------------------------

	Получить год (из 4 цифр) 
	getFullYear()

	Получить месяц, от 0 до 11
	getMonth()

	Получить число месяца, от 1 до 31.
	getDate()

	Получить  для местной временной зоны   
	getHours(), getMinutes(), getSeconds(), getMilliseconds()

	получить день недели: число от 0(воскресенье) до 6(суббота)
	getDay()

	число миллисекунд, прошедших с 1 января 1970 года GMT+0
	getTime()

	Возвращает разницу между местным и UTC-временем, в минутах
	getTimezoneOffset()

	возвращающие день, месяц, год и т.п. для зоны GMT+0 (UTC)
	getUTCFullYear(), getUTCMonth(), getUTCDay()


Установка компонентов даты
--------------------------

    setFullYear(year [, month, date])
    setMonth(month [, date])
    setDate(date)
    setHours(hour [, min, sec, ms])
    setMinutes(min [, sec, ms])
    setSeconds(sec [, ms])
    setMilliseconds(ms)
    setTime(milliseconds) (устанавливает всю дату по миллисекундам с 01.01.1970 UTC)

Все они, кроме setTime(), обладают также UTC-вариантом

методы для форматирования дат
-----------------------------

date.toLocaleString(локаль, опции)

var date = new Date(2014, 11, 31, 12, 30, 0);
var options = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
console.log( date.toLocaleString("ru", options) ); // среда, 31 декабря 2014 г. н.э. 12:30:00

toString()
toDateString() 
toTimeString()

Date.parse

Date.now()
*/

function getWeekDay(date) {
  // выводит текущий день недели в коротком формате
  days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[date.getDay()];
}
let date = new Date(2019,1,8);  // 8 февраля 2019
console.log('getWeekDay', getWeekDay(date));  // 'пт'
console.log('toLocaleString', date.toLocaleString('ru', {weekday: 'short'})); // 'Пт'