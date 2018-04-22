import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Avatar } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { styles } from '../Home'
import { material } from 'react-native-typography'

export const HomeView = () => (
  <View style={styles.outerViewStyle}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={Actions.camera}>
      <Text style={[material.display1, styles.topTextStyle]} h1>Is This {'\n'} Halal?</Text>
      <Avatar
        reverse
        xlarge
        rounded
        overlayContainerStyle={styles.avatar}
        icon={{name: 'camera-enhance'}}
      />
      <Text style={[material.caption, styles.bottomTextStyle]} h4>Take a photo and find out</Text>
    </TouchableOpacity>
  </View>
)

export default HomeView
