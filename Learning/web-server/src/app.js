const express =  require("express")
const path = require("path")
const hbs  = require("hbs")


// console.log(__dirname, __filename)
console.log(path.join(__dirname, "../", "public"))

app = express()

app.use(express.static(path.join(__dirname, "../", "public")))
app.set("view engine", 'hbs')

const view_path = path.join(__dirname, "../", "templates/views")
app.set("views", view_path)

const partial_path = path.join(__dirname, "../", "templates/partials")
hbs.registerPartials(partial_path)


// app.get("/", (req, res) => {

//     res.send("<h1>Weather</h1>")
// })

// app.get("/about", (req, res) =>{
//     res.send("<h1> Weather app </h1>")
// })

app.get("/weather", (req, res) =>{
    res.send("Your Weather")
})


// app.get("/help", (req, res) => {
//     res.send({help: "This is help"})
// })


app.get("", (req, res) => {    // home page
    res.render("index", {name: "Nikunj", title: "Weather"})
})

app.get("/about", (req, res) => {    // home page
    res.render("about", {name: "Nikunj", title: "About", about: "This is node js cource"})
})

app.get("/help", (req, res) => {    // home page
    res.render("help", {name: "Nikunj", title: "Help", message: "Anything you want is here"})
})

app.get("/help/*", (req, res) => {    // home page
    res.render("error", { title: "Errir", error: "Article not found"})
})


app.get("*", (req, res) => {    // home page
    res.render("error", { title: "Error", error: "Page not found"})
})

app.listen(3000, () => {
    console.log("Server is up")
})