/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Camera from 'react-native-camera';
import ImageResizer from 'react-native-image-resizer';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

// Google API recommended image size is 640 by 480
function resizeImage(path, width = 640, height = 480) {
  return new Promise((resolve, reject) => {
    ImageResizer.createResizedImage(path, width, height, 'JPEG', 80)
      .then((resizedImage) => {
        resolve(resizedImage)
      }).catch((err) => {
        console.error('Error in ImageResizer');
        console.log(err)
        reject(err);
      });
  })
}

async function getLabel(imageBase64) {
  return new Promise((resolve, reject) => {
    fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCIureBbvR-bux0r-AGLCgFnsJtOvKgygs', {
      method: 'POST',
      body: JSON.stringify({
        'requests': [
          {
            'image': {
              'content': imageBase64
            },
            'features': [
              {
                'type': 'TEXT_DETECTION'
              }
            ]
          }
        ]
      })
    }).then((response) => {
      resolve(response);
    });
  });
}

function convertImageToBase64(image) {
  return new Promise((resolve, reject) => {
    const uri = image.uri;
    RNFetchBlob.fs.readFile(uri, 'base64')
      .then((data) => {
        resolve(data);
        // googleImageAPI(data);
      });
  });
}

export default class App extends Component<{}> {

  takePicture() {
    console.log('Capturing camera');
    this.camera.capture()
      .then((data) => {
        console.log(data.path);
        console.log('resizing image');
        return resizeImage(data.path)
      }).then((resizedImage) => {
        console.log('converting to base64')
        return convertImageToBase64(resizedImage)
      }).then((image64) => {
        console.log('getting label')
        return getLabel(image64)
      }).then((data) => {
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>
        <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]
           </Text>
      </Camera>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
