const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

// importar variables
const {getTareas, crearTareas, updateTareas, deleteTareas} = require('../controles/tareasController')

router.route('/').get(protect, getTareas).post(crearTareas)
router.route('/:id').put(protect, updateTareas).delete(deleteTareas)

// se puede hacer de las dos formas

//router.get('/', protect, getTareas)
//router.post('/', protect, crearTareas)
//router.put('/:id', protect, updateTareas)
//router.delete('/:id', protect, deleteTareas)

module.exports = router
