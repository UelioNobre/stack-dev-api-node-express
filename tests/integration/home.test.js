const app = require('../../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

describe('Home', () => {
  describe('Endpoint: "/"', () => {
    it('Deve responder a rota principal com sucesso', async () => {
      // ARRANGE
      const PORT = process.env.API_PORT;
      const contentExpected = { info: `API running on port: ${PORT}` };
      const headerContentType = 'content-type';
      const headerContentTypeExpected = 'application/json; charset=utf-8';
      const headerXPoweredBy = 'x-powered-by';

      // ACT
      const request = await chai.request(app).get('/');
      const { statusCode, body, headers } = request

      // ASSERT
      expect(statusCode).to.be.equal(200);
      expect(body).to.be.deep.equal(contentExpected);
      expect(headers[headerContentType]).to.be.equal(headerContentTypeExpected);
      expect(headers).to.not.have.property(headerXPoweredBy);
    });
  });
});
