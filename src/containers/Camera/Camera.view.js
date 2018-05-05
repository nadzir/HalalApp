import Camera from 'react-native-camera'
import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from '../Camera'
import { HeaderTop } from '../../components/Header'
import { Button } from 'react-native-elements'
import { AdMobInterstitial } from 'react-native-admob'
import { INTERSTITIAL_AD_UNIT_ID } from '../../../secret'

export class CameraView extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    if (this.props.isShowAds) {
      AdMobInterstitial.setAdUnitID(INTERSTITIAL_AD_UNIT_ID)
      AdMobInterstitial.requestAd()
        .then(() => AdMobInterstitial.showAd())
        .catch(error => console.warn(error))
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
        <View style={styles.bottomView}>
          <Button
            buttonStyle={styles.button}
            containerViewStyle={styles.buttonContainer}
            title='Capture a logo'
            icon={{name: 'camera-alt'}}
            onPress={this.takePicture.bind(this)} />
        </View>
      </View>
    )
  }
}

export default CameraView
