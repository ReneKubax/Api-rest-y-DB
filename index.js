const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ReneKubax:barcelona123@cluster0.cyhw72u.mongodb.net/?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({username: 'Pedro', edad: 25})
    const savedUser =  await user.save().then()
    console.log(savedUser)
}

//crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

//buscarTodo()

const buscar = async () => {
    const user = await User.find({username: 'Pedro'})
    console.log(user)
}
//buscar()

const buscarUno = async () => {
    const user = await User.findOne({username: 'Pedro'})
    console.log(user)
}

//buscarUno()

const actualizar = async () => {
    const user = await User.findOne({username: 'Pedro'}
    user.edad = 30
}