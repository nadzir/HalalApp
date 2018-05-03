import React from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'
import { styles } from '../Loading'
import { HeaderTop } from '../Header'
import { material } from 'react-native-typography'
import { COLOURS } from '../../../config/constants'

export const Loading = ({imagePath}) => {
  return (
    <View style={styles.topView}>
      <HeaderTop />
      <Image
        style={styles.image}
        resizeMode='contain'
        source={{uri: imagePath}}
      />
      <View style={styles.middleView}>
        <ActivityIndicator size='large' color={COLOURS.BRAND} />
      </View>
      <View style={styles.bottomView}>
        <Text style={[material.subheading, styles.text]} h4>Loading..</Text>
      </View>
    </View>
  )
}
