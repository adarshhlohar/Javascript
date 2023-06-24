console.log("this is for asynchronous");

setTimeout(() => {
for (let index = 0; index < 4000; index++) {
    const element = index;
    console.log("This index number is " + index);
}
}, 100);

console.log("done printing");