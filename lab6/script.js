function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

// Задание 1
const getDateFormat = (date, separator = ".") => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateArray = [day, month + 1, year].map((item) => addZero(item));
  return dateArray.join(separator);
};
console.log("Задание #1:", getDateFormat(new Date()));
// Задание 2
const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);
const getDaysBeforeBirthday = (nextBirthdayDate) => {
  const today = new Date();
  const diffMs = nextBirthdayDate - today;
  return convertMsToDays(diffMs);
};
const myBirthday = new Date(2027, 0, 1);
console.log(
  "Задание #2:",
  getDaysBeforeBirthday(myBirthday),
  "дней до дня рождения",
);
// Задание 3
const addDays = (date, days = 1) => {
  const daysInMs = days * 24 * 60 * 60 * 1000;
  return new Date(date.getTime() + daysInMs);
};
const currentDate = new Date();
console.log("Текущая дата:", currentDate);
console.log("Через 5 дней:", addDays(currentDate, 5));
console.log("Через 1 день (по умолчанию):", addDays(currentDate));
console.log("Через 0 дней:", addDays(currentDate, 0));
// Задание 4
const peopleWithVisa = [
  {
    firstName: "Stasia",
    lastName: "Ward",
    criminalRecord: true,
    passportExpiration: "19.06.2023",
  },
  {
    firstName: "Elliot",
    lastName: "Baker",
    criminalRecord: false,
    passportExpiration: "04.06.2021",
  },
  {
    firstName: "Leighann",
    lastName: "Scott",
    criminalRecord: true,
    passportExpiration: "31.07.2022",
  },
  {
    firstName: "Nick",
    lastName: "Pop",
    criminalRecord: false,
    passportExpiration: "31.12.2021",
  },
];
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day);
};
const allowVisa = (people) => {
  const today = new Date();
  return people.filter((person) => {
    if (person.criminalRecord) return false;
    const expirationDate = parseDate(person.passportExpiration);
    if (expirationDate < today) return false;
    return true;
  });
};
const result = allowVisa(peopleWithVisa);
console.log("Задание 4 (результат allowVisa):", result);