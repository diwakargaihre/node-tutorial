const fs = require('fs')

const firstFile = fs.readFileSync(`${__dirname}/content/first.txt`,'utf-8')
const secondFile = fs.readFileSync('./content/second.txt','utf-8')
console.log(firstFile)
console.log(secondFile)

fs.writeFileSync('./content/result-file.txt',`The final result is: ${firstFile}, ${secondFile}`,{flag: 'a'})