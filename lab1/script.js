// Задание 1
const myName = "Кирилл";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Нади Ивановой";
const reasonText =
  "мне интересно как создать красивые и интерактивные страницы";
const numberOfMonth = 1;

const resultText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяц(ев). Я уверен(а), что пройду данный курс до конца!`;

console.log(resultText);

//Задание два
const Name = "Кирилл";
const Language = "JavaScript";
const CreatorName = "Нади Ивановой";
const Text = "мне интересно как создать красивые и интерактивные страницы";
const Month = 1;

let myInfoText = `Всем привет! Меня зовут ${Name}. Сейчас я изучаю язык программирования ${Language} на курсе по ${Language} у ${CreatorName}.

Я хочу стать веб-разработчиком, потому что ${Text}. До этого я изучал(а) ${Language} ${Month} месяцев. Я уверен(а), что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll("JavaScript", "JAVASCRIPT");
console.log("Итоговая строка:");
console.log(myInfoText);
console.log("Длина строки:", myInfoText.length);
console.log("Первый символ:", myInfoText[0]);
console.log("Последний символ:", myInfoText[myInfoText.length - 1]);

// Задание 3
const Name1 = prompt("Как вас зовут?");
const yourName = Name1.trim().toLowerCase();
alert(`Вас зовут ${yourName}`);

// Задание 4
const userName = prompt("Как вас зовут?");
const formattedName = userName.trim().toLowerCase();
const userAge = prompt("Сколько вам лет?");
const formattedAge = Number(userAge.trim());
alert(`Вас зовут ${formattedName} и вам ${formattedAge} лет`);

//Задание 5
const userString = prompt("Введите текст для обрезки");
const trimmedString = userString.trim();
const startSliceIndexInput = prompt(
  "Введите индекс, с которого нужно начать обрезку строки"
);
const startSliceIndex = Number(startSliceIndexInput);
const endSliceIndexInput = prompt(
  "Введите индекс, которым нужно закончить обрезку строки"
);
const endSliceIndex = Number(endSliceIndexInput);
const resultString = trimmedString.slice(startSliceIndex, endSliceIndex);
alert(`Результат: ${resultString}`);

// 6 ЗАДАНИЕ
const userText = prompt("Введите текст");
const trimmedText = userText.trim();
const wordFromText = prompt("Введите слово из текста");
const trimmedWord = wordFromText.trim();
const indexOfWord = trimmedText.indexOf(trimmedWord);
const String = trimmedText.slice(0, indexOfWord + trimmedWord.length);
alert(`Результат: ${String}`);