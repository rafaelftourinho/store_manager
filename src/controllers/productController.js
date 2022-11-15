const productService = require('../services/productService');

const getAllProducts = async (_req, res) => {
  const product = await productService.getAllProducts();
  res.status(200).json(product);
};

const getProductFromID = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductFromID(id);
  if (!product) res.status(404).json({ message: 'Product not found' });
  else res.status(200).json(product);
};

module.exports = {
  getAllProducts,
  getProductFromID,
};
