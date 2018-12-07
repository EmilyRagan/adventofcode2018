var fs = require('fs');

fs.readFile('./day2_input.txt', (err, data) => {
	var d = data.toString('utf8');
	var twos = 0;
	var threes = 0;
	var strings = d.split('\r\n').map(function(val) {
		var letterDict = {};
		for (var i = 0; i < val.length; i++) {
			if (!letterDict[val[i]]) {
				letterDict[val[i]] = 0;
			}
			letterDict[val[i]]++;
		}
		var twosC = false;
		var threesC = false;
		for (var i in letterDict) {
			if (letterDict[i] === 2 && !twosC) {
				twos++;
				twosC = true;
			} else if (letterDict[i] === 3 && !threesC) {
				threes++;
				threesC = true;
			}
			if (twosC && threesC) break;
		}
		return val;
	});
	console.log(twos * threes);
	// array iterator
	for (var i = 0; i < strings.length - 1; i++) {
		var strI = strings[i];
		// second array iterator
		var j = 0;
		for (j = i + 1; j < strings.length; j++) {
			var strJ = strings[j];
			var diffIndex = -1;
			// letter in string iterator
			for (var m = 0; m < strI.length; m++) {
				// compare letters at each index
				// if only one letter different
					// remove that letter
					// return the rest of the letters
				if (strI.charAt(m) !== strJ.charAt(m) && diffIndex === -1) {
					diffIndex = m;
				} else if (strI.charAt(m) !== strJ.charAt(m) && diffIndex !== -1) {
					diffIndex = -1;
					break;
				}
			}
			if (diffIndex !== -1) {
				console.log(strI.substr(0, diffIndex) + strI.substr(diffIndex + 1));
			}
		}
	}
});
