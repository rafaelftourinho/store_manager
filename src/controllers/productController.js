const productService = require('../services/productService');
const status = require('../utils/status');

const getAllProducts = async (_req, res) => {
  const product = await productService.getAllProducts();
  res.status(200).json(product);
};

const getProductFromID = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductFromID(id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
};

const insertProduct = async (req, res) => {
  const result = await productService.insertProduct(req.body);

  return res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const update = await productService.updateProduct(name, id);

  if (update.type) return res.status(status[update.type]).json({ message: update.message });

  return res.status(200).json(update);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const productDeleted = await productService.deleteProduct(id);

  if (productDeleted) {
    return res.status(status[productDeleted.type])
      .json({ message: productDeleted.message });
  }
  res.status(204).json({ message: 'Product deleted successfully' });
};

module.exports = {
  getAllProducts,
  getProductFromID,
  insertProduct,
  updateProduct,
  deleteProduct,
};
