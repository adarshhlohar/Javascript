console.log("This is for Promises");

// promise
// resolve or reject or pending

// let Promises = new Promise(function (resolve,reject) {
//     const x = "GreeksforGreks";
//     const y = "GreeksforGreks";
//     if(x === y){
//         resolve();
//     }
//     else{
//         reject();
//     }
// });

// Promises.then(function(){
//     console.log("The x and Y are the have same value ");
// }).catch(function(){
//     console("The value inside  X and Y are different");
// })



// function func() {
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             const error = true;
//             if(error) {
//                 console.log("Function : Youre promise has been resolved");
//                 resolve();
//             }
//             else{
//                 console.log("Function : Youre promise has not been resolved");
//                 reject("Sorry not Fullfilled");
//             }
//         }, 3000);
//     })
// }

// func().then(() => {
//     console.log("Adarsh : Thank for resolving")
// }).catch((error) => {
//     console.log("Adarsh : Very bad bro Reason : " + error);
// });

let students = [
    { name: "Adarsh", subject: "Javascript" },
    { name: "Mahesh", subject: "Python" }
];

enrollStudent = function (student) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve()
            }
            else{
                reject();
            }
        }, 1000);
    })
};

getStudent = function () {
    setTimeout(() => {
        let str = "";
        students.forEach(function (element) {
            str += `<li>${element.name} & ${element.subject}</li>`
        });
        document.getElementById("student").innerHTML = str;
        console.log("Student has been fetched");
    }, 5000);
}

let newStudent = { name: "avdhut", subject: "CPP" };

enrollStudent(newStudent).then(() => {
    getStudent()
}).catch(() => {
    console.log("Some error occured");
});;


// function inside then is ran for -> resove()
// function inside catch is ran for -> reject()
