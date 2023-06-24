console.log("This is editable div");

// we can new element
let divElem = document.createElement("div");
let val = localStorage.getItem("text");
let text;
if (val == null) {
    text = document.createTextNode("This is editable div click to edit");
}
else {
    text = document.createTextNode(val);
}
divElem.appendChild(text);
// console.log(divElem);
// console.log(localStorage);

divElem.setAttribute("id", "elem");
divElem.setAttribute("class", "elem");
divElem.setAttribute("style", "border:2px solid black; width:154px; margin:34px; padding:23px")

let container = document.querySelector(".container");
let first = document.getElementById("myfirst");
container.insertBefore(divElem,first);
// console.log(divElem,first,container)

divElem.addEventListener("click",function() {
    let notextArea = document.getElementsByClassName("textArea").length;
    if (notextArea == 0){
        let html = elem.innerHTML;
        // console.log(html);
        divElem.innerHTML = `<textarea class="textArea form-control" id="textArea" rows="3"> ${html}</textarea>`;
    }
    // console.log(divElem.innerHTML)


let textArea = document.getElementById("textArea");
textArea.addEventListener("blur",function() {
    elem.innerHTML = textArea.Value;
    localStorage.setItem("text",textArea.value);
    // console.log(this.localName)
})

})