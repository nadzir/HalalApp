import React from 'react'
import { View, Image, Text } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { styles } from '../HalalList'
import { HeaderTop } from '../../components/Header'
import { VIEW_WIDTH, VIEW_HEIGHT } from '../../../config/constants/size'
import { COLOURS } from '../../../config/constants'
import { systemWeights } from 'react-native-typography'

export const HalalList = ({
  imagePath,
  imageBase64,
  goToCameraView,
  item
}) => {
  return (
    <View style={styles.mainView}>
      <HeaderTop />
      <Card
        title={item.header}
        titleStyle={item.isHalal ? styles.cardTitleStyleHalal : styles.cardTitleStyleNotHalal}
      >
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: VIEW_HEIGHT * 0.2, width: VIEW_WIDTH * 0.2}}
            resizeMode='contain'
            source={{uri: `data:image/gif;base64,${imageBase64}`}}
          />
          <View style={{width: '100%', marginLeft: 20}}>
            <Text style={[systemWeights.bold, styles.cardDescTitle]}>Brand</Text>
            <Text style={[systemWeights.light, styles.cardDescText]}>{item.header}</Text>

            <Text style={[systemWeights.bold, styles.cardDescTitle]}>Halal Status</Text>
            <Text style={[systemWeights.light, styles.cardDescText]}>{item.subtitle}</Text>

            <Text style={[systemWeights.bold, styles.cardDescTitle]}>Source</Text>
            <Text style={[systemWeights.light, styles.cardDescText]}>{item.source}</Text>

          </View>
        </View>
      </Card>
      <View style={styles.cameraButtonStyle}>
        <Button
          buttonStyle={styles.button}
          containerViewStyle={styles.buttonContainer}
          title='Capture another logo'
          icon={{name: 'camera-alt', color: COLOURS.BRAND}}
          color={COLOURS.BRAND}
          onPress={goToCameraView} />
      </View>
    </View>
  )
}

export default HalalList
