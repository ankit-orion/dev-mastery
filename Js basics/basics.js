// let firstName = "john";
// console.log(firstName);
// const age = 30;
// var isstudent = false;
// console.log(isstudent);
// console.log(age);

// function add(a, b){ return a+b}
// let res = add(5,6)
// console.log(res)

// function greet(name){
//     console.log("Namaste, " + name);
    
// }
// greet("Ankit")


// function canVote(age){
//     if(age >= 18){
//         console.log("person can vote");
        
//     }
//     else{
//         console.log("person cannot vote");
        
//     }
// }
// canVote(17);

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// let users = ["Ankit", "John", "Doe"];
// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
    
// }

// console.log(users.join(" "));

// let person = "";
// for(let i = 0; i < users.length; i++){
//     person += users[i] + " ";
// }

// console.log(person.trim());

// let user1 = {
//     name: "Ankit",
//     age: 25,
// }
// console.log(user1.name);

// // Assignment 1
// user1 = {
//     name: "Rahul Mishra",
//     age: 30,
// }
// function greetbyObject(user){
//     console.log("Hello, " + user.name + "you are " + user.age + " years old")
// }
// greetbyObject(user1);

// // Assignemnt 2
// // write a function that takes a ne object as unput whcih has name, age, and geneder and greets the user with 
// // their geneder (Ho Mr, Mrs/Others) harkirat, your ge is 21

// let user3 = {
//     name: "Ankit",
//     age: 21,
// }
// function greetByGender(user, gender){
//     let title = "";
//     if(gender == "M"){
//         title += "Mr";
//     }
//     else if(gender == "F")
//     {
//         title += "Mrs";
//     }
//     else{
//         title += "Others";
//     }
//     console.log("Hello, " + title + " " + user.name + " your age is " + user.age);
//     if(user.age >= 18){
//         console.log("You can vote");
//     }

// }
// greetByGender(user3, "F");

// create a function that takes an array of obejects as input
// and return the users whoa age > 18 and are male
// user4 = [{name:"ankit", age: 23, gender: "M"}, {name: "Tushar", age: 23, gender: "M"}, {name: "Sarthak", age: 69, gender: "R"}, {name: "Govind", age: 9, gender: "M"}]

//? using an array 

// function checkGender(user4){
//     let newArray = [];
//     for(let i = 0; i < user4.length; i++){
//         if(user4[i].age >= 18 && user4[i].gender == "M"){
//             // console.log(user4[i]);
//             newArray.push(user4[i].name);
//         }
//     }
//     return newArray
// }
// console.log(checkGender(user4));


//^  using filter function

// function usingFilter(user){
//     return user.age >= 18 && user.gender == "M";
// }
// const res = user4.filter(usingFilter);
// console.log(res);


// ^ parsing

// function sum(a, b){
//     // a will be parsed to a number
//     return parseInt(a) + b 
// }
// let ans = sum("20", 30)
// console.log(ans);

// find sum from 1 to a number

// the code below is synchronous js code
// function sum(n){
    // let ans = 0;
    // for(let i = 1; i <= n; i++){
    //     ans += i;
    // }
    // return ans;

    // return n * (n + 1)/2;
// }

// console.log(sum(5));

// Synchronus code is executes line by lien, in the order it's written.
// Each operation waits fro the prevuous one to complete before moving on to the next one.


// ^ reading file using file system
// async way of reading file
// here only one file can be read at a time


// const { log } = require("console");
// const fs = require("fs")
// const content = fs.readFileSync("file.txt", "utf-8")

// console.log(content);
// const content2 = fs.readFile("file2.txt", "utf-8")

// console.log(content2);
// console.log("My name is ankit mishra");


// ^  reading file synchronusly
// here all the files will be read at the sae time
// any of the file can be read first then second and then third

// const fs = require("fs")
// fs.readFile("file.txt", "utf-8", function(err, content){
//     console.log(content);
// })

// fs.readFile("file2.txt", "utf-8", function(err, content){
//     console.log(content);
// })
// fs.readFile("file3.txt", "utf-8", function(err, content){
//     console.log(content);
// });


// functional arguments -> passing a function to antoher 
// function as an argument

// creating a calculator using functional argument
function sum(a, b){
    return a + b;
}
function multiply(a, b){
    return a*b;
}
function subract(a, b){
    return a-b;
}
function divide(a, b){
    return a/b;
}

function doOperation(a, b, op){
    return op(a, b);
}
// here we are passing function as an argument to doOperation function
console.log(doOperation(6, 2, multiply));

// Asynchronus code
