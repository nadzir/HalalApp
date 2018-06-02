import React from 'react'
import { View, Image, Text } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { styles } from '../HalalList'
import { HeaderTop } from '../../components/Header'
import { VIEW_WIDTH, VIEW_HEIGHT } from '../../../config/constants/size'
import { COLOURS } from '../../../config/constants'
import { systemWeights } from 'react-native-typography'
import { BANNER_AD_UNIT_ID } from 'react-native-dotenv'
import firebase from 'react-native-firebase'
const Banner = firebase.admob.Banner
const AdRequest = firebase.admob.AdRequest
const request = new AdRequest()

export const HalalList = ({
  imagePath,
  imageBase64,
  goToCameraView,
  item
}) => {
  const itemDetails = () => {
    return (
      <View style={{width: '100%', marginLeft: 20}}>
        <Text style={[systemWeights.bold, styles.cardDescTitle]}>Brand</Text>
        <Text style={[systemWeights.light, styles.cardDescText]}>{item.header}</Text>

        <Text style={[systemWeights.bold, styles.cardDescTitle]}>Halal Status</Text>
        <Text style={[systemWeights.light, styles.cardDescText]}>{item.subtitle}</Text>

        {item.source && <Text style={[systemWeights.bold, styles.cardDescTitle]}>Source</Text>}
        <Text style={[systemWeights.light, styles.cardDescText]}>{item.source}</Text>

      </View>
    )
  }

  const emptyItem = () => {
    return (
      <View style={{width: '100%', marginLeft: 20}}>
        <Text style={[systemWeights.light, styles.cardDescText]}>
        No logo found. {'\n'}{'\n'}
        Try capturing a clear image {'\n'}
        of a logo or a brand. {'\n'}{'\n'}
        Ensure that the lighting is good{'\n'}
        and the camera is in focus
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.mainView}>
      <HeaderTop />
      <Card
        title={item.header}
        titleStyle={item.isHalal ? styles.cardTitleStyleHalal : styles.cardTitleStyleNotHalal}
      >
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image
            style={{height: VIEW_HEIGHT * 0.2, width: VIEW_WIDTH * 0.2}}
            resizeMode='contain'
            source={{uri: `data:image/gif;base64,${imageBase64}`}}
          />
          {item.key === 1001 ? emptyItem() : itemDetails()}
        </View>
      </Card>
      <View style={styles.ads} >
        <Banner
          size={'BANNER'}
          request={request.build()}
          unitId={BANNER_AD_UNIT_ID}
          onAdLoaded={() => {
            console.log('Advert loaded')
          }}
          onAdFailedToLoad={() => {
            console.log('error')
          }}
        />

      </View>
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
