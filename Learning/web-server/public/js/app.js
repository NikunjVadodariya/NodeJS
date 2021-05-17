console.log("Client side JS is loadedd")


fetch("http://localhost:3000/weather?address=Rajkot").then((response) => {
    response.json().then((data) =>{
        if(data.error){
            console.log(data.error)

        }
        else{
            console.log(data)

        }
    })
})


// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//     console.log(response)
// })