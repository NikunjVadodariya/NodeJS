const calculate = (total, tippercentage=0.25) => {
    const tip = total * tippercentage
    return total + tip
}

const add = (a,b) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<0 || b<0){
                return reject("Only positive")
            }
            resolve(a+b)
        }, 2000)
    })
}



module.exports = {
    calculate, add
}