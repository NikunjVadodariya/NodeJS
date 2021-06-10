const express = require("express")
const Task = require("../models/task")

const router = new express.Router()

router.post("/tasks", async (req, res) => {

    const task = new Task(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)
    }

    // const task = new Task(req.body)

    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) =>{
    //     res.status(400).send(e)
    //     // res.send(e)
    // })

    // console.log(req.body)
    // res.send("Hello")

})

router.get("/tasks", async (req, res) => {
    try{
        const tasks = await Task.find()
        res.send(tasks)
    }
    catch(e){
        res.status(500).send(e)
    }

    // Task.find().then((tasks) => {
    //     res.send(tasks)
    // }).catch((e) => {
    //    res.status(500).send(e)
    // })   
   
   })
   
router.get("/tasks/:id", async (req, res) => {
    const _id = req.params.id
    try{
        const task = await Task.findById(_id)
        if(!task){
            return res.status(400).send()
        }
        res.send(task)
    }
    catch(e){
        res.status(500).send(e)
    }

    // const _id = req.params.id
    // Task.findById(_id).then((task) => {
    //     if(!task){
    //         return res.status(400).send()
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })   
    })



router.patch('/tasks/:id', async (req, res) => {
    const allowed = ['description', "completed"]
    const udates = Object.keys(req.body)
    const is_valid = udates.every((u) => {
        return allowed.includes(u)
    })
    if (!is_valid){
        return res.status(400).send()
    }
    const _id= req.params.id
    try{
        const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidator: true})
        if(!task){
            return res.status(400).send()
        }
        res.send(task)

    }catch(e){
        res.status(500).send(e)
    }

})

router.delete('/tasks/:id', async (req, res) => {
    const _id= req.params.id
    try{
        const task = await Task.findByIdAndDelete(_id)
        if(!task){
            return res.status(400).send()
        }
        res.send(task)

    }catch(e){
        res.status(500).send(e)
    }

})


module.exports = router