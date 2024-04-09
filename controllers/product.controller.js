const Product = require('../models/product.model')

const getAllProducts = async (req, res) => {
	try {
		const productsData = await Product.find()
		res.status(200).json(productsData)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const getProduct = async (req, res) => {
	try {
		const productData = await Product.findById(req.params.id)
		res.status(200).json(productData)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const addProduct = async (req, res) => {
	try {
		const productData = await Product.create(req.body)
		res.status(200).json(productData)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const updateProduct = async (req, res) => {
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
}

const deleteProduct = async (req, res) => {
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
}

module.exports = {
	getAllProducts,
	getProduct,
	addProduct,
	updateProduct,
	deleteProduct,
}
