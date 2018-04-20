
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import { COLOURS, APP_NAME } from '../../../config/constants'
import { styles } from '../HalalFinder'
import { HighlightAreaContainer } from '../../components/HighlightArea'
import { Actions } from 'react-native-router-flux'
import { ItemListContainer } from '../../components/ItemList/ItemList.container'

export const HalalFinder = ({imagePath, imageBase64}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={Actions.camera}>
      <View >
        {/* <Header
          leftComponent={{ icon: 'menu', color: COLOURS.WHITE }}
          centerComponent={{ text: APP_NAME, style: { color: COLOURS.WHITE } }}
          outerContainerStyles={styles.outerContainerStyles}
        /> */}
        <Image
          style={styles.image}
          // source={{uri: imagePath}}
          resizeMode='contain'
          // resizeMethod='scale'
          source={{uri: `data:image/gif;base64,${imageBase64}`}}
        />
        <HighlightAreaContainer />
        <ItemListContainer />
      </View>
    </TouchableOpacity>
  )
}

export default HalalFinder
