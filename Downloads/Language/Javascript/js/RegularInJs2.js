console.log("This is regular expression js 2 meta character symbol");

// let reg = /adarsh/;
// reg = /^adarsh/ // ^means expression will match if string start with 
// reg = /silent$/ //$ at the end of the string means "string ends with"
// reg = /a.arsh/ //matches any one character
// reg = /a*rsh/  //matches 0 or more character
// reg = /ada?rsh?/  // question mark after cheracter means that character is optional
// reg = /ad\*rsh/ //  you can match the metacharacter instring you can use backword slash "\"
let str = "adarsh is good boy and adarsh is silent";

let result = reg.exec(str);
console.log(result)

if (reg.test(str)) {
    console.log(`The string is ${str} is matches to the expression ${reg.source}`);
}
else{
    console.log(`The string is ${str} is does not matches to the expression ${reg.source}`);   
}