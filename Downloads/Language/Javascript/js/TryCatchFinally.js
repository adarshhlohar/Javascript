let a = "Hello World";
a = undefined;
console.log(a);

if (a != undefined) {
    console.log("This is not undefined");
}
else {
    console.log("This is Undefind");
}



try {
    // throw new error("This is a new  error")
    console.log("We are inside block");
    khdvhjbv
} catch (error) {
    console.log("how are you ?");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("Finally we will run this");
}