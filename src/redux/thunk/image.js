import { convertImageToBase64, resizeImage } from '../../lib/imageUtil'
import { getLabel } from '../../lib/imageProcessing'
import { storeImagePath, storeImageItems, storeImageBase64, storeImageLoading } from '../actions'
import { get } from 'lodash'
import { VIEW_WIDTH, VIEW_HEIGHT } from '../../../config/constants/size'
import { halalCheck } from '../../lib/halal'

export function processImage (imagePath) {
  return async (dispatch) => {
    // Reset
    dispatch(storeImageLoading(true))
    dispatch(storeImageBase64())
    dispatch(storeImagePath())
    dispatch(storeImageItems())

    try {
      const resizedImage = await resizeImage(imagePath, VIEW_WIDTH, VIEW_HEIGHT)
      dispatch(storeImagePath(resizedImage.path))
      const imageBase64 = await convertImageToBase64(resizedImage.path)
      dispatch(storeImageBase64(imageBase64))
      const items = await getLabel(imageBase64)
      const response = get(items, 'responses[0]', [])
      const logos = await checkHalalItems(response)
      dispatch(storeImageItems({logos}))
      dispatch(storeImageLoading(false))
    } catch (e) {
      dispatch(storeImageLoading(false))
    }
  }
}

async function checkHalalItems (response) {
// Get logo
  const logos = get(response, 'logoAnnotations', [])
  const pArr = logos.map(async (logo) => {
    const halalCheckResponse = await halalCheck(logo.description)
    const halal = JSON.parse(halalCheckResponse)
    return {
      ...logo,
      key: logo.description,
      title: logo.description,
      halal: halal,
      isHalal: halal.halal_status === 'halal'
    }
  })
  return Promise.all(pArr)
}
