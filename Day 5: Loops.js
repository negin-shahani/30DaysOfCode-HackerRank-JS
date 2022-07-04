function loopMultiples(n){
    var result;
    for(let i=1; i<=10; i++){
        result = n * i;
        console.log(n + " x " + i + " = " + result);
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    loopMultiples(n);
}
