console.log("this is for create replace removing for element");
// let element= document.createElement("li");

// let text=document.createTextNode("this a new created node");
// element.appendChild(text);
// console.log(element);

// creating new element and adding some text
let element = document.createElement('li');
let text = document.createTextNode("I am a text node");
element.className = "class";
element.id = "myid";
element.appendChild(text);
console.log(element);



// gives the className and id
// element.className = 'childul';
// element.id = 'Createdli';
// element.setAttribute("title", 'mytitle');
// element.innerHTML = '<b>This is a bold text</b>'
// element.innerText = '<b>This is a bold text</b>'
// console.log(element);


// adding The above element in child 1 list
let ul = document.querySelector('ul.this')
ul.appendChild(element)
ul.style.color = "red";
console.log(ul)


// replace 

let elememt2 = document.createElement("h3");
elememt2.className = "element2";
elememt2.id = "element2";
let tNode = document.createTextNode("This is a heading");
elememt2.appendChild(tNode);
console.log(elememt2)
element.replaceWith(elememt2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById("lui")) //of my dream is removed from list
console.log(myul);

// // we can find the class id and other attribute of element

let pr = element2.getAttribute('id');
pr = elememt2.removeAttribute('id');
console.log(elememt2);
elememt2.setAttribute("title","hello");
console.log(elememt2,pr);

// // quiz

let quiz = document.createElement("a");
let link = document.createTextNode('go to google');
quiz.appendChild(link);
quiz.setAttribute("href","https://www.google.com");
quiz.setAttribute("target","_blank");
let temp=document.getElementById("myul");
temp.appendChild(quiz)

console.log(quiz);

