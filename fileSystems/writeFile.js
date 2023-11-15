var fs = require('fs');

fs.writeFile('file2.txt', 'This text will be placed', function (err) {
  if (err) throw err;
  console.log('Written in the file2.txt');
});