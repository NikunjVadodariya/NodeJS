const express = require("express")
const path = require("path")
const http = require("http")
const socketIo = require("socket.io")
 const {generatemessge, generateLocationMessage} = require("./utils/messages")
 const {addUser,
    removeUser,
    getUser,
    getUsersinRoom} = require("./utils/users")

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

// let count = 0
io.on("connection", (socket) => {
    // console.log("Connected")
    // socket.emit("countUpdated", count)
    // socket.on("increment", () => {
    //     count ++
    //     io.emit("countUpdated", count)
    // })

    socket.on("send-message", (message, callback) => {
        io.emit("message", generatemessge(message))
        callback()
    })

    socket.on("disconnect", () => {
        const user = removeUser(socket.id)
        io.emit("message",generatemessge("User left"))
    })


    socket.on("sendLocation", (data) => {
        console.log(data)
        io.emit("Locationmessage", generateLocationMessage(`https://www.google.com/maps?q=${data.lat},${data.long}`))
    })

    socket.on("join", ({username, room}, callback) => {
        console.log(username, room)
        const {error, user} = addUser(socket.id, username, room)
        if(error){
            return callback(error)
        }
        socket.join(user.room)
        socket.emit("message", generatemessge("Welcome"))
        // io.to.emit()
        socket.broadcast.to(user.room).emit("message", generatemessge(`${user.username} joined`))
        io.to(room).emit("roomData",{
            room: user.room,
            users: getUsersinRoom(user.room)
        })
        callback()
    })
})

const port = process.env.PORT || 3000
const p = path.join(__dirname, "../public")

app.use(express.static(p))

server.listen(port, () => {
    console.log("Running")
})