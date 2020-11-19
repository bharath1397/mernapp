const express = require('express')
const  mongoose = require('mongoose')
const cors = require('cors');
const url = 'mongodb://localhost/form'

const app = express()
app.use(cors());

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() =>{
    console.log('connected...')
})

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users',userRouter)

app.listen(3000, () =>{
    console.log('Server Started')
})