var fs = require('fs');

fs.appendFile('file1.txt', 'New content is going to be appended!!', function (err) {
	if (err) throw err;
	console.log('new Content added to the file1.txt');
});