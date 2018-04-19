import Camera from 'react-native-camera'
import React, { Component } from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements'
import { COLOURS, APP_NAME } from '../../../config/constants'
import { styles } from '../Camera'
import { CircleButton } from '../../components/CircleButton'

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
        <Header
          leftComponent={{ icon: 'menu', color: COLOURS.WHITE }}
          centerComponent={{ text: APP_NAME, style: { color: COLOURS.WHITE } }}
          outerContainerStyles={styles.outerContainerStyles}
        />
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
        >
          <CircleButton
            onPress={this.takePicture.bind(this)}
          />
        </Camera>
      </View>
    )
  }
}

export default CameraView
