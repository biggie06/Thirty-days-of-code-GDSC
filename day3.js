const fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data) {
    if (err) {
        return console.error('Error reading file:', err);
    }
    
    fs.writeFile('writeMe.txt', data, function(err) {
        if (err) {
            return console.error('Error writing file:', err);
        }
        
        console.log('File written');
    });
});
