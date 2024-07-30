
const Product = require('../models/productDataModel'); 


exports.createProduct = async (req, res) => {
  try {
    console.log('Request Body:', req.body);

    if (!req.body.name || !req.body.price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    const product = await Product.query().insert({
      name: req.body.name,
      price: req.body.price
    });

    console.log('Inserted Product:', product);

   
    res.status(200).json(product);
  } catch (error) {
    console.error('Error in createProduct:', error);

   
    res.status(500).json({ error: 'An error occurred while creating the product.' });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.query();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    res.status(500).json({ error: 'An error occurred while fetching the products.' });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.query().findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error in getProductById:', error);
    res.status(500).json({ error: 'An error occurred while fetching the product.' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.query().patchAndFetchById(req.params.id, req.body);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error in updateProduct:', error);
    res.status(500).json({ error: 'An error occurred while updating the product.' });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const rowsDeleted = await Product.query().deleteById(req.params.id);
    if (!rowsDeleted) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error in deleteProduct:', error);
    res.status(500).json({ error: 'An error occurred while deleting the product.' });
  }
};
