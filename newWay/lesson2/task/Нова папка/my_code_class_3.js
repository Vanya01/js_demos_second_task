// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function generateRandom(random_zero) {
let numRand = Math.round(Math.random()*100)
    console.log(numRand)
}

generateRandom()

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

function generateRandom_one(random_one,random_two) {
return Math.round(Math.random()*(random_two-random_one)+random_one)
}
console.log(generateRandom_one(30, 50));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let empty_one = [1,34,5344,221,234,421,24];

empty_one.sort(function (a,b){
    return a-b;
    }
)
console.log(empty_one)



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

let empty_one_ =[1,34,5344,221,234,421,24];

let wrap_empty = empty_one_.filter(function (a,b){
    return a % 2===0 && b % 2===0;
    }

)
console.log(wrap_empty)



// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

let empty_mass = [1,34,5344,221,234,421,24];
 let one_more = empty_mass.map(function (item){
     return item + ''
 })
console.log(one_more);


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// class Users{
//     constructor(id,name,surname,email,phone) {
//         this.id = id
//         this.name = name
//         this.surname= surname
//         this.email = email
//         this.phone = phone
//     }
// }
// let users = new Users(19,'Vanya','Voloshyn','godmmqc@gmail','+380-9938829')
// console.log(users)

// створити пустий масив, наповнити його 10 об'єктами new User(....)


class Users{
    constructor(id,name,surname,email,phone) {
        this.id = id
        this.name = name
        this.surname= surname
        this.email = email
        this.phone = phone
    }
}
let users1 = new Users(19,'Vanya','Voloshyn','godmmqc@gmail','+380-9938829')
let users2 = new Users(122,'Olya','faff','godmmqc@gwrwg','+380-9938829')
let users3 = new Users(133,'Ira','qwvq','godmmqc@wewfw','+380-9938829')
let users4 = new Users(31,'Dima','vwewvwev','godmmqc@gmail','+380-9938829')
let users5 = new Users(134,'kolya','vwwvv','godmmqc@gmail','+380-9938829')
let users6 = new Users(131,'Pavlo','vwwvwv','godmmqc@gmail','+380-9938829')
let users7 = new Users(21,'Grisha','Voloswhyn','godmmqc@gmail','+380-9938829')
let users8 = new Users(12345,'Igor','zsqerfr','godmmqc@gmail','+380-9938829')
let users9 = new Users(19234,'Zenia','zccvbm','godmmqc@gmail','+380-9938829')
let users10 = new Users(19121,'Misha','Voloshyn','godmmqc@gmail','+380-9938829')

let allHere=[];
allHere.push(users1,users2,users3,users4,users5,users6,users7,users8,users9,users10)

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

let allHere_two = allHere.filter(function(d){
    return d.id % 2 ===0
}).sort(function (z,s){
    return z.id-s.id
})
console.log(allHere_two)


