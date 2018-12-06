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
});
