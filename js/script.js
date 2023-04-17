// -------------------------- ЗАДАНИЕ 1 ------------------------
document.write('<hr> Задание 1 <br>')
/* 
1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального 
поиска и замены.
*/
function task1(string) {
  string = string.replace(/@/g, '!');

  return string
} 

document.write(task1('aaa@bbb@ccc'))


// ------------------------- ЗАДАНИЕ 2 --------------------------
document.write('<hr> Задание 2 <br>')
/*
2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту 
дату в формат 31/12/2025. 
*/
function newFormatDate(date) {
  let arr = date.split('-'); // '-' - разделитель найден, следовательно он удаляется
  arr.reverse();
  let str = arr.join('/');
  return str;
} 

document.write(newFormatDate('2025-12-31') );


// -------------------------- ЗАДАНИЕ 3 ------------------------
document.write('<hr> Задание 3 <br>');
/*
3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово 
«javascript» тремя разными способами (через substr, substring, slice).
*/
function task3() {
  let str = 'Я учу javascript!';
  document.write('substr: ' + str.substr(2, 3) + '<br>' );
  document.write('substring: ' + str.substring(2, 5) + '<br>');
  document.write('slice: ' + str.slice(2, 5) + '<br>');

  document.write('substr: ' + str.substr(6, 10) + '<br>');
  document.write('substring: ' + str.substring(6, 16) + '<br>');
  document.write('slice: ' + str.slice(6, 16) + '<br>');
} 
task3()

// ------------------------ ЗАДАНИЕ 4 ---------------------------
document.write('<hr> Задание 4 <br>')
/*
4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень 
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
*/
function sqrtOfSumOfCubs(elem) {
  let arr = elem.split(','),
      res = 0;
  for (i = 0; i < arr.length; i++) {
    res += Math.pow(arr[+i], 3);
  }
  return Math.sqrt(res);
}

document.write(sqrtOfSumOfCubs('4, 2, 5, 19, 13, 0, 10'));

// ------------------------ ЗАДАНИЕ 5 ---------------------------
document.write('<hr> Задание 5 <br>')
/*
5. Даны переменные a и b. Отнимите от a переменную b и результат 
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную 
c записалось положительное значение. Проверьте работу скрипта при a и b, 
равных соответственно 3 и 5, 6 и 1.
*/

function task5(a, b) {
  let c = a - b;
  return Math.abs(c);
} 
document.write(task5(3, 5) );

// ------------------------ ЗАДАНИЕ 6 ---------------------------
document.write('<hr> Задание 6 <br>')
/*
6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. 
Для решения этой задачи напишите функцию, которая будет добавлять 0 
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 
сделает 01.09.2014).
*/
let currentDate = new Date().toLocaleString('ru');
document.write(currentDate);

document.write('<br>')

function currDate() {
  let date = new Date();
  let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  function zero(a) {
    return (a > 0 && a < 10)? '0' + a : a  
  }

  date = `${zero(date.getDate() )}.${zero(date.getMonth() )}.${date.getFullYear()}`
  return time + ' ' + date;
}

document.write(currDate())

// ------------------------- ЗАДАНИЕ 7 
document.write('<hr> Задание 7 <br>')
/*
7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая 
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое 
количество раз, буква 'a'. 
*/

function task7(string) {
  let regexp = /ab+a/g;
  string = string.match(regexp);
  return string;
} 

document.write(task7('aa aba abba abbba abca abea'))
//------------
document.write('<br>')
//------------
function task7$(string) {
  return string = string.match(/ab+a/g);
}
document.write(task7$('aa aba abba abbba abca abea'))

// ------------------------- ЗАДАНИЕ 8
document.write('<hr> Задание 8 <br>')
/*
8. Напишите ф-цию строгой проверки ввода номер телефона в 
международном формате (<код страны> <код города или сети> <номер 
телефона>). Функция должна возвращать true или false. Используйте 
регулярные выражения.
*/

function checkNumber(number) {
  number = prompt('Введите ваш номер телефона', '+375(29)2892546')
  let regexp = /^\+?\d{3}\(?\d{2}\)?\d{7}$/;
  return number += ' => ' + `<u> ${regexp.test(number)} </u>`;
}

document.write(checkNumber() );

// ------------------------- ЗАДАНИЕ 9
document.write('<hr> Задание 9 <br>')
/*
9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих 
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме 
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем 
имя может содержать только буквы, цифры, но не быть первыми и 
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.
  Функция должна возвращать true или false. Используйте регулярные 
выражения.
*/

function checkEmail(mail) {
  mail = prompt('Введите вашу почту', 'andriei.soroko@mail.ru')
  let regexp = /^[a-zA-z][\w-_\.]{2,}@[a-z]{2,11}\.[a-z]{2,11}$/i
  return mail += ' => ' + `<u> ${regexp.test(mail)} </u>`
}

document.write(checkEmail())



























