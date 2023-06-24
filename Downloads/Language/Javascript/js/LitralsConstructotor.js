console.log("this for the object litral and constructor");


function genratecar(topSpeed,name){
    this.carTopSpeed = topSpeed;
        this.carName = name;
        this.run = function(){
            console.log(`${this.carName} car is running with the speed of ${this.carTopSpeed}`)
        }
        this.analyse = function(){
            console.log(`${this.carName} car is slower than ${200-this.carTopSpeed} kmph with respect to Mercedise`);
        }
}

car1 =new genratecar(120,"maruti");
console.log(car1);

car2 = new genratecar(80,"nissan");
console.log(car2);

car3 = new genratecar(100,"swift");
console.log(car3);