const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require('./models/product.model')

app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello from node API')
})

app.post('/api/products', async (req, res) => {
	try {
		const productData = await Product.create(req.body)
		res.status(200).json(productData)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

app.get('/api/products', async (req, res) => {
	try {
		const productsData = await Product.find()
		res.status(200).json(productsData)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

app.get('/api/product/:id', async (req, res) => {
	try {
		const productData = await Product.findById(req.params.id)
		res.status(200).json(productData)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

app.put('/api/product/:id', async (req, res) => {
	try {
		const productData = await Product.findByIdAndUpdate(
			req.params.id,
			req.body
		)
		if (!productData) {
			return res.status(404).json({ message: 'Product not found' })
		}
		const updatedProduct = await Product.findById(req.params.id)
		res.status(200).json(updatedProduct)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

app.delete('/api/product/:id', async (req, res) => {
	try {
		const productData = await Product.findByIdAndDelete(req.params.id)
		if (!productData) {
			return res.status(404).json({ message: 'Product not found' })
		}

		const allProducts = await Product.find()
		res.status(200).json(allProducts)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
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
