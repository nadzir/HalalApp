import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import { styles } from '../Transition'
import { COLOURS } from '../../../config/constants'
import { VIEW_HEIGHT, VIEW_WIDTH } from '../../../config/constants/size'
import { Actions } from 'react-native-router-flux'

const rectSize = VIEW_WIDTH / 500
const height = VIEW_HEIGHT / rectSize
const width = VIEW_WIDTH / rectSize

const arr = []
for (var i = 0; i < 500; i++) {
  arr.push(i)
}

export class TransitionView extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.animatedValue = []
    arr.forEach((value) => {
      this.animatedValue[value] = new Animated.Value(0)
    })
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
    const animations = arr.map((item) => {
      return Animated.timing(
        this.animatedValue[item],
        {
          toValue: 1,
          duration: 250
        }
      )
    })
    Animated.stagger(1, animations).start(Actions.camera)
  }

  render () {
    const animations = arr.map((a, i) => {
      return <Animated.View key={i}
        style={{opacity: this.animatedValue[a], height, width, backgroundColor: COLOURS.BRAND, marginLeft: 0, marginTop: 0}} />
    })
    return (
      <View style={styles.view}>
        {animations}
      </View>
    )
  }
}

export default TransitionView
