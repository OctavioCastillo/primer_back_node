const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: [true, "Por favor crea una descripción"]
    }
}, {
    timestamps: true // mongo crea 2 campos, para la fecha de creación y de update
})

module.exports = mongoose.model('Tarea', tareaSchema)