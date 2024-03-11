const app = require('../../src/app')
const chai = require('chai')
const chaiHttp = require('chai-http')

const { posts } = require('../../src/database/schemas')

const { expect } = chai;
chai.use(chaiHttp)

const mock = require('../mocks');

beforeAll(async () => {
  await posts.destroy({
    truncate: true
  });
})

describe('Posts', () => {
  describe('Endpoint: "/posts"', () => {
    it.only('Deve criar um post com sucesso', async () => {
      const request = await chai
        .request(app)
        // .set('authorization', 'Bearer 123abc')
        .post('/posts')
        .send(mock.postMock)
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(201)
      expect(body).to.have.property('post')
      expect(body.post).to.have.keys('id', 'title', 'text', 'createdAt', 'updatedAt')
      expect(body.post.id).to.be.not.undefined
      expect(body.post.title).to.be.equal(mock.postMock.title)
      expect(body.post.text).to.be.equal(mock.postMock.text)
    });

    it('Deve listar posts com sucesso', async () => {
      await chai.request(app).post('/posts').send(mock.postMock)
      const request = await chai.request(app).get('/posts')
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(200)
      expect(body).to.have.property('posts')

      expect(body.posts).to.have.lengthOf(2)
      expect(body.posts[0]).to.have.keys('id', 'title', 'text', 'createdAt', 'updatedAt')
      expect(body.posts[0].id).to.be.not.undefined
      expect(body.posts[0].title).to.be.equal(mock.postMock.title)
      expect(body.posts[0].text).to.be.equal(mock.postMock.text)
    })

    it('Deve listar um post pelo id', async () => {
      const requestByID = await chai.request(app).get('/posts/1')
      const { statusCode, body } = requestByID

      expect(statusCode).to.be.equal(200)
      expect(body).to.have.property('post')

      expect(body.post).to.have.keys('id', 'title', 'text', 'createdAt', 'updatedAt')
      expect(body.post.id).to.be.not.undefined
      expect(body.post.title).to.be.equal(mock.postMock.title)
      expect(body.post.text).to.be.equal(mock.postMock.text)
    })

    it('Deve alterar um post pelo id', async () => {
      const newData = { title: 'Iitulo atualizado do post', text: 'Texto atualizado do post' }
      const requestByID = await chai.request(app).put('/posts/1').send(newData)
      const { statusCode, body } = requestByID

      expect(statusCode).to.be.equal(200)
      expect(body).to.have.property('post')

      expect(body.post).to.have.keys('id', 'title', 'text')
      expect(body.post.id).to.be.equal(1)
      expect(body.post.title).to.be.equal(newData.title)
      expect(body.post.text).to.be.equal(newData.text)
    })

    it('Deve deletar um post pelo id', async () => {
      const requestByID = await chai.request(app).delete('/posts/1')
      const { statusCode, body } = requestByID

      expect(statusCode).to.be.equal(204)
      expect(Object.keys(body)).to.have.lengthOf(0)

      await posts.destroy({
        truncate: true
      });
    })
  })
})
