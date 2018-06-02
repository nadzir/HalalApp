import React, { Component } from 'react'
import { View, TouchableOpacity, Animated, Easing } from 'react-native'
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
               and check if it is halal.test
            </Text>

          </Animated.View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomeView
