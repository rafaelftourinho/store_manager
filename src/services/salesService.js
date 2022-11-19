const salesModel = require('../models/salesModel');
const productsModel = require('../models/productModel');

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  return result;
};

const getSalesFromID = async (id) => {
  const result = await salesModel.getSalesFromID(id);

  if (!result) return { type: 'NOT_FOUND', message: 'Sale not found' };
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

const deleteSale = async (id) => {
  const idSale = await salesModel.getSalesFromID(id);

  if (idSale.length === 0) return { type: 'NOT_FOUND', message: 'Sale not found' };

  await salesModel.deleteSale(id);
};

const updateSales = async (sales, saleId) => {
  const idCheck = await salesModel.getSalesFromID(saleId);

  if (idCheck.length === 0) return { type: 'NOT_FOUND', message: 'Sale not found' };

  const salesCheck = sales.map(async (item) => {
    const result = await productsModel.getProductFromID(item.productId);
    return result;
  });

  const salesProducts = await Promise.all(salesCheck);

  if (salesProducts.some((item) => !item)) {
    return { type: 'NOT_FOUND', message: 'Product not found' };
  }

  const resultSales = sales.map(async (item) => {
    const result = await salesModel.updateSales(item, saleId);
    return result;
  });

  await Promise.all(resultSales);
  
  const result = await salesModel.getSalesFromID(saleId);
  return result;
};

module.exports = {
  getAllSales,
  getSalesFromID,
  registerSales,
  getSalesIdWithDate,
  deleteSale,
  updateSales,
};
