const Product = require('../models/productDataModel');

exports.createProduct = async (req, res) => {
  try {
    console.log('Request Body:', req.body);  // Log the incoming request body
    const product = await Product.query().insert(req.body);
    console.log('Inserted Product:', product); // Log the inserted product
    res.status(201).json(product);
  } catch (error) {
    console.error('Error in createProduct:', error);
    console.error('Full Error Object:', error);
    res.status(500).json({ error: error.message });
  }
};


