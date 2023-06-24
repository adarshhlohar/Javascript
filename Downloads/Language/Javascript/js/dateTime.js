console.log("this is for dateTime");

let today = new Date();
// console.log(typeof today);
console.log(today);

let otherDate = new Date("25 sep 2022 12:30:55");
// otherDate = new Date("9/25/2022");
// otherDate = new Date("09-25-2022");
console.log(otherDate);

let a;
// a = otherDate.getDay();
// a = otherDate.getMonth();
// a = otherDate.getDate();
// a = otherDate.getFullYear()
// a = otherDate.getMinutes();
// a = otherDate.getHours();
// a = otherDate.getSeconds();
console.log(a);


otherDate.setDate("11");
otherDate.setMonth("9");
otherDate.setFullYear("2023")
otherDate.setHours("01");
otherDate.setMinutes("02");
otherDate.setSeconds("03");
console.log(otherDate);