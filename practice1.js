// const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

// console.log(capitalize("shiva"));

// const calculatePercent = (questionsCorrect, questionsTotal) => Math.round((questionsCorrect/questionsTotal)*100);

// console.log(calculatePercent(6,11));

// const items = ["Nicely done!", "Good job!", "Good work!", "Correct!"];

// const getRandomItem = (items) => {
//     const random = Math.round(Math.random() * items.length);
//     return items[random];
// }

// console.log(getRandomItem(items)); // "Good job!"

// const friendList = ["Jeff", "Jane", "Jane", "Rob"];

// const removeDuplicates = (list) => {
//     const set = new Set(list);
//     return Array.from(set);
// }

// console.log(removeDuplicates(friendList)); 


// const lessons = [{ position: 1, name: "Intro" }, { position: 0, name: "Basics" }];

// const sortBy = (lessons, prop) => lessons.sort( (a,b) => a[prop] > b[prop] ? 1 : -1);


// console.log(sortBy(lessons, 'position'));


// const isEqual = (a, b) => JSON.stringify(a) == JSON.stringify(b);
// console.log(isEqual([1, '2'], [1, 2])); 
// console.log(isEqual([1, 2], [1, 2]));

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// // let result = 0;

// // for (let i = 0; i < numbers.length; i++) {
// //   if (numbers[i] % 2 === 0 && numbers[i] > 3 && Math.sqrt(numbers[i]) < 3) {
// //     result += numbers[i] * 2;
// //   }
// // }

// const result = numbers.filter( num => num % 2 === 0)
//                      .filter ( num => num > 3)
//                      .filter( num => Math.sqrt(num) < 3)
//                      .reduce( (acc, num) => acc + num*2 , 0);
// // const greater = even.filter ( num => num > 3);
// // const sqrt = greater.filter( num => Math.sqrt(num) < 3);

// // const result = sqrt.reduce( (acc, num) => acc + num*2 , 0);

// console.log(result);

// class User {
//     constructor(name){
//         this.name = name;
//     }

//     sayHi(){
//         console.log(this.name);
//     }
// }

// const user1 = new User("Anu");
// const user2 = {
//     name:"Shiva",
//     sayHi(){
//         console.log(this.name);
//     }
// }

// console.log(user2.__proto__)

// const p = new Promise( (resolve, reject) => {
//     Math.random() > 0.5 ? resolve("Resolved") : reject("Rejected");
// });

// p(()=> console.log("Resolved") , ()=> console.log("Rejected"));

// let promise = new Promise(function(resolve, reject) {
//     if (Math.random() > 0.5){
//         resolve("Resolved");
//     }else{
//         reject("Rejected");
//     }
// });

// promise
//     .then(msg => msg + " the promise", err => err + " the promise")
//     .then(msg => console.log(msg));

// const api = "https://jsonplaceholder.typicode.com/albums";

// fetch(api)
//     .then( data => data.json())
//     .then( result => console.log(result))
//     .catch ( err => console.log("Error"));


// let promise = new Promise((resolve, reject) => {
//     resolve(3);
// })

// promise.then( (msg) => console.log(msg), (err) => console.log(err));

// function z(){
//     console.log(this);
// }

// const c = ()=> console.log(this);

// z();
// c();

// setTimeout( )

