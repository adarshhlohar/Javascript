console.log("This is loops");

// for (let i = 0; i < 10; i++) {
//     if(i==5){
//         continue;
//     }
//     console.log(i)
// }

// let j =110;
// do{
//     console.log(j);
//     j++;
// }while(j<10);

// let k =0;
// while(k<5){
//     console.log(k);
//     k+=1;
// }


let arr=[2,3,4,6,7,8];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

arr.forEach(function(object,index) {
    console.log(object,index);
})

let obj={
    name : "adarsh",
    age : 21,
    type :"dangerous programmer",
    os: "not"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}