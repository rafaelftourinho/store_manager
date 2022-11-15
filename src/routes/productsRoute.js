const { Router } = require('express');
const productController = require('../controllers/productController');

const productsRoute = Router();

productsRoute.get('/', productController.getAllProducts);
productsRoute.get('/:id', productController.getProductFromID);
productsRoute.post('/', productController.insertProduct);

module.exports = {
  productsRoute,
};
