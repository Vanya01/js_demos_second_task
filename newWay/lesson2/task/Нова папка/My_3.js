let numbers = [
    1,2,3,4,5,'one','two','three','four','five',true,(7 > 4),false,(4>7),true
];
console.log(numbers)

//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

//1


let empty =[];

console.log(empty = [1,'2',true]);
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

//2

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let blocks = 'some_text';

for ( let i = 0; i < 10; i++) {
    document.write(`<div>${blocks}</div>`)
}


//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//3

let blockss = 'some_text_new';

for ( let i = 0; i < 10; i++) {
    document.write(`<div>${blockss}</div>`)
}

//- - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let textInside = 'new_text';

let i=0;
while(i < 20){
    document.write(`<h1>${textInside}</h1>`)
    i++;
}


//4

//-- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let item = [12,3,44,554,434,232,7587]

i=0;
while(i<20){
    document.write(`<h1>${item}</h1>`)
    i++;
}
//

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.


let newItems = [
    12,21,4232,425,1245,411,1313,745,563,214];

for (let newItem of newItems) {
    console.log(newItem);
}


//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let newStrings = [
    '2qf','qd','qf','qfvwq','12qfq45','ewwv','wvw','wvwef','be','wvww'];

for (let newString of newStrings ){
    console.log(newString);
}


//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи


let mixs = [
    12,45,'em','kxem',90,false,'dbe','pozx',89,true
];
for (let mix of mixs) {
    if (typeof mix === "boolean") {
        console.log(mix);
    }
}


//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи


let mixsOne = [
    12,45,'em','kxem',90,false,'dbe','pozx',89,true
];
for (let mixOne of mixsOne) {
    if (typeof mixOne === "number") {
        console.log(mixOne);
    }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


let mixsTwo = [
    12,321,'em','kxem',2133,false,'afq','afaz',89,true
];
for (let mixTwo of mixsTwo) {
    if (typeof mixTwo === "string") {
        console.log(mixTwo);
    }
}


//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


let newElementsTwo = [];

newElementsTwo[0] = 1;
newElementsTwo[1] = true;
newElementsTwo[2] = 'ege';
newElementsTwo[3] = 4;
newElementsTwo[4] = false;
newElementsTwo[5] = true;
newElementsTwo[6] = 'ege';
newElementsTwo[7] = 35;
newElementsTwo[8] = 1134;
newElementsTwo[9] = 'nameg';

console.log(newElementsTwo);


//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (i=0;i<11;i++) {
    console.log(i);
    document.write(i);
}

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


for (i=0;i<101;i++) {
    document.write(`<div>`);
      console.log(i);
      document.write(i);
    document.write(`</div>`);
}
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (i=0;i<100;i=i+2) {
        document.write(`<div>`);
        console.log(i);
        document.write(i);
        document.write(`</div>`);
}
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (i=0;i<100;i++) {
    if (i % 2 === 0) {
        document.write(`<div>`);
        console.log(i);
        document.write(i);
        document.write(`</div>`);
    }
}

// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (i=0;i<100;i++) {
    if (i % 2) {
        document.write(`<div>`);
        console.log(i);
        document.write(i);
        document.write(`</div>`);
    }
}

// - Дано 2 масиви з рівною кількістю об'єктів.З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },


let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (user of usersWithId){
    for(city of citiesWithId){
        if(user.id === city.user_id){
            user.address=city
        }
    }
}
console.log(usersWithId)