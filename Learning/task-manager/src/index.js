const express = require("express")
require('./db/mongoose')
const user_router = require("./routers/user")
const task_router = require("./routers/task")

const port = process.env.PORT || 5000


const app= express()

app.use(express.json()) // Automatically pass request body to object


// const router = new express.Router()
// router.get("/test", (req, res) => {
//     console.log("Test router")
// })   
// app.use(router)

// app.get("/test", (req, res) => {
//     console.log("Test router")
// })   


app.use(user_router)
app.use(task_router)


app.listen(port, () => {
    console.log("Running at port" + port)
})