
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

function namesRandom(joke){
    let arr_one =[];
    for (let i = 0; i < joke; i++){
        arr_one.push(Math.floor(Math.random()*100));
    }
    return arr_one;
}

console.log(namesRandom)



// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.



// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//




//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//




//     - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
//
//
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
//
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
