const { expect } = require('chai');
const sinon = require('sinon');

const postsModel = require('../../../src/models/posts.model');
const postsServices = require('../../../src/services/posts.service');
const mock = require('../../mocks');

describe('Testa PostsService', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Será validado que é possível cadastrar um novo post', async () => {
    sinon.stub(postsModel, 'create').resolves(mock.postMockWithId)
    const post = await postsServices.createNewPost({ title: 'post title', text: 'post text' })
    expect(post).to.be.deep.equal(mock.postCreatedMockExpected)
  });
});