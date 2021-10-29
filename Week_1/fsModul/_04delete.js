const fs = require('fs');

fs.unlink('employee.json', function (err) {
    if (err) throw err;
        console.log('FILE DELETED');
});