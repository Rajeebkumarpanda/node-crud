require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 8000
const app = express()
const db = require("./db/connection")
const personRouter = require("./routes/person")

console.log(process.env.PORT)

//middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use("/person",personRouter)

// app.get('/',(req,res)=>{
//     res.send("Welcome to coders..")
// })


app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})
