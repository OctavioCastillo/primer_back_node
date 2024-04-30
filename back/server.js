// llamar una variable para express
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')

connectDB()

const port = process.env.PORT || 5000

const app = express()

// obtener datos del body
app.use(express.json()) 
app.use(express.urlencoded({extended: false}))

// importar y usar la app
app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// utilizar el error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))

