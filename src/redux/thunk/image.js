import { convertImageToBase64, resizeImage } from '../../lib/imageUtil'
import { getLabel } from '../../lib/imageProcessing'
import { storeImagePath, storeImageItems, storeImageBase64, storeImageLoading } from '../actions'
import { get } from 'lodash'
import { VIEW_WIDTH, VIEW_HEIGHT } from '../../../config/constants/size'
import { halalCheck } from '../../lib/halal'
import { analytics } from '../../analytics'
import { LOADING_BEGIN, LOADING_GET_LABEL, LOADING_GET_HALAL } from '../../components/Loading/Loading.constants'
import firebase from '../../firebase'

export function processImage (imagePath) {
  return async (dispatch) => {
    // Reset
    dispatch(storeImageLoading(true, getLoadingText(LOADING_BEGIN)))
    dispatch(storeImageBase64())
    dispatch(storeImagePath())
    dispatch(storeImageItems())

    try {
      // Saved a smaller image for display
      const savedImage = await resizeImage(imagePath, VIEW_WIDTH * 0.2, VIEW_HEIGHT * 0.2)
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

function getLoadingText (textList) {
  return getRandomElementFromArray(textList)
}

function getRandomElementFromArray (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

async function checkHalalItems (response) {
  const logos = getLogosFromResponse(response)
  try {
    const pArr = checkEachItemForHalal(logos)
    return Promise.all(pArr)
  } catch (e) { console.error(e) }
}

const getLogosFromResponse = (response) => get(response, 'logoAnnotations', [])

const checkEachItemForHalal = (logos) => {
  // Send analytics if no logos
  if (logos.length === 0) { analytics.logEvent('Google_Image_API', {label: 'No Logo Found', value: 1}) }

  return logos.map(async (logo) => {
    // Send analytics
    analytics.logEvent('Google_Image_API', {label: logo.description, value: 1})

    const halalCheckResponse = await halalCheck(logo.description)
    const halal = JSON.parse(halalCheckResponse)
    const halalStatus = halal ? halal.halal_status : 'Not Found in list'

    if (halal) {
      analytics.logEvent(`Halal_Results`, {label: logo.description, value: 1})
      analytics.logEvent(`Matched_Items_from_DB`, {label: halal.name, value: 1})
    } else {
      analytics.logEvent(`Not_Halal_Results`, {label: logo.description, value: 1})
    }

    return {
      ...logo,
      key: logo.description,
      title: logo.description,
      halal: halal,
      isHalal: halalStatus === 'halal',
      source: halal.source
    }
  })
}

// Currently only save one logo, as only display one
const saveLogosInDB = (logos, savedImageBase64) => {
  if (logos.length > 0) {
    firebase.database()
      .ref('items')
      .push({
        ...logos[0],
        imageBase64: savedImageBase64
      })
  }
}
