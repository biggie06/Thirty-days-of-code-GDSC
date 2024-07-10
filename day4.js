import fs from "fs";

function readFileCallback(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}
function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
async function readFileAsync(filePath) {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}
readFileCallback('joseph.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});
readFilePromise('joseph.txt')
    .then(data => {
        console.log('File content :', data);
    })
    .catch(err => {
        console.error('Error reading file :', err);
    });
readFileAsync('joseph.txt');
