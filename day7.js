const fs = require('fs');
const path = require('path');

const directoryPath = 'C:\\Users\\USER\\Documents\\scripts.js\\test';
const outputPath = 'C:\\Users\\USER\\Documents\\scripts.js\\test\\file1.txt';

function DirectoryContents() {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.log('Cannot read this directory: ' + err);
        }
        const fileList = files.join('\n');
        fs.writeFile(outputPath, fileList, (err) => {
            if (err) {
                return console.log('Error writing to file: ' + err);
            }

            console.log('Contents written successfully to ' + outputPath);
        });
    });
}

DirectoryContents();
