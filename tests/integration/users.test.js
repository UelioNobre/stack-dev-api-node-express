const app = require('../../src/app')
const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai;
chai.use(chaiHttp)

const { users } = require('../../src/database/models')
const mock = require('../mocks');

beforeAll(async () => {
  await users.destroy({
    truncate: true
  });
})

describe('Users', () => {
  describe('Endpoint: "/users"', () => {
    it('Deve criar um usuário com sucesso', async () => {
      const request = await chai.request(app).post('/users').send(mock.userMock)
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(201)
      expect(body).to.have.property('user')
      expect(body.user).to.have.keys('id', 'name', 'email', 'created_at')
      expect(body.user.id).to.be.equal(1)
      expect(body.user.name).to.be.equal(mock.userMock.name)
      expect(body.user.email).to.be.equal(mock.userMock.email)
    });

    it('Deve listar um usuario pelo id', async () => {
      const request = await chai.request(app).get(`/users/1`)
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(200)
      expect(body).to.have.property('user')

      expect(body.user).to.have.keys('id', 'name', 'email', 'created_at')
      expect(body.user.name).to.be.equal(mock.userMock.name)
      expect(body.user.email).to.be.equal(mock.userMock.email)
    })

    it('Deve alterar o nome um usuário pelo seu id', async () => {
      const expectedData = { name: 'User Test' }
      const request = await chai.request(app).put('/users/1').send(expectedData)
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(200)
      expect(body).to.have.property('user')

      expect(body.user).to.have.keys('id', 'name')
      expect(body.user.id).to.be.equal(1)
      expect(body.user.name).to.be.equal(expectedData.name)
    })

    it('Deve deletar um usuario pelo id', async () => {
      const request = await chai.request(app).delete('/users/1')
      const { statusCode } = request

      expect(statusCode).to.be.equal(204)
      await users.destroy({
        truncate: true
      });
    })
  })
})
