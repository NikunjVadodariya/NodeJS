const express = require("express")
const User = require("../models/user")

const router = new express.Router()

router.post("/users", async (req, res) => {

    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }
    catch(e){
        res.status(400).send(e)
    }




    // user.save().then(() => {
    //     res.send(user)
    // }).catch((e) =>{
    //     res.status(400).send(e)
    //     // res.send(e)
    // })

    // console.log(req.body)
    // res.send("Hello")

})

router.get("/users", async (req, res) => {
    try{
        const users = await User.find()
        res.send(users)
    }
    catch(e){
        res.status(500).send(e)
    }


//  User.find().then((users) => {
//      res.send(users)
//  }).catch((e) => {
//     res.status(500).send(e)
//  })   

})

router.get("/users/:id", async (req, res) => {

    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(400).send()
        }
        res.send(user)
    }
    catch(e){
        res.status(500).send(e)
    }


    // const _id = req.params.id
    // User.findById(_id).then((user) => {
    //     if(!user){
    //         return res.status(400).send()
    //     }
    //     res.send(user)
    // }).catch((e) => {
    //    res.status(500).send(e)
    // })   
   })


router.patch('/users/:id', async (req, res) => {
    const allowed = ['name']
    const udates = Object.keys(req.body)
    const is_valid = udates.every((u) => {
        return allowed.includes(u)
    })
    if (!is_valid){
        return res.status(400).send()
    }
    const _id= req.params.id
    try{
        const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidator: true})
        if(!user){
            return res.status(400).send()
        }
        res.send(user)

    }catch(e){
        res.status(500).send(e)
    }

})

router.delete('/users/:id', async (req, res) => {
    const _id= req.params.id
    try{
        const user = await User.findByIdAndDelete(_id)
        if(!user){
            return res.status(400).send()
        }
        res.send(user)

    }catch(e){
        res.status(500).send(e)
    }

})

module.exports = router