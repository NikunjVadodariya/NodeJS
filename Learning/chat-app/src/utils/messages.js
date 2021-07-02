const generatemessge = (m) => {
    return {
        text: m,
        createdAt: new Date().getTime()
    }
}
const generateLocationMessage = (m) => {
    return {
        url: m,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generatemessge,
    generateLocationMessage
}