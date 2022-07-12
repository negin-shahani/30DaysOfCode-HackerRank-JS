'use strict';

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
//my first solution
function stringException(s){
    try{
        var result = parseInt(s) || error;
        console.log(result);
    }
    catch(error){
        console.log("Bad String")
    }
}
//my second solution
function stringException(s){
    try{
        console.log(parseInt(s).toString().replace('NaN', 'Bad String'));
    }
    catch(error){
    }
}

function main() {
    const S = readLine();
    stringException(S);
}
