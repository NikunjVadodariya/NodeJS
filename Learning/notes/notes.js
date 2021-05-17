const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "This is a note"
}

const addNotes =  (title, body) => {
    const notes = loadNotes()
    // console.log(notes)
    // const duplicate_notes = notes.filter((note) => {
    //     // if(note.title == title){
    //     //     return true
    //     // }
    //     // return false
    //     return note.title === title
    // })
    // console.log(duplicate_notes)
    const duplicate_note = notes.find((note) => note.title === title)

debugger

    // if(duplicate_notes.length === 0){
    if(!duplicate_note){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New note added")
    }
    else{
        console.log("Duplicate note, title taken")
    }

}

const removeNotes = (title) => {
    const notes = loadNotes()
    const final_notes = notes.filter((note) => {
        // if(note.title == title){
        //     return true
        // }
        // return false
        return note.title !== title
    })
    saveNotes(final_notes)
    if (final_notes.length < notes.length){
        console.log(chalk.green("Note deleted"))
    }
    else{
        console.log(chalk.red("Note not deleted"))
    }
}

const listNotes = () => loadNotes()

const readNotes = (title) => {
    notes = loadNotes()
    note = notes.find((note) => note.title === title)
    if(note){
        console.log(note.title, note.body)
    }
    else{
        console.log(chalk.red("Note no found"))
    }

}


const saveNotes = (notes) => {
    const str = JSON.stringify(notes)
    // fs.writeFileSync('notes.json', strr)
    fs.writeFileSync('notes.json', str)
}

const loadNotes = function loadNotes(){
    try{
        return JSON.parse(fs.readFileSync("notes.json").toString())
    }
    catch(e){
        return []
    }
}

module.exports = {
    'getNotes': getNotes, 
    'addNotes': addNotes,
    'removeNotes': removeNotes,
    'listNotes': listNotes,
    'readNotes': readNotes
}