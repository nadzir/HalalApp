
import React from 'react'
import { styles } from '../Header'
import { COLOURS, APP_NAME } from '../../../config/constants'
import { Header } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

export const HeaderTop = ({items}) => {
  return (
    <Header
      centerComponent={{ text: APP_NAME, style: { color: COLOURS.WHITE } }}
      outerContainerStyles={styles.outerContainerStyles}
      backgroundColor={COLOURS.BRAND}
    />
  )
}
