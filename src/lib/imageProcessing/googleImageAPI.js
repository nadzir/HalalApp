import { GOOGLE_IMAGE_API_KEY } from '../../../secret/keys'

export const getLabel = imageBase64 =>
  new Promise((resolve, reject) => {
    fetch(`https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_IMAGE_API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        requests: [
          {
            image: {
              content: imageBase64
            },
            features: [
              {
                type: 'LOGO_DETECTION'
                // maxResults: 4,
              },
              {
                type: 'TEXT_DETECTION'
                // maxResults: 4,
              }
            ]
          }
        ]
      })
    }).then((response) => {
      const bodyText = JSON.parse(response._bodyText)
      resolve(bodyText)
    }).catch(console.error)
  })

export default getLabel
