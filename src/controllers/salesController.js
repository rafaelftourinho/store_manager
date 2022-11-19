const salesService = require('../services/salesService');
const status = require('../utils/status');

const getAllSales = async (_req, res) => {
  const result = await salesService.getAllSales();
  res.status(200).json(result);
};

const getSalesFromID = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getSalesFromID(id);
  if (result.type) {
    return res.status(404).json({ message: result.message });
  }

  res.status(200).json(result);
};

const getSalesIdWithDate = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getSalesIdWithDate(id);
  if (result.type) {
    return res.status(404).json({ message: result.message });
  }

  res.status(200).json(result);
};

const registerSales = async (req, res) => {
  const result = await salesService.registerSales(req.body);

  if (result.type) return res.status(status[result.type]).json({ message: result.message });

  return res.status(status.HTTP_OK).json(result);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;

  const saleDeleted = await salesService.deleteSale(id);

  if (saleDeleted) {
    return res.status(status[saleDeleted.type]).json({ message: saleDeleted.message });
  }

  res.status(204).json();
};

const updateSales = async (req, res) => {
  const { id } = req.params;
  const sales = req.body;

  const result = await salesService.updateSales(sales, id);
  if (result.type) return res.status(status[result.type]).json({ message: result.message });

  return res.status(200).json({ saleId: id, itemsUpdated: result });
};

module.exports = {
  getAllSales,
  getSalesFromID,
  registerSales,
  getSalesIdWithDate,
  deleteSale,
  updateSales,
};
