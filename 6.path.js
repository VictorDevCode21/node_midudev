// eslint-disable-next-line no-undef
const path = require("node:path");


// Separating bar for each operative system console.log()
// console.log(path.sep)

// Join routes with path.join()
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// Get a file using the basename of the specified file
const base = path.basename('/tmp/victor/secret/password.txt');
console.log(base);


// Get the filename without the extension
const fileName = path.basename('/tmp/victor/secret/password.txt', '.txt');
console.log(fileName);


const extension = path.extname('my.incredible.image.jpg');
console.log(extension);






