const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')

const getTareas = asyncHandler (async (req, res) => {

    const tareas = await Tarea.find()
    res.status(200).json(tareas)
})

const crearTareas = asyncHandler (async (req, res) =>{
    if(!req.body.descripcion){
        res.status(400)
        throw new Error('Por favor teclea una descripcion')
    }
    // Crear tarea
    const tarea = await Tarea.create({
        descripcion: req.body.descripcion
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