const { expect } = require('chai');
const sinon = require('sinon');
const productModel = require('../../../src/models/productModel');
const productService = require('../../../src/services/productService');
const { mockAllProducts, mockOneProduct } = require('../../mocks/productMock');

describe('Teste para a camada de Service ', function () {
  describe('Testa o funcionamento da função getAllProducts', function () {
    it('Testa funcionalidades da getAllProducts', async function () {
      sinon.stub(productModel, 'getAllProducts').resolves(mockAllProducts);
      const result = await productService.getAllProducts();

      expect(result).to.be.an('array');
      expect(result).to.be.deep.equal(mockAllProducts);
    });
  });

  describe('Testa o funcionamento da função getProductFromID', function () {
    it('Testa se retorna o produto com o id passado como parâmetro', async function () {
      sinon.stub(productModel, 'getProductFromID').resolves(mockOneProduct);

      const product = await productService.getProductFromID(1);

      expect(product).to.be.an('object');
      expect(product).to.be.deep.equal(mockOneProduct);
    });
  });
});
