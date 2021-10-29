
const fs = require('fs');

// Read
fs.readFile('employee.json', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data, 'FILE WAS READ SUCCESSFULL')
});
