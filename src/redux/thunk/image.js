import { convertImageToBase64, resizeImage } from '../../lib/imageUtil'
import { getLabel } from '../../lib/imageProcessing'
import { storeImagePath, storeImageItems, storeImageBase64 } from '../actions'
import { get } from 'lodash'

export function processImage (imagePath) {
  return async (dispatch) => {
    // Reset
    dispatch(storeImageBase64())

    const resizedImage = await resizeImage(imagePath)
    dispatch(storeImagePath(resizedImage.path))
    const imageBase64 = await convertImageToBase64(resizedImage.path)
    dispatch(storeImageBase64(imageBase64))
    const items = await getLabel(imageBase64)
    const response = get(items, 'responses[0]', [])
    dispatch(storeImageItems(response))
  }
}
