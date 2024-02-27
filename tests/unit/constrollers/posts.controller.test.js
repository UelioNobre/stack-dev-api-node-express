const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
const { expect } = chai;

const postsController = require('../../../src/controllers/posts.controller');
const postsService = require('../../../src/services/posts.service');
const mock = require('../../mocks');

describe('Testa PostsController', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Será validado que é possível criar um novo post', async () => {

    sinon.stub(postsService, 'createPost').resolves(mock.postCreatedMockExpected);

    const req = { body: mock.postMock };
    const res = {};
    const next = sinon.stub().returns();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await postsController.create(req, res, next);

    expect(res.status).to.be.calledWith(201);
    expect(res.json).to.be.have.calledWith(mock.postCreatedJSONMockExpected);
  });
});