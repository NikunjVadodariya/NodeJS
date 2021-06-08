const express = require("express")
require('./db/mongoose')
const User = require("./models/user")
const Task = require("./models/task")

const port = process.env.PORT || 5000


const app= express()

app.use(express.json()) // Automatically pass request body to object


app.post("/users", (req, res) => {

    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) =>{
        res.status(400).send(e)
        // res.send(e)
    })

    // console.log(req.body)
    // res.send("Hello")

})

app.get("/users", (req, res) => {
 User.find().then((users) => {
     res.send(users)
 }).catch((e) => {
    res.status(500).send(e)
 })   

})

app.get("/users/:id", (req, res) => {

    const _id = req.params.id
    User.findById(_id).then((user) => {
        if(!user){
            return res.status(400).send()
        }
        res.send(user)
    }).catch((e) => {
       res.status(500).send(e)
    })   
   })

app.post("/tasks", (req, res) => {

    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) =>{
        res.status(400).send(e)
        // res.send(e)
    })

    // console.log(req.body)
    // res.send("Hello")

})

app.get("/tasks", (req, res) => {
    Task.find().then((tasks) => {
        res.send(tasks)
    }).catch((e) => {
       res.status(500).send(e)
    })   
   
   })
   
   app.get("/tasks/:id", (req, res) => {
   
       const _id = req.params.id
       Task.findById(_id).then((task) => {
           if(!task){
               return res.status(400).send()
           }
           res.send(task)
       }).catch((e) => {
          res.status(500).send(e)
       })   
      })

app.listen(port, () => {
    console.log("Running at port" + port)
})