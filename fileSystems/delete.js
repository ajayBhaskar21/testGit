var fs = require('fs');

fs.unlink('dele.txt', function (err) {
  if (err) console.log(err);
  console.log('File deleted!');
});