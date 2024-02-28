const app = require('../../src/app')
const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai;
chai.use(chaiHttp)

const { users } = require('../../src/database/models')
const mock = require('../mocks');

beforeEach(async () => {
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
      await chai.request(app).post('/users').send(mock.userMock)
      const request = await chai.request(app).get(`/users/1`)
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(200)
      expect(body).to.have.property('user')

      expect(body.user).to.have.keys('id', 'name', 'email', 'created_at')
      expect(body.user.id).to.be.not.undefined
      expect(body.user.name).to.be.equal(mock.userMock.name)
      expect(body.user.email).to.be.equal(mock.userMock.email)
    })

    // it.skip('Deve listar posts com sucesso', async () => {
    //   await chai.request(app).post('/posts').send(mock.postMock)
    //   const request = await chai.request(app).get('/posts')
    //   const { statusCode, body } = request

    //   expect(statusCode).to.be.equal(200)
    //   expect(body).to.have.property('posts')

    //   expect(body.posts).to.have.lengthOf(2)
    //   expect(body.posts[0]).to.have.keys('id', 'title', 'text')
    //   expect(body.posts[0].id).to.be.not.undefined
    //   expect(body.posts[0].title).to.be.equal(mock.postMock.title)
    //   expect(body.posts[0].text).to.be.equal(mock.postMock.text)
    // })

    it('Deve alterar o nome um usuário pelo seu id', async () => {
      const expectedId = 1
      const expectedData = { name: 'User Test' }
      await chai.request(app).post('/users').send(mock.userMock)

      const request = await chai.request(app).put(`/users/${expectedId}`).send(expectedData)
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(200)
      expect(body).to.have.property('user')

      expect(body.user).to.have.keys('id', 'name')
      expect(body.user.id).to.be.equal(expectedId)
      expect(body.user.name).to.be.equal(expectedData.name)
    })

    it.skip('Deve deletar um post pelo id', async () => {
      const request = await chai.request(app).get('/posts')
      const { body: { posts } } = request

      const { id } = posts[0]
      const requestByID = await chai.request(app).delete(`/posts/${id}`)
      const { statusCode, body } = requestByID

      expect(statusCode).to.be.equal(204)
      expect(Object.keys(body)).to.have.lengthOf(0)
    })
  })
})
