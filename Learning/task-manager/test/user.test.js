const request  = require("supertest")

const app = require("../src/app")
const User = require("../src/models/user")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const id = new mongoose.Types.ObjectId()

const user1 = {
    "name": "Nikunj",
    "age": 23,
    "email": "xyz1@gmail.com",
    "password": "123",
    "tokens": [{token: jwt.sign({_id: id}, "This is secret")}]
}

beforeEach(async () => {
    console.log("Working")
    await User.deleteMany()
    await new User(user1).save()
})

afterEach(() => {
    console.log("Working")
})

test("Signup", async () => {
    await request(app).post("/users").send({
        "name": "Nikunj",
        "age": 23,
        "email": "xyz3@gmail.com",
        "password": "17878788723"
    
    }).expect(201)
})

test("Log in Existing ", async () => {
    await request(app).post("/users/login").send({
        "email": "xyz1@gmail.com",
        "password": "123"
    }).expect(200)
})

test("Fail Log in Existing ", async () => {
    await request(app).post("/users/login").send({
        "email": "xyz@gmail.com",
        "password": "123"
    }).expect(400)
})


// test("Profile ", async () => {
//     await request(app).
//     get("/users/me").
//     set("Authorization", `Bearer ${user1.tokens[0].token}`).
//     send().
//     expect(200)
// })

// test("Avatar Image ", async () => {
//     await request(app).
//     post("/users/me/avatar").
//     set("Authorization", `Bearer ${user1.tokens[0].token}`).
//     attach("avatar", "tests/fixtures/ii.jpg").
//     send().
//     expect(200)
// })