const { expect } = require('chai');
const sinon = require('sinon');

const { posts } = require('../../../src/database/models')
const postsModel = require('../../../src/models/posts.model');
const postsServices = require('../../../src/services/posts.service');
const mock = require('../../mocks');

beforeAll(async () => {
  await posts.destroy({
    truncate: true
  });
})

describe('Testa PostsService', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Será validado que é possível cadastrar um novo post', async () => {
    sinon.stub(postsModel, 'create').resolves(mock.postMockWithId)
    const post = await postsServices.createPost({ title: 'post title', text: 'post text' })
    expect(post).to.be.deep.equal(mock.postCreatedMockExpected)
  });
});