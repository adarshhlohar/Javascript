console.log("This is  regular expresion");

let reg = /adarsh/;

// reg = /adarSh/ig;  //i--> case insensetive  g-->(global) finding the another same name
let str = "this is adarSh and adarsh is from another universe";

// 1.exec()  will search regex in string
// let result = reg.exec(str);
// console.log(result)
// result = reg.exec(str);
// console.log(result)

// 2.test() is test the regex in expression if found give yes or not
// let result = reg.test(str);
// console.log(result);
// result = reg.test(str);
// console.log(result);

// 3.match() is return the array of array or null
// result = reg.match(str);   //-->its wrong methode
// let result = str.match(reg);
// console.log(result);
// result = str.match(reg);
// console.log(result);


// 4.search()   return index of first match or return -1

// let result = reg.search(str); //--> its wrong method
// let result = str.search(reg);
// console.log(result);

// 5.replace() return the a new string with all the replacement (if flag is given, first match will be replacement)
let result = str.replace(reg,"Mahesh");
console.log(result);