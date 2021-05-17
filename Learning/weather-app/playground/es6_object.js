const name= "Nikunj"
const age = 23

// const user = {
//     name: name,
//     age : age
// }


const user = {
    name,
    age
} 
console.log(user)

const product = {
    lable: "cloth",
    size: 35,
    price: 599
}

const {lable, price} = product
console.log(lable, price)

const {lable: product_lable} = product
console.log(product_lable)

const {lable: product_lable1, rating=5} = product
console.log(product_lable1, rating)