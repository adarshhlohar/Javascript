console.log("this is a regular expression three");

// character set []
// let regex = /ad[a-z]+rsh/;   // [a-z] the char from a to z is ok it matches with the str
// regex = /ad[ada]rsh/;       //[some char]  {some char } are matches to the string
// regex = /ad[^kfg]rsh/;      //[^some char] execept from {some char} all other cha is ok
// regex = /ad[^kfg]r[stu]h/;      //[^kfg] it can not be a {k or f or g} and can be a {s or t or u} 
// regex = /ad[^kfg]r[stu]h/;      //[^kfg] it can not be a {k or f or g} and can be a {s or t or u} 


// quantifiers we use {}
// regex = /ad{2}arsh/      // if u can not use () it can find  word that times repeat
// regex = /ad{0,2}arsh/      //  d can be occures 1 to 2(0 or 1 or 2) times


// Grouping we use paranthesis for gruoping ()
// regex = /(ad){2}a([0-9]r){3}sh/
str = "adarsh bhai";
// str = "adad2r3r4rsh bhai";
let result = regex.exec(str);

console.log("the result from exec is ",result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}