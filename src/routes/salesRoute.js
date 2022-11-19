const { Router } = require('express');
const salesController = require('../controllers/salesController');
const { validateSale } = require('../middlewares/validation');

const salesRoute = Router();

salesRoute.get('/', salesController.getAllSales);
salesRoute.get('/:id', salesController.getSalesIdWithDate);
salesRoute.post('/', validateSale, salesController.registerSales);

module.exports = {
  salesRoute,
};
