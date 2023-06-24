// console.log("this is eventListener");

// // let heading = document.getElementById("heading");
// // heading.addEventListener("click",function(e){
// //     let variable;
// //     console.log("youre clicked in heading");
// //     variable = e.clientX;
// //     variable = e.clientY;
// //     variable = e.target;
// //     variable = e.target.id;
// //     variable = e.target.className;
// //     variable = Array.from(e.target.classList);
// //     location.href = "www.google.com";
// //     console.log(variable);
// // })


// let btn = document.getElementById("btn");
// btn.addEventListener("click",func1);
// // btn.addEventListener("dblclick",func2);
// // btn.addEventListener("mousemove",func3);
// btn.addEventListener("mousedown",func4);




// function func1(e){
//     console.log("thanks",e);
//     e.preventDefault();
// }


// // function func2(e){
// //     console.log("this is double click",e);
// //     e.preventDefault();
// // }



// // function func3(e){
// //     console.log("This is the mousemove function");
// // }

// function func4(e){
//     console.log("This is mouse down event",e);
//     e.preventDefault()
// }


// document.querySelector(".no").addEventListener("mouseenter",function (e) {
//     console.log("the mouse entered");
// })

document.querySelector(".container").addEventListener("mousemove",function(e){
    // console.log("youre mouusemove in container");
    // console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor =`rgb(${e.offsetX},${e.offsetY},${e.offsetX},194)`;
})