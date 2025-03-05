
// eslint-disable-next-line no-undef
const fs = require("node:fs/promises")


// simulate ls command in nodejs using callbacks
// fs.readdir('.', (e, files) => {
//     if (e) {
//         console.log("Error reading directory: " + e)
//         return;
//     }


//     files.forEach(file => {
//         console.log(file);
//     })

// })

console.log(fs.stat())


// simulate ls command in nodejs using promises
fs.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file);
        })
    })
    .catch(e => {
        console.log("Error reading directory: " + e)
        return;
    })

    // 















