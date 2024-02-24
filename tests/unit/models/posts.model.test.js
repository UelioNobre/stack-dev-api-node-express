const { expect } = require('chai');

const postsModel = require('../../../src/models/posts.model')
const mock = require('../../mocks');

describe('Model Posts', () => {
  describe('Create', () => {
    it('Deve salvar um novo post com sucesso', async () => {
      // Arrange
      const post = mock.postMock

      // Act
      const postSaved = await postsModel.create(post);

      // Assert
      expect(postSaved).to.have.property('id');
      expect(postSaved).to.have.property('id').to.not.null;
      expect(postSaved).to.be.haveOwnProperty('title', postSaved.title);
      expect(postSaved).to.be.haveOwnProperty('text', postSaved.text);
    });
  });
});
