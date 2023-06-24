console.log("scope of variable or let");

// let i = 7;
if (1) {
    var i = 234;  // var is use for global in this scope
    console.log(i);
}

// console.log(i);

function ui(name){
    let i=9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("adarsh"),i);