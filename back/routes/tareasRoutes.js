const express = require('express')
const router = express.Router()

// importar variables
const {getTareas, crearTareas, updateTareas, deleteTareas} = require('../controles/tareasController')

router.route('/').get(getTareas).post(crearTareas)
router.route('/:id').put(updateTareas).delete(deleteTareas)

// se puede hacer de las dos formas

//router.get('/', getTareas)
//router.post('/', crearTareas)
//router.put('/:id', updateTareas)
//router.delete('/:id', deleteTareas)

module.exports = router
