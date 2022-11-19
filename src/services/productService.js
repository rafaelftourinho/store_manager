const productModel = require('../models/productModel');

const getAllProducts = async () => {
  const product = await productModel.getAllProducts();
  return product;
};

const getProductFromID = async (id) => {
  const product = await productModel.getProductFromID(id);
  return product;
};

const insertProduct = async ({ name }) => {
  const id = await productModel.insertProduct(name);
  const product = await productModel.getProductFromID(id);
  return product;
};

const updateProduct = async (name, id) => {
  const productId = await productModel.getProductFromID(id);
  if (!productId) return { type: 'NOT_FOUND', message: 'Product not found' };

  const affectedRows = await productModel.updateProduct(name, id);
  if (!affectedRows) return { type: 'NOT_UPDATED', message: 'Não é possível atualizar o produto' };

  const result = await productModel.getProductFromID(id);

  return result;
};

const deleteProduct = async (id) => {
  const idProduct = await productModel.getProductFromID(id);
  console.log(idProduct);

  if (!idProduct) return { type: 'NOT_FOUND', message: 'Product not found' };

  await productModel.deleteProduct(id);
};

module.exports = {
  getAllProducts,
  getProductFromID,
  insertProduct,
  updateProduct,
  deleteProduct,
};
