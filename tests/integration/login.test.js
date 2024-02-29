const app = require('../../src/app')
const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai;
chai.use(chaiHttp)

const { users } = require('../../src/database/models')
const mock = require('../mocks');

beforeAll(async () => {
  await users.create(mock.userMock);
})

afterAll(async () => {
  await users.destroy({ truncate: true });
})

describe('Login', () => {
  describe('Endpoint: "/login"', () => {
    it('Deve gerar um token com login e email corretos', async () => {
      const request = await chai.request(app).post('/login').send(mock.userMock)
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(200)
      expect(body).to.haveOwnProperty('token')
    })

    it('Deve retornar o código 404 caso o e-mail não seja encontrado', async () => {
      const request = await chai.request(app).post('/login').send(mock.userMockWrongEmail)
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(404)
      expect(body).to.haveOwnProperty('message', 'User not found')
    })

    it('Deve retornar o código 404 caso o password não seja correto', async () => {
      const request = await chai.request(app).post('/login').send(mock.userMockWrongPassword)
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(404)
      expect(body).to.haveOwnProperty('message', 'User not found')
    })

    it('Deve retornar o código 400 caso não seja informado o atributo email', async () => {
      const request = await chai.request(app).post('/login').send(mock.userMockWithoutEmail)
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(400)
      expect(body).to.haveOwnProperty('message', 'Invalid request')
    })

    it('Deve retornar o código 400 caso não seja informado o atributo password', async () => {
      const request = await chai.request(app).post('/login').send(mock.userMockWithoutEmail)
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(400)
      expect(body).to.haveOwnProperty('message', 'Invalid request')
    })
  })
})
