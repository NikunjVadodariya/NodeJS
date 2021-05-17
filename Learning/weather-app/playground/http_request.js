const http = require("http")
const url = "http://api.weatherstack.com/current?access_key=ea69a508418c616b2b10367bf949d8b5&query=40,-75&units=s"


const request = http.request(url, (response) =>{
    let data = ""
    response.on("data", (chunk) => {
        data = data + chunk.toString()
        // console.log(chunk)
    })

    response.on("end", () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on("error", (error) => {
    console.log("error ", etror)
})

request.end()