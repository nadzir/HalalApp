import React, { Component } from 'react'
import { View, TouchableOpacity, Animated, Easing } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { styles } from '../Home'
import { material } from 'react-native-typography'
import { analytics } from '../../analytics'

const arr = []
for (var i = 0; i < 500; i++) {
  arr.push(i)
}

export class HomeView extends Component {
  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.animate()
    analytics.trackScreenView('Home')
  }

  animate () {
    this.animatedValue.setValue(0)
    const createAnimation = function (value, duration, easing, delay = 0) {
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
    Animated.parallel([
      createAnimation(this.animatedValue, 1000, Easing.bounce)
    ]).start()
  }

  render () {
    return (
      <View style={styles.outerViewStyle}>
        <TouchableOpacity
          activeOpacity={0.5}
        >
          <Animated.View style={{ transform: [{scale: this.animatedValue}], alignItems: 'center' }}>
            <Text style={[material.display1, styles.topTextStyle]} >Is This Halal?</Text>
          </Animated.View>
          <Animated.View style={{opacity: this.animatedValue, alignItems: 'center'}}>
            <Text style={[material.headline, styles.bottomTextStyle]} h4>
               Try taking a photo of a brand or a logo,
               and check if it is halal.
            </Text>
            <Button
              buttonStyle={styles.button}
              containerViewStyle={styles.buttonContainer}
              title='Take a photo'
              onPress={Actions.camera} />
          </Animated.View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomeView
