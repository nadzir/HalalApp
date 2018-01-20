
import ImageResizer from 'react-native-image-resizer';
import RNFetchBlob from 'react-native-fetch-blob';

// Google API recommended image size is 640 by 480
export const resizeImage = (path, width = 640, height = 480) =>
  new Promise((resolve, reject) => {
    ImageResizer.createResizedImage(path, width, height, 'JPEG', 80)
      .then((resizedImage) => {
        resolve(resizedImage);
      }).catch((err) => {
        console.error('Error in ImageResizer');
        console.log(err);
        reject(err);
      });
  });

export const convertImageToBase64 = image =>
  new Promise((resolve, reject) => {
    const uri = image.uri;
    RNFetchBlob.fs.readFile(uri, 'base64')
      .then((data) => {
        resolve(data);
      // googleImageAPI(data);
      });
  });

