import React from 'react'
import { View } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import { styles } from '../CircleButton'
import { material } from 'react-native-typography'

export const CircleButton = ({title, onPress}) => {
  return (
    <View style={styles.view}>
      <Avatar
        reverse
        large
        rounded
        overlayContainerStyle={styles.avatar}
        icon={{name: 'camera-alt'}}
        onPress={onPress}
      />
      <Text style={[material.subheading, styles.text]} h4>Take a photo of a logo</Text>
    </View>
  )
}
