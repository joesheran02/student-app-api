const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/", (request,response) => {
    response.send("Hello")
})

app.post("/Contact", (request,response) => {
    response.send("Welcome to my Contact Page")
})

app.listen(8000,()=>{
    console.log("server started!!!")
})