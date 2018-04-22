import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { styles } from '../Loading'
import { HeaderTop } from '../Header'
import { material } from 'react-native-typography'
import { COLOURS } from '../../../config/constants'

export const Loading = ({items}) => {
  return (
    <View style={styles.topView}>
      <HeaderTop />
      <View style={styles.middleView}>
        <ActivityIndicator size='large' color={COLOURS.BRAND} />
      </View>
      <View style={styles.bottomView}>
        {/* <Avatar
          reverse
          xlarge
          rounded
          overlayContainerStyle={styles.avatar}
          icon={{name: 'camera-alt'}}
          onPress={onPress}
        /> */}
        <Text style={[material.subheading, styles.text]} h4>Loading..</Text>
      </View>
    </View>
  )
}
