console.log("This ajax window");
// https://dummyjson.com/products
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click",buttonClickHandler)

function buttonClickHandler(){
    console.log("Youre are clicked on click fetchBtn");
    // xhr -> XMLHttpRequest
    // XML -> extensible Markup Language --> it is set of codes or tags,that decribe the text in a digiotal document
    // Instantiate an xhr object
    let xhr = new XMLHttpRequest(); 
    
    // open the object
    xhr.open("GET","Adarsh1.txt",true);
    // xhr.getResponseHeader("content-type","application/json")
    
    // what to on onprogress it is optional
    xhr.onprogress = function (){
        console.log("on Progress !!!");
    }
    console.log("Youre are clicked on click fetchBtn");

    // It is an Optional onReadyStateChange
    // xhr.onreadystatechange = function(){
    //     console.log("The ready state is ",xhr.readyState);
    // }

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.log("Some error is accured"); 
    }
}

    xhr.send();
    console.log("we are done");
}


function buttonClickHandler(){
    console.log("Youre are clicked on click fetchBtn");
    // xhr -> XMLHttpRequest
    // XML -> extensible Markup Language --> it is set of codes or tags,that decribe the text in a digiotal document
    // Instantiate an xhr object
    let xhr = new XMLHttpRequest(); 
    
    // open the object
    xhr.open("POST","https://random.api.randomkey.io/v1/name/full",true);
    xhr.getResponseHeader("content-type","application/json")
    
    // what to on onprogress it is optional
    xhr.onprogress = function (){
        console.log("on Progress !!!");
    }
    console.log("Youre are clicked on click fetchBtn");

    // It is an Optional onReadyStateChange
    // xhr.onreadystatechange = function(){
    //     console.log("The ready state is ",xhr.readyState);
    // }

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.log("Some error is accured"); 
    }
}
    params = `{
        "gender": "7",
        "region": "usa",
        "records": 3
    }`;
    xhr.send(params);
    console.log("we are done");
}


