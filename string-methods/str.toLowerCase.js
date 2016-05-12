/*
 *  Implementation of the str.toLowerCase() method in JavaScript
 *
 *
 *
 */

function jsToLowerCase (string) {
	var arrayToReturn = [];

	// for loop to see what the character is at each index
	for (var i = 0; i < string.length; i++) {
		var thisChar = string.charAt(i);

		// if the character is not whitespace, then push it to the array
		if (thisChar >= 'A' && thisChar <= 'Z') {
			// need to deal with the specific unicode for each character
			// look for pattern to change to lower case through numbers
			// arrayToReturn.push(thisChar);
		}
	}

	var stringToReturn = arrayToReturn.join('');

	console.log(stringToReturn);
	return stringToReturn;
}

jsToLowerCase('write');
jsToLowerCase('EVERYTHING');
jsToLowerCase('In');
jsToLowerCase('JavaScript.');
