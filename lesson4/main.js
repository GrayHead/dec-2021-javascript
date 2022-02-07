// functions
// function foo() {
//     let a = 10;
//     let b = 20;
//     return a + b;
//
// }
//
// //ctr alt v
// let salary = 100000 + foo(); /// salary = 100030


// function calc1(a, b) {
//     return a + b;
// }
//
//
// console.log(calc1(100, 200)); // 300
// let calcRes = calc1(5, 12); // 17
// console.log(calcRes);

// function calcMinus(x, y) {
//     let result = x - y;
//     return result;
//
// }
//
// calcMinus(100, 20); // undefined // 80


// function msg(message) {
//     document.write(`<h1>${message}</h1>`);
// }
//
// msg();
// // 100 line of code
// msg('hi');


// function listCreator(a, b, c) {
//     document.write('<ul>');
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${b}</li>`);
//     if (c !== undefined) {
//         document.write(`<li>${c}</li>`);
//
//     }
//     document.write('</ul>');
//
// }
//
//
// listCreator('item 1', 'item 2');
// listCreator('asd', 'qwe', 'zxc');
// listCreator('asd', 'qwe', 'zxc');
// listCreator('asd', 'qwe', 'zxc');
// listCreator('asd', 'qwe', 'zxc');
// listCreator('asd', 'qwe', 'zxc');
// listCreator('asd', 'qwe', 'zxc');
// listCreator('asd', 'qwe', 'zxc');


let nums = [111, 222, 333];

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

function iteratorOfArray(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

//
// iteratorOfArray(nums);
// iteratorOfArray(users);
// iteratorOfArray(products);


// let a = 'adsa';
// let b = 123;
// let c = [1, 2, 4, 5];
//
// let array = [a, b, c];
//
// let a2 = 'adsa';
// let b2 = 123;
// let c2 = [1, 2, 4, 5];
//
// let array2 = [a2, b2, c2];


// function arrayCreator(a, b, c) {
//     let arr = [a, b, c, 200, 300];
//     return arr;
// }
//
// //
// let array1 = arrayCreator(111, 222, 333);
// console.log(array1);
// let array2 = arrayCreator('asds', 'qweadsa', 'okten');
// console.log(array2);


// function checkCreator(arrayOfOrderedFood) {
//     arrayOfOrderedFood.push('tips');
//     return arrayOfOrderedFood;
// }
//
// let check = checkCreator(['meet', 'beer', 'salat']);
// console.log(check);


// function divCreator(counter) {
//
//
//     for (let i = 0; i < counter; i++) {
//         document.write(`<div>test</div>`)
//     }
//
//     document.write('<hr>');
// }
//
// divCreator(2);
// divCreator(100);
// divCreator(20);


function summary(arrayChecks) {
    let result = 0;
    for (const check of arrayChecks) {
        result = result + check;
    }
    return result;

}

let summary1 = summary([100, 200, 300, 1000]);
console.log(summary1);

console.log(summary([10, 20, 20, 20, 20, 30]));

//     arguments

// function xxx(...qwe) { //...asd -> rest argument
//     iteratorOfArray(qwe);
// }
//
// xxx(1, 2, 3, 4)


// function calculator() {
//     console.log(arguments);
//     if (arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     } else if (arguments.length === 3) {
//         return arguments[0] + arguments[1] - arguments[2]
//     }
// }
//
// calculator(1, 2);
// calculator(1, 2, 3);


// console.log(x); // error!
// let x = 100;


foobar();

function foobar() {
    console.log('foobar is works!');
}

function barfoo() {
    return 100;
}

console.log(foobar())// undef
console.log(barfoo())// 100


