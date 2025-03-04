import { readFile } from 'node:fs/promises'

// Synchronous
console.log("Reading first file ...")
const text = await readFile('./file.txt', 'utf-8')
console.log(text.charAt(0).toUpperCase() + text.slice(1))

console.log("\n")
console.log("Doing things while reading first file")


// Asynchronous
console.log("\n")
console.log("Reading second file ...")
const text2 = await readFile('./file2.txt', 'utf-8')

console.log("\n")
console.log(text2)
console.log("\n")