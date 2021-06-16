const mail = require("@sendgrid/mail")

const key = "G.hBFd-OvTK-Zqxo4Eg.jkjkjk"
mail.sendApiKey(key)

mail.send({
    "to": "nikun@hj.com",
    "from": "nikunj@jk.com",
    "subject": "This is subject",
    "text": "hello"
})