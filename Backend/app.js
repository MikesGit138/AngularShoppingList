require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const url = 'mongodb://localhost/shopping'

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routers
const indexRouter = require('./routes/index.routes')

// Routes
app.use('/', indexRouter)

// Start Express App
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
	if (err) throw err

	console.log('MongoDB Connected')

	app.listen(PORT, () => {
		console.log(`Server listening on http://localhost:${PORT}`)
	})
})
