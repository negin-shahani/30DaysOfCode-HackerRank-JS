function processData(input) {
    var theInput = input.split('\n');
    var n = parseInt(theInput[0]);
    
    var phonebok =[];
    for(let i=1; i<=n; i++){
        let word = theInput[i].split(" ");
        phonebok[word[0]]=word[1];
    }
    for(let i=n+1;i<theInput.length; i++){
        var personNumber = phonebok[theInput[i]];
        if(personNumber != undefined){
            console.log(theInput[i] + "=" + personNumber)
        }
        else{
            console.log("Not found");
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
