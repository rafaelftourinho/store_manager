const salesModel = require('../models/salesModel');
const productsModel = require('../models/productModel');

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  return result;
};

const getSalesFromID = async (id) => {
  const result = await salesModel.getSalesFromID(id);

  if (result.length === 0) return { type: 'NOT_FOUND', message: 'Sale not found' };
  return result;
};

const getSalesIdWithDate = async (id) => {
  const result = await salesModel.getSalesIdWithDate(id);

  if (result.length === 0) return { type: 'NOT_FOUND', message: 'Sale not found' };
  return result;
};

const registerSales = async (sales) => {
  const validate = sales.map(async (item) => {
    const result = await productsModel.getProductFromID(item.productId);
    return result;
  });

  const test = await Promise.all(validate);

  if (test.some((item) => !item)) {
    return { type: 'NOT_FOUND', message: 'Product not found' };
  }

  const result = await salesModel.registerSales(sales);

  return result;
};

module.exports = {
  getAllSales,
  getSalesFromID,
  registerSales,
  getSalesIdWithDate,
};
