
// - створити функцію яка приймає масив та виводить його

let oneMas = [1,2,'fw23f'];
function oneMass (){
    console.log(oneMas);
}
oneMass();

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function nameTwo(a,b,c){
    if( a < b && a < c) {
        console.log(a)
    }
    else if ( b < a && b < c){
        console.log(b)
    }
    else if ( c < a && c < b){
        console.log(c)
    }

}
nameTwo(332,213,223);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)



function nameThree(a,b,c){
        if( a > b && a > c) {
            console.log(a)
        }
        else if ( b > a && b > c){
            console.log(b)
    }
        else if ( c > a && c > b){
            console.log(c)
        }

}
nameThree(1,5,9);

// - створити функцію яка повертає найбільше число з масиву



function maximum (something){
    let max = something[0];
    for (const maxItem of something) {
        if (maxItem > max) max = maxItem;
    }
    return max;
}
let funMaxReturn = maximum([13,12,42,51,126,30,4132,3132,1341]);
console.log(funMaxReturn);



// - створити функцію яка повертає найменьше число з масиву

function maximumTwo (somethingTwo){
    let min = somethingTwo[0];
    for (const maxItemTwo of somethingTwo) {
        if (maxItemTwo < min) min = maxItemTwo;
    }
    return min;
}
let funMaxReturnTwo = maximumTwo([13,12,42,51,126,30,4132,3132,1341]);
console.log(funMaxReturnTwo);



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]=>13


let mass = [1,21,32,134];
let summ = 0;
function fourth_ (outher) {
    for (let mas of outher){
         summ += mas
    }
        return summ;
    }
let w = fourth_(mass);
console.log(w);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let masss = [1,21,32,134];
let sum = 0;
function fourth (other) {
    for (let mas of other){
        sum += mas
    }
    return sum/other.length;
}
let q = fourth(masss);
console.log(q);


// - створити функцію яка заповнює масив рандомними числами


function fourth__ (others_) {
   let randomNum = Math.round(Math.random()*100)
    console.log(randomNum);
}
fourth__();

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.



// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//

let oneOf_massive = [{name: 'Dima', age: 13},{ model:'Camry'}];
let here_keys=[];
function return_names(return_keys,andKeys){
    for (here_keys of return_keys){
        here_keys += oneOf_massive
    }
    return return_keys+andKeys
}
let result1 = return_names((Object.keys(oneOf_massive[0])),(Object.keys(oneOf_massive[1])));
console.log(result1)

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


let oneOf_massive__ = [{name: 'Dima', age: 13},{ model:'Camry'}];
let here_keys__=[];
function return_names__(return_keys_,andKeys_){
    for (here_keys__ of return_keys_){
        here_keys__ += oneOf_massive__
    }
    return return_keys_+andKeys_
}
let result2 = return_names__(oneOf_massive__[0].name,oneOf_massive__[0].age+oneOf_massive__[1].model)
console.log(result2);





// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// // результат
// [3,5,7,9]


let empty_ = [];
let someOfThird = function(massMore,massMoreOne) {
    for (let i=0;i<massMore.length;i++){
        empty_.push(massMore[i] + massMoreOne[i]);
    }
    return empty_;
}

let returnNewArr = someOfThird([1,2,3,4],[2,3,4,5])
console.log(returnNewArr);



// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.






// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].


for (let i=3;i>0;i--){
    console.log(i)
}

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

let newEmpty= [1, 2, 3];
newEmpty.push(4,5,6);
console.log(newEmpty)




// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let newEmpty_one= [1, 2, 3];
newEmpty_one.unshift(4,5,6);
console.log(newEmpty_one)



// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
let newEmpty_two= [1, 2, 3, 4, 5];
newEmpty_two.splice(0,3,);
console.log(newEmpty_two)





// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].


let newEmpty_three =[1, 2, 3, 4, 5];
newEmpty_three.pop();
console.log(newEmpty_three)


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].



// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
