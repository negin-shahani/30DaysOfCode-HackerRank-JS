function reverseArray(A){
    var result="";
    for(let i=A.length-1; i>=0;i--){
        result= result + A[i].toString() + " ";
    }
    console.log(result);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    reverseArray(arr);
}
