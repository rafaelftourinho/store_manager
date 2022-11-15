const { Router } = require('express');
const productController = require('../controllers/productController');
const validateName = require('../middlewares/validation');

const productsRoute = Router();

productsRoute.get('/', productController.getAllProducts);
productsRoute.get('/:id', productController.getProductFromID);
productsRoute.post('/', validateName, productController.insertProduct);

module.exports = {
  productsRoute,
};
