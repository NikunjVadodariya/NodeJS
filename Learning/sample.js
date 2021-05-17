const fs = require('fs')
add = require('./new.js')

const validator = require('validator')
getNotes = require('./notes/notes')


//fs.writeFileSync("sample.txt", "This is created by node js changed")

fs.appendFileSync('sample.txt', " appended")

// var a = "Nikunj"
console.log(add(6, 7))


console.log(getNotes())

console.log(validator.isEmail('abc@gmail.com'))
console.log(validator.isURL("Hrello"))


const chalk = require('chalk')
y = chalk.red("This is in green")
console.log(y)

console.log(process.argv)
