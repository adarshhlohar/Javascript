//premmitive datatype

//data type
let name = "adarsh";
console.log("my  string is " + name);
console.log("data type is "+(typeof name));

//numbers
let mark = 45;
console.log("my  mark is " + mark);
console.log("data type  is " + (typeof mark));

//booleAN
let isdriver = true;
console.log("my  boolean is " + isdriver);
console.log("data type  is " + (typeof isdriver));

//undefined
let undef = undefined;
console.log("my  undef is " + undef);
console.log("data type  is " + (typeof undef));

//null
let nullvar = null;
console.log("my  null is " + nullvar);
console.log("data type  is " + (typeof nullvar));


//reference data type composite data type non premitive
 
//Array

let myarr = [1,3,5,6];
console.log("my  myarr is " + myarr);
console.log("data type  is " + (typeof myarr));


//object litrals
let stMarks = {
    adarsh : 45,
    mahesh: 67,
    sameer: 67
}
console.log("my  mark is " + stMarks.adarsh);
console.log("data type  is " + (typeof stMarks));

function findName(){

}
console.log("my  function  is " + findName);
console.log("data type  is " + (typeof findName));


let date = new Date();
console.log(typeof date);