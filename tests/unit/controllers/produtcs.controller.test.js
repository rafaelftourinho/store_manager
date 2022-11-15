const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { mockProducts, mockOneProduct } = require('../../mocks/productMock');
const productController = require('../../../src/controllers/productController');
const productService = require('../../../src/services/productService');
const errorMessage = require('../../mocks/errorMessage');

chai.use(sinonChai);

describe('Teste para a camada de Controller', function () {
  describe('Testa o funcionamento da função getAllProducts', function () {
    it('Testa funcionalidades da getAllProducts', async function () {
      const req = {};
      const res = {};

      sinon.stub(productService, 'getAllProducts').resolves(mockProducts);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productController.getAllProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockProducts);
    });
  });

  describe('Testa o funcionamento da função getProductFromID', function () {
    it('Testa se retorna o produto com o id passado como parâmetro', async function () {
      const req = { params: 1 };
      const res = {};

      sinon.stub(productService, 'getProductFromID').resolves(mockOneProduct);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productController.getProductFromID(req, res);

      expect(res.status).to.be.have.been.calledWith(200);
      expect(res.json).to.be.have.been.calledWith(mockOneProduct);
    });

    it('Testa se há o retorno do erro ao passar um id inexistente', async function () {
      const req = { params: 86 };
      const res = {};

      sinon.stub(productService, 'getProductFromID').resolves(undefined)

      res.status = sinon.stub().returns(res);
      res.send = sinon.stub().returns(errorMessage);

      await productController.getProductFromID(req, res);

      expect(res.status).to.be.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith(errorMessage)
    });
  });
});
