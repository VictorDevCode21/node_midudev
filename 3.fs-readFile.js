const fs = require("node:fs")

// Synchronous
console.log("Reading first file ...")
const text = fs.readFile('./file.txt', 'utf-8', (err, text) => {
    console.log("First text: " + text.charAt(0).toUpperCase() + text.slice(1))
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