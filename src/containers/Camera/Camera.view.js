import Camera from 'react-native-camera'
import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from '../Camera'
import { CircleButton } from '../../components/CircleButton'
import { HeaderTop } from '../../components/Header'
import { Button } from 'react-native-elements'
import { COLOURS } from '../../../config/constants'

export class CameraView extends Component {
  constructor (props) {
    super(props)
    this.state = {}
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
        {/* <CircleButton
          onPress={this.takePicture.bind(this)}
        /> */}
        <View style={styles.bottomView}>
          <Button
            large
            containerViewStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            icon={{name: 'camera-alt'}}
            onPress={this.takePicture.bind(this)}
            title='Capture a logo' />
        </View>
      </View>
    )
  }
}

export default CameraView
