function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var i2,d2,s2;
    // Read and save an integer, double, and String to your variables.
    i2 = parseInt(input_stdin_array[0]);
    d2 = parseFloat(input_stdin_array[1]);
    s2 = input_stdin_array[2];
    // Print the sum of both integer variables on a new line.
    console.log(i + i2);
    // Print the sum of the double variables on a new line.to a scale of one decimal
    console.log((d + d2).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + s2);
}
