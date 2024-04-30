const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')

const getTareas = asyncHandler (async (req, res) => {

    const tareas = await Tarea.find({user: req.user.id}) //filtrar con authtoken para solo mostrar las tareas del usuario
    res.status(200).json(tareas)
})

const crearTareas = asyncHandler (async (req, res) =>{
    if(!req.body.descripcion){
        res.status(400)
        throw new Error('Por favor teclea una descripcion')
    }
    // Crear tarea
    const tarea = await Tarea.create({
        descripcion: req.body.descripcion,
        user: req.user.id
    })

    res.status(201).json(tarea)
})

const updateTareas = asyncHandler (async (req, res) =>{
    // buscamos la tarea que queremos modificar
    const tarea = await Tarea.findById(req.params.id)

    if(!tarea) {
        res.status(404)
        throw new Error('La tarea no existe')
    }

    const tareaUpdated  = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(202).json(tareaUpdated)
})

const deleteTareas = asyncHandler (async (req, res) =>{

    const tarea = await Tarea.findById(req.params.id)

    if(!tarea) {
        res.status(404)
        throw new Error('La tarea no existe')
    }

    await Tarea.deleteOne(tarea)
    res.status(202).json({id: req.params.id})
})

module.exports = {
    getTareas,
    crearTareas,
    updateTareas,
    deleteTareas
}