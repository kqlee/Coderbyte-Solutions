// Letter Capitalize

// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

// for-each method
function LetterCapitalize(str) {
	var arr = str.split(" ");
	arr.forEach(function (element, index, array) {
		arr[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1);
	});
	return arr.join(" ");
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());

// Input = "hello world" Output = "Hello World"
// Input = "i ran there" Output = "I Ran There"