function factorial(n) {
    if(n==0 || n==1){
        return 1;
    }
    return n * factorial(n-1);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = factorial(n);

    ws.write(result + '\n');

    ws.end();
}
