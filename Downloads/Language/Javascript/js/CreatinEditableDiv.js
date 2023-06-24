// localStorage.clear();
console.log("hello this is editable div");

let text;
let divelem = document.createElement("div");
let val = localStorage.getItem('text');
if (val == null){
    text = document.createTextNode("This is my element. Click to edit it");
}
else{
    text = document.createTextNode(val);
}

divelem.appendChild(text);
divelem.setAttribute("id", "divelem");
divelem.setAttribute("class", "divelem");
divelem.setAttribute("style", "border:2px solid black; width : 154px; margin  34px; padding :23px;");


let container = document.querySelector(".container");
let first = document.getElementById("myfirst");

container.insertBefore(divelem, first)

divelem = document.getElementById("divelem");
divelem.addEventListener("click", function () {
    // let elem;
    let noTextArea = document.getElementsByClassName("textarea").length;
    // console.log(noTextArea);
    if(noTextArea == 0){
    let html = divelem.innerHTML;
    divelem.innerHTML= `<textarea  class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;
    }
    let textArea = document.getElementById("textarea");
    textArea.addEventListener("blur",function(){
        divelem.innerHTML = textArea.value;
        localStorage.setItem("text",textArea.value);
    })
})
console.log(divelem)