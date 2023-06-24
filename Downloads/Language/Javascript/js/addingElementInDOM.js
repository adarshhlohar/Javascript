// console.log("hello ");


// let  element = document.createElement("li");
// let text = document.createTextNode("This is text node")
// element.appendChild(text);
// element.className = "class";
// element.id = "elem";
// let myul = document.getElementById("myul");
// myul.appendChild(element);
// console.log(element);
// myul.style.color = "green";


// let elem2 = document.createElement("li");
// let text2 = document.createTextNode("This is second node");
// elem2.appendChild(text2);

// myul = document.getElementById("myul");
// // element.replaceWith(elem2);
// elem2.replaceWith(myul);
// elem2.id= "this";
// myul.replaceChild(elem2,document.getElementById("is"));
// myul.replaceChild(element,document.getElementById("fui"));
// console.log(elem2);


// let attribute = elem2.hasAttribute("class");
// console.log(attribute);


// let container = document.querySelector(".container")
// console.log(container.childNodes);
// console.log(container.children);

// let nodeName = container.childNodes[3].nodeName;
// console.log(nodeName);

// let nodeType = container.childNodes[3].nodeType;
// console.log(nodeType);

let contain = document.querySelector('div.container');
console.log(contain.children[1]);
console.log(contain.firstElementChild);
console.log(contain.childElementCount);
console.log(contain.lastElementChild);
console.log(contain.firstChild);
console.log(contain.lastChild);
console.log(contain.firstElementChild.parentNode);
console.log(contain.firstElementChild.nextElementSibling);
console.log(contain.firstElementChild.nextElementSibling.nextElementSibling);
console.log(contain.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(contain);


