const { expect } = require('chai');

const { posts } = require('../../../src/database/models')
const postsModel = require('../../../src/models/posts.model')
const mock = require('../../mocks');

afterAll(async () => {
  await posts.destroy({
    truncate: true
  });
})


describe('Model Posts', () => {
  describe('Create', () => {
    it('Deve salvar um novo post com sucesso', async () => {
      // Arrange
      const post = mock.postMock

      // Act
      const postSaved = await postsModel.create(post);

      // Assert
      expect(postSaved.id).to.be.equal(1)
      expect(postSaved.title).to.be.equal(post.title);
      expect(postSaved).to.be.haveOwnProperty('text', post.text);
    });
  });
});
