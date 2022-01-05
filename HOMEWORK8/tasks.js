//Task1
function upperCase(text) {
    if (text = /^[A-ZА-Я]/.test(text)) {
        console.log("String's not starts with uppercase character ")
    } else {
        console.log("String's starts with uppercase character ")

    }
}

upperCase('regexp');
upperCase('RegExp');

//Task2
function checkEmail(str) {
  const regExp = /^\S+@\S+\.\S+$/g;

  const response = regExp.test(str);

  console.log(response);
}

let strTask2 = 'softserve@gmail.com';

console.log(`Для тексту ${strTask2} результат:`);
checkEmail(strTask2);

//Task3
const regExp = /d(b+)(d)/i;

let strTask3 = 'cdbBdbsbz';

const response = strTask3.match(regExp);

console.log(`Для стрінги ${strTask3} результат:`);
console.log([...response]);

//Task4
function swapSubStr(str) {
  return str.replace(/(\S+)\s(\S+)/, '$2, $1');
}

let strTask4 = 'Java Script';

console.log('Вхідний рядок: ' + strTask4);
console.log('Вихідний рядок: ' + swapSubStr(strTask4));

//task5
function validationBankCard(str) {
  const regExp = /\d{4}(-\d{4}){3}/;

  const response = regExp.test(str);

  console.log(response);
}

let strTask5 = '9999-9999-9999-9999';

console.log(`Карта \"${strTask5}\" результат:`);
validationBankCard(strTask5);

//Task6
function checkEmail(str) {
  const regExp = /^[A-Za-z0-9](\w|(-(?!-)))*@[A-Za-z0-9]+\.[A-Za-z0-9]+$/i;

  const response = regExp.test(str)
    ? `${str}: Email is correct!`
    : `${str}: Email is not correct!`;

  console.log(response);
}

checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');

//Task7
function checkLogin(str) {
  const regLogin = /^[A-Za-z](?:[A-Za-z]|(\d+(?:\.\d+)?))+$/;
  const regNumber = /\d+(\.\d+?)?/g;

  const isValid = str.length <= 10 && regLogin.test(str);

  const numbers = str.match(regNumber);

  console.log(isValid);
  console.log(numbers);
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');