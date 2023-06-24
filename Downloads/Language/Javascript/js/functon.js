console.log("This is a function");

function print_message(message){
    console.log(message);
}
// print_message("hello world");


let add = function(a,b){
    return  a+b;
}
console.log(add(4,6));

function say(message){
console.log(message);
}
let result = say("Hello");
console.log('result:',result);

function get_Distance(speed , time){
    let distance=speed*time;
    return distance;
}

var myDistance=get_Distance(8,5);
console.log(myDistance);


let differ = function(a,b){
   return a-b;
}
console.log(differ(5,6))