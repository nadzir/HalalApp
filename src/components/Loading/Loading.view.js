import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../Loading'
import { HeaderTop } from '../Header'
import { material, systemWeights } from 'react-native-typography'
import { COLOURS } from '../../../config/constants'
import Spinner from 'react-native-spinkit'

export const Loading = ({imagePath, loadingText}) => {
  return (
    <View style={styles.view}>
      <HeaderTop />
      <View style={styles.middleView}>
        <Spinner
          style={styles.spinner}
          isVisible
          size={60}
          type={'ChasingDots'}
          color={COLOURS.BRAND} />
      </View>
      <View style={styles.bottomView}>
        <Text style={[material.title, systemWeights.light, styles.text]} h4>
          {loadingText}
        </Text>
      </View>
    </View>
  )
}
