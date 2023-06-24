console.log("This is async and sync");

setTimeout(() => {
    for (let index = 0; index < 4000; index++) {
        console.log(index);
        
    }
}, 100);

console.log("completed !!!")