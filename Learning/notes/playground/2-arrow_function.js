// const square =  function square(x){
//     return x*x
// }

// const square = (x) => {
//     console.log("Hello")
//     return x*x
// }

// const square = (x) =>  x*x


// console.log(square(3))

// const event = {
//     name: "Birhday",
//     printGuest: () => {
//         console.log("name ", this.name)
//     }

// }

// event.printGuest()  --> name  undefined

// const event = {
//     name: "Birhday",
//     guestList: ["Nikunj", "Harsh", "Dhruvil"],
//     printGuest() {
//         const that = this
//         this.guestList.forEach(function(name){
//             console.log("party ", that.name, " name ", name)
//         })

//     }

// } 
// event.printGuest()

const event = {
    name: "Birhday",
    guestList: ["Nikunj", "Harsh", "Dhruvil"],
    printGuest() {
        this.guestList.forEach(function (name) {
            console.log("party ", this.name, " name ", name)
        })

    }

} 
event.printGuest()