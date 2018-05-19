import { processImage } from './image'
import { resizeImage, convertImageToBase64 } from '../../lib/imageUtil'
import { getLabel } from '../../lib/imageProcessing'
import { Thunk } from 'redux-testkit'
import { STORE_IMAGE_PATH, STORE_IMAGE_BASE64, STORE_IMAGE_ITEMS, STORE_IMAGE_LOADING } from '../actions'

jest.mock('../../lib/imageUtil')
jest.mock('../../lib/imageProcessing')
jest.mock('react-native-fetch-blob', () => {
  return {
    DocumentDir: () => {},
    ImageCache: {
      get: {
        clear: () => {}
      }
    }
  }
})

describe('thunk/image.js', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    resizeImage.mockReturnValueOnce({path: 'path'})
    convertImageToBase64.mockReturnValueOnce('imageBase64')
    getLabel.mockReturnValueOnce({responses: ['1']})
  })

  it('should dispatch 3 actions for processImage()', async () => {
    const dispatches = await Thunk(processImage).execute()
    expect(dispatches.length).toBe(7)
    expect(dispatches[0].getAction()).toEqual({type: STORE_IMAGE_LOADING, isLoading: true})
    expect(dispatches[1].getAction()).toEqual({type: STORE_IMAGE_BASE64})
    expect(dispatches[2].getAction()).toEqual({type: STORE_IMAGE_PATH})
    expect(dispatches[3].getAction()).toEqual({type: STORE_IMAGE_ITEMS})
    expect(dispatches[4].getAction()).toEqual({type: STORE_IMAGE_PATH, path: 'path'})
    expect(dispatches[5].getAction()).toEqual({type: STORE_IMAGE_BASE64, base64: 'imageBase64'})
    expect(dispatches[6].getAction()).toEqual({type: STORE_IMAGE_LOADING, isLoading: false})
  })
})
