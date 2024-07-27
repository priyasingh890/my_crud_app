
const product = require('../models/productDataModel');

exports.getAllUsers = async (req, res) => {
  try {
    const products = await product.query();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const products = await product.query().findById(req.params.id);
    if (!products) {
      return res.status(200).json({ message: 'User not found' });
    }
    res.status(200).json(products);
  } catch (error) {
    console,log(error)
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const products = await product.query().insert(req.body);
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const products = await product.query().patchAndFetchById(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const rowsDeleted = await product.query().deleteById(req.params.id);
    if (rowsDeleted === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
