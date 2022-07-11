// This question didn't have the JavaScript. 
// So, in order to solve the challenge I went with Java. 
// But I am gonna write in JavaScript here.

/**   
    *   Class Constructor
    *   
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
class Difference{
  var maximumDifference;
  constructor(nums) {
        this.elements = nums;
    }
  computeDifference(){
    this.elements.sort((a,b) => a-b); //sort method for numbers
    maximumDifference = this.elements[this.elements.length - 1] - this.elements[0];
  }
}
