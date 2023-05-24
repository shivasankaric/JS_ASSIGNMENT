//Lexical scoping

// let a = 20;
// function x(){
//     console.log(a);
// }

// function y(){
//     let a = 40;
//     x();
// }
// y();



// //Callbacks

// const fruits = ["apple", "banana", "mango"];

// const getFruits = (callback) => {
//     setTimeout( () => {
//         callback(fruits);
//     }, 3000);
// }

// const getSecondFruit = ( fruits, callback) => {
//     const fruit = fruits[1];
//     callback(fruit);
// }

// const getMessage = ( fruit, callback) => {
//     const msg = `${fruit} is the second fruit in the data`;
//     callback(msg);
// }

// const displayMessage = ( msg ) => console.log(msg);

// getFruits( (fruits) => {
//     getSecondFruit( fruits, (fruit) => {
//         getMessage( fruit, ( msg ) => {
//             displayMessage(msg);
//         })
//     })
// })



// //Promises
// const promise = new Promise( (resolve, reject) => {
//     setTimeout( () => resolve(fruits), 3000);
//     // setTimeout( () => reject("Error in fetching the fruits"), 4000);
// })

// promise
//     .then( fruits => fruits[1])
//     .then( fruit => `${fruit} is the second fruit in the data`)
//     .then( msg => console.log(msg))
//     .catch( err => console.log(err));

// //Async & Await

// const secondFruit = async( ) => {
//     try{
//         const fruits = await promise;
//         const second = fruits[1];
//         const message = `${second} is the second fruit in the data`;
//         console.log(message);
//     }catch(err){
//         console.log(err);
//     }
// }

// secondFruit();

//Arrow functions
const stud = {
    name : "Shiva",
    subjects : ["Eng", "Tam", "Mat"],
    sayHi(){
        console.log(`Hi ${this.name}`);
    },
    showCourses(){
        const x = () => console.log(this);
        x();
        return x;
    }    
}

console.log(this);
y = stud.showCourses();
y();

//Private properties and methods can be created using #

// class Patient{
//     #name;
//     static displayThis(){
//         console.log(this);
//     };

//     constructor(name, age, disease){
//         this.#name = name;
//         this.age = age;
//         this._protectedField = disease;
//     }

//     displayName(){
//         return this.#name;
//     }
// }

// class feverPatient extends Patient{
//     constructor(name, age){
//         super(name, age, "fever");
//     }

//     // displayName(){
//     //     return this.#name;
//     // }

//     displayAge(){
//         return this.age;
//     }
// }

// const patient = new Patient("Bob", 45, "Diabetes");
// const patient1 = new feverPatient("John", 50);
// //The private property is hidden

// console.log(Patient.std);
// console.log(patient1);









 



