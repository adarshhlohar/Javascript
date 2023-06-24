console.log("this is a ajax");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler() {
    console.log("you have to clicked the fetchBtn");
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    // this is for post data 
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('content-type','application/json');

    // what to do on progress
    xhr.onprogress = function(){
        console.log("on progress");
    }

    // xhr.onreadystatechange = function(){
    //     console.log("ready state value is "+ xhr.readyState)
    // }

    xhr.onload =function(){
        if(this.status === 200){
        console.log(this.responseText);
        }
        else{
            console.log("some error occure");
        }
    }

    //send the request
    // params = `{"name":"test56766","salary":"123","age":"23"}`;
    // xhr.send(params);
    console.log("we are done");
}

let popBtn =  document.getElementById("popBtn");
popBtn.addEventListener("click",popHandler);

function popHandler(){
    console.log("You have to click the popHandler");
    // instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET','https://dummyjson.com/products',true);

    xhr.onload =function(){
        if(this.status === 200){
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let list = document.getElementById("list");
        str ="";
        for(key in obj){
                str = `<li>${obj[key].brand} </li>`;
                // console.log(obj[key].brand)
        }
        list.innerHTML += str;
        }
        else{
            console.log("some error occure");
        }
    }
    xhr.send();
    console.log("we are done to fetching the data");
}