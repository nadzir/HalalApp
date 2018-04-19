import React from 'react'
import { Button } from 'react-native-elements'
import { styles } from '../CircleButton'

export const CircleButton = ({title, onPress}) => {
  return (
    <Button
      buttonStyle={styles.buttonStyle}
      containerViewStyle={styles.containerViewStyle}
      title={title}
      onPress={onPress}
    />
  )
}
