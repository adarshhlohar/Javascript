console.log("This is the async and await");

// async function Adarsh(){
//     console.log("Inside Adarsh function");
//     let promise = await fetch("https://api.github.com/users");
//     console.log("Before response");
//     let users = await promise.json();
//     console.log("after response");
//     return users;
//     // return "Adarsh";
// }


// console.log("Before calling Adarsh");
// let a = Adarsh();
// console.log("After calling Adarsh");
// console.log(a);
// a.then(data => console.log(data))
// console.log("This is the last line of js file")




async function Adarsh(){

let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("27 deg");
    }, 1000);
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("21 deg");
    }, 5000);
})

    console.log("fetching detail of p1 please wait");
    let p1weather = await p1;
    console.log("p1 detail is fetched "+p1weather);
    
    console.log("fetching detail of p1 please wait");
    let p2weather = await p2;
    console.log("p2 detail is fetched " + p2weather);
    return[p1weather,p2weather];
    // p1.then(alert);
    // p2.then(alert);
}

function cherry(){
    console.log("Hey i am cherry now waiting");
}


let main1 = async ()=>{
    console.log("Welcome to weather control room");
    let a =await Adarsh();
    let b =await cherry();
    // a.then(value => console.log(value))
    console.log(a);
}

main1();