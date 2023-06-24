console.log("this is a regular expression four");

// let regex = /\wdar/     //   word character - _ or alphabet or numbers
// regex = /\w+arsh/       //  w+ means one or more word character 
// regex = /\Wdar/         //  W is non word character
// regex = /\W+ar/         //  W+ more than one non digid word
// regex = /\dada/         //  d is matches one digit
// regex = /\d+99/         //  d+ is more than one digit  
// regex = /\D99/          //  D is matches one non digit
// regex = /\D+99/         //  D+ is more than one non digit
// regex = /\s99/            //  s match whitespace character
// regex = /\s+999/        //  s matches one or more whitespace character
// regex = /\S999/         //  s non whitespace character
// regex = /\S+999/        //  s non whitespace character one or more
// regex = /da/rsh\b/       //  word boundry

// assertion
regex = /a(?=r)/        //  After a the next char should be r
// regex = /a(?!s)/        //  after a the next char should be not s (any other is ok)
let str = "  adarsh is good boy 99adarsh999";

let result = regex.exec(str);
console.log("This is result : ", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}