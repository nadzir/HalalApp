import React from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'
import { styles } from '../Loading'
import { HeaderTop } from '../Header'
import { material } from 'react-native-typography'
import { COLOURS } from '../../../config/constants'
// import { AdMobBanner } from 'react-native-admob'
// import { BANNER_AD_UNIT_ID } from 'react-native-dotenv'

export const Loading = ({imagePath}) => {
  return (
    <View style={styles.view}>
      <HeaderTop />
      <Image
        style={styles.image}
        resizeMode='contain'
        source={{uri: imagePath}}
      />
      <View style={styles.middleView}>
        <ActivityIndicator size='large' color={COLOURS.BRAND} />
        {/* <Text style={[material.subheading, styles.loadingText]} h4>Loading..</Text> */}
      </View>
      <View style={styles.bottomView}>
        <Text style={[material.subheading, styles.text]} h4>Loading..</Text>
        {/* <AdMobBanner
          adSize='smartBannerPortrait'
          adUnitID={BANNER_AD_UNIT_ID}
          onAdFailedToLoad={error => console.error(error)}
        /> */}
      </View>
    </View>
  )
}
