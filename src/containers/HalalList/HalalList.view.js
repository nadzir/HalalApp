import React from 'react'
import { View } from 'react-native'
import { Card } from 'react-native-elements'
import { styles } from '../HalalList'
import { HeaderTop } from '../../components/Header'
import { HalalItemListContainer } from '../../components/HalalItemList'

export const HalalList = ({
  imagePath,
  imageBase64,
  goToCameraView
}) => {
  return (
    <View style={styles.mainView}>
      <HeaderTop />
      <Card
        image={{uri: `data:image/gif;base64,${imageBase64}`}}
      >
        <HalalItemListContainer />
      </Card>
    </View>
  )
}

export default HalalList
