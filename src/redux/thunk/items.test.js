import { addKeytoItems } from './items'

// Mock
jest.mock('../../firebase/config', () => {})
jest.mock('react-native-firebase')

describe('thunk/items.js', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('addKeytoItems()', () => {
    it('should add keys to items', () => {
      const input = {
        item1: {
          'some': 'data'
        }
      }

      // Add key for react to know changes
      const expectedOutput = [{'key': 'item1', 'some': 'data'}]

      expect(addKeytoItems(input)).toEqual(expectedOutput)
    })
  })
})
