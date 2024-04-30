const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, //es tipo id de un objeto
        required: [true],
        ref:'User' //busca el object id en la coleccion user
    },
    descripcion: {
        type: String,
        required: [true, "Por favor crea una descripción"]
    }
}, {
    timestamps: true // mongo crea 2 campos, para la fecha de creación y de update
})

module.exports = mongoose.model('Tarea', tareaSchema) //se pone en singular y la primera en mayúscula porque mongo lo crea inverso (tareas)