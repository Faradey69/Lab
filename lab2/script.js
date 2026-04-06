// Задание 1
let existedUserLogin = "Faradey";
let existedUserPassword = "12345678";
let userLogin = prompt("Введите логин");
let userPassword = prompt("Введите пароль");
userLogin = userLogin.trim();
userPassword = userPassword.trim();
if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
  alert("Добро пожаловать, " + userLogin + "!");
} else {
  alert("Логин и (или) Пароль введены неверно");
}

// Задание 2
let correctAnswers = 0;
let incorrectAnswers = 0;
let answer1 = prompt("Сколько будет 2 + 2?");
if (parseInt(answer1) === 4) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}
let answer2 = prompt("Сколько будет 2 * 2?");
if (parseInt(answer2) === 4) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}
let answer3 = prompt(
  "У девочки было 5 яблок. 3 она съела, 1 отдала подруге. Сколько яблок у девочки осталось?"
);
if (parseInt(answer3) === 1) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}
let answer4 = prompt(
  "У Маши было 10 конфет. 2 она съела, 1 отдала подруге. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
);
if (parseInt(answer4) === 12) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}
let answer5 = prompt("Сколько будет 2 + 2 * 2?");
if (parseInt(answer5) === 6) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}
alert(
  "Конец теста! Правильных ответов - " +
    correctAnswers +
    "; Неправильных ответов - " +
    incorrectAnswers +
    "."
);

// Задание 3
let question1 = confirm("JavaScript появился в 1995 году?");
if (question1) {
  alert("Верно");
} else {
  alert("Неверно. JavaScript появился в 1995 году.");
}
let question2 = confirm("Спецификация JavaScript называется ECMAScript?");
if (question2) {
  alert("Верно");
} else {
  alert("Неверно. Спецификация называется ECMAScript.");
}
let question3 = confirm("JavaScript был создан за 1 месяц?");
if (question3) {
  alert("Верно");
} else {
  alert("Неверно. JavaScript был создан за 10 дней.");
}

// Задание 4
let i = 0;
while (i < 1) {
  let newStudent = prompt("Введите имя нового студента!");
  newStudent = newStudent.trim();
  if (newStudent) {
    alert("Добро пожаловать, " + newStudent + "!");
  }
  i++;
}

// Задание 5
let sum = 0;
for (let k = 0; k <= 100; k++) {
  sum += k;
}
alert("Сумма чисел от 0 до 100 равна " + sum);

// Задание 6
let clientName = "Игорь";
let clientSpentForAllTime = 110;
let clientSpentToday = 25;
let discount = 0;
if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
  discount = 10;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
  discount = 20;
} else if (clientSpentForAllTime >= 500) {
  discount = 30;
}
alert("Вам предоставляется скидка в " + discount + "%!");
clientSpentForAllTime += clientSpentToday;
alert(
  "Спасибо, " +
    clientName +
    "! К оплате " +
    clientSpentToday +
    "$. За все время в нашем ресторане вы потратили " +
    clientSpentForAllTime +
    "$."
);

// Задание 7
let name = prompt("Введите имя клиента");
let spentToday = prompt("Сколько клиент потратил сегодня?");
let spentAllTime = prompt("Сколько клиент потратил за все время?");
if (isNaN(spentToday) || isNaN(spentAllTime)) {
  alert(
    "Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку"
  );
} else {
  spentToday = parseFloat(spentToday);
  spentAllTime = parseFloat(spentAllTime);
  let discount2 = 0;
  if (spentAllTime >= 100 && spentAllTime < 300) {
    discount2 = 10;
  } else if (spentAllTime >= 300 && spentAllTime < 500) {
    discount2 = 20;
  } else if (spentAllTime >= 500) {
    discount2 = 30;
  }
  alert("Вам предоставляется скидка в " + discount2 + "%!");
  spentAllTime += spentToday;
  alert(
    "Спасибо, " +
      name +
      "! К оплате " +
      spentToday +
      "$. За все время в нашем ресторане вы потратили " +
      spentAllTime +
      "$."
  );
}

// Задание 8
let password = prompt(
  "Введите пароль\nТребования:\n- Длина от 3 до 20 символов\n- Минимум 1 заглавная буква\n- Минимум 1 цифра"
);
let hasUpperCase = /[A-Z]/.test(password);
let hasNumber = /\d/.test(password);
if (
  password.length >= 3 &&
  password.length <= 20 &&
  hasUpperCase &&
  hasNumber
) {
  alert("Пароль валидный. Добро пожаловать в аккаунт");
} else {
  alert(
    "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
  );
}