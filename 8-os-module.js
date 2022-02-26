const os = require('os')

// info about current user

const user = os.userInfo()
console.log(user);

console.log(`System uptime is ${os.uptime} in seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
} 

console.log(currentOS)