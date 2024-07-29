
const Product = require('../models/productDataModel'); // Ensure correct path

exports.createProduct = async (req, res) => {
  try {
    console.log('Request Body:', req.body);

    // Validate request body
    if (!req.body.name || !req.body.price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    // Insert product into the database
    const product = await Product.query().insert({
      name: req.body.name,
      price: req.body.price
    });

    console.log('Inserted Product:', product);

    // Send success response
    res.status(200).json(product);
  } catch (error) {
    console.error('Error in createProduct:', error);

    // Send error response
    res.status(500).json({ error: 'An error occurred while creating the product.' });
  }
};
