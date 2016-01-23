// First Reverse

// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

// Using a for-loop
function FirstReverse(str) { 
  var revStr = "";
  for (var i = str.length-1; i >= 0; i--) {
  	revStr += str[i];
  }
  return revStr;          
}
