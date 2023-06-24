console.log("hello");
// Button wuth id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");

// this is get request
// function getdata(){
//     console.log("started getdata")
//     url = "adarsh.txt"
//     fetch(url).then((responce)=>{
//         console.log("inside first then");
//         return responce.text();
//     }).then((data)=>{
//         console.log("inside second then");
//         console.log(data);
//     }) 
// }

// this is get request
function getdata() {
    console.log("started getdata")
    url = "https://api.github.com/users"
    fetch(url).then((responce) => {
        console.log("inside first then");
        return responce.json();
    }).then((data) => {
        console.log("inside second then");
        console.log(data);
    })
}

// console.log("Before running getdata");
// getdata();
// console.log("After running getdata");

// for posting the data

postData(){
    url = "https://jsonplaceholder.typicode.com/posts";
    data = '{"userId":"644","title":"adarsh sgfdgdfhdfhdfhdhhd","body":"lohar fhdfhghgncvrgb "}';
    params = {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(responce =>  responce.json()
    .then(data => console.log(data)
        )
}

postData();
