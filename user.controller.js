const  User = {
 get: (req, res) =>{
    res.status(200).send('este es un hola')
 },
 list: (req, res) => {
        res.status(200).send('Hola')
    }, 
    create: (req, res) => {
        res.status(201).send('Creando un Hola')
    },
    update: (req, res) => {
        res.status(204).send('Actualizando un Hola')
    },
    destroy: (req, res) => {
        res.status(204).send('Eliminando un Hola')
    }
}

module.exports = User