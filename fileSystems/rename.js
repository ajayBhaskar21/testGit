var fs = require('fs');

fs.rename('oldName.c', 'renamed.c', function (err) {
  if (err) throw err;
  console.log('File Renamed successfully!');
});