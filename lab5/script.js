// Задание #1
const users = [
  { username: "Надя", status: "online", lastActivity: 10 },
  { username: "Леша", status: "offline", lastActivity: 22 },
  { username: "Кирилл", status: "online", lastActivity: 104 },
];
const onlineUsers = users.filter((user) => user.status === "online");
const usersOnlineNames = onlineUsers.map((user) => user.username).join(", ");
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);
// Задание #2
function giveTalonsInOrder(patients, orders) {
  const patientsMap = Object.fromEntries(patients.map((p) => [p.id, p]));
  return orders.map((id) => patientsMap[id]);
}
const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Денис" },
  { id: 2, name: "Кирилл" },
  { id: 3, name: "Леша" },
  { id: 4, name: "Надя" },
];
console.log("result", giveTalonsInOrder(people, ordersArr));
// Задание #3
function handleObjects(obj, key, action) {
  if (action === "get") return obj[key];
  if (action === "add") {
    obj[key] = "";
    return obj;
  }
  if (action === "delete") {
    delete obj[key];
    return obj;
  }
  return obj;
}
const student = { name: "Надя", programmingLanguage: "JavaScript" };
const result = handleObjects(student, "programmingLanguage", "delete");
console.log("result", result);
// Задание #4
function giveJobToStudent(student, jobName) {
  alert(
    `Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`,
  );
  return { ...student, job: jobName };
}
const studentObj = {
  fullName: "Катя",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};
const updatedStudent = giveJobToStudent(studentObj, "веб-разработчик");
console.log(updatedStudent);
// Задание #5
const groceries = {
  "Orange Juice": { price: 1.5, discount: 10 },
  Chocolate: { price: 2, discount: 0 },
};
function getTotalPriceOfShoppingBag(shoppingBag) {
  let total = 0;
  for (let item of shoppingBag) {
    const product = groceries[item.product];
    if (!product) continue;
    const priceWithDiscount = product.price * (1 - product.discount / 100);
    total += priceWithDiscount * item.quantity;
  }
  return Number(total.toFixed(2));
}
const shoppingBag = [
  { product: "Шоколадный чизкейк", quantity: 3 },
  { product: "Латте", quantity: 23 },
];
console.log("totalPrice", getTotalPriceOfShoppingBag(shoppingBag));
// Задание #6
function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function startGame(heroPlayer, enemyPlayer) {
  heroPlayer.heatEnemy = function (enemy) {
    enemy.health -= 10;
  };
  enemyPlayer.heatHero = function (hero) {
    hero.health -= 10;
  };
  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
    if (getRandomNumberInRange(0, 1) === 0) {
      heroPlayer.heatEnemy(enemyPlayer);
    } else {
      enemyPlayer.heatHero(heroPlayer);
    }
  }
  const winner = heroPlayer.health > 0 ? heroPlayer : enemyPlayer;
  alert(`${winner.name} победил! У него осталось ${winner.health} здоровья`);
}
const hero = { name: "Надя", health: 100 };
const enemy = { name: "Наташа", health: 100 };
startGame(hero, enemy);
// Задание #7
function getKiller(suspectInfo, deadPeople) {
  for (let suspect in suspectInfo) {
    if (deadPeople.every((dead) => suspectInfo[suspect].includes(dead))) {
      return suspect;
    }
  }
  return null;
}
console.log(
  getKiller(
    {
      James: ["Надя", "Леша", "Наташа"],
      Johnny: ["Даша", "Лиза", "Кирилл"],
      Peter: ["Андрей", "Лера"],
    },
    ["Наташа", "Андрей"],
  ),
);
// Задание #8
function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getWinner(applicants, winnerObject) {
  const keys = Object.keys(applicants);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { ...winnerObject, ...applicants[randomKey] };
}
const todaysWinner = { prize: "10 000$" };
const winnerApplicants = {
  "001": { name: "Наташа", age: 25 },
  201: { name: "Надя", age: 20 },
  304: { name: "Леша", age: 35 },
};
console.log("resultWinner", getWinner(winnerApplicants, todaysWinner));