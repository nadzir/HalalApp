import { getLoadingText } from './loading'

describe('loading', () => {
  describe('getLoadingText', () => {
    it('should return the value from the list', () => {
      const input = ['text']
      const expectedOutput = 'text'
      expect(getLoadingText(input)).toEqual(expectedOutput)
    })
  })
})
