const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        res.json(data)
    } catch (err) {
        res.status(500).json({Message: 'Error fetching products'})
        console.error(err)
    }
})

module.exports = router