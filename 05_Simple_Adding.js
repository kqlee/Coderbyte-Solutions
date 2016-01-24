// Simple Adding

// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. 

// for-loop
function SimpleAdding(num) {
  newNum = num;
	for (var i = 1; i < num; i++) {
	  if (num > 1000) {
	  	return 'error';
	    } else {
	    	newNum += i;
	    }
	} return newNum;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());                            

// Input = 12 Output = 78
// Input = 140 Output = 9870