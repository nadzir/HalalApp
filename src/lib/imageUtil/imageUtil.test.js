import { resizeImage, convertImageToBase64 } from '../imageUtil'
import ImageResizer from 'react-native-image-resizer'
import RNFetchBlob from 'react-native-fetch-blob'

jest.mock('react-native-image-resizer')
jest.mock('react-native-fetch-blob', () => {
  return {
    DocumentDir: () => {},
    ImageCache: {
      get: {
        clear: () => {}
      }
    },
    fs: {
      readFile: jest.fn()
    }
  }
})

describe('imageUtil', () => {
  describe('resizeImage()', () => {
    it('should return a response', async () => {
      ImageResizer.createResizedImage.mockImplementation(() => Promise.resolve('resizedImage'))
      const response = await resizeImage()
      expect(response).toEqual('resizedImage')
    })
    it('should throw error', () => {
      ImageResizer.createResizedImage.mockImplementation(() => Promise.reject(Error))
      expect(resizeImage()).rejects.toMatch(Error)
    })
  })
  describe('convertImageToBase64()', () => {
    it('should return a response', async () => {
      RNFetchBlob.fs.readFile.mockImplementation(() => Promise.resolve('data'))
      const response = await convertImageToBase64()
      expect(response).toEqual('data')
    })
    it('should throw error', () => {
      RNFetchBlob.fs.readFile.mockImplementation(() => Promise.reject(Error))
      expect(convertImageToBase64()).rejects.toMatch(Error)
    })
  })
})
