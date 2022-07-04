function processData(input) {
    var array = input.split('\n');
    var length = parseInt(array[0], 10);
    var num=1;
    while(num<=length){       
        var arr = array[num].split('');
        var s1="", s2="";
        for(let i=0;i<arr.length;i++){
            if(i%2 ==0){
                s1+= arr[i];
            }
            else{
                s2+= arr[i];
            }
        }
        console.log( s1 + " " + s2);
        num++;
    }
} 
