const {calculate, add} = require("../src/math")

test("Total with tip", () => {
    const total = calculate(10, 0.3)
    expect(total).toBe(13)
    // if(total !== 13){
    //     throw new Error()
    // }
})

// test("Hello World", () => {

// })

// test("Fails", () => {
//     throw new Error()
// })

test("Async", (done) => {
    setTimeout(() => {
        expect(1).toBe(1)
        done()
    }, 2000)
})

test("Should add numbers", (done) => {
    add(2, 3).then((sum) =>{
        expect(sum).toBe(5)
        done()
    })
})

test("Should add numbers Async await", async () => {

    
    const result = await add(2, 3)
    expect(result).toBe(5)
})




