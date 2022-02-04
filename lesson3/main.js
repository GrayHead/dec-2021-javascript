// looops
// + arrays
// +if
//     for
//         forof
//         while
//             itin
//
//             loop in loop

//
// let arr = [11, 21, 31, 41, 51, 61, 71, 81, 91, 10];
//
// /*for of*/
// for (let temp of arr) {
//     console.log(temp);
// }


// let menuItems = [
//     'About',
//     'Courses',
//     'Blog',
//     'Contacts'
// ];
//
//
// document.write('<ul>');
// for (let menuItem of menuItems) {
//     document.write(`<li>${menuItem}</li>`);
// }
// document.write('</ul>')


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
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
];

// document.write(`<ol class="users-box">`);
// for (const user of users) {
//     if (!user.status) {
//         document.write(`<li>${user.name} ${user.status}</li>`);
//     }
// }
// document.write(`</ol>`)

//
// document.write(`<ol class="users-box">`);
// for (const user of users) {
//     if (user.age > 29 && !user.status) {
//         document.write(`<li>
//                             name - ${user.name};
//                             status - ${user.status};
//                             age- ${user.age}
//                         </li>`);
//     }
// }
// document.write(`</ol>`);

// document.write(`<ol class="users-box">`);
// for (const user of users) {
//     if (user.name.length === 4) {
//         document.write(`<li>
//                             name - ${user.name};
//                             status - ${user.status};
//                             age- ${user.age}
//                         </li>`);
//     }
// }
// document.write(`</ol>`);


// let x = 0;
// x++;
// x = x + 1;
// x += 1;


// let a = 0;
// let b = a++;
// console.log(a, b);

//                      12(11)-1=11(10)
// for (let i = 5; i < users.length - 1; i++) {
//     console.log(users[i]);
// }

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
// }

// for (let i = users.length - 1; i >= 0; i--) {
//     const user = users[i];
// }


// let person = {name: 'masha', age: 30, status: true, exp: 10};
//
// for (let fieldName in person) {
//     console.log(fieldName, person[fieldName]);
// }


let music = [
//0
    // 0            1            2
    ['queen', 'pink floyd', 'shinedown'],
//1
    // 0           1
    ['eminem', 'dr Dre'],
//2
    //   0                    1        2          3
    ['filya kirkorov', 'kadisheva', 'moiseev', 'baskov']
];


// for (const folder of music) {
//     console.log(folder);
//     for (const artist of folder) {
//         console.log(artist);
//     }
// }

//
// for (let i = 0; i < music.length; i++) {
//     const folder = music[i];
//     console.log(folder);
//     for (let j = 0; j < folder.length; j++) {
//         const artist = folder[j];
//         console.log(artist)
//     }
//
// }


// for (let i = 0; i < music.length; i++) {
//     for (let j = 0; j < music[i].length; j++) {
//         console.log(music[i][j]);
//     }
//
// }


// let i = 0;
// while (i<users.length) {
//     console.log(users[i]);
//     i++;
// }


do {
    console.log('ashdsahgf');
} while (false)


































