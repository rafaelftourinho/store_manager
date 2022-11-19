const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');
const errorMessage = require('../../mocks/errorMessage');
const { allSalesArrayMock, allSalesMock, insertMockData, registeredProducts, wrongSales, returnModelMock } = require('../../mocks/salesMock');

describe('Testa a camada Services', () => {
  describe('Testa o funcionamento da função getAllSales', () => {
    it('Testa se todos as vendas são retornadas com sucesso', async () => {
      sinon.stub(salesModel, 'getAllSales').resolves(allSalesArrayMock);
      const [result] = await salesService.getAllSales();

      expect(allSalesMock).to.be.an('array');
      expect(allSalesMock).to.be.deep.equal(result);
    })
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função getProductFromID', () => {
    it('Testa se retorna o produto com o id passado como parâmetro', async () => {
      sinon.stub(salesModel, 'getSalesFromID').resolves(allSalesArrayMock);
      const [sales] = await salesService.getSalesFromID(1);

      expect(allSalesMock).to.be.an('array');
      expect(allSalesMock).to.be.deep.equal(sales);
    });
    afterEach(sinon.restore);
  });

  describe('Testa o funcionamento da função registerSales', () => {
    it('Testa se a função cadastra corretamente a venda feita', async () => {
      sinon.stub(salesModel, 'registerSales').resolves(returnModelMock);
      // sinon.stub(salesModel, 'getSalesFromID').resolves(registeredProducts);
      // const id = await salesService.getSalesFromID(1);
      // const sales = await salesService.registerSales(id);
      const sales = await salesService.registerSales(registeredProducts);
      // console.log(sales);

      expect(sales).to.be.an('object');
      // expect(sales).to.be.deep.equal(registeredProducts);
      expect(returnModelMock).to.be.deep.equal(sales);
    });

    // it('Testa se a função falha ao tentar cadastrar uma venda não registrada', async () => {
    //   sinon.stub(salesModel, 'registerSales').resolves({ type: 'NOT_FOUND', message: 'Product not found' });

    //   const sales = await salesService.registerSales(registeredProducts);

    //   expect(sales).to.be(errorMessage);
    // });
    afterEach(sinon.restore);
  });
});
