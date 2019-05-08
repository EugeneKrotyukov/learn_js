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
var date = new Date(2019,1,8);  // 8 февраля 2019
console.log('getWeekDay', getWeekDay(date));  // 'пт'
console.log('toLocaleString', date.toLocaleString('ru', {weekday: 'short'})); // 'Пт'


function getLocalDay(date) {
	// День недели в европейской нумерации
	return date.getDay() ? date.getDay() : 7;
}
var date = new Date(2019, 4, 12);  // 12 мая 2019
console.log('getLocalDay', getLocalDay(date));   // вторник, выведет 2


function getDateAgo(date, dayAgo) {
	// День указанное количество дней назад
	// исходный объект даты не должен меняться
	let dateCopy = new Date(date);
	dateCopy.setDate(date.getDate() - dayAgo);
	return dateCopy.getDate();
}
var date = new Date(2015, 0, 2);
console.log('getDateAgo', getDateAgo(date, 1) ); // 1, (1 января 2015)
console.log('getDateAgo', getDateAgo(date, 2) ); // 31, (31 декабря 2014)
console.log('getDateAgo', getDateAgo(date, 365) ); // 2, (2 января 2014)


function getLastDayOfMonth(year, month) {
	// последний день месяца
	// year – 4-значный год
	// month – месяц от 1 до 12
	let date = new Date(year, month, 0);
	return date.getDate();
}
console.log('getLastDayOfMonth', getLastDayOfMonth(2019, 2));


function getTimeToday() {
	// сколько часов и минут прошло с начала дня
	let dateNow = new Date();
	return {
		hour: dateNow.getHours(),
		minute: dateNow.getMinutes()
	};
} 
let timeToday = getTimeToday();
console.log('С начала дня прошло ', timeToday.hour, ' часов ', timeToday.minute, ' минут');


function getTimeTomorrow() {
	// сколько часов и минут осталось до завтра
	let dateNow = new Date();
	let dateTomorrow = new Date(2019, 4, 7, 23, 59, 59);
	return {
		hour: dateTomorrow.getHours() - dateNow.getHours(),
		minute: dateTomorrow.getMinutes() - dateNow.getMinutes()
	};
} 
let timeTomorrow = getTimeTomorrow();
console.log('До завтра осталось ', timeTomorrow.hour, ' часов ', timeTomorrow.minute, ' минут');


function formatDate(dateStr){
	// преобразовывает строку 'д.м.гггг.' в объект Date
	let dateAr = dateStr.split(' ');
	const months = ['январ', 'феврал', 'март', 'апрел', 'ма', 'июн', 'июл', 'август', 'сентябр', 'октябр', 'ноябр', 'декабр']; 
	let monthAr = dateAr[1].split('');
	monthAr.pop();
	monthStr = monthAr.join('');
	let month = months.indexOf(monthStr);
	let day = Number(dateAr[0]) + 1;
	return new Date(dateAr[2], month, day);
}
console.log('formatDate', formatDate('9 мая 2019'));



