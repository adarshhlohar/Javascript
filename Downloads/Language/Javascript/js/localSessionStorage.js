console.log("this is for local session storage");


let myarr = ['orange','apple','grapes'];
// console.log(typeof myarr)

localStorage.setItem("Name", "Adarsh");
localStorage.setItem("Name2", "Mahesh");
localStorage.setItem("fruites",JSON.stringify(myarr))
let fruites = localStorage.getItem("fruites");
console.log(fruites)
// console.log(typeof(fruites))


fruites = JSON.parse(localStorage.getItem("fruites"));
console.log(fruites);
console.log(typeof fruites);



let Name = localStorage.getItem("Name");
console.log(Name);

// localStorage.removeItem("Name");
// localStorage.clear();



// sessionStorage.setItem("sessionName", "SAdarsh");
// sessionStorage.setItem("sessionName2", "SMahesh");
// sessionStorage.setItem("sessionfruites",JSON.stringify(myarr))