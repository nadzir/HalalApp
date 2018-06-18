import React, { Component } from 'react'
import { View, TouchableOpacity, Animated, Easing, PermissionsAndroid, Platform } from 'react-native'
import { Text } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { styles } from '../Home'
import { material, systemWeights } from 'react-native-typography'
import { analytics } from '../../analytics'

const arr = []
for (var i = 0; i < 500; i++) {
  arr.push(i)
}

export class HomeView extends Component {
  constructor () {
    super()
    this.titleAnimatedOpacity = new Animated.Value(0)
    this.textAnimatedOpacity = new Animated.Value(0)
  }

  componentDidMount () {
    this.animate()
    analytics.logEvent('screen', {'name': 'Home'})
    analytics.setCurrentScreen('Home')
    if (Platform.OS === 'android') {
      this.requestPermission(PermissionsAndroid.PERMISSIONS.CAMERA, 'Camera Permission', 'Is This Halal App needs camera access so you can take pictures to check if it is halal')
      this.requestPermission(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, 'AUDIO Permission', 'Is This Halal App needs audio access to open the camera application')
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

  createAnimation (value, duration, easing, delay = 0) {
    return Animated.timing(
      value,
      {
        toValue: 1,
        duration,
        easing,
        delay
      }
    )
  }

  animate () {
    this.titleAnimatedOpacity.setValue(0)
    this.textAnimatedOpacity.setValue(0)

    Animated.parallel([
      this.createAnimation(this.titleAnimatedOpacity, 1000, Easing.bounce),
      this.createAnimation(this.textAnimatedOpacity, 2000, Easing.bounce)
    ]).start()
  }

  render () {
    return (
      <View style={styles.outerViewStyle}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={Actions.camera}
        >
          <Animated.View
            style={{
              opacity: this.titleAnimatedOpacity,
              alignItems: 'center'}}>
            <Text
              style={[material.display3, systemWeights.light, styles.topTextStyle]} >
              Is This {'\n'}
              Halal?
            </Text>
          </Animated.View>
          <Animated.View
            style={{
              opacity: this.textAnimatedOpacity,
              alignItems: 'center'}}>
            <Text style={[material.headline, systemWeights.light, styles.bottomTextStyle]} h4>
               Try taking a photo{'\n'}
               of a brand{'\n'}
               or a logo{'\n'}
               and check if it is halal.
            </Text>

          </Animated.View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomeView
