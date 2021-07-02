
const users = []

const addUser = (id, username, room) => {

    usernam = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    if(!username || !room){
        return {
            "error": "Username and roo requred"
        }
    }
    const existng_user = users.find((user) => {
        return user.room === room && user.username === username
    })
    if(existng_user){
        return {
            error: "Alreay"
        }
    }
    const user = {id, username, room}
    users.push(user)
    return {user}
}


const removeUser = (id) => {

    const index = users.findIndex((user) => {
        return user.id === id
    })
    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {

    const user = users.find((user) => {
        return user.id === id
    })
    return user
}


const getUsersinRoom = (room) => {

    const user = users.filter((user) => {
        return user.room === room
    })
    return user
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersinRoom
}