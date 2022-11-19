const { Router } = require('express');
const productController = require('../controllers/productController');
const { validateName } = require('../middlewares/validation');

const productsRoute = Router();

productsRoute.get('/search', productController.searchProduct);
productsRoute.get('/', productController.getAllProducts);
productsRoute.get('/:id', productController.getProductFromID);
productsRoute.post('/', validateName, productController.insertProduct);
productsRoute.put('/:id', validateName, productController.updateProduct);
productsRoute.delete('/:id', productController.deleteProduct);

module.exports = {
  productsRoute,
};
