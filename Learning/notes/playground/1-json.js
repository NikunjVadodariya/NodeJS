const fs =  require('fs')

// const books = {
//     title: "Ego is",
//     "author": "Ryan"
// }


// const book_str = JSON.stringify(books)
// console.log(book_str)

// const book_json = JSON.parse(book_str)
// console.log(book_json)

// fs.writeFileSync("1-json.json", book_str)

// const buffer_data = fs.readFileSync('1-json.json')
// const buffer_str =  buffer_data.toString()
// const bufer_json = JSON.parse(buffer_str)
// console.log(bufer_json)
// console.log(bufer_json.author)

var data = {
    "name":"Andrew",
    "planet":"Earth",
    "age":27
}


console.log(data)
data.name = "Nikunj"
data.age = 22

data = JSON.stringify(data)
fs.writeFileSync("daata.json", data)