
const fs = require('fs');
const fileName = './employee.json';
const file = require(fileName);

file.name = "Nurullah Kucuk";
file.salary = "2500";

// Update
fs.writeFile(fileName, JSON.stringify(file,null,4), function (err) {
    if (err) throw err;
        console.log(JSON.stringify(file));
        console.log('UPDATED TO ' + fileName);
});





