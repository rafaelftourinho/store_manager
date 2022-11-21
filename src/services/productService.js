const productModel = require('../models/productModel');
const { returnProductError, returnUpdateError } = require('../../tests/mocks/returnErrors');

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
  if (!productId) return returnProductError;

  const affectedRows = await productModel.updateProduct(name, id);
  if (!affectedRows) return returnUpdateError;

  const result = await productModel.getProductFromID(id);

  return result;
};

const deleteProduct = async (id) => {
  const idProduct = await productModel.getProductFromID(id);

  if (!idProduct) return returnProductError;

  const deletedProduct = await productModel.deleteProduct(id);

  return deletedProduct;
};

const searchProduct = async (query) => {
  const products = await productModel.getAllProducts();
  const filteredProduct = products.filter((item) => item.name.toLowerCase()
    .includes(query.toLowerCase()));

  return filteredProduct;
};

module.exports = {
  getAllProducts,
  getProductFromID,
  insertProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
