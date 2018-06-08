import { halalCheck, checkHalalItems } from './halalCheck'

jest.mock('../../analytics', () => {
  return {
    analytics: {
      logEvent: () => {}
    }
  }
})

describe('halalCheck', () => {
  describe('halalCheck', () => {
    beforeAll(() => {
      // fetch.resetMocks()
      // fetch.mockResponseOnce(JSON.stringify({_bodyText: 'bodyText'}))
      global.fetch = jest.fn().mockImplementation(() => {
        const body = JSON.stringify({ body: 'body' })
        return new Promise((resolve, reject) => {
          resolve({ _bodyText: body })
        })
      })
    })
    it('should return the expected body', async () => {
      const response = await halalCheck('imageBase64')
      expect(response).toEqual(JSON.stringify({ body: 'body' }))
    })
  })

  describe('checkHalalItems', () => {
    it('should return a list of halal items', async () => {
      const input = {
        logoAnnotations: [
          {
            description: 'description'
          }
        ]
      }
      const expectedOutput = [
        {
          description: 'description',
          halal: { body: 'body' },
          header: 'description',
          isHalal: false,
          key: 'description',
          source: undefined,
          subtitle: 'Oops! Not in our Halal List'
        }
      ]
      const output = await checkHalalItems(input)

      expect(output).toEqual(expectedOutput)
    })
  })
})
