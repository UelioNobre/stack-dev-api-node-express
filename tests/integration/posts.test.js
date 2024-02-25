const app = require('../../src/app')
const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai;
chai.use(chaiHttp)

const mock = require('../mocks');

describe('Posts', () => {
  describe('Endpoint: "/posts"', () => {
    it('Deve criar um post com sucesso', async () => {
      const request = await chai.request(app).post('/posts').send(mock.postMock)
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(201)
      expect(body).to.have.property('post')
      expect(body.post).to.have.keys('id', 'title', 'text')
      expect(body.post.id).to.be.not.undefined
      expect(body.post.title).to.be.equal(mock.postMock.title)
      expect(body.post.text).to.be.equal(mock.postMock.text)
    });
  })
})
