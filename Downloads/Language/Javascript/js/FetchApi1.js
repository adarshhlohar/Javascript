console.log("This is for Fetchapi1");

// 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
// 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London'
let myBtn = document.getElementById("myBtn");
// myBtn.addEventListener()

// let getData = function() {
//     console.log("Inside the  getData");

//     let url = "Adarsh1.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside the first Then");
//         return (response.text());
//     }).then((data)=>{
//     console.log("Inside the second Then");
//     console.log(data);
// })
// }



// let getData = function() {
//     console.log("Inside the  getData");

//     let url =  'https://api.github.com/users';
//     fetch(url).then((response)=>{
//         console.log("Inside the first Then");
//         return (response.json());
//     }).then((data)=>{
//     console.log("Inside the second Then");
//     console.log(data);
// })
// }

// console.log("Before Calling getData");
// getData();
// console.log("After Calling getData");



function postData(){
    console.log("Inside The Postdata Function");
    url=    "https://api.instantwebtools.net/v1/airlines";
    data=  `{
        
            "id": 95,
            "name": "Quatar Airways",
            "country": "Quatar",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
            "slogan": "Going Places Together",
            "head_quaters": "Qatar Airways Towers, Doha, Qatar",
            "website": "www.qatarairways.com",
            "established": "1994"
            }`
        params = {
            method : "POST",
            headers:{
                "content-Type" : "Application/json"
            },
            body : data
        };
        fetch(url,params).then((response)=>{
            console.log("Inside the first then");
            return response.json();
        }).then((data)=>{
        console.log("Inside the second then");
        console.log(data)
    })
}

console.log("Before calling postData");
postData();
console.log("After calling postData");