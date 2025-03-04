const fs = require('node:fs') // from node 16 it's recommended to add 'node:' to the path


const stats = fs.statSync('./file.txt')

console.log(
    stats.isFile(), // To see if it is a file
    "\n",
    stats.size, // To see it's size
)



