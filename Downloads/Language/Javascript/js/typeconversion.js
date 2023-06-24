console.log("hello typeconversion");


//string to number
let res;
res = Number('65758');
console.log(res);
console.log(typeof(res));
console.log();


res = Number(false);
console.log(res);
console.log(typeof(res));

res = Number("    ");
console.log(res);
console.log(typeof(res));

res = Number("hello"); //NaN
console.log(res);
console.log(typeof(res));

res = Number(undefined);  //NaN
console.log(res);
console.log(typeof(res));


res = Number(true);
console.log(res);
console.log(typeof(res));

res =Boolean(1);
console.log(res);
console.log(typeof(res));

res = Boolean("hello");
console.log(res);
console.log(typeof(res));


res =Number("");
console.log(res);
console.log(typeof(res));

let i= 54;
console.log(i.toString());
console.log(i);


let stri = Number("73636");
stri = Number("647gh887"); 
stri =Number(false);
stri = Number([1,2,3,4,5,6]);
console.log(stri)
console.log(typeof(stri));

let number = parseInt("34.098");
console.log(number);
console.log((number.toFixed(1)),(typeof number));


let mystr =  Number("976");
let mynum = 45;
console.log(mystr + mynum);