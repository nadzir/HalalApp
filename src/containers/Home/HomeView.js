import React from 'react'
import { View } from 'react-native'
import { SocialIcon, Text } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { COLOURS } from '../../../config/constants'

const outerViewStyle = {
  flexDirection: 'column',
  backgroundColor: COLOURS.HOME_BACKGROUND,
  flex: 1,
  justifyContent: 'center'
}

const textStyle = {color: COLOURS.WHITE, textAlign: 'center'}

export const HomeView = () => (
  <View style={outerViewStyle}>
    <View style={{height: 100}}>
      <Text style={textStyle} h1>HalalGo</Text>
    </View>
    <View style={{height: 100}}>
      <Text style={textStyle} h3>One Stop Halal Guide</Text>
    </View>
    <View >
      <SocialIcon
        title='Sign In With Facebook'
        button
        type='facebook'
        onPress={Actions.halalFinder}
      />
    </View>
  </View>
)

export default HomeView
