console.log("this is eventListner js");

let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// btn.addEventListener("dblclick", func2);
// btn.addEventListener("mousedown", func3);

// function func1(e) {
//     console.log("thanks", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("thanks its a double click", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("thanks its a mouse down", e);
//     e.preventDefault();
// }

// document.querySelector('.child').addEventListener("mouseenter",function(){
//     console.log("you entered in child ")
// })


// document.querySelector('.child').addEventListener("mouseleave",function(){
//     console.log("you exited in child ")
// })

document.querySelector('.container').addEventListener("mousemove", function (e) {
    // console.log(e.offsetX, e.offsetY)
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX},76)`
    console.log("you moved inside child ")
})