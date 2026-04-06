// задание 1

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel() {
    const person = peopleWaiting.shift();
    alert(`${person} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}

function leaveQueueWithoutParcel() {
    const person = peopleWaiting.pop();
    alert(`${person} не получил(а) посылку и ушел(ла) из очереди.`);
}

giveParcel(); 
giveParcel(); 

giveParcel(); 

while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel();
}

// заадние 2

function getSumOfSequence(number) {
    const array = [];
    for (let i = 1; i <= number; i++) {
        array.push(i);
    }
    return array[0] + array[array.length - 1];
}

console.log(getSumOfSequence(5)); 

// задание 3

const coffees = ['Latte', 'Cappuccino', 'Americano'];

const coffeeName = prompt('Поиск кофе по названию:');

const index = coffees.findIndex(coffee => 
    coffee.toLowerCase() === coffeeName.toLowerCase()
);

if (index !== -1) {
    alert(`Держите ваш любимый кофе ${coffees[index]}. Он ${index + 1}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}

// задание 4

const coffee = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map(price => price + 0.5);

updatedPrices.forEach((price, index) => {
    alert(`Кофе ${coffee[index]} сейчас стоит ${price} евро`);
});

// задание 5

const clientsEstimations = [];

function askClientToGiveEstimation() {
    const estimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));
    if (estimation >= 1 && estimation <= 10) {
        clientsEstimations.push(estimation);
    }
}

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(estimation => estimation > 5).length;
const notGoodEstimations = clientsEstimations.filter(estimation => estimation <= 5).length;

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`);

// задание 6

const numbers = [10, 4, 100, -5, 54, 2];

// Способ 1: через цикл for
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i] ** 3;
}
console.log('Способ 1 (for):', sum1);

// Способ 2: через цикл for of
let sum2 = 0;
for (let num of numbers) {
    sum2 += num ** 3;
}
console.log('Способ 2 (for of):', sum2);

// Способ 3: через метод forEach
let sum3 = 0;
numbers.forEach(num => {
    sum3 += num ** 3;
});
console.log('Способ 3 (forEach):', sum3);

// Способ 4: через метод reduce
const sum4 = numbers.reduce((acc, num) => acc + num ** 3, 0);
console.log('Способ 4 (reduce):', sum4);

// задание 7

const goals = [8, 1, 1, 3, 2, -1, 5];

// 1. Самый результативный матч
let maxGoals = -Infinity;
let maxIndex = -1;

for (let i = 0; i < goals.length; i++) {
    if (goals[i] > maxGoals) {
        maxGoals = goals[i];
        maxIndex = i;
    }
}
alert(`Самый результативный матч был под номером ${maxIndex + 1}. В нем было забито ${maxGoals} гол(ов).`);

// 2. Самые нерезультативные игры 
const validGoals = goals.filter(goal => goal >= 0);
const minGoals = Math.min(...validGoals);
const minIndexes = [];

goals.forEach((goal, index) => {
    if (goal === minGoals) {
        minIndexes.push(index + 1);
    }
});

alert(`Самые нерезультативные матчи были под номерами ${minIndexes.join(', ')}. В каждом из них было забито по ${minGoals} мяч(а).`);

// 3. Общее количество голов за сезон
const totalGoals = goals.reduce((sum, goal) => goal > 0 ? sum + goal : sum, 0);
alert(`Общее количество голов за сезон равно ${totalGoals}`);

// 4. Были ли автоматические поражения
const hasAutoDefeat = goals.some(goal => goal < 0);
alert(`Были автоматические поражения: ${hasAutoDefeat ? 'да' : 'нет'}`);

// 5. Среднее количество голов за матч
const matchesCount = goals.filter(goal => goal >= 0).length;
const averageGoals = (totalGoals / matchesCount).toFixed(1);
alert(`Среднее количество голов за матч равно ${averageGoals}`);

// 6. Отсортируйте голы в порядке возрастания
const sortedGoals = [...goals].sort((a, b) => a - b);
alert(sortedGoals.join(', '));

// задание 8

function getMathResult(expression) {
    if (expression.length < 3) {
        return 'Ошибка';
    }
    
    const filtered = [];
    for (let item of expression) {
        if (typeof item === 'number' || (!isNaN(Number(item)) && item !== '')) {
            filtered.push(item);
        }
    }
    
    if (filtered.length < 3) {
        return 'Ошибка';
    }
    
    const [first, operator, third] = filtered.slice(0, 3);
    
    const num1 = Number(first);
    const num3 = Number(third);
    
    const validOperators = ['>', '<', '=', '+', '-', '*', '/'];
    if (!validOperators.includes(operator)) {
        return 'Ошибка';
    }
    
    switch(operator) {
        case '>': return num1 > num3;
        case '<': return num1 < num3;
        case '=': return num1 === num3;
        case '+': return num1 + num3;
        case '-': return num1 - num3;
        case '*': return 'Ошибка'; 
        case '/': return num1 / num3;
        default: return 'Ошибка';
    }
}

console.log(getMathResult(['200', '+', 300])); // 500
console.log(getMathResult(['20', '-', '5'])); // 15
console.log(getMathResult([100, '/', 100])); // 1
console.log(getMathResult([2, '-', 2])); // 0
console.log(getMathResult(['5', '>', '10'])); // false
console.log(getMathResult(['5', '<', '10'])); // true
console.log(getMathResult(['1', '=', 1])); // true
console.log(getMathResult(['1', '*', 1])); // Ошибка
console.log(getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4])); // 104

// задание 9

const matrix = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {  
        row.push(j + 1);
    }
    matrix.push(row);
}

console.log(matrix);
