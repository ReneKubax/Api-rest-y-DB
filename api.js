const express = require('express')
const mongoose  = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

app.use(express.json())
mongoose.connect('mongodb+srv://ReneKubax:barcelona123@cluster0.cyhw72u.mongodb.net/?retryWrites=true&w=majority')
app.get('/users', user.list)
app.post('/users', user.create)
app.get('/users', user.get)
app.put('/users', user.update)
app.patch('/users', user.update)
app.delete('/users', user.destroy)
app.use(express.static('app'))

app.get('/', (req, res) =>{
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req,res) => {
    res.status(404).send('Esta pagina no existe uwu')
})
app.listen(port, ()=>{
        console.log('Arrancando nuestra app')
    } )