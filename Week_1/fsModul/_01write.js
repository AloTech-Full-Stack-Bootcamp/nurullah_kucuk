
const fs = require('fs');
let personData = {'name' : 'Employee_1 Name','salary' : '2000'}

// Write
fs.writeFile('employee.json', JSON.stringify(personData),
    function (err, data) {
        if (err) throw err;
        console.log(personData,'DATA WAS WRITTEN TO FILE');
    });


