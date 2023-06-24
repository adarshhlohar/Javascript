console.log('This a diffr between child and children');
// let cont = document.querySelector('.container')
// console.log(cont);
// console.log(cont.childNodes);
// console.log(cont.children);

// let nodeName = cont.childNodes[5].nodeName;
// let nodeType = cont.childNodes[5].nodeType;
// console.log(nodeName);
// console.log(nodeType);

/* nodeTypes

1.Element
2.Attribute
3.TextNode
8.Comment
9.Document
10.Doctype
*/

let contain = document.querySelector('div.container');
// console.log(contain.children[1])
console.log(contain)
console.log(contain.firstElementChild);
// console.log(contain.childElementCount);
// console.log(contain.lastElementChild);

// console.log(contain.firstChild);
// console.log(contain.lastChild);


// console.log(contain.firstElementChild.parentNode);
console.log(contain.firstElementChild.nextElementSibling);
console.log(contain.firstElementChild.nextElementSibling);
console.log(contain.firstElementChild.nextElementSibling.nextElementSibling);