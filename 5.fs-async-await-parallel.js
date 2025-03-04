// eslint-disable-next-line no-undef
const { readFile } = require("node:fs/promises");



// Working with promises using parallelism
Promise.all([
    readFile("./file.txt", "utf-8"),
    readFile("./file2.txt", "utf-8"),
]).then(([text, text2]) => {
    console.log("First text:" + text)
    console.log("First text:" + text2)
}).catch((e) => {
    console.error(e)
})
