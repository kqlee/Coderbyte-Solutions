// First Factorial

// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

// for-loop
function FirstFactorial(num) {
	var result = 1;
	for (var i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline()); 

// Input = 4 Output = 24
// Input = 8 Output = 40320