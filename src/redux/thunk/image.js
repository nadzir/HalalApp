import { get } from 'lodash'
import { saveLogosInDB } from '../../firebase'
import { checkHalalItems } from '../../lib/halal'
import { getLoadingText } from '../../lib/loading'
import { getLabel } from '../../lib/imageProcessing'
import { convertImageToBase64, resizeImage } from '../../lib/imageUtil'
import { VIEW_WIDTH, VIEW_HEIGHT } from '../../../config/constants/size'
import { LOADING_BEGIN, LOADING_GET_LABEL, LOADING_GET_HALAL } from '../../components/Loading'
import { storeImagePath, storeImageItems, storeImageBase64, storeImageLoading } from '../actions'

const DISPLAY = {
  width: 80,
  height: 140
}

export function processImage (imagePath) {
  return async (dispatch) => {
    // Reset
    dispatch(storeImageLoading(true, getLoadingText(LOADING_BEGIN)))
    dispatch(storeImageBase64())
    dispatch(storeImagePath())
    dispatch(storeImageItems())

    try {
      // Saved a smaller image for display
      const savedImage = await resizeImage(imagePath, DISPLAY.width, DISPLAY.height)
      const savedImageBase64 = await convertImageToBase64(savedImage.path)
      dispatch(storeImageBase64(savedImageBase64))

      // Convert to Base 64
      const resizedImage = await resizeImage(imagePath, VIEW_WIDTH, VIEW_HEIGHT)
      const imageBase64 = await convertImageToBase64(resizedImage.path)

      // Get labels from image
      dispatch(storeImageLoading(true, getLoadingText(LOADING_GET_LABEL)))
      const items = await getLabel(imageBase64)

      // Get halal response from labels
      dispatch(storeImageLoading(true, getLoadingText(LOADING_GET_HALAL)))
      const response = get(items, 'responses[0]', [])
      const logos = await checkHalalItems(response)

      // Save logos in firebase db
      saveLogosInDB(logos, savedImageBase64)

      dispatch(storeImageItems({logos}))
      dispatch(storeImageLoading(false))
    } catch (e) {
      dispatch(storeImageLoading(false))
    }
  }
}
