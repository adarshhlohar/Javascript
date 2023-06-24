console.log("this is for es6ConstructorAndClasses");

class Employee{
    constructor(name,salary,experiance){
        this.name = name;
        this.salary = salary;
        this.experiance = experiance;
    }
    
    slogan = function(){
        return `This company is best regards ${this.name}`
    }
    
    joiningYear = function(){
        return`${2022 - this.experiance}`;
    }
    
    static add(a,b){
        return (a+b);
    }
    
}




let adarsh = new Employee("Adarsh",40000,3);
console.log(adarsh);

let sameer = new Employee("Sameer",20000,3)
console.log(sameer);


class Programmer extends Employee{
    constructor(name , salary ,experiance, language ,getdivision , github){
        super(name,salary,experiance)
        this.language = language;
        this.getdivision = getdivision;
        this.github = github;
    }
    FavariteLanguage = function(){
        if(this.language == "python"){
            return "python"
        }
        else{
            return this.language;
        }
    }

    static multiply = function(c,d){
        return c*d ;
    }
}

let adarsh1 = new Programmer("Adarsh",50000,5,"javascript","A","adarshlohar");
console.log(adarsh1);

// automatically inherates the function inside programmer from Employee 
console.log(adarsh1.slogan());
console.log(adarsh1.joiningYear());
console.log(adarsh1.FavariteLanguage());
// console.log(adarsh1.multiply(5,6));