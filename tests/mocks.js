const postMock = { title: "post title", text: "post text" }
const postMockWithId = { id: 1, ...postMock }
const postCreatedMockExpected = { message: postMockWithId, statusCode: 201 }
const postCreatedJSONMockExpected = { post: postMockWithId }

module.exports = {
  postMock,
  postMockWithId,
  postCreatedMockExpected,
  postCreatedJSONMockExpected
}
