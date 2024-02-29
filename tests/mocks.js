const postMock = { title: "post title", text: "post text" }
const postMockWithId = { id: 1, ...postMock }
const postCreatedMockExpected = { message: postMockWithId, statusCode: 201 }
const postCreatedJSONMockExpected = { post: postMockWithId }

const userMock = {
  name: 'Uélio Nobre',
  email: 'uelio@nobre.com',
  password: 'password'
}

const userMockWrongEmail = {
  email: 'uelio@nobres.com',
  password: 'password'
}

const userMockWrongPassword = {
  email: 'uelio@nobre.com',
  password: 'passwords'
}

const userMockWithoutEmail = {
  password: 'password'
}

const userMockWithoutPassword = {
  email: 'uelio@nobre.com',
}

module.exports = {
  postMock,
  postMockWithId,
  postCreatedMockExpected,
  postCreatedJSONMockExpected,
  userMock,
  userMockWrongEmail,
  userMockWrongPassword,
  userMockWithoutEmail,
  userMockWithoutPassword
}
