const name = ["Nikunj"]

const name1 = name.filter((n) =>{
    return n.length === 4
})

console.log(name1)

const add = (n1, n2 , callback) => {
    setTimeout(() => {
        callback(n1+ n2)
    }, 2000)
}

add(4, 5, (sum) => {
    console.log(sum)
})