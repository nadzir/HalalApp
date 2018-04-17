
import React from 'react'
import { View, Image, ActivityIndicator, FlatList } from 'react-native'
import { Header, List, ListItem } from 'react-native-elements'
import { COLOURS, APP_NAME } from '../../../config/constants'
import { styles } from '../HalalFinder'
import { HighlightAreaContainer } from '../../components/HighlightArea'

export const HalalFinder = ({imagePath, imageBase64}) => {
  return (
    <View>
      <Header
        leftComponent={{ icon: 'menu', color: COLOURS.WHITE }}
        centerComponent={{ text: APP_NAME, style: { color: COLOURS.WHITE } }}
        outerContainerStyles={styles.outerContainerStyles}
      />
      <Image
        style={styles.image}
        // source={{uri: imagePath}}
        resizeMode='contain'
        // resizeMethod='scale'
        source={{uri: `data:image/gif;base64,${imageBase64}`}}
      />
      <HighlightAreaContainer />
    </View>
  )
}

export default HalalFinder
