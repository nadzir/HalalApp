import { getLabel } from '.'

describe('googleImageApi', () => {
  beforeAll(() => {
    // fetch.resetMocks()
    // fetch.mockResponseOnce(JSON.stringify({_bodyText: 'bodyText'}))
    global.fetch = jest.fn().mockImplementation(() => {
      const body = JSON.stringify({body: 'body'})
      return new Promise((resolve, reject) => {
        resolve({_bodyText: body})
      })
    })
  })

  it('should return the correct shape', async () => {
    const response = await getLabel('imageBase64')
    expect(response).toEqual({body: 'body'})
  })
})
