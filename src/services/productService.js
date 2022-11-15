const productModel = require('../models/productModel');

const getAllProducts = async () => {
  const product = await productModel.getAllProducts();
  return product;
};

const getProductFromID = async (id) => {
  const product = await productModel.getProductFromID(id);
  return product;
};

module.exports = {
  getAllProducts,
  getProductFromID,
};
