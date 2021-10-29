
const fs = require('fs');

// Create file
fs.appendFile('employee.json',"",function (err, data) {
    if (err) throw err;
        console.log('FILE WAS CREATED');
    });



