const sut = require('./mongo-helper')

describe('Mongo Helper', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should return collection when getCollection() is invoked', async () => {
    const userModel = await sut.getCollection('users')
    expect(userModel).toBeTruthy()
  })
})
