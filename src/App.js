import React, { Component } from 'react';
import Camera from 'react-native-camera';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { resizeImage, convertImageToBase64 } from './utility';
import { getLabel } from './imageProcessing';

export default class App extends Component {
  takePicture() {
    console.log('Capturing camera');
    this.camera.capture()
      .then((data) => {
        console.log(data.path);
        console.log('resizing image');
        return resizeImage(data.path);
      }).then((resizedImage) => {
        console.log('converting to base64');
        return convertImageToBase64(resizedImage);
      }).then((image64) => {
        console.log('getting label');
        return getLabel(image64);
      })
      .then((data) => {
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
        aspect={Camera.constants.Aspect.fill}
      >
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
    width: Dimensions.get('window').width,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
});
