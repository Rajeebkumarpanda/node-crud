const express = require('express')
const PORT = 8000
const app = express()
const db = require("./db/connection")
const personRouter = require("./routes/person")

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
