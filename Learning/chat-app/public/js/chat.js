const socket = io()

// elements 
const $messageForm = document.querySelector("#message-form")
const $messageFormInput = $messageForm.querySelector("input")
const $messageFormButton = $messageForm.querySelector("button")
const sidebarTemplate = document.querySelector("#sidebar-template").innerHTML

const {username, room} = Qs.parse(location.search, {'ignoreQueryPrefix': true})
console.log(username, room)

const autoScrole= () => {
    const messges = document.querySelector("#messages")
    const $newMessage = messges.lastElementChild

    const newMessageStyles = getComputedStyle($newMessage)
    const margin = parseInt(newMessageStyles.marginBottom)
    const newMessageheight = $newMessage.offsetHeight + margin

    console.log(newMessageStyles, newMessageheight)

    const visibleHeiight = messges.offsetHeight

    const contentheight = messges.scrollHeight

    const howfarscrolled = messges.scrollTop + visibleHeiight

    if(contentheight - newMessageheight <= howfarscrolled){
        messges.scrollTop = messges.scrollHeight
    }

}

socket.on("message", (message) => {
    console.log(message)
    const messges = document.querySelector("#messages")
    const template = document.querySelector("#message-template").innerHTML
    const html = Mustache.render(template, {msg: message.text, createdAt: moment(message.createdAt).format("h:m a")})
    messges.insertAdjacentHTML("beforeend", html)
    autoScrole()
})

socket.on("Locationmessage", (message) => {
    console.log(message)
    const messges = document.querySelector("#messages")
    const template = document.querySelector("#location-message-template").innerHTML
    const html = Mustache.render(template, {url: message.url, createdAt: moment(message.createdAt).format("h:m a")})
    messges.insertAdjacentHTML("beforeend", html)
    autoScrole()
})
socket.on("roomData", ({room, users}) => {
    console.log("call", room, users)
    const html =  Mustache.render(sidebarTemplate, {room, users})
    document.querySelector("#sidebar").innerHTML=html
   
})
document.querySelector("#message-form").addEventListener("submit", (e) => {
    e.preventDefault()
    $messageFormButton.setAttribute("disabled", "disabled")
    // const m = document.querySelector("input").value
    const m = e.target.elements.message.value
    // socket.emit("send-message", m)
    socket.emit("send-message", m, () => {
        $messageFormButton.removeAttribute("disabled")
        $messageFormInput.value = ""
        $messageFormInput.focus()
        console.log("Message is sent")
    })
})
// document.querySelector("#incerement").addEventListener("click", () => {
//     console.log("gh")
//     socket.emit("increment")
// })

document.querySelector("#send-location").addEventListener("click", () => {
    if(!navigator.geolocation){
        alert("Geo Location not supported")
    }
    else{
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            const data = {
                'lat': position.coords.latitude,
                'long': position.coords.longitude
            }
            socket.emit("sendLocation", data)
        })
    }
    // e.preventDefault()
})

socket.emit("join", {
    username, room
}, (error) => {
    if(error){
        alert(error)
        location.href = "/"
    }
})