console.log("This is iterators in js");

function vegIterator(array) {
    let nextIndex = 0;
    // It will return an object
    return {
        next: function () {
            if (nextIndex < array.length) {
                return {
                    value: array[nextIndex++],
                    done: true
                }
            }
            else {
                return {
                    done: false
                }
            }
        }
    }
}


let myArray = ["Adrak", 'Lasun', "Batate", "Tamate"];
console.log("The array is ", myArray);

let veges = vegIterator(myArray);
console.log(veges.next().value);
console.log(veges.next().value);
console.log(veges.next().value);
console.log(veges.next().value);
// console.log(veges.next().value);