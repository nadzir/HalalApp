
import React from 'react'
import { styles } from '../Header'
import { COLOURS, APP_NAME } from '../../../config/constants'
import { Header } from 'react-native-elements'
import { material, systemWeights } from 'react-native-typography'

export const HeaderTop = ({items}) => {
  return (
    <Header
      centerComponent={{
        text: APP_NAME,
        style: [material.display1, systemWeights.light, styles.header]
      }}
      outerContainerStyles={styles.outerContainerStyles}
      backgroundColor={COLOURS.BRAND}
    />
  )
}
