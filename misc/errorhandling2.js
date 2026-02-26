const fs = require('fs');
fs.readFile('nonexistentfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    else {
        console.log('File contents:', data);
    }
});
fs.readFile('existentfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }   else {
        console.log('File contents:', data);
    } 
});