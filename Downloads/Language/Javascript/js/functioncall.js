console.log("This is function call");

// function addition(x,y,callback){
//     setTimeout(() => {
//         document.write(`the sum of ${x} and ${y} is ${x+y}.`);
//         callback();
//     }, 3000);
// }

// function display(){
//     document.write(`Number added !!!`);
// }

// addition(5,5,display);



const students = [
    { name: "Adarsh", subject: "Javascript" },
    { name: "Mahesh", subject: "Python" }
];

function enrollStudent(student, callback) {
    setTimeout(() => {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 4000);
}

function getStudent() {
    setTimeout(() => {
        let str = "";
        students.forEach(function (element) {
            str += `<li>${element.name} , ${element.subject}</li>`;
        })
        document.getElementById("student").innerHTML = str;
        console.log("Students have been fetched");
    }, 1000);
}

let newStudent = { name: "Sameer", subject: "cpp" };

enrollStudent(newStudent, getStudent);
// getStudent();