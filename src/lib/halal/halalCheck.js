import { get } from 'lodash'
import { analytics } from '../../analytics'

export const halalCheck = query =>
  new Promise((resolve, reject) => {
    fetch(`https://ehsccwagu1.execute-api.ap-southeast-1.amazonaws.com/api/halal-check/${query}`, {
      method: 'GET'
    }).then((response) => {
      resolve(response._bodyText || '{}')
    }).catch(console.error)
  })

export async function checkHalalItems (response) {
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
      header: logo.description,
      halal: halal,
      isHalal: halalStatus === 'halal',
      source: halal.source,
      subtitle: halalStatus === 'halal' ? 'It is Halal!' : 'Oops! Not in our Halal List'
    }
  })
}

export default halalCheck
