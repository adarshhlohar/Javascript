console.log("this id function2");

const mygreet=function(name,Thank='thank you'){
    let msg = `${name} age is merely the number of years the world has been enjoying us!
    More items...•07-Jan-2022 ${Thank}`
    return msg;
}

let name = "Adarsh";
let name2 ="harry";
let val = mygreet(name,'thanks a lot');
console.log(val);

const myobject = {
    name:"Mahesh",
    game:function(){
       return "GTA";
    }
}
console.log(myobject.game())

arr = ['fruite','vegetable','ferniture'];
arr.forEach(function (element,index) {
    console.log(element,index);
});