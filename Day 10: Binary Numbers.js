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
//////////////////////// The main answer ////////////////////
function consecutiveOne(n){
    var binary = n.toString(2).split("");
    var max=0,sum=0;
    for(let i=0; i<binary.length; i++){
        if(binary[i]=='1'){
            sum++;
        }
        if(sum > max){
            max = sum;
        }
        if(binary[i]=='0'){
            sum=0;
        }
    }
    console.log(max);
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    consecutiveOne(n);
}
