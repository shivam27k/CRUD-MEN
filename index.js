const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require('./models/product.model')
const ProductRoute = require('./routes/product.route')

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/api/products', ProductRoute)

app.get('/', (req, res) => {
	res.send('Hello from node API')
})

mongoose
	.connect(
		`mongodb+srv://shivam27k:${encodeURIComponent(
			'Shivam@27+1'
		)}@learningmongodb.4tep9h4.mongodb.net/?retryWrites=true&w=majority&appName=LearningMongoDB`
	)
	.then(() => {
		console.log('Connected to MongoDB')
		app.listen(3000, () => {
			console.log('Server is running on http://localhost:3000')
		})
	})
	.catch((err) => {
		console.log('Connection failed', err)
	})
