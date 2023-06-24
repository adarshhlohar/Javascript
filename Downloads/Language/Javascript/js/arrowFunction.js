console.log("hello arrow function")

// using a normal function


// const Adarsh = function () {
//     console.log("this is a best person");
// }

// converting it into arrow function
// const Adarsh = () => 
// console.log("this is best person in world");

// Adarsh();

//  const greet = function(name){
//     return "hello good morning " + name;
// }

// console.log(greet("Adarsh"));


// using arrow function
// when the one argument passing in function no need of braces
// let sameer = name => "hello good morning " + name;
// console.log(sameer("Sameer"));


// when two argument are passing braces are required
// let sameer = (name,age=21) => "hello " + name +" youre is " + age;
// console.log(sameer("Sameer",23));

// function mul(a, b) {
//     return a * b
//     }//calling function
//     mul(3,3) //returns 9

// It is a Regular function
let Adarsh = function(){
    console.log("Hello Adarsh");
}

// This an arrow function
Adarsh = () => console.log("Hello Addi");

// function Call
Adarsh()

// It is a Regular function
Greet = function(Name) {
    console.log("hello good morning " + Name);
}

// This an arrow function
Greet = (Name) =>  console.log("hello good morning2 " + Name);

// fuction Call
Greet("Adarsh");

// if youre using curly braces then you can write return is compulsary
Add = (a,b) => a+b;

console.log(Add(5,5))