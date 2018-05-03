
import React from 'react'
import { styles } from '../Header'
import { COLOURS, APP_NAME } from '../../../config/constants'
import { Header } from 'react-native-elements'
import { material } from 'react-native-typography'

export const HeaderTop = ({items}) => {
  return (
    <Header
      centerComponent={{ text: APP_NAME, style: [material.title, {color: COLOURS.WHITE}] }}
      outerContainerStyles={styles.outerContainerStyles}
      backgroundColor={COLOURS.BRAND}
    />
  )
}
