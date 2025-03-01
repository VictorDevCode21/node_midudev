const os = require('node:os')

console.log("Information of os:")
console.log("-----------------------")

console.log("Name of os system: " , os.platform())
console.log("Version of os system: " , os.release())
console.log("Architecture: " , os.release())
console.log("CPUs: ", os.cpus())
console.log("Free memory: ", os.freemem() / 1024 / 1024)
console.log("Total memory: ", os.totalmem() / 1024 / 1024)
console.log("Uptime: ", os.uptime() / 60 / 60)


