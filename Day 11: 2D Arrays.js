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

function maxHourglass(arr){
    var sums=[];
    for(let i=1;i<arr.length -1; i++){
        for(let j=1;j<arr[i].length -1; j++){
            var sum =0;
            // sum the top of the hourglass
            sum = arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1];
            // sum the center
            sum = sum + arr[i][j];
            //sum the bottom
            sum = sum + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1];
            //push the new sum of hourglass to sums[]
            sums.push(sum);
        }
    }
    console.log(Math.max.apply(null, sums));
}

function main() {

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    maxHourglass(arr);
    
}
