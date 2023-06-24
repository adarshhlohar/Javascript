console.log("this is from function call");

const students = [
    {name : "Adarsh",subject:"javascript"},
    {name :"Sameer",subject:"hindi"}
]

function enrollStudent(student,callback){
    setTimeout(function() {
        students.push(student);
        callback();
        console.log("student can be enrolled");
    }, 8000);
}


function getStudent(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}<li>`
            // console.log(str);
        });
        document.getElementById("student").innerHTML = str;
        console.log("student have been fetched");
    }, 1000);
}

let newStudent = {name:"Mahesh",subject:"python"};
enrollStudent(newStudent,getStudent);
// getStudent();