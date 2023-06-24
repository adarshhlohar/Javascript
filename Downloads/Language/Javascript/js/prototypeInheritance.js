console.log("this is prototype for inheritace");

const proto = {
    slogan: function () {
        return `This company is the best`
    },
    changeName:  function (newName) {
        this.name = newName;
    }
}
// creating object with name adarsh
const adarsh = Object.create(proto);
adarsh.name = "Adarsh";
adarsh.role = "Engineer";
// adarsh.changeName("Adarsh2"); //proto using object change the 
// console.log(adarsh);

// it also create object with name adarsh
const adarsh1 = Object.create(proto, {
    name: { value: "Adarsh", writable: true },
    role: { value: "programmer" }
});

// this is the proto object we can change the name
// adarsh1.changeName("sameer");
// console.log(adarsh1);


// Employee function constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// adding prototype in employee constructor
Employee.prototype.slogan = function () {
    return `This company is the best Regards ${this.name}`;
}
 
Employee.prototype.changeName = function(newName){
    this.name = newName;
}

let adarshObj = new Employee("Adarsh", 40000, 2);
console.log(adarshObj);
// console.log(adarshObj.slogan());

// programmer

function programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

//inheriting  the prototype
programmer.prototype = Object.create(Employee.prototype)

//manually sets the constructor
programmer.prototype.constructor = programmer;
let shaam = new programmer("Shyam", 2000, 3, "javascript");
// console.log(shaam);



function animal(name,colour,sound){
    this.name = name;
    this.colour = colour;
    this.sound = sound;
};


animal.prototype.nameis = function(){
    return `The name of animal is ${this.name}`
}
let dog = new animal("moti","blacknwhite","bark");
// console.log(dog);