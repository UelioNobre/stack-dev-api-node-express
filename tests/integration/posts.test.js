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

    it('Deve listar posts com sucesso', async () => {
      await chai.request(app).post('/posts').send(mock.postMock)
      const request = await chai.request(app).get('/posts')
      const { statusCode, body } = request

      expect(statusCode).to.be.equal(200)
      expect(body).to.have.property('posts')

      expect(body.posts).to.have.lengthOf(2)
      expect(body.posts[0]).to.have.keys('id', 'title', 'text')
      expect(body.posts[0].id).to.be.not.undefined
      expect(body.posts[0].title).to.be.equal(mock.postMock.title)
      expect(body.posts[0].text).to.be.equal(mock.postMock.text)
    })

    it('Deve listar um post pelo id', async () => {
      const request = await chai.request(app).get('/posts')
      const { body: { posts } } = request

      const { id } = posts[0]
      const requestByID = await chai.request(app).get(`/posts/${id}`)
      const { statusCode, body } = requestByID

      expect(statusCode).to.be.equal(200)
      expect(body).to.have.property('post')

      expect(body.post).to.have.keys('id', 'title', 'text')
      expect(body.post.id).to.be.not.undefined
      expect(body.post.title).to.be.equal(mock.postMock.title)
      expect(body.post.text).to.be.equal(mock.postMock.text)
    })

    it('Deve deletar um post pelo id', async () => {
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
