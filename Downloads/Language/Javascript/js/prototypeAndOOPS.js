console.log("this is console");



// function student(){
//     this.name = "adarsh",
//     this.gender = "male"
// }

// console.log(student,student.prototype);     
// student.prototype.sayHii =function(){
//     console.log("Hello world");
// }

// let std = new student()
// console.log(student,student.prototype);     


// let obj = {
//     name : "adarsh",
//     address : "mars",
//     lastName : "lohar",
//     changeName : function(newName){
//         this.name = newName;
//     }
// };

// console.log(obj)
// function Obj(givenName) {
//     this.name = givenName;
// }

// Obj.prototype.getName = function() {
//     return this.name;
// }

// Obj.prototype.SetName = function(givenName){
//     this.name = givenName;
// }

// let obj1 = new Obj("mahesh");
// console.log(obj1)


const proto = {
    slogan : function(){
        return `This company is best `;
    },
    changeName : function(newName){
        this.name =  newName;
    }
}


// creating an object 
// let adarsh = Object.create(proto);
// adarsh.name = "adarsh";
// adarsh.salary = 35000;
// adarsh.changeName("adarsh2");
// console.log(adarsh);


// ****also another method creating an object****
// let adarsh1 = Object.create(proto,{
//     name : {value : "adarsh", writable : true},
//     role : {value : "Programmer"}
// })

// console.log(adarsh1);
// adarsh1.changeName("hello")
// console.log(adarsh1)



// Employee Constructor
function Employee(name , salary , experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
};

Employee.prototype.slogan=function(){
    return `This company is best, regards ${this.name}`;
}

let adarshObj = new Employee("adarsh",40000,3);
console.log(adarshObj.slogan())



// new programmer inherit from Employee
function Programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);
    this.language = language;
}


// adding prototype in programmer from Employee inheriting
Programmer.prototype = Object.create(Employee.prototype)


let sameer = new Programmer("sameer",20000,3,"javaScript");
console.log(sameer);
console.log(sameer.slogan());

