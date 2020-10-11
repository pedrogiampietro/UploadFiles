const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(
	'mongodb+srv://root:899681ph@cluster0.v083q.gcp.mongodb.net/upload?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(require('./routes'))

app.listen(3001)
