
import React from 'react'
import { View, Image, TouchableOpacity, Slider, Text } from 'react-native'
import { Header } from 'react-native-elements'
import { COLOURS, APP_NAME } from '../../../config/constants'
import { styles } from '../HalalFinder'
import { HighlightAreaContainer } from '../../components/HighlightArea'
import { Actions } from 'react-native-router-flux'
import { ItemListContainer } from '../../components/ItemList/ItemList.container'
import { VIEW_WIDTH } from '../../../config/constants/size'

export const HalalFinder = ({
  imagePath,
  imageBase64,
  storeScaleX,
  scaleX,
  storeScaleY,
  scaleY
}) => {
  return (
    // <View />
    <View >
      <TouchableOpacity
        style={{height: 50}}
        activeOpacity={0.5}
        onPress={Actions.camera}>
        <Header
          leftComponent={{ icon: 'menu', color: COLOURS.WHITE }}
          centerComponent={{ text: APP_NAME, style: { color: COLOURS.WHITE } }}
          outerContainerStyles={styles.outerContainerStyles}
        />
      </TouchableOpacity>
      <View style={{
        height: 50,
        width: '100%',
        top: 80,
        position: 'absolute',
        zIndex: 999
      }}>
        <Slider
          step={0.01}
          value={1}
          maximumValue={10}
          onValueChange={storeScaleX} />
        <Slider
          step={0.01}
          value={1}
          maximumValue={10}
          onValueChange={storeScaleY} />
        <Text>Scale X: {scaleX}</Text>
        <Text>Scale Y: {scaleY}</Text>
      </View>
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
  )
}

export default HalalFinder
