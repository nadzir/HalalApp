import Camera from 'react-native-camera'
import React, { Component } from 'react'
import { View, PermissionsAndroid, Platform } from 'react-native'
import { styles } from '../Camera'
import { HeaderTop } from '../../components/Header'
import { Button, Text } from 'react-native-elements'
import { analytics } from '../../analytics'
import { COLOURS } from '../../../config/constants'
import { material, systemWeights } from 'react-native-typography'

export class CameraView extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    analytics.setCurrentScreen('Camera')
    if (Platform.OS === 'android') {
      this.requestPermission(PermissionsAndroid.PERMISSIONS.CAMERA, 'Camera Permission', 'Is This Halal App needs camera access so you can take pictures to check if it is halal')
      this.requestPermission(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, 'Read Storage Permission', 'Is This Halal App needs to read your storage to analyse the image taken')
      this.requestPermission(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, 'Write Storage Permission', 'Is This Halal App needs to store images to your storage')
    }
  }

  async requestPermission (permission, title, message) {
    try {
      const check = PermissionsAndroid.check(permission)
      if (check === PermissionsAndroid.RESULTS.GRANTED) return

      await PermissionsAndroid.request(
        permission,
        {
          'title': title,
          'message': message
        }
      )
    } catch (err) {
      console.warn(err)
    }
  }

  async takePicture () {
    try {
      const image = await this.camera.capture()
      this.props.storeImagePath(image.path)
      this.props.goToHalalFinderView()
    } catch (e) { console.error(e) }
  }

  render () {
    return (
      <View style={styles.view}>
        <HeaderTop />
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
        />
        <View style={styles.textView}>
          <Text style={[material.subheading, systemWeights.light, styles.text]} h4>
          Photos will be uploaded and shared
          </Text>
        </View>
        <View style={styles.bottomView}>
          <Button
            buttonStyle={styles.button}
            containerViewStyle={styles.buttonContainer}
            title='Capture a logo'
            icon={{name: 'camera-alt', color: COLOURS.BRAND}}
            color={COLOURS.BRAND}
            onPress={this.takePicture.bind(this)} />
        </View>
      </View>
    )
  }
}

export default CameraView
