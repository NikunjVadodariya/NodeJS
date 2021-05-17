// const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes')

// console.log(getNotes())

// console.log(process.argv)

// console.log(yargs.argv)

// yargs.version("1.1.0")
// console.log(yargs.argv)   ---> print 1.1.0

yargs.command({
    "command": "add",
    "description": "Add a new note",
    "builder": {
        "title": {
            "description": "Note title",
            demandOption: true,
            "type": 'string'
            
        },
        "body": {
            "description": "Note body",
            demandOption: true,
            "type": 'string'   
        }
    },
    handler(argv){
    // console.log("Adding a new note")
    // console.log(argv)  --> { _: [ 'add' ], title: '', '$0': 'app.js' }
    // console.log(argv.title)
    // console.log(argv.body)
    notes.addNotes(argv.title, argv.body)
}
})


yargs.command({
    "command": "remove",
    "description": "Remove a new note",
    handler(argv){
        notes.removeNotes(argv.title)
    },
        "builder": {
        "title": {
            "description": "Note title",
            demandOption: true,
            "type": 'string'
            
        }
    }
    
})


yargs.command({
    "command": "read",
    "description": "Read a new note",
    handler(){
        notes.readNotes(argv.title)
    },
    "builder": {
        "title": {
            "description": "Note title",
            demandOption: true,
            "type": 'string' 
        }
    }

})


yargs.command({
    "command": "list",
    "description": "Listing notes",
    handler(){
        console.log(notes.listNotes())

    }
    
})


yargs.parse()
// console.log(yargs.argv)
