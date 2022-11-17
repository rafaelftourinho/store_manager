const salesService = require('../services/salesService');
const errorMessage = require('../../tests/mocks/errorMessage');
const status = require('../utils/status');

const getAllSales = async (_req, res) => {
  const result = await salesService.getAllSales();
  res.status(200).json(result);
};

const getSalesFromID = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getSalesFromID(id);
  if (!result) return res.status(404).json(errorMessage);
  return res.status(200).json(result);
};

const registerSales = async (req, res) => {
  const result = await salesService.registerSales(req.body);

  if (result.type) return res.status(status[result.type]).json({ message: 'Product not found' });

  return res.status(status.HTTP_OK).json(result);
};

module.exports = {
  getAllSales,
  getSalesFromID,
  registerSales,
};
