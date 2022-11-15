const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/productModel');
const { mockProducts, mockOneProduct, mockAllProducts } = require('../../mocks/productMock');


describe('Teste para a camada de Model', function () {
  describe('Testa o funcionamento da função getAllProducts', function () {
    it('Testa funcionalidades da getAllProducts', async function () {
      sinon.stub(connection, 'execute').resolves(mockAllProducts);
      const result = await productModel.getAllProducts();

      expect(mockProducts).to.be.an('array');
      expect(mockProducts).to.be.deep.equal(result);
    });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função getProductFromID', function () {
    it('Testa se retorna o produto com o id passado como parâmetro', async function () {
      sinon.stub(connection, 'execute').resolves(mockAllProducts);
      const product = await productModel.getProductFromID(1);

      expect(product).to.be.an('object');
      expect(product).to.be.deep.equal(mockOneProduct);
    });
    afterEach(sinon.restore);
  });
});
