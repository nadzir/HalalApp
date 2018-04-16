
import ImageResizer from 'react-native-image-resizer'
import RNFetchBlob from 'react-native-fetch-blob'

// Google API recommended image size is 640 by 480
export const resizeImage = (path, width = 640, height = 480) =>
  new Promise((resolve, reject) => {
    ImageResizer.createResizedImage(path, width, height, 'PNG', 100)
      .then((resizedImage) => {
        resolve(resizedImage)
      }).catch(reject)
  })

export const convertImageToBase64 = image =>
  new Promise((resolve, reject) => {
    RNFetchBlob.fs.readFile(image, 'base64')
      .then((data) => {
        resolve(data)
      }).catch(reject)
  })
