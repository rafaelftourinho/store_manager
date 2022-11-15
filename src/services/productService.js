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
  const product = await productModel.insertProduct(name);
  return product;
};

module.exports = {
  getAllProducts,
  getProductFromID,
  insertProduct,
};
