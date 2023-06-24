console.log("this is for Es6 prototype Inheritance");

class Employee {
    constructor(givenName, givenExperiance, givenSalary) {
        this.name = givenName;
        this.experiance = givenExperiance;
        this.salary = givenSalary;
    }
    slogan = function () {
        return `I am ${this.name} This company is best`;
    }
    yearExperience = function () {
        return 2020 - this.experiance;
    }
    static add(a, b) {
        return a + b;
    }
}

class Programmer extends Employee {
    constructor(givenName, givenExperiance, givenSalary, language, github) {
        super(givenName, givenExperiance, givenSalary);
        this.language = language;
        this.github = github;
    }
    faveriteLanguage =function(){
        if(this.language == "python"){
            return `python`;
        }
        else{
            return `javascript`;
        }
    }

    static multiply =function(a,b) {
        return a*b;
    } 
}

// let adarsh = new Employee("Adarsh", 54, 40000);
// console.log(adarsh);
// console.log(Employee.add(5,10))

let mahesh = new Programmer("Mahesh", 3, 30000, "go", "mahesh243")
console.log(mahesh.slogan());
console.log(Programmer.multiply(5,6));