const demo = new Promise((resolve, reject) => {
    setTimeout(() => {

        console.log("Called")
        resolve([7, 4, 1])
        // reject("This is error")
    }, 2000)
})


demo.then((data) => {
    console.log("Success ", data)
}).catch((error) =>{
    console.log(error)
})

