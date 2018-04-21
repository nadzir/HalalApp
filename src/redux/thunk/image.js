import { convertImageToBase64, resizeImage } from '../../lib/imageUtil'
import { getLabel } from '../../lib/imageProcessing'
import { storeImagePath, storeImageItems, storeImageBase64, storeImageLoading } from '../actions'
import { get } from 'lodash'
import { VIEW_WIDTH, VIEW_HEIGHT } from '../../../config/constants/size'

export function processImage (imagePath) {
  return async (dispatch) => {
    // Reset
    dispatch(storeImageLoading(true))
    dispatch(storeImageBase64())
    dispatch(storeImagePath())
    dispatch(storeImageItems())

    const resizedImage = await resizeImage(imagePath, VIEW_WIDTH, VIEW_HEIGHT)
    dispatch(storeImagePath(resizedImage.path))
    const imageBase64 = await convertImageToBase64(resizedImage.path)
    dispatch(storeImageBase64(imageBase64))
    const items = await getLabel(imageBase64)
    const response = get(items, 'responses[0]', [])
    dispatch(storeImageItems(response))
    dispatch(storeImageLoading(false))
  }
}
