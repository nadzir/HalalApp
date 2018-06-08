import { processImage } from './image'
import { Thunk } from 'redux-testkit'
import { STORE_IMAGE_PATH, STORE_IMAGE_BASE64, STORE_IMAGE_ITEMS, STORE_IMAGE_LOADING } from '../actions'

jest.mock('../../lib/imageUtil', () => {
  return {
    resizeImage: () => { return {path: 'path'} },
    convertImageToBase64: () => 'imageBase64'
  }
})
jest.mock('../../lib/imageProcessing', () => {
  return {
    getLabel: () => { return {responses: ['1']} }
  }
})
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
jest.mock('../../firebase', () => {
  return {
    saveLogosInDB: () => {}
  }
})
jest.mock('react-native-firebase', () => {
  return {
    analytics: () => {}
  }
})
jest.mock('../../lib/loading', () => {
  return {
    getLoadingText: () => 'loadingText'
  }
})
jest.mock('../../lib/halal', () => {
  return {
    checkHalalItems: () => 'logos'
  }
})

describe('thunk/image.js', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should dispatch 8 actions for processImage()', async () => {
    const dispatches = await Thunk(processImage).execute()
    expect(dispatches[0].getAction()).toEqual({type: STORE_IMAGE_LOADING, isLoading: true, loadingText: 'loadingText'})
    expect(dispatches[1].getAction()).toEqual({type: STORE_IMAGE_BASE64})
    expect(dispatches[2].getAction()).toEqual({type: STORE_IMAGE_PATH})
    expect(dispatches[3].getAction()).toEqual({type: STORE_IMAGE_ITEMS})
    expect(dispatches[4].getAction()).toEqual({type: STORE_IMAGE_BASE64, base64: 'imageBase64'})
    expect(dispatches[5].getAction()).toEqual({type: STORE_IMAGE_LOADING, isLoading: true, loadingText: 'loadingText'})
    expect(dispatches[6].getAction()).toEqual({type: STORE_IMAGE_LOADING, isLoading: true, loadingText: 'loadingText'})
    expect(dispatches[7].getAction()).toEqual({type: STORE_IMAGE_ITEMS, items: {'logos': 'logos'}})
    expect(dispatches[8].getAction()).toEqual({type: STORE_IMAGE_LOADING, isLoading: false})
  })

  // it('should set loading to false if error occurs', async () => {
  //   jest.mock('../../lib/imageUtil', () => {
  //     return {
  //       convertImageToBase64: () => {
  //         throw new Error()
  //       }
  //     }
  //   })
  //   const dispatches = await Thunk(processImage).execute()
  //   expect(dispatches[0].getAction()).toEqual({type: STORE_IMAGE_LOADING, isLoading: true, loadingText: 'loadingText'})
  //   expect(dispatches[1].getAction()).toEqual({type: STORE_IMAGE_BASE64})
  //   expect(dispatches[2].getAction()).toEqual({type: STORE_IMAGE_PATH})
  //   expect(dispatches[3].getAction()).toEqual({type: STORE_IMAGE_ITEMS})
  //   expect(dispatches[4].getAction()).toEqual({type: STORE_IMAGE_LOADING, isLoading: false})
  // })
})
