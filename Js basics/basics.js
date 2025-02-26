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
user4 = [{name:"ankit", age: 23, gender: "M"}, {name: "Tushar", age: 23, gender: "M"}, {name: "Sarthak", age: 69, gender: "R"}, {name: "Govind", age: 9, gender: "M"}]

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

function usingFilter(user){
    return user.age >= 18 && user.gender == "M";
}
const res = user4.filter(usingFilter);
console.log(res);


