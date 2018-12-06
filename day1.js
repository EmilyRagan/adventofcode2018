var fs = require('fs');

fs.readFile('./day1_input.txt', (error, data) => {
	var d = data.toString('utf8');
	var arr = d.split('\n').map(function (val) {
		return Number(val);
	});
	var sum = 0;
	var freqs = [];
	var count = 0;
	var duplicate = false;
	while (!duplicate) {
		sum += arr[count];
		for (var i = 0; i < freqs.length; i++) {
			if (freqs[i] === sum) {
				duplicate = true;
				break;
			}
		}
		freqs.push(sum);
		count++;
		if (count === arr.length) {
			count = 0;
		}
	}
	console.log(sum);
	// console.log(freqs);
});