console.log('this is selectors');

// single element selector
// let elememt = document.getElementById('myfirst');
// elememt = elememt.className;
// elememt = elememt.childNodes;
// elememt = elememt.parentNode;
// elememt.style.color = 'red';
// elememt.innerText = 'Hello Adarsh  Kya Bolti Public';


// ** without using getelement by id
myfirst.innerHTML = '<b>hello Adarsh</b>'
// console.log(elememt.innerHTML)
console.log(myfirst.innerHTML)

// let selector = document.querySelector('#myfirst');
// selector = document.querySelector('.child');
// selector = document.querySelector('div');
// selector.style.color = 'green';
// console.log(selector);




// 2. multielement selector
let elements = document.getElementsByClassName("child")
// elements = document.getElementsByClassName("container")
// elements = document.getElementsByClassName("div");
// console.log(elements)

// for (let index = 0; index < elements.length; index++) {
//     const element = elements[index];
//     console.log(elements[index]);
//     element.style.color = "orange"
// }

// Array.from(elements).forEach(element => {
//     console.log(elements)
//     element.style.color = 'red';
// });