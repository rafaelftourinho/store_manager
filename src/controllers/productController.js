const productService = require('../services/productService');

const getAllProducts = async (_req, res) => {
  const product = await productService.getAllProducts();
  res.status(200).json(product);
};

const getProductFromID = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductFromID(id);
  if (!product) return res.status(404).send({ message: 'Product not found' });
  res.status(200).json(product);
};

const insertProduct = async (req, res) => {
  const result = await productService.insertProduct(req.body);

  return res.status(201).json(result);
};

module.exports = {
  getAllProducts,
  getProductFromID,
  insertProduct,
};
