import React from 'react'
import { View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from '../HalalFinder'
import { HighlightAreaContainer } from '../../components/HighlightArea'
import { ItemListContainer } from '../../components/ItemList/ItemList.container'
import { HeaderTop } from '../../components/Header'

export const HalalFinder = ({
  imagePath,
  imageBase64,
  goToCameraView
}) => {
  return (
    <View style={styles.mainView}>
      <HeaderTop />
      <Image
        style={styles.image}
        resizeMode='contain'
        source={{uri: `data:image/gif;base64,${imageBase64}`}}
      />
      <HighlightAreaContainer />
      <View style={styles.bottomView}>
        <ItemListContainer />
        <Button
          large
          containerViewStyle={styles.buttoncontainer}
          buttonStyle={styles.button}
          icon={{name: 'camera-alt'}}
          onPress={goToCameraView}
          title='Take more photo' />
      </View>
    </View>
  )
}

export default HalalFinder
