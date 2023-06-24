'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Write your code here
    let len = s.length;
    let result = 0;
    if(len % 2 !== 0){
        return -1;
    }
    else{
        let newStr1 = s.substring(0,len/2-1);
        let newStr2 = s.substring(len/2,len);
        let count = 0;
        for(let i = 0 ; i < newStr1.length; i++){
            for(let j = 0; j < newStr2.length; j++){
                if(newStr1[i] === newStr2[j]){
                    count++;
                }
            }
        }
        result = newStr1.length - count;
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = anagram(s);

        ws.write(result + '\n');
    }

    ws.end();
}
