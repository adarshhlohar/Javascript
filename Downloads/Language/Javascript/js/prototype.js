console.log("this for prototype");

// let detail = {
//     name : "Adarsh",
//     marks : 45,
//     favorite_char : "A"
// };
// console.log(detail);

// function student() {
//     this.name = "Adarsh";
//     this.gender = "Male";
// }

// student.prototype.sayhii = function(){
//     console.log("Hello World");
// };
// let std = new student();
// std.toString();
// console.log(std)


// let detail = {
//     name: "Adarsh",
//     mark:45,
//     adress :"pune"
// }
// console.log(detail)

function Obj(givenName,givenMarks) {
    this.name = givenName;
    this.mark = givenMarks;
}

Obj.prototype.getName = function() {
    return this.name;
}

Obj.prototype.setName = function (newName) {
    this.name = newName;
}

let sameer = new Obj("Sameer",34);
console.log(sameer);
// console.log(obj2.toString())