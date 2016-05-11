/*
 *  Implementation of the str.trim() method in JavaScript
 *
 *
 *
 */

function jsTrim (string) {
	var arrayToReturn = [];

	// for loop to see what the character is at each index
	for (var i = 0; i < string.length; i++) {
		var thisChar = string.charAt(i);

		// if the character is not whitespace, then push it to the array
		if (thisChar !== ' ') {
			arrayToReturn.push(thisChar);
		}
	}

	var stringToReturn = arrayToReturn.join('');

	console.log(stringToReturn);
	return stringToReturn;
}

jsTrim('hello');
jsTrim(' world');
jsTrim('Call-Em-All');
jsTrim(' RULES!   ');
