// Longest Word

// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

// for-loop
function LongestWord(sen) {
	var replacement = sen.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,''), array = replacement.split(" "), result = '';
	for (var i = 0; i < array.length; i++) {
		if (array[i].length > result.length) {
			result = array[i];
		} 
	} 
	return result;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());

// Input = "fun&!! time" Output = "time"
// Input = "I love dogs" Output = "love"