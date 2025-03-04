const fs = require("node:fs/promises")

// Synchronous
console.log("Reading first file ...")
const text = fs.readFile('./file.txt', 'utf-8')
    .then(text => {
        console.log("First text: " + text)
    })

console.log("\n")
console.log("Doing things while reading first file")


// Asynchronous
console.log("\n")
console.log("Reading second file ...")
const text2 = fs.readFileSync('./file2.txt', 'utf-8')

console.log("\n")
console.log(text2)
console.log("\n")