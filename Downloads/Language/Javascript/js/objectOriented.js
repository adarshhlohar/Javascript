console.log("This is object oriented");
let car ={
    name:"Maruti",
    topSpeed:50,
    run:function(){
        console.log ("car is  running");
    }
};
console.log(car.name,car.topSpeed,car.run())



function generalCar(givenName,givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function() {
      console.log (`${this.name} Is Running`);
    }
    this.analyze = function(){
        console.log(`${this.name} car is slower by ${200 - this.topSpeed} km/h than mercedes`)
    }
};

let car1=new generalCar("maruti800",90);
let car2=new generalCar("Nissan",110);
let car3=new generalCar("Mercedes",200);

console.log(car1,car2,car3);