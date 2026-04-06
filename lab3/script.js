// задание 1
function getName1(name) {
  return `Имя равно ${name}`;
}

const getName2 = function (name) {
  return `Имя равно ${name}`;
};

const getName3 = (name) => {
  return `Имя равно ${name}`;
};

console.log(getName1("Анна"));
console.log(getName2("Петр"));
console.log(getName3("Мария"));

//задание 2
function getSumOfNumbers(number, type = "odd") {
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    if (type === "odd" && i % 2 !== 0) {
      sum += i;
    } else if (type === "even" && i % 2 === 0) {
      sum += i;
    } else if (type === "") {
      sum += i;
    }
  }

  return sum;
}

console.log(getSumOfNumbers(10, "odd"));
console.log(getSumOfNumbers(10, "even"));
console.log(getSumOfNumbers(10, ""));

//задание 3
const getDivisorsCount = (number = 1) => {
  if (number < 0 || !Number.isInteger(number)) {
    alert("number должен быть целым числом и больше нуля");
    return;
  }

  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  return count;
};

console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5));
console.log(getDivisorsCount(12));
console.log(getDivisorsCount(-5));
console.log(getDivisorsCount(3.5));

//задание 4
const checkQuestionAnswer = (question, correctAnswer) => {
  const userAnswer = prompt(question);

  const normalizedUserAnswer = userAnswer.trim().toLowerCase();
  const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase();

  if (normalizedUserAnswer === normalizedCorrectAnswer) {
    alert("Ответ верный");
  } else {
    alert("Ответ неверный");
  }
};

checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода");
checkQuestionAnswer("Сколько в среднем зубов у взрослого человека?", "32");
checkQuestionAnswer("Как называется самая маленькая птица в мире?", "Колибри");

//задание 5
const showSuccessMessage = (message) => {
  console.log(message);
};

const showErrorMessage = (message) => {
  console.error(message);
};

const checkTextOnErrorSymbol = (
  text,
  errorSymbol,
  successCallback,
  errorCallback,
) => {
  let hasError = false;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === errorSymbol) {
      hasError = true;
      errorCallback(
        `Найден запрещенный символ "${errorSymbol}" под индексом ${i}`,
      );
    }
  }

  if (!hasError) {
    successCallback("В данном тексте нет запрещенных символов");
  }
};

const text = "Привет! Как дела! Давно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);