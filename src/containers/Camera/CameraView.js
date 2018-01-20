import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Tile } from 'react-native-elements';
import { Button, Header, Card, Text } from 'react-native-elements';
import Camera from 'react-native-camera';
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    margin: 50,
    height: 70,
    width: 70,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 15,
  },
  loadingMsg: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  loadingText: {
    fontSize: 18,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 30,
  },
  spinner: {
    marginBottom: 50,
  },
});

export class CameraView extends Component {
  takePicture () {
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
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor="#03A9F4"
            fontFamily="Lato"
            buttonStyle={{
              borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,
            }}
            title="Is it halal?"
          />
        </Camera>
      </View>
    );
  }
}

export default CameraView;
